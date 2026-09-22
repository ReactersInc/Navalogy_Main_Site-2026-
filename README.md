# Navalogy Website --- Developer & Content Management Guide

## 1. Overview

Navalogy is a React + Vite website for a professional research/R&D
collective.

The project is intentionally structured so that **content is separated
from presentation and React logic**.

The main rule for future developers is:

> **If you are changing research domains, people, publications,
> navigation labels, or other site content, change the JSON data first.
> Do not hard-code content inside React components unless the content is
> genuinely structural.**

The website uses:

-   React
-   Vite
-   React Router
-   Lucide React icons
-   JSON data files for editable content
-   Modular CSS files
-   Manrope for primary typography
-   DM Mono for technical/metadata typography

The visual direction is a dark, editorial R&D interface with restrained
lime accents, strong typography, grid systems, and minimal decorative
effects.

------------------------------------------------------------------------

## 2. Project Structure

The current project is organized as follows:

``` text
navalogy/
├── public/
│   ├── favicon.svg
│   └── images/
│       ├── people/
│       └── research/
│
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx
│   │   │   └── Footer.jsx
│   │   │
│   │   ├── home/
│   │   │   ├── Hero.jsx
│   │   │   ├── ResearchPreview.jsx
│   │   │   ├── FeaturedResearch.jsx
│   │   │   └── PeoplePreview.jsx
│   │   │
│   │   ├── research/
│   │   │   ├── DomainCard.jsx
│   │   │   └── DomainGrid.jsx
│   │   │
│   │   ├── people/
│   │   │   ├── PersonCard.jsx
│   │   │   └── PeopleGrid.jsx
│   │   │
│   │   └── publications/
│   │       ├── PublicationCard.jsx
│   │       ├── PublicationFilters.jsx
│   │       └── PublicationList.jsx
│   │
│   ├── data/
│   │   ├── site.json
│   │   ├── research.json
│   │   ├── people.json
│   │   └── publications.json
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Research.jsx
│   │   ├── Publications.jsx
│   │   ├── People.jsx
│   │   ├── Person.jsx
│   │   └── About.jsx
│   │
│   ├── styles/
│   │   ├── reset.css
│   │   ├── variables.css
│   │   ├── typography.css
│   │   ├── components.css
│   │   ├── navbar.css
│   │   ├── hero.css
│   │   ├── research.css
│   │   ├── featured-research.css
│   │   ├── people.css
│   │   ├── publications.css
│   │   ├── about.css
│   │   └── footer.css
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── index.html
├── package.json
└── vite.config.js
```

------------------------------------------------------------------------

# 3. Content vs Code

The project has two different types of information.

## Content

Content should normally live in:

``` text
src/data/
```

Examples:

-   Research domain names
-   Research descriptions
-   Research tags
-   People's names
-   People's roles
-   People's images
-   Publication titles
-   Publication authors
-   Publication years
-   Publication venues
-   Publication links
-   Navigation labels

## Presentation / Structure

Presentation and behavior live in:

``` text
src/components/
src/pages/
src/styles/
```

Examples:

-   How a research card looks
-   How many columns the grid uses
-   Typography
-   Spacing
-   Hover animations
-   Responsive behavior
-   Routing
-   Filtering logic

### Golden rule

If the request sounds like:

> "Change what the website says"

look in `src/data/`.

If the request sounds like:

> "Change how the website looks or behaves"

look in `src/components/`, `src/pages/`, or `src/styles/`.

------------------------------------------------------------------------

# 4. Site Configuration --- `site.json`

File:

``` text
src/data/site.json
```

Current structure:

``` json
{
  "name": "Navalogy",
  "domain": "navalogy.com",
  "tagline": "Engineering secure intelligent ecosystems.",
  "description": "Navalogy explores the intersection of distributed systems, intelligent edge orchestration, network security, and bio-inspired data systems.",
  "navigation": [
    {
      "label": "Research",
      "path": "/research"
    },
    {
      "label": "People",
      "path": "/people"
    },
    {
      "label": "Publications",
      "path": "/publications"
    },
    {
      "label": "About",
      "path": "/about"
    }
  ],
  "footer": {
    "description": "Open-access infrastructure R&D",
    "copyright": "Navalogy Lab Ecosystem"
  }
}
```

## Changing the site name

Change:

``` json
"name": "Navalogy"
```

The navbar and footer use this value.

## Changing the domain

Change:

``` json
"domain": "navalogy.com"
```

## Changing the site description

Change:

``` json
"description": "..."
```

This description is used in multiple places, including the homepage and
footer.

## Changing navigation

Navigation entries have two fields:

``` json
{
  "label": "Research",
  "path": "/research"
}
```

`label` controls the displayed text.

`path` controls the URL.

For example:

``` json
{
  "label": "Projects",
  "path": "/projects"
}
```

Only add a navigation path when the corresponding React route exists.

If you add:

``` json
{
  "label": "Projects",
  "path": "/projects"
}
```

you must also add the corresponding route in `App.jsx` and
page/component implementation.

------------------------------------------------------------------------

# 5. Research Domains --- `research.json`

File:

``` text
src/data/research.json
```

This is the primary content source for research domains.

Current structure:

``` json
[
  {
    "id": "iomt",
    "number": "01",
    "title": "IoMT & Smart Healthcare",
    "shortTitle": "IoMT",
    "description": "Building intelligent healthcare infrastructure for predictive remote care, distributed fog scheduling, and low-latency medical telemetry.",
    "tags": [
      "Edge Computing",
      "Predictive Diagnostics",
      "Fog Orchestration"
    ]
  }
]
```

## Field reference

### `id`

Example:

``` json
"id": "iomt"
```

This is the internal identifier.

Use:

-   lowercase
-   short names
-   hyphens for multiple words

Good:

``` text
iomt
sdn-security
blockchain
energy
```

Avoid changing an existing ID unnecessarily because other parts of the
application may use it.

### `number`

Example:

``` json
"number": "01"
```

This controls the displayed research index.

Use two digits:

``` text
01
02
03
04
```

### `title`

The full research domain title.

Example:

``` json
"title": "IoMT & Smart Healthcare"
```

### `shortTitle`

A shorter representation for future UI use.

Example:

``` json
"shortTitle": "IoMT"
```

### `description`

The main description shown on research cards.

Keep descriptions concise and technically meaningful.

### `tags`

An array of short research keywords:

``` json
"tags": [
  "Edge Computing",
  "Predictive Diagnostics",
  "Fog Orchestration"
]
```

Add or remove tags without changing React code.

------------------------------------------------------------------------

# 6. Adding a New Research Domain

To add a new domain, add another object to:

``` text
src/data/research.json
```

Example:

``` json
{
  "id": "new-domain",
  "number": "05",
  "title": "New Research Domain",
  "shortTitle": "New Domain",
  "description": "Description of the new research direction.",
  "tags": [
    "Research Area",
    "Technology",
    "Application"
  ]
}
```

Do not modify `DomainCard.jsx` just to add a new research domain.

The grid automatically maps over the JSON data.

------------------------------------------------------------------------

# 7. People --- `people.json`

File:

``` text
src/data/people.json
```

People are treated as a first-class part of Navalogy.

Current structure:

``` json
[
  {
    "id": "nabajyoti-medhi",
    "name": "Dr. Nabajyoti Medhi",
    "role": "Lead",
    "category": "Faculty",
    "image": "/images/people/nabo.jpg",
    "linkedin": "",
    "featured": true,
    "bio": ""
  }
]
```

## Field reference

### `id`

Unique identifier for the person.

Example:

``` json
"id": "nabajyoti-medhi"
```

Use lowercase kebab-case.

### `name`

Full displayed name.

Example:

``` json
"name": "Dr. Nabajyoti Medhi"
```

Do not put titles such as "Professor" in the role field unless that is
actually how the role should be displayed.

### `role`

The person's Navalogy role.

Examples:

``` json
"role": "Lead"
```

or:

``` json
"role": "Research Member"
```

### `category`

The person's category.

Examples:

``` json
"category": "Faculty"
```

``` json
"category": "Student Researcher"
```

### `image`

Images belong in:

``` text
public/images/people/
```

Reference them using a public URL path:

``` json
"image": "/images/people/nabo.jpg"
```

Do **not** use filesystem paths such as:

``` text
/mnt/code/navalogy/src/assets/nabo.jpg
```

Those are not browser URLs.

### `linkedin`

Optional LinkedIn URL.

If there is no verified URL, leave it empty:

``` json
"linkedin": ""
```

Do not invent URLs.

### `featured`

Controls whether the person is treated as a featured member.

The current design uses:

``` json
"featured": true
```

for the lead.

Regular members should normally use:

``` json
"featured": false
```

### `bio`

Optional biography.

An empty string is acceptable:

``` json
"bio": ""
```

Only add factual information that has been verified.

------------------------------------------------------------------------

# 8. Adding a New Research Member

Add a new object to:

``` text
src/data/people.json
```

Example:

``` json
{
  "id": "student-name",
  "name": "Student Name",
  "role": "Research Member",
  "category": "Student Researcher",
  "image": "/images/people/student-name.jpg",
  "linkedin": "",
  "featured": false,
  "bio": ""
}
```

Then place the image at:

``` text
public/images/people/student-name.jpg
```

No React component changes should be necessary.

------------------------------------------------------------------------

# 9. Featured People

The homepage separates featured people from research members using:

``` js
person.featured
```

Featured:

``` json
"featured": true
```

Non-featured:

``` json
"featured": false
```

Currently, the lead is intended to be featured separately from the
member grid.

Do not create a separate hard-coded person component for every
researcher.

The JSON data should remain the source of truth.

------------------------------------------------------------------------

# 10. Publications --- `publications.json`

File:

``` text
src/data/publications.json
```

Each publication follows this structure:

``` json
{
  "id": "bred-2025",
  "year": 2025,
  "venue": "GLOBECOM 2025 - IEEE Global Communications Conference",
  "volume": "679-684",
  "title": "BReD: β-Distribution-Based Reputation for DDoS Attack Detection and Mitigation using SDN in VSNs",
  "authors": [
    "P Das",
    "N Medhi",
    "S Aziz"
  ],
  "category": "SDN Security",
  "researchAreas": [
    "sdn-security"
  ],
  "description": "Publication description.",
  "link": "https://example.com",
  "featured": true
}
```

## Field reference

### `id`

Unique publication identifier.

Example:

``` json
"id": "bred-2025"
```

Use lowercase kebab-case.

### `year`

Use a number, not a string:

``` json
"year": 2025
```

Not:

``` json
"year": "2025"
```

### `venue`

Conference, journal, or publication venue.

### `volume`

Optional volume, issue, page range, article number, or equivalent
bibliographic information.

If unavailable:

``` json
"volume": ""
```

### `title`

Full publication title.

Keep the title exactly as it should appear publicly.

### `authors`

Array of author names:

``` json
"authors": [
  "P Das",
  "N Medhi",
  "S Aziz"
]
```

The UI automatically joins these names when displaying them.

### `category`

Human-readable publication category.

Examples:

``` text
IoMT & Healthcare
SDN Security
Blockchain / SDN Security
Energy Optimization / IoMT
```

### `researchAreas`

Machine-readable links between publications and research domains.

Current IDs include:

``` text
iomt
sdn-security
blockchain
energy
```

Example:

``` json
"researchAreas": [
  "iomt",
  "energy"
]
```

This field is important because the Publications page uses it for
filtering.

If a publication belongs to multiple domains, include multiple IDs.

### `description`

Short public description of the research contribution.

### `link`

External publication URL.

Use the actual verified publication/repository URL.

### `featured`

Controls whether the publication appears in the homepage's selected
research section.

``` json
"featured": true
```

or:

``` json
"featured": false
```

------------------------------------------------------------------------

# 11. Adding a Publication

Add a new object to:

``` text
src/data/publications.json
```

Example:

``` json
{
  "id": "new-paper-2026",
  "year": 2026,
  "venue": "Conference Name",
  "volume": "1-6",
  "title": "Title of the Publication",
  "authors": [
    "Author One",
    "Author Two"
  ],
  "category": "SDN Security",
  "researchAreas": [
    "sdn-security"
  ],
  "description": "Short description of the work.",
  "link": "https://verified-publication-url.example",
  "featured": false
}
```

The Publications page will automatically include it.

The publication count on the page is also calculated from the JSON
array, so there is no separate count to update.

------------------------------------------------------------------------

# 12. Important Relationship: `researchAreas`

`researchAreas` must contain IDs that exist in `research.json`.

For example:

``` text
research.json
    id = "iomt"
```

can be referenced by:

``` json
"researchAreas": ["iomt"]
```

Do not write:

``` json
"researchAreas": ["IoMT & Healthcare"]
```

unless the application is explicitly changed to use display names.

The current filtering system expects IDs.

------------------------------------------------------------------------

# 13. Featured Research

Homepage selected research is determined by:

``` json
"featured": true
```

in `publications.json`.

For example:

``` json
{
  "id": "bred-2025",
  ...
  "featured": true
}
```

This means it can appear in the selected research section.

To remove a publication from the selected section:

``` json
"featured": false
```

No React changes are necessary.

------------------------------------------------------------------------

# 14. Images

All public website images should generally be placed under:

``` text
public/images/
```

Current structure:

``` text
public/
└── images/
    ├── people/
    │   ├── nabo.jpg
    │   └── ...
    │
    └── research/
        └── ...
```

Reference a public image like:

``` json
"/images/people/nabo.jpg"
```

## Important

Do not use:

``` text
/mnt/code/...
/home/user/...
C:\Users\...
```

These are filesystem locations, not public browser URLs.

------------------------------------------------------------------------

# 15. React Components

Components should be reusable.

For example:

``` text
DomainCard.jsx
```

receives a domain:

``` jsx
<DomainCard domain={domain} />
```

and renders its content from JSON.

Likewise:

``` text
PersonCard.jsx
```

receives:

``` jsx
<PersonCard person={person} />
```

and publication components receive publication objects.

This approach means developers should avoid writing:

``` jsx
<h3>IoMT & Smart Healthcare</h3>
```

directly inside reusable components.

Instead:

``` jsx
<h3>{domain.title}</h3>
```

The JSON should contain the content.

------------------------------------------------------------------------

# 16. Pages

The application currently has these routes:

``` text
/                       Home
/research               Research domains
/publications           Publications
/people                 People / collective
/people/:slug           Individual person
/about                  About
```

Routes are defined in:

``` text
src/App.jsx
```

Example:

``` jsx
<Route path="/research" element={<Research />} />
```

Do not modify routing when simply adding content.

------------------------------------------------------------------------

# 17. CSS Architecture

CSS is intentionally split into separate files.

``` text
src/styles/
├── reset.css
├── variables.css
├── typography.css
├── components.css
├── navbar.css
├── hero.css
├── research.css
├── featured-research.css
├── people.css
├── publications.css
├── about.css
└── footer.css
```

## What belongs where

### `variables.css`

Global design tokens:

-   Colors
-   Fonts
-   Spacing
-   Container width
-   Navbar height
-   Border colors
-   Shadows
-   Transitions

### `reset.css`

Browser normalization and base element behavior.

### `typography.css`

Reusable typography classes and font configuration.

### `components.css`

Shared UI primitives:

-   Containers
-   Sections
-   Buttons
-   Cards
-   Shared labels

### `navbar.css`

Navbar and mobile navigation.

### `hero.css`

Homepage hero.

### `research.css`

Homepage research section and standalone Research page.

### `people.css`

People-related components and pages.

### `publications.css`

Publication listing, filters, and publication page styling.

### `footer.css`

Footer.

------------------------------------------------------------------------

# 18. Do Not Create a Giant Global CSS File

Avoid putting all new styles into something like:

``` text
globals.css
```

The project uses modular styles intentionally.

If you are changing the research section, use:

``` text
research.css
```

If you are changing people, use:

``` text
people.css
```

If you are changing the navbar, use:

``` text
navbar.css
```

This keeps the codebase maintainable.

------------------------------------------------------------------------

# 19. Design Tokens

Global design values are stored in:

``` text
src/styles/variables.css
```

Examples:

``` css
--color-bg: #080a09;
--color-bg-card: #101312;
--color-text: #f1f4f1;
--color-text-secondary: #a0a8a4;
--color-accent: #c8ff3d;
```

Use these variables rather than introducing arbitrary colors.

Good:

``` css
color: var(--color-text-secondary);
```

Avoid:

``` css
color: #9b9b9b;
```

unless there is a specific design reason.

------------------------------------------------------------------------

# 20. Typography Guidelines

Primary font:

``` text
Manrope
```

Technical/metadata font:

``` text
DM Mono
```

Use DM Mono primarily for:

-   Research numbers
-   Metadata
-   Labels
-   Technical categories
-   Navigation micro-labels

Avoid making normal paragraph text too small.

Current normal body text is generally around:

``` text
14–15px
```

Technical metadata can be smaller, generally around:

``` text
11px
```

Large headings use responsive `clamp()` sizing.

------------------------------------------------------------------------

# 21. JSON Editing Rules

JSON is strict.

A valid object:

``` json
{
  "name": "Navalogy",
  "role": "Lead"
}
```

Common errors:

### Missing comma

Wrong:

``` json
{
  "name": "Navalogy"
  "role": "Lead"
}
```

Correct:

``` json
{
  "name": "Navalogy",
  "role": "Lead"
}
```

### Trailing comma

Avoid:

``` json
{
  "name": "Navalogy",
}
```

Use:

``` json
{
  "name": "Navalogy"
}
```

### Wrong quotation marks

Use:

``` json
"name": "Navalogy"
```

not:

``` text
'name': 'Navalogy'
```

### Comments

Standard JSON does not support comments.

Do not write:

``` json
{
  // lead researcher
  "name": "..."
}
```

------------------------------------------------------------------------

# 22. Recommended Workflow for Content Updates

When adding a researcher:

``` text
1. Add image to public/images/people/
2. Add person object to people.json
3. Verify id is unique
4. Set featured appropriately
5. Verify LinkedIn URL if supplied
6. Run the development server
7. Check /people
8. Check homepage
```

When adding a publication:

``` text
1. Add publication object to publications.json
2. Verify id is unique
3. Add correct year
4. Add complete author list
5. Set researchAreas using research.json IDs
6. Add verified external link
7. Set featured appropriately
8. Check /publications
9. Test each relevant filter
10. Check homepage if featured
```

When adding a research domain:

``` text
1. Add domain object to research.json
2. Give it a unique id
3. Add number
4. Add title
5. Add description
6. Add tags
7. If publications belong to it, add its id to their researchAreas
8. Check /research
9. Check homepage
10. Test publication filtering
```

------------------------------------------------------------------------

# 23. Development Server

Start the project with:

``` bash
npm run dev
```

Vite normally provides a local URL similar to:

``` text
http://localhost:5173
```

After changing JSON, refresh the browser if the development server does
not automatically update.

------------------------------------------------------------------------

# 24. Production Build

Before deployment, run:

``` bash
npm run build
```

If the build succeeds, Vite will generate the production output.

Also check for:

-   Invalid JSON
-   Broken image paths
-   Broken routes
-   Missing imports
-   Console errors
-   External links that do not work
-   Mobile layout problems

------------------------------------------------------------------------

# 25. Useful Verification Checklist

Before considering a content change complete:

## Content

-   [ ] JSON is valid
-   [ ] IDs are unique
-   [ ] Names/titles are correctly spelled
-   [ ] Publication metadata is accurate
-   [ ] External URLs are verified
-   [ ] No placeholder text remains

## Images

-   [ ] Image exists in `public/images/`
-   [ ] JSON uses a browser URL such as `/images/people/name.jpg`
-   [ ] Image loads correctly
-   [ ] Alt text is generated from the person's name where applicable

## Research

-   [ ] Research domain ID exists
-   [ ] Publication `researchAreas` use valid domain IDs
-   [ ] Publication filtering works

## UI

-   [ ] Desktop layout works
-   [ ] Tablet layout works
-   [ ] Mobile layout works
-   [ ] No text is unexpectedly clipped
-   [ ] No horizontal scrolling
-   [ ] Hover states work
-   [ ] External links open correctly

## Code

-   [ ] No unnecessary hard-coded content
-   [ ] No duplicate CSS
-   [ ] No unused imports
-   [ ] No console errors
-   [ ] `npm run build` succeeds

------------------------------------------------------------------------

# 26. Adding New Content Without Changing React

The intended architecture allows this:

``` text
Add researcher
      ↓
people.json
      ↓
PeopleGrid / PersonCard
      ↓
Website automatically updates
```

Similarly:

``` text
Add publication
      ↓
publications.json
      ↓
Publications page
      ↓
Filters
      ↓
Featured Research
      ↓
Website automatically updates
```

And:

``` text
Add research domain
      ↓
research.json
      ↓
DomainGrid
      ↓
Research page + homepage
```

This is the core content-management principle of the project.

------------------------------------------------------------------------

# 27. When React Code DOES Need to Change

JSON should not be used to force structural changes.

React code needs to change when adding something fundamentally new, such
as:

-   A new page
-   A new route
-   A new type of content
-   A new interaction
-   A new filter system
-   A new component structure
-   A new external integration

For example, adding a fifth research domain does **not** require React
changes.

Adding an entirely new "Projects" system probably does.

------------------------------------------------------------------------

# 28. Adding a New Page

For a new page:

``` text
1. Create page component
2. Add route in App.jsx
3. Add page-specific CSS
4. Add navigation entry to site.json if required
5. Test direct URL access
6. Test navigation links
7. Test mobile navigation
```

Example:

``` jsx
<Route path="/projects" element={<Projects />} />
```

Then:

``` json
{
  "label": "Projects",
  "path": "/projects"
}
```

------------------------------------------------------------------------

# 29. Important Development Principle

Do not duplicate data.

For example, avoid having:

``` text
research.json
Research.jsx
DomainCard.jsx
```

all contain their own copies of:

``` text
"IoMT & Smart Healthcare"
```

There should be one source of truth:

``` text
research.json
```

React components should consume that data.

This prevents inconsistencies when content changes.

------------------------------------------------------------------------

# 30. Current Data Relationships

The current content model can be understood as:

``` text
site.json
   │
   ├── Navigation
   └── Footer/site identity


research.json
   │
   └── Research Domains
          │
          └── id
               │
               └──────────────┐
                              │
publications.json             │
   │                          │
   └── researchAreas ─────────┘
   │
   ├── Featured Research
   └── Publications Repository


people.json
   │
   ├── Featured Lead
   └── Research Members
```

The `id` values connect different pieces of the system.

------------------------------------------------------------------------

# 31. Do Not Break IDs Casually

IDs are not just display labels.

For example:

``` json
"id": "sdn-security"
```

may be referenced by:

``` json
"researchAreas": ["sdn-security"]
```

If you rename the research domain ID to:

``` json
"id": "network-security"
```

without updating publications, filtering can stop working.

If an ID must change, search the entire project for the old ID and
update every reference.

------------------------------------------------------------------------

# 32. External Links

External links should use real URLs.

For example:

``` json
"link": "https://ieeexplore.ieee.org/..."
```

Do not create fake URLs simply to fill the field.

For missing information, use:

``` json
"linkedin": ""
```

or:

``` json
"volume": ""
```

depending on the field.

------------------------------------------------------------------------

# 33. Accessibility

When adding people or images:

-   Use meaningful image files.
-   Keep the person's name accurate.
-   Do not remove `alt` attributes.
-   Use buttons for actions.
-   Use links for navigation.
-   Do not rely only on color to communicate information.
-   Preserve visible focus states when modifying interactive components.

Do not replace meaningful text with icons alone.

------------------------------------------------------------------------

# 34. Responsive Design

The site is designed for:

``` text
Desktop
Tablet
Mobile
```

Existing components use responsive breakpoints around:

``` text
900px
650px
700px
```

When changing a component, always check at least:

``` text
Desktop width
Tablet width
Mobile width
```

Do not assume a desktop layout will automatically work on mobile.

------------------------------------------------------------------------

# 35. Design Philosophy

Navalogy is intended to feel like a serious R&D organization rather than
a generic technology landing page.

Prefer:

-   Strong typography
-   Generous whitespace
-   Structured grids
-   Thin borders
-   Subtle motion
-   Restrained accent color
-   Technical metadata
-   Clear hierarchy

Avoid:

-   Excessive gradients
-   Large decorative animations
-   Excessive glow effects
-   Generic stock imagery
-   Excessive rounded cards
-   Tiny unreadable text
-   Unnecessary UI elements

The lime accent should be used intentionally rather than everywhere.

------------------------------------------------------------------------

# 36. Before Changing Existing Components

Before modifying a reusable component, determine whether the requirement
can already be satisfied through JSON.

For example:

> "Add another researcher."

Do **not** immediately modify:

``` text
PersonCard.jsx
PeopleGrid.jsx
People.jsx
```

First determine whether adding an object to:

``` text
people.json
```

is sufficient.

Likewise:

> "Add another publication."

should normally require only:

``` text
publications.json
```

------------------------------------------------------------------------

# 37. Final Rule for Future Developers

When maintaining the Navalogy website:

> **Data belongs in JSON. Structure belongs in React. Appearance belongs
> in CSS.**

In practice:

``` text
What is displayed?
        ↓
      JSON

How is it rendered?
        ↓
      React

How does it look?
        ↓
       CSS
```

Keeping these responsibilities separated is important for the long-term
maintainability of the Navalogy website.