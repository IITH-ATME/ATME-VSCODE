import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PdfEmbed } from "@/components/site/PdfEmbed";
import { resolveAssetUrl } from "@/lib/assetUrl";

export const Route = createFileRoute("/campus-life/atmeya")({
  head: () => ({
    meta: [
      { title: "ATMEYA — Annual Cultural Fest | ATME College of Engineering" },
      {
        name: "description",
        content:
          "ATMEYA — the annual cultural fest of ATME College of Engineering, Mysuru. Reports and highlights from ATMEYA 2k15 through ATMEYA 2k25.",
      },
      { property: "og:title", content: "ATMEYA — Annual Cultural Fest of ATME" },
      {
        property: "og:description",
        content:
          "Three days of music, dance, theatre, fashion, sports and themes that make a difference — explore all editions of ATMEYA at ATME, Mysuru.",
      },
      {
        property: "og:image",
        content:
          "/images/uploads/2026/02/rsz_1untitled_design.jpg",
      },
    ],
  }),
  component: AtmeyaPage,
});

import atmeyaCollageResized from "@/assets/rsz_atmeya_2k26_16x9_collage.jpg.asset.json";

const SLIDES = [
  resolveAssetUrl(atmeyaCollageResized.url),
  "/images/uploads/2026/02/rsz_1untitled_design.jpg",
  "/images/uploads/2024/06/Home-page-banner-012.jpg",
];

function BannerSlider() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((p) => (p + 1) % SLIDES.length), 5000);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="relative w-full overflow-hidden aspect-[1600/420]">
      <div
        className="flex transition-transform duration-700 ease-in-out h-full"
        style={{ transform: `translateX(-${i * 100}%)` }}
      >
        {SLIDES.map((src, idx) => (
          <div key={src} className="w-full flex-shrink-0 h-full relative">
            <img
              src={src}
              alt={`ATMEYA slide ${idx + 1}`}
              className="absolute inset-0 w-full h-full object-cover"
              loading={idx === 0 ? "eager" : "lazy"}
            />
          </div>
        ))}
      </div>
      <button
        type="button"
        aria-label="Previous slide"
        onClick={() => setI((p) => (p - 1 + SLIDES.length) % SLIDES.length)}
        className="absolute left-3 top-1/2 -translate-y-1/2 grid h-10 w-10 place-items-center rounded-full bg-black/50 text-white hover:bg-black/70 transition"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        aria-label="Next slide"
        onClick={() => setI((p) => (p + 1) % SLIDES.length)}
        className="absolute right-3 top-1/2 -translate-y-1/2 grid h-10 w-10 place-items-center rounded-full bg-black/50 text-white hover:bg-black/70 transition"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {SLIDES.map((_, idx) => (
          <button
            key={idx}
            aria-label={`Go to slide ${idx + 1}`}
            onClick={() => setI(idx)}
            className={`h-2.5 w-2.5 rounded-full transition ${
              i === idx ? "bg-white" : "bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

type Item = {
  id: string;
  title: string;
  pdf?: string;
  body?: React.ReactNode;
};

const ITEMS: Item[] = [
  {
    id: "2k25",
    title: "REPORT ON ATMEYA-2k25",
    pdf: "https://old.atme.edu.in/wp-content/uploads/2025/10/ATMEYA-2025-Report.pdf",
  },
  {
    id: "2k24",
    title: "REPORT ON ATMEYA-2k24",
    pdf: "https://old.atme.edu.in/wp-content/uploads/2025/10/Atmeya-report-24.pdf",
  },
  {
    id: "2k23",
    title: "REPORT ON ATMEYA-2k23",
    pdf: "https://old.atme.edu.in/wp-content/uploads/2023/05/Atmeya-23-Report.pdf",
  },
  {
    id: "2k22",
    title: "REPORT ON ATMEYA-2k22",
    pdf: "https://old.atme.edu.in/wp-content/uploads/2025/10/ATMEya-2022.pdf",
  },
  {
    id: "2k20",
    title: "REPORT ON ATMEYA-2k20",
    body: <Atmeya2020 />,
  },
  {
    id: "2k19",
    title: "REPORT ON ATMEYA-2k19",
    body: <Atmeya2019 />,
  },
  {
    id: "2k18",
    title: "REPORT ON ATMEYA-2k18",
    body: <Atmeya2018 />,
  },
  {
    id: "2k17",
    title:
      "ATME HONORED THE FAMILY OF MARTYRS OF INDIAN ARMY ON THE OCCASION OF ATMEYA-2k17",
    body: <Atmeya2017 />,
  },
  {
    id: "2016",
    title: "ATMEYA- 2016 COLLEGE FEST HELD AT ATME",
    body: <Atmeya2016 />,
  },
  {
    id: "2015",
    title: "ATMEYA 2015",
    body: <Atmeya2015 />,
  },
];

function ProseImg(_props: { src: string; caption?: string }) {
  // Source images on old.atme.edu.in return 404; intentionally render nothing.
  return null;
}

function Atmeya2020() {
  return (
    <div className="prose prose-sm max-w-none text-foreground/90 space-y-4">
      <p>
        Annual Cultural fest ATMEya-2020 at ATME on the theme “Save the Wild-Live and
        Let Live”
      </p>
      <ProseImg
        src="https://old.atme.edu.in/wp-content/uploads/2022/05/ATMEYA-2020-1.jpg"
        caption="ATME handed over a cheque towards adoption of five animals of the Zoo"
      />
      <p>
        ATMEya is the annual college cultural fest that ATME has been organizing since
        the Inception of this college from 2010. The students, staff and Management of
        this institution have repeatedly established standards which have been
        constantly beaten in the consecutive years. ATMEya has been based on a wide
        array of themes – from Traffic Awareness, Amar Jawan to Lead the Blind and
        Arise-Awake-Adopt Orphans. This year ATMEya is based on the theme of wildlife
        conservation titled live and let live held on 6th and 7th March 2020.
      </p>
      <p>
        Wildlife represents the core of the ecosystem that ensures the survival and
        continuance of life on this planet that we call home without wildlife the
        sustenance of this planet and its existence in its entirety will be null
        leaving the planet deserted and lifeless. Every year the college works hard to
        raise funds towards the various causes that we represent during the
        corresponding time. Similarly this year the college – as in the students, the
        staff and the management have along with sponsors from various businesses
        Enterprises and institutes have joined hands and come together to support us
        in this noble cause.
      </p>
      <p>
        <strong>Mr. Senani</strong> &amp; Mr. Krupakar, renowned wild life
        Photographers and Mr. Ajith Kulkarni, Executive Director of Sri Chamarajendra
        Zoological Garden, Mysuru were the Chief Guests for the inaugural function of
        ATMEya-2020 held on 6th March 2020.
      </p>
      <p>
        <strong>Mr. Senani</strong> in his address said “Like man, every living beings
        have the right to live to maintain ecological balance. Hence we have the
        responsibility to protect natural resources, especially the Forests.”
      </p>
      <p>
        <strong>Mr. Ajith Kulkarni</strong>, Executive Director of Sri Chamarajendra
        Zoological Gardens Mysuru, said “The Survival of nature is interconnected with
        wildlife, as everybody is interdependent on each other. Or else, it will have
        a negative impact on geographical system. All have the responsibility to
        create awareness on bio-diversity.”
      </p>
      <p>
        ATME College has initiated the adoption of wild animals in the Mysore Zoo. The
        adoption was initiated by the program titled SWEEKAR which will be the
        official handover of the adoption fund to the Mysore zoo authorities, who have
        guided us to adopt a few endangered species that our housed presently in their
        care.{" "}
        <strong>
          On this occasion ATME handed over a Cheque of Rs. 75,000/- towards adoption
          of five animals of the Zoo to Mr. Ajith Kulkarni.
        </strong>
      </p>
      <ol className="list-decimal pl-6 space-y-1">
        <li><strong>Indian Leopard</strong></li>
        <li><strong>Indian Grey Wolf</strong></li>
        <li><strong>Lion Tailed Macaque</strong></li>
        <li><strong>Four Horned Antelope</strong></li>
        <li><strong>King Cobra</strong></li>
        <li><strong>Sun Conure</strong></li>
      </ol>
      <p>
        ATME Governing Council member Dr. Syed Shakeeb Ur Rahman presided over the
        Function; Honorary Secretary Sri K Shivashankar was also present. Principal
        Dr. L Basavaraj Spoke on the signification of Annual Cultural Fest. Cultural
        Committee Chairman Dr. Mahesh P K briefed about the activities organized as
        part of Annual fest.
      </p>
      <p>
        Big Boss Fame Vasuki Vaibhav &amp; his troupe performed a Musical night, also
        Comedy Show performed by comedy Kiladigalu fame Mr. Shivaraj K R Pete, Ms.
        Nayana &amp; Mr. Nagrajun Performed on 6th March 2020. On the last day of
        ATMEya, Marvelous live concert was rendered by Mr. Sanjith Hegde and Team
        followed by Championship trophy distribution and fashion walk by ATME students
        on behalf of Bradford aviation academy.
      </p>
      <ProseImg
        src="https://old.atme.edu.in/wp-content/uploads/2022/05/ATMEYA-2020-01.jpg"
        caption="Glimpse of Vasuki Vaibhav’s Musical Night"
      />
      <ProseImg
        src="https://old.atme.edu.in/wp-content/uploads/2022/05/ATMEYA-2020-02.jpg"
        caption="Stand-up comedy by Shivraj KR pet and Nayana"
      />
      <ProseImg
        src="https://old.atme.edu.in/wp-content/uploads/2022/05/ATMEYA-2020-03.jpg"
        caption="Live Concert By Sanjith Hegde"
      />
      <ProseImg
        src="https://old.atme.edu.in/wp-content/uploads/2022/05/ATMEYA-2020-04.jpg"
        caption="Fashion Walk By ATME students on behalf of Bradford Aviation Academy"
      />
      <p><strong>ATMEya’s Proud Sponsors of ATMEya are:</strong></p>
      <p><strong>Platinum Sponsors:</strong></p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Ayur Matam — Academic Institute of Ayurvedic Science and Yogic Science, Devegowda Circle.</li>
        <li>Dev Motors — Authorized Dealers in Aprilia bikes and Vespa.</li>
        <li>Bradford — Aviation Academy.</li>
      </ul>
      <p><strong>Gold Sponsors:</strong></p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Canara Bank</li>
        <li>G-9 Projects</li>
        <li>System needs</li>
        <li>Sharadha Resorts</li>
      </ul>
      <p><strong>Silver Sponsors:</strong></p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Malabar Gold’s and Diamonds</li>
        <li>RCC poles and manufactures</li>
        <li>Final year students of ECE Department</li>
      </ul>
      <p><strong>Media Sponsor —</strong> 92.7 Big FM</p>
      <p><strong>Food Sponsor —</strong> Lunch Box</p>
      <p><strong>Water Sponsor —</strong> Flying Aqua</p>
      <p><strong>Accommodation Partner —</strong> Sepoy Grande</p>
      <p><strong>Travel Partner —</strong> BIT</p>
    </div>
  );
}

function Atmeya2019() {
  return (
    <div className="prose prose-sm max-w-none text-foreground/90 space-y-4">
      <p>
        ATME College of Engineering, Mysuru organized{" "}
        <strong>ATMEYA-2K19, an Annual Cultural Fest</strong> on the{" "}
        <strong>theme</strong>{" "}
        <strong>‘Arise Awake Adopt Orphans’ on 26th and 27th April 2019.</strong> The
        theme was organized to spread awareness on the need for concern towards
        orphans.
      </p>
      <p>
        A number of Cultural, literary, Art and sports were held from{" "}
        <strong>8th to 11th April and 23rd April 2019</strong> like Vakchaturya,
        Rangoli, Cooking without Fire, Jumanji – Treasure Hunt, Cricket, Balavanta etc.
      </p>
      <p>
        On <strong>24th April, 2019 “Run for Hope”,</strong> ATMEYA Marathon-2K19 was
        scheduled from Ovals ground, Mysore Covering a distance of 5KM. More than 2000
        participants from ATMECE, and other institutions participated in the event.{" "}
        <strong>Mr. Sara Mahesh</strong>, District In-Charge Minister Kodagu,
        Honorable Minister for Tourism, flagged off the Event.{" "}
        <strong>Mr. Garuda Ram</strong>, Cine Actor, Sandalwood was the Guest of
        Honor. On the same day, Flash Mob was held in Mall of Mysuru to promote the
        theme. On <strong>25th April</strong> Ethnic day, Juke box where students and
        staff participated in large numbers.
      </p>
      <p>
        <strong>Formal inauguration of ATMEYA-2K19</strong> was held on{" "}
        <strong>26th April 2019</strong>. <strong>Sri Suresh B Adi</strong>,
        Honorable Justice, Former Upa Lokayukta was the Chief Guest.{" "}
        <strong>Ms. Nimika Ratnakar,</strong> Cine Actress, Sandalwood, Winner of Miss
        India Super Talent was the Guest of Honor. <strong>Sri Arun Kumar L</strong>,
        Chairman, ATME College of Engineering, Presided the event. To express
        solidarity, Chayadevi Anathashrama Trust, Ashadayaka Seva Trust, Sri Sumangali
        Seva Ashrama were distributed cheque contributed from the students and staff.
        The day also saw cultural events and colleges competing for the
        Intercollegiate Fashion show title Fashionista-2K19. DJ Ali enthralled the
        audience with grooving music.
      </p>
      <p>
        <strong>On 27th April, 2019 Mr. Sanchari Vijay</strong>, Cine Actor,
        Sandalwood promoted his film Melobba Mayavi. Mr. Dhanveer, Cine Actor,
        Sandalwood was the celebrity Guest.{" "}
        <strong>Supriya Lohith, the versatile Singer</strong> enthralled the audience
        with their new age songs. Students from various colleges also participated in
        various cultural events. About 2000 audience witnessed ATMEYA-2k19.
      </p>
      <ProseImg
        src="https://old.atme.edu.in/wp-content/uploads/2022/05/1-10.jpg"
        caption="Inauguration of ATMEYA-2k19 by Sri L Arun Kumar, Chairman, ATMECE, Mysuru, Sri Suresh B Adi, Honorable Justice, Former Upa Lokayukta, Sri Shivashankar K, Secretary, ATMECE, Sri Veeresh R, Treasurer, ATMECE, Principal Dr. L Basavaraj and Dr. Parthasarathy L, Cultural Committee Chairman."
      />
      <ProseImg
        src="https://old.atme.edu.in/wp-content/uploads/2022/05/2-5.jpg"
        caption="Contribution towards Orphanage"
      />
      <ProseImg
        src="https://old.atme.edu.in/wp-content/uploads/2022/05/3-5.jpg"
        caption="Students performing during the Dance Fiesta event"
      />
      <ProseImg
        src="https://old.atme.edu.in/wp-content/uploads/2022/05/4-5.jpg"
        caption="Ms. Nimika Ratnakar, Cine Actress performing during the cultural fest"
      />
      <ProseImg
        src="https://old.atme.edu.in/wp-content/uploads/2022/05/5-3.jpg"
        caption="Students ramp walk in Fashionista Event"
      />
      <ProseImg
        src="https://old.atme.edu.in/wp-content/uploads/2022/05/6-2.jpg"
        caption="Live Concert by Play back singer Supriya Lohith and Team"
      />
      <ProseImg
        src="https://old.atme.edu.in/wp-content/uploads/2022/05/7-1.jpg"
        caption="Marathon flagged off by Sri Sara Mahesh, District In-Charge Minister Kodagu, Honorable Minister for Tourism. Mr. Garuda Ram, Cine Actor, Sandalwood was the Guest of Honor."
      />
    </div>
  );
}

function Atmeya2018() {
  return (
    <div className="prose prose-sm max-w-none text-foreground/90 space-y-4">
      <p>
        ATME College of Engineering, Mysuru organized{" "}
        <strong>ATMEYA-2K18, an Annual Cultural Fest</strong> on the{" "}
        <strong>theme</strong> “<strong>Lead the Blind</strong>” on{" "}
        <strong>23rd and 24th March, 2018</strong>. The theme was organized to spread
        awareness about the special abilities and talents of blind, and partially
        support the blind trust in Mysuru.
      </p>
      <ProseImg src="https://old.atme.edu.in/wp-content/uploads/2022/05/ATMEYA-2K18-02.jpg" />
      <p>
        A number of Cultural, literary and sports were held from{" "}
        <strong>15th to 20th March</strong> like Super Minute, Voice of ATMEYA,
        Connexion, Dance Fiesta, Fashion Show, Cricket etc.
      </p>
      <p>
        On <strong>17th March</strong>, a linking event{" "}
        <strong>“Ride for Vision”,</strong> Cycle Rally was scheduled from Maharaja
        Grounds. Mr. Shivashankar, Secretary, ATME College of Engineering, Mysuru
        flagged the event. About 150 Staff and students promoted the theme in
        association with Mysuru City Corporation and <strong>Trin-Trin cycles</strong>{" "}
        and travelled through different parts of Mysuru like Marimallapa college road,
        Sayyaji Rao road, 100 feet road and returned to the main venue.
      </p>
      <p>
        On <strong>21st March</strong> <strong>“Run for Vision”,</strong> ATMEYA
        Marathon-2K18 was scheduled from Ovals ground, Covering a distance of 5KM.
        More than 2000 participants from ATMECE, and other institutions participated
        in the event. <strong>Mr. Bhavani Singh</strong>, Cine Actor, Sandalwood,
        flagged the Event. On the same day, Flash Mob was held in Mall of Mysuru to
        promote the theme. On <strong>22nd March</strong> Ethnic day, Bike stunt
        mania, Juke box, traditional games were organized where students and staff
        participated in large numbers and exhibited their talent.
      </p>
      <p>
        <strong>Formal inauguration of ATMEYA-2K18</strong> was held on 23rd March,
        2018. <strong>Mr. Basavaraj V S</strong>, State Commissioner of Disability,
        Government of Karnataka, was the Chief Guest. <strong>Mr. Alfred</strong>,
        Faculty from Divya Jyothi Charitable Trust,{" "}
        <strong>Ms. Krishi Thapanda</strong>, Cine Actress, Sandalwood were the Guests
        of Honor. <strong>Sri Arun Kumar L</strong>, Chairman, ATME College of
        Engineering, Presided the event. To express solidarity, Divya Jyothi and
        Spandana Charitable trust were offered a small contribution towards the
        purchase of ‘essential teaching aids for blind’. On the same day{" "}
        <strong>Mr. Pavan Teja</strong>, Cine Actor, Sandalwood promoted his film
        ATHARVA. The day also saw cultural events and colleges competing for the
        Intercollegiate Fashion show title Fashionista-2K18.
      </p>
      <p>
        <strong>On 24th March, Team ALL OK,</strong> enthralled the audience with
        their new age Kannada rap concert. Staff and students also presented various
        cultural events.
      </p>
      <p>
        <strong>Mr. R J Rohith, Kavya Gowda,</strong> Cine Actors, Sandalwood,
        promoted their film Bhakaasura. On the same day team of{" "}
        <strong>
          Vaibhavi, Vainidhi, Vaisiri, Chakravarthy, Abhishek and Sumukha
        </strong>
        , Cine Actors, Sandalwood promoted their film Yaana. About 2000 audience
        witnessed ATMEYA-2K18.
      </p>
    </div>
  );
}

function Atmeya2017() {
  return (
    <div className="prose prose-sm max-w-none text-foreground/90 space-y-4">
      <ProseImg src="https://old.atme.edu.in/wp-content/uploads/2022/05/Atmeya-2017-02.jpg" />
      <p>
        ATME College of Engineering is celebrating the extravagant cultural Fest
        ATMEya-2K17. On this occasion of the Fest a Cultural programme was organised
        by the College with the theme “AMAR JAWAN”.
      </p>
      <p>
        As a part of this Fest College honoured the survivors of martyrs of Indian
        Army and as a token of respect Financial assistance is provided.
      </p>
      <p>
        Mr. Vipulkumar, Inspector General of Police, Southern Range Mysuru was the
        Chief Guest and Mr Vashista N Simha cine actor &amp; Ms Aishwarya Gowda Miss
        Karnataka-2015 were the Guests of Honor.
      </p>
      <p>
        This programme was presided by Founder Chairman of ATME Sri L Arunkumar. Sri K
        Shivashankar Hon’ble Founder Secretary of ATME, Sri Veeresh Founder Treasurer,
        Sri Venkatesh H Trustee of ATME, Dr L Basavaraj Principal ATME and Dr L
        Parthasarathy Chairman Cultural Committee graced the occasion.
      </p>
      <p>
        The Chief Guest addressed the gathering and urged students to be service
        oriented. It was also appreciated the honoring of the survivors of martyrs of
        Indian Army as initiation. Mr Vipul Kumar also mentioned students have to
        develop both communication and computational skills.
      </p>
      <p>
        Mr. Vashista during the speech appreciated the theme “AMAR Jawaan” and
        honoring the survivors of martyrs of Indian Army.
      </p>
      <p>
        Many cultural events like Intercollegiate Fashion Show, Fusion dance and Solo
        singing were held during the program.
      </p>
    </div>
  );
}

function Atmeya2016() {
  return (
    <div className="prose prose-sm max-w-none text-foreground/90 space-y-4">
      <ProseImg
        src="https://old.atme.edu.in/wp-content/uploads/2022/05/Atmeya-2016-02.jpg"
        caption="(Left To Right) Dr. L. Basavaraj, Principal, ATME CE. Dr. C. G. Betsurmuth Commissioner, Mysore City Corporation & Dept of Archaeology, was the chief guest, Mr. Venkatesh H, Trustee ATME CE, Mr. Srinivasa K, Head, Mechanical Engineering Dept., [Right Most]."
      />
      <p>
        ATME College of Engineering, Mysore, celebrated <strong>‘ATMEYA 2016’</strong>{" "}
        Annual cultural fest recently in the college campus. Dr. C. G. Besurmuth,
        Commissioner Mysore City Corporation &amp; Dept of Archeology was the chief
        guest inaugurated the program by lighting the lamp. He addressed the students
        he said that the students should try and understand life in different
        perspectives along with their technical education.
      </p>
      <p>
        He also mentioned that in today’s competitive world, there will be many
        problems and students should develop the capability to face them. Also he
        advised students to take the life as a challenge and try to reach the goal
        till get success.
      </p>
      <p>
        On this occasion ATME Management honored the chief guest. Later prizes
        distributed to the students who represented ATME College at VTU level in
        sports competitions.
      </p>
      <p>
        Mr. Venkatesh H, Trustee ATME presided the programme, Dr. L. Basavaraj,
        Principal ATME warmly welcomed all the dignitaries.
      </p>
      <p>
        Invocation song was presented by Dr. Jayram S R, HOD Mathematics department.
        Mr. C. Chandrashekar Lecturer, Department of Humanities hosted the programme,
        Mr. Srinivasa K, Associate Professor &amp; Head, Mechanical Engineering
        Department proposed vote of thanks.
      </p>
    </div>
  );
}

function Atmeya2015() {
  return (
    <div className="prose prose-sm max-w-none text-foreground/90 space-y-4">
      <ProseImg
        src="https://old.atme.edu.in/wp-content/uploads/2022/05/Atmeya-2015-02.jpg"
        caption="Left To Right: Dr. L. Basavaraj, Principal, ATMECE., Mr. Shivashankar K, Secretary, Mr. L. Arun Kumar, Chairman, Mr. Veeresh R, Treasurer, Dr. Shankar Mahadev Bidari, Former Director General of Police, was the chief guest, Mr. Srinivasa K, Head, Mechanical Engineering Dept., Mr. Venkatesh H, Trustee [Right Most]."
      />
      <p>
        ATME College of Engineering, Mysore, celebrated ‘ATMEYA 2015’ Annual cultural
        fest recently. Dr. Shankar Mahadev Bidari, Former Director General of Police
        of Karnataka was the chief guest inaugurated the program by lighting the lamp.
        He addressed the students to visit latest updates given in Job portals along
        with Facebook and Twitter. He advised students to take UPSC competitive
        examinations to join Indian civil services to serve the country. Further he
        motivated students as everything is possible and “I can do anything as an
        Indian”, rather than thinking under the specific caste, religion — then only
        development of nation is possible.
      </p>
      <p>
        On this occasion ATME Management honored the chief guest. Later prizes
        distributed to the students who represented ATME College in Inter University
        level competitions.
      </p>
      <p>
        Mr. L. Arun Kumar, Chairman, Mr. Shivashankar K, Secretary, Mr. Veeresh R,
        Treasurer, Mr. Venkatesh H, Trustee were present on the occasion.
      </p>
      <p>
        Dr. L. Basavaraj, Principal warmly welcomed all the dignitaries.
      </p>
      <p>
        Invocation song was presented by Ms. Priyadarshini, Mr. Srinivasa K, Associate
        Professor &amp; Head, Mechanical Engineering Department proposed vote of
        thanks.
      </p>
    </div>
  );
}

function AtmeyaPage() {
  return (
    <Layout>
      <BannerSlider />
      <section className="container-page py-10 sm:py-14">
        <header className="mb-6">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-[#129199]">
            ATMEYA
          </h1>
          <div className="mt-2 h-1 w-24 rounded bg-[#f5c518]" />
        </header>

        <Accordion type="single" collapsible className="w-full space-y-3">
          {ITEMS.map((item) => (
            <AccordionItem
              key={item.id}
              value={item.id}
              className="border border-[#129199]/20 rounded-lg bg-gradient-to-r from-[#129199]/5 via-background to-[#f5c518]/5 px-4 shadow-sm hover:shadow-md transition-shadow"
            >
              <AccordionTrigger className="text-base md:text-lg font-semibold text-[#129199] hover:no-underline">
                {item.title}
              </AccordionTrigger>
              <AccordionContent className="bg-background/60 rounded-md px-4 py-3">
                {item.pdf ? (
                  <PdfEmbed url={item.pdf} title={item.title} />
                ) : (
                  item.body
                )}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </Layout>
  );
}
