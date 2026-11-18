# STUDY ABROAD ALL IN ONE — Design System

Design system for **STUDY ABROAD ALL IN ONE**, a study-abroad consultancy for Bangladeshi students (HSC, Bachelor's and Master's applicants) and their parents. The platform covers university admission, government scholarships (Romania MFA / ARICE, Italy DSU, Stipendium Hungaricum and other European and global intakes), ministry/document attestation and student-visa filing, with a Dhaka (Dhanmondi) office.

**Product surfaces represented:** one — the marketing website (home, consultancy packages, guides hub, free-assessment form).

## Sources
- A written brief from the user ("main final modified prompt") specifying brand, tokens, typography, spacing, component list and rules.
- An attached reference DESIGN.md describing Airtable's marketing-site visual language, used as the structural model (token architecture, editorial pacing, pricing sub-system, no-hover policy). No codebase, Figma file, logo or imagery was supplied.
- Full adapted spec: `DESIGN.md`.

## Index
- `styles.css` — global entry (imports only) → `tokens/fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `base.css`
- `DESIGN.md` — complete design specification (tokens, components, rules, responsive)
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Brand)
- `components/` — React primitives (see list below), one `@dsCard` per folder
- `ui_kits/website/` — interactive marketing-site recreation (Home, Packages, Guides, Assessment)
- `thumbnail.html` — project tile
- `SKILL.md` — Agent Skill entry point

## Components
- **core/** — `Button` (primary, secondary, secondary-on-dark, legal), `IconButton` (40px circular), `Icon` (Lucide geometry subset), `TextLink`, `Badge`
- **forms/** — `TextInput`
- **navigation/** — `TopNav`, `Footer`
- **surfaces/** — `HeroBand`, `LogoStrip`, `SignatureCard` (coral / forest / dark = signature-coral-card, signature-forest-card, hero-card-dark), `FeatureCardTabbed`, `DemoGridCard`, `CreamCallout`, `CtaBandLight`
- **editorial/** — `ArticleCard`, `TopicFilterRail`
- **pricing/** — `PricingPillButton`, `PricingTierCard` (`featured` = pricing-tier-card-featured), `PricingComparisonRow`, `PricingComparisonTable`

### Intentional additions
- `Icon` — the brief names no icon set; a small Lucide-geometry wrapper gives checks, arrows and menu glyphs a consistent 2px stroke.
- `Badge` — needed for intake tags, eligibility status and the filter-rail count badge named in the brief.
- `PricingComparisonTable` — assembles `PricingComparisonRow`s with a sticky header and horizontal scroll.

## CONTENT FUNDAMENTALS
- **Voice:** calm, specific, procedural. A counsellor explaining the next step, not a salesperson. Concrete nouns beat adjectives: "Ministry of Foreign Affairs attestation", "ISEE parificato", "Letter of acceptance".
- **Person:** second person to the student ("your HSC result", "your file"); first-person plural for the firm ("We shortlist…", "We'll reply within one working day"). Parents are addressed directly where relevant ("Parents are welcome to join").
- **Casing:** sentence case for headlines and body. Title Case only for button labels and nav items (`Book Free Consultation`, `Check Eligibility`, `Student Login`). The wordmark is ALL CAPS.
- **Local terms:** use Bangladeshi academic vocabulary as-is — SSC, HSC, Honours, CGPA, GPA "/ 5.00", MOI letter, Education Board, MOFA. Currency in BDT with the ৳ sign and lakh grouping (৳3,64,000); EUR shown with €.
- **Transparency:** state fees and what they exclude ("University application fees, embassy fees and VFS charges are paid directly by you"). Avoid guarantees ("guaranteed visa") entirely.
- **No emoji, no exclamation marks, no hype words** ("dream", "hassle-free", "best"). Numbers are written as figures.
- **Examples:** "Study abroad with one team handling admission, scholarship and visa." · "Check where you stand before you pay anything." · "Embassy interview, rehearsed."

## VISUAL FOUNDATIONS
- **Overall vibe:** quietly editorial, like a print magazine. White canvas, near-black ink, 96px of air between bands. Nothing competes until a signature card arrives.
- **Colour:** near-black `#181d26` is the brand colour — primary CTAs, display type and the dark surface. Brand voltage comes only from full-card signature surfaces: coral `#aa2d00`, forest `#0a2e0e`, dark navy `#181d26`, plus warm pastels (cream, peach, mint, yellow, mustard) in bento grids. Link-blue `#1b61c9` is for inline links only. Info/success colours appear only as outlines and text on tags and inputs.
- **Type:** Inter Display (stand-in for Haas Groot Disp / Haas Grotesk). Display sizes at 400–500, never bolder. 14px body everywhere. Emphasis by size and surface contrast. 600 only on legal/cookie buttons. Packages pages use Inter Display at 475/575 as a separate dialect.
- **Spacing:** 4px base; 96px section padding; 1280px container with 48px gutters (24px mobile); 48/32/24/16 card padding by card class.
- **Backgrounds:** flat colour only. No gradients, meshes, textures, patterns or hero imagery behind type. The single exception is the Guides hub hero: vertical signature-colour stripes on `#1d1f25`.
- **Page rhythm:** white hero → coral → white body/tabs → pastel bento + cream → dark navy → light gray CTA → white footer. Never two identical surfaces in a row.
- **Cards:** no shadow, no border; they separate from the canvas by fill colour alone. 12px radius for signature and tabbed cards, 10px for bento, cream, article and package cards. No coloured left-border accents.
- **Borders:** 1px `#dddddd` hairlines for inputs, secondary buttons, table rows and rail dividers. `#9297a0` for disabled outlines.
- **Shadows:** one only — a faint rest shadow under the primary button. Focus is a #458fff ring.
- **Radii:** 2 legal · 6 inputs/tags · 10 content cards · 12 CTAs and signature cards · 9999 pricing pills only · 50% icon buttons/avatars.
- **Hover:** none. The system documents Default and Active/Pressed only.
- **Press states:** primary darkens to `#0d1218`; secondary fills `#f8fafc` with a stronger border; on-dark white fills `#e0e2e6`; links darken to `#1a3866`. No shrink/scale.
- **Animation:** none specified. If needed, short opacity fades (≤150ms, ease-out); no bounces, no parallax.
- **Transparency & blur:** not used. The nav is solid white and never inverts or blurs over dark bands.
- **Imagery:** none supplied. When added: real student and campus photography, natural daylight, warm neutral grading, no filters or grain; UI screenshots crop into 10px containers; article thumbnails 16:9. Until then, thumbnails are pastel surfaces with large type.
- **Layout rules:** sticky 64px top nav; one primary CTA per viewport; bento grids deliberately uneven; grids drop columns rather than shrinking cards.

## ICONOGRAPHY
- No icon set, sprite or font was supplied. The system uses **Lucide** geometry (24px grid, 2px stroke, round caps/joins) via the `Icon` component, which embeds a small subset (check, x, menu, arrows, chevrons, minus, search, calendar, map-pin, circle-check, clock, file-text, share). For more glyphs, load Lucide from CDN (`https://unpkg.com/lucide@latest`) and match stroke 2. **This is a substitution — replace with the brand's own icons if they exist.**
- Icons are functional only: nav/menu, carousel arrows, checks in package lists, dashes for "not included". They inherit text colour (ink or muted) and never sit in coloured circles.
- No emoji. Unicode is limited to → in text links, ৳ and € currency signs, and · as a meta separator.
- **Logo:** none supplied. The brand renders as a plain-type wordmark "STUDY ABROAD ALL IN ONE" (Inter Display 500, +0.08em tracking). Partner universities in the logo strip render as muted type until monochrome logo files are provided.

## Fonts
Haas Groot Disp / Haas Grotesk are licensed and not included. `tokens/fonts.css` declares **Inter Display** from the Inter 4 variable font (rsms.me) — **substitution, flagged**. Supply licensed files to replace it.
