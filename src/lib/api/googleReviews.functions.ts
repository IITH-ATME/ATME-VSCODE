import { createServerFn } from "@tanstack/react-start";

// Live Google Reviews for the homepage testimonials section. Fetched
// server-side only — GOOGLE_PLACES_API_KEY never reaches the browser.
// Requires GOOGLE_PLACES_API_KEY and GOOGLE_PLACE_ID in .env. The Places
// API (New) returns at most 5 "most relevant" reviews per place — Google
// does not allow requesting more, and there is no server-side rating
// filter, so we filter to rating >= 3 with non-empty text after fetching.
//
// The `reviews` field is billed under Places API's priciest SKU, so the
// result is cached in-memory per Worker isolate to avoid re-fetching on
// every homepage view.

export type GoogleReview = {
  id: string;
  author: string;
  authorPhoto?: string;
  authorUri?: string;
  rating: number;
  text: string;
  relativeTime: string;
};

export type GoogleReviewsResult = {
  reviews: GoogleReview[];
  overallRating?: number;
  totalReviews?: number;
  mapsUri?: string;
};

type PlacesApiReview = {
  name?: string;
  rating?: number;
  text?: { text?: string };
  relativePublishTimeDescription?: string;
  authorAttribution?: { displayName?: string; photoUri?: string; uri?: string };
};

type PlacesApiResponse = {
  rating?: number;
  userRatingCount?: number;
  googleMapsUri?: string;
  reviews?: PlacesApiReview[];
};

const EMPTY_RESULT: GoogleReviewsResult = { reviews: [] };
const CACHE_TTL_MS = 6 * 60 * 60 * 1000; // 6 hours — reviews change rarely.
let cache: { result: GoogleReviewsResult; fetchedAt: number } | null = null;

export const getGoogleReviews = createServerFn({ method: "GET" }).handler(
  async (): Promise<GoogleReviewsResult> => {
    if (cache && Date.now() - cache.fetchedAt < CACHE_TTL_MS) return cache.result;

    const apiKey = process.env.GOOGLE_PLACES_API_KEY;
    const placeId = process.env.GOOGLE_PLACE_ID;
    if (!apiKey || !placeId) return EMPTY_RESULT;

    try {
      const res = await fetch(`https://places.googleapis.com/v1/places/${placeId}`, {
        headers: {
          "X-Goog-Api-Key": apiKey,
          "X-Goog-FieldMask": "rating,userRatingCount,googleMapsUri,reviews",
        },
      });
      if (!res.ok) return EMPTY_RESULT;

      const data = (await res.json()) as PlacesApiResponse;
      const reviews: GoogleReview[] = (data.reviews ?? [])
        .filter((r) => typeof r.rating === "number" && r.rating >= 3 && !!r.text?.text?.trim())
        .map((r) => ({
          id: r.name ?? crypto.randomUUID(),
          author: r.authorAttribution?.displayName?.trim() || "Google User",
          authorPhoto: r.authorAttribution?.photoUri,
          authorUri: r.authorAttribution?.uri,
          rating: r.rating as number,
          text: (r.text?.text ?? "").trim(),
          relativeTime: r.relativePublishTimeDescription ?? "",
        }));

      const result: GoogleReviewsResult = {
        reviews,
        overallRating: data.rating,
        totalReviews: data.userRatingCount,
        mapsUri: data.googleMapsUri,
      };
      cache = { result, fetchedAt: Date.now() };
      return result;
    } catch {
      return EMPTY_RESULT;
    }
  },
);
