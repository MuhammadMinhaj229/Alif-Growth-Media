# Alif Growth Media — Uncommon-inspired design direction

## Goal

Create a more memorable, editorial, product-minded experience for Alif Growth Media. Use the reference site's design principles as inspiration without copying its wording, branding, assets, or exact layouts. The result should make Alif read as a focused digital systems studio: strategy, design and engineering working together.

## Reference patterns observed

Reviewed the public homepage, Studio page and portfolio presentation at https://uncommondesign.group/. Repeated patterns include:

- A restrained navigation bar with compact labels and a strong contact action.
- Large, low-density editorial typography that establishes a point of view before introducing detail.
- Small uppercase wayfinding labels, folios and section numbers.
- Project-led storytelling using large visual stages, clear capability labels and links into deeper case studies.
- Long-form scrolling with alternating visual weight, generous whitespace and thin rules rather than a repeated stack of rounded cards.
- Motion and hover states used as affordances: project imagery gently responds, links disclose direction, and scroll movement supports the story.
- A full-height mobile navigation treatment that turns route selection into a clear, single-purpose task.

These are observations of the public interface, not claims about its private implementation or exact JavaScript library.

## Alif's own design system

### Brand expression
- Foundation: near-black evergreen, not pure black, to connect the studio to its existing green identity.
- Accent: warm gold for emphasis, folios and key interaction states.
- Primary action: mint/evergreen with strong text contrast.
- Typography: the existing Manrope/Sora font delivery is retained; larger headings use lighter weights, tight tracking and compact line height.
- Composition: asymmetric editorial grids, image-led project stages and consistent section containers.
- UI shape: hairline borders and modest corners replace the previous card-heavy look.

### Responsive rules
- Wide desktop: compact sticky navigation, 2-column hero, three project columns, horizontal service rows and four process steps.
- Tablet: navigation collapses to a full-screen menu; hero and content grids reduce columns; project cards use two columns.
- Mobile: single-column hero and project stories, thumb-friendly menu and actions, readable form controls, compact section spacing and no horizontal page scrolling.
- Touch and reduced motion: hover effects remain decorative; navigation stays explicit; animations are brief and non-essential.

### Interaction map
- Header: scroll-aware background and progress line; mobile menu opens with a clear close control, closes on Escape or route selection, and locks background scrolling while open.
- Hero: primary audit CTA opens Contact; secondary action opens Work; visual CTA opens Services.
- Project cards: open the linked public client platform in a new tab with safe rel attributes.
- Service rows: navigate to the matching service anchor.
- Prototype preview: a visual preview leads to the existing live prototype catalogue under Work.
- Contact / services / work / studio pages: preserve existing routes, data, structured metadata and form behaviours; shared hero, section, card, CTA and footer components provide a consistent system.
- Footer: offers clear navigation, capability links, contact methods, social channels and legal links.

## Engineering guardrails

- Keep the current TanStack Start + React + TypeScript + Vite architecture and Netlify deployment model.
- Keep existing routes and customer destinations; do not change production or merge into main as part of the redesign.
- Preserve the existing contact flow, prototype URLs, client case-study data, privacy/terms routes and page metadata.
- Respect reduced-motion preferences, keep keyboard focus visible and use descriptive link labels.
- Avoid adding a new animation dependency or embedding large third-party media.
- Verify the public routes, mobile navigation and horizontal overflow in Playwright; use Netlify's deploy preview for a visual review before release.

## Acceptance checklist

- [ ] Homepage reads as a distinctive, product-minded digital studio.
- [ ] Desktop, tablet and mobile use intentional layouts rather than simple shrink-to-fit.
- [ ] Keyboard navigation and menu close behaviour work.
- [ ] CTA, service, client and prototype links retain their intended destinations.
- [ ] Contact form and existing metadata remain intact.
- [ ] CI and deployment preview pass before the change is considered ready.
