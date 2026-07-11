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
