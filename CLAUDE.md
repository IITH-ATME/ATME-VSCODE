# CLAUDE.md

# ATME Website Development Guide

This repository contains the ATME website built using React, TypeScript and Vite.

Your primary responsibility is to preserve the design while improving and maintaining the content and functionality.

---

# Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- Git
- GitHub
- WordPress (Old CMS Content)

---

# Project Goals

Maintain and improve the React website.

The old WordPress website is the source of truth for content.

The React project is the source of truth for design and layout.

Always preserve the existing UI unless explicitly instructed otherwise.

---

# Folder Structure

src/
    components/
    pages/
    assets/
    hooks/
    lib/

public/
    images/
    pdfs/

content/
    pages/
    posts/
    media/

wordpress/
    export.xml

scripts/

---

# Content Source

The folder

content/

contains converted WordPress content.

Never edit these files.

Only read from them.

---

# Design Rules

Do NOT

- redesign pages
- change spacing
- change colors
- change typography
- change responsiveness
- remove animations
- rename routes
- rename components
- delete components
- change folder structure

unless explicitly instructed.

---

# Migration Rules

When migrating from WordPress

Update ONLY

- headings
- paragraphs
- buttons
- links
- image references
- PDF references
- tables
- lists
- SEO text
- metadata

Keep

- layout
- Tailwind classes
- responsiveness
- component hierarchy

exactly the same.

---

# Images

If an image is missing

do NOT invent one.

Leave a TODO comment.

Prefer existing assets inside

public/images

or

src/assets

---

# PDFs

Use files inside

public/pdfs

If a PDF does not exist

leave a TODO comment.

---

# Components

Prefer reusable components.

Do not duplicate code.

If multiple pages use identical sections

suggest creating a reusable component.

---

# TypeScript

Prefer

const

Avoid

any

Use proper interfaces where appropriate.

Keep the code readable.

---

# Styling

Use existing Tailwind utilities.

Do not introduce new CSS files unless necessary.

Follow the current design language.

---

# Accessibility

Maintain

- alt text
- button labels
- semantic HTML
- heading hierarchy

---

# Performance

Avoid unnecessary re-renders.

Avoid duplicate code.

Keep imports clean.

Remove unused imports.

---

# Routing

Never change routes unless instructed.

Never break navigation.

---

# File Naming

Use existing naming conventions.

Do not rename files without approval.

---

# Git Workflow

Make small logical changes.

Keep commits focused.

Never modify unrelated files.

---

# Before Editing

First

Explain

- what will change
- which files will change
- why

Then wait for approval if the request is large.

---

# After Editing

Summarize

- files changed
- components affected
- possible follow-up tasks

---

# Code Style

Prefer clarity over cleverness.

Keep components short.

Split large components when appropriate.

Avoid deeply nested JSX.

---

# Error Handling

Do not silently ignore errors.

Explain why an error occurs.

Suggest the safest fix.

---

# WordPress Migration Prompt

When asked to migrate a page

1. Read the matching file from /content.
2. Compare with the React page.
3. Preserve the existing design.
4. Update only the content.
5. Explain all changes.
6. Do not modify unrelated files.

---

# Search Strategy

Before creating anything new

Search the project for existing

- components
- utilities
- icons
- assets
- layouts

Reuse them whenever possible.

---

# Preferred Workflow

Understand the request

↓

Find affected files

↓

Explain plan

↓

Edit code

↓

Review changes

↓

Summarize changes

---

# If Unsure

Ask a clarifying question instead of guessing.

Never invent business information.

Never invent contact details.

Never invent images or PDFs.

Never fabricate page content.

Always preserve consistency across the project.

Read CLAUDE.md before starting.

You are working on the ATME College React + TypeScript + Vite website.

Your task is to perform a COMPLETE CONTENT MIGRATION for the specified department or page.

Source Priority (highest to lowest)

1. Uploaded Correction Document (.docx)
2. https://old.atme.edu.in
3. Existing React Project

The correction document always overrides the old website if there is any conflict.

The old website is the source of truth for all remaining content.

The current React project is ONLY the source of truth for:
- Design
- Layout
- Components
- Styling
- Responsiveness
- Navigation

----------------------------------------------------

OBJECTIVE

Migrate the complete content from the old ATME website into the new React website while preserving the new design exactly.

----------------------------------------------------

ANALYZE

Read and compare:

• Uploaded correction document
• old.atme.edu.in
• Current React project

Find EVERY difference.

Do not skip anything.

----------------------------------------------------

CONTENT TO VERIFY

Compare every section including but not limited to:

• Hero Banner
• Department Introduction
• Vision
• Mission
• HOD Message
• Faculty Profiles
• Faculty Qualification
• Designation
• Experience
• Industry Experience
• Research Areas
• Publications
• Books
• Patents
• Professional Memberships
• Awards
• Laboratories
• Facilities
• Research Centres
• Centre of Excellence
• Infrastructure
• Placements
• Higher Studies
• Student Achievements
• Faculty Achievements
• Events
• Workshops
• FDPs
• Seminars
• Conferences
• Technical Clubs
• Professional Bodies
• Committees
• Consultancy
• MOUs
• Alumni
• Syllabus
• Time Table
• Academic Calendar
• Downloads
• Forms
• Notices
• News
• Gallery
• Tables
• Bullet Lists
• Contact Information
• Internal Links
• External Links
• SEO Content

Do not assume anything is already correct.

Verify everything.

----------------------------------------------------

TEXT

Copy every sentence exactly.

Do NOT

• rewrite
• paraphrase
• summarize
• shorten
• improve grammar
• simplify
• optimize for SEO

The wording must remain identical to the approved source.

----------------------------------------------------

TABLES

Recreate every table exactly.

Preserve

• rows
• columns
• merged cells where applicable
• headings
• formatting
• ordering

Use the existing React styling.

----------------------------------------------------

LISTS

Maintain

• numbering
• bullet styles
• indentation
• ordering

exactly as in the source.

----------------------------------------------------

IMAGES

Compare every image.

If an image is missing locally:

Download it from the live website.

Store it under

public/images/<department>/

Keep the original filename whenever possible.

Replace the React reference with the local image.

Never leave external image URLs if a local copy exists.

Do not resize, crop or compress images.

Preserve alt text.

----------------------------------------------------

PDFS

Compare every PDF.

If missing:

Download from the source website.

Store under

public/pdfs/<department>/

Update every React link.

Preserve filenames whenever possible.

----------------------------------------------------

FACULTY

Verify every faculty profile individually.

Compare

• photo
• qualification
• designation
• experience
• research
• publications
• email
• responsibilities
• memberships

Do not skip any faculty member.

----------------------------------------------------

LAYOUT

Never change

• page layout
• spacing
• colors
• typography
• responsiveness
• Tailwind classes
• animations
• routing
• component hierarchy

unless explicitly instructed.

----------------------------------------------------

COMPONENTS

Reuse existing components.

Never duplicate code.

Never rename components.

----------------------------------------------------

ROUTES

Never change URLs.

Never rename routes.

----------------------------------------------------

FILES

Only modify files required for this department.

Never edit unrelated pages.

----------------------------------------------------

IF SOMETHING IS MISSING

If content exists on old.atme.edu.in but not in the React project,

ADD IT.

If content differs,

REPLACE IT.

If formatting differs,

MATCH THE OLD WEBSITE while preserving the new UI.

----------------------------------------------------

QUALITY CHECK

Before editing,

produce a report containing:

• Files to modify
• Components affected
• Number of text differences
• Missing images
• Missing PDFs
• Missing tables
• Missing faculty data
• Missing downloads

Wait for approval.

----------------------------------------------------

AFTER EDITING

Generate a report containing:

• Files changed
• Images downloaded
• PDFs downloaded
• Tables recreated
• Faculty updated
• Sections added
• Remaining missing items

----------------------------------------------------

RULE

Never guess.

Never invent content.

Never invent images.

Never invent PDF names.

If something cannot be found,

report it clearly instead of creating placeholder content.

----------------------------------------------------

ALL DEPARTMENTS MIGRATION RULES

This migration applies to EVERY department page and EVERY live subpage in the current React website.

The objective is to make every live department page completely match the approved content from the source while preserving the new React design.

Do not migrate only the visible page.

Verify every live subpage belonging to the department including all faculty profile pages and downloadable resources.

----------------------------------------------------

DEPARTMENT CONTENT

Verify that every live department page contains all relevant content from the source.

This includes but is not limited to:

• Department Overview
• Vision
• Mission
• PEO
• PSO
• PO
• HOD Message
• Faculty
• Technical Staff
• Supporting Staff
• Laboratories
• Infrastructure
• Facilities
• Research
• Publications
• Books
• Patents
• Consultancy
• MOUs
• Placements
• Higher Studies
• Student Achievements
• Faculty Achievements
• Professional Bodies
• Events
• Workshops
• FDP
• Conferences
• Technical Clubs
• Downloads
• Syllabus
• Timetable
• Academic Calendar
• Gallery
• Contact

No department subpage should contain incomplete information.

----------------------------------------------------

INFRASTRUCTURE & FACILITIES

Verify that every department contains complete Infrastructure and Facilities information.

Compare with the approved source.

Migrate every missing

• paragraph
• image
• caption
• table
• list

word by word.

If multiple images exist in the source,

migrate every image.

Preserve image ordering.

----------------------------------------------------

FACULTY PROFILE PAGES

Every faculty profile page must be verified individually.

Compare every faculty profile against the approved source.

Verify

• Name
• Photo
• Qualification
• Designation
• Experience
• Industry Experience
• Research Areas
• Publications
• Patents
• Books
• Memberships
• Responsibilities
• Awards
• Contact Details
• Google Scholar
• Scopus
• ORCID
• Research IDs
• Downloads

Every missing sentence must be migrated exactly.

Do not summarize.

Do not rewrite.

Do not shorten.

Copy content exactly.

----------------------------------------------------

FACULTY PHOTOS

For every faculty profile photo

Use the best available image.

Remove unwanted background if present.

Remove visible shadow around photographs.

Keep a clean transparent or plain background that matches the design language of this React project.

Maintain consistent sizing.

Maintain consistent alignment.

Every faculty card should have a consistent appearance across the website.

----------------------------------------------------

FACULTY PROFILE BULLETS

All faculty profile pages must use a single consistent bullet style.

Use the existing yellow checkered bullet design already used in the React project.

Convert inconsistent bullets into the same yellow checkered bullet style.

Keep spacing and indentation consistent throughout every faculty profile.

----------------------------------------------------

STUDENT ACHIEVEMENTS

Verify every department.

If Student Achievements are missing,

create a separate Student Achievements accordion using the existing accordion component already available in the project.

Preserve the current design language.

Migrate all achievements word by word.

Include

• images
• tables
• PDFs
• links

where applicable.

----------------------------------------------------

FACULTY ACHIEVEMENTS

Verify every department.

If Faculty Achievements are missing,

create a separate Faculty Achievements accordion.

Reuse the existing accordion component.

Do not redesign.

Migrate every achievement exactly.

Include

• images
• tables
• PDFs

where applicable.

----------------------------------------------------

TABLES

Every table must match the approved source.

Maintain

• row order
• column order
• merged cells where applicable
• headings
• numbering

Use the styling of the current React project.

----------------------------------------------------

IMAGES

Every missing image shall be downloaded from the approved source website.

Store locally.

Replace external references with local assets.

Preserve filenames whenever practical.

Never leave broken image links.

----------------------------------------------------

PDFS

Verify every downloadable PDF.

If a PDF exists on the approved source but is missing in the React project,

download it,

store it locally,

and update the download links.

----------------------------------------------------

PRESERVE EXISTING CORRECT CONTENT

Do NOT modify content that is already correct.

Examples include but are not limited to

• COEs
• Newsletters
• Existing PDFs
• Existing Downloads
• Existing Images
• Existing Tables

if they already exactly match the approved source.

Only update incorrect or missing content.

Never replace correct content unnecessarily.

----------------------------------------------------

FINAL VALIDATION

Before marking a department complete,

verify that

✓ Every live department page has been checked.

✓ Every live faculty profile has been checked.

✓ Every paragraph has been compared.

✓ Every image has been verified.

✓ Every table has been verified.

✓ Every PDF has been verified.

✓ Every achievement has been verified.

✓ Every laboratory page has been verified.

✓ Every facilities page has been verified.

✓ Every infrastructure page has been verified.

✓ Every faculty photo has consistent styling.

✓ Every faculty profile uses the same yellow checkered bullet design.

Only after every item passes validation should the department be considered fully migrated.

SOURCE PRIORITY

1. Uploaded Correction Document(s) (Highest Priority)
2. https://old.atme.edu.in (Primary Source of Truth)
3. Current React/Vite Project (Design and Layout Only)

If the uploaded correction document differs from old.atme.edu.in,
always follow the correction document.

For all remaining content,
old.atme.edu.in is the authoritative source.

The current React project is NEVER the source of truth for content.

The current React project is ONLY the source of truth for:

• Design
• Layout
• Component structure
• Responsiveness
• Styling
• Navigation
• User Experience

----------------------------------------------------

WEBSITE COMPLETENESS REQUIREMENT

The final React website must be functionally and informationally complete compared with https://old.atme.edu.in.

Every live department page and every live department subpage must contain all information available on https://old.atme.edu.in unless an uploaded correction document explicitly replaces or removes it.

Nothing should be omitted simply because it is absent from the current React build.

Missing content must always be migrated.

This includes:

• paragraphs
• headings
• images
• tables
• faculty information
• laboratories
• infrastructure
• facilities
• downloads
• PDFs
• newsletters
• achievements
• events
• research
• publications
• professional memberships
• responsibilities
• galleries
• notices
• contact information
• internal links

The migration must be complete.

Every sentence must be compared.

Every section must be compared.

Every table must be compared.

Every image must be compared.

Every PDF must be compared.

No content should be skipped.

The wording must match https://old.atme.edu.in exactly unless the uploaded correction document specifies a different approved version.

FINAL ACCEPTANCE CRITERIA

A department is NOT complete until every live page and every live faculty profile has been compared against:

1. Uploaded correction document(s)
2. https://old.atme.edu.in

The department shall only be marked complete after:

✓ All missing text has been migrated word-for-word.
✓ All missing images have been downloaded from https://old.atme.edu.in and stored locally.
✓ All image references point to local assets.
✓ All missing PDFs have been added.
✓ All tables have been recreated accurately.
✓ All faculty profile pages are complete.
✓ Student and Faculty Achievements are present where required.
✓ Infrastructure and Facilities sections are complete.
✓ Existing correct content has not been modified.
✓ The React layout, styling, responsiveness, and component structure remain unchanged.