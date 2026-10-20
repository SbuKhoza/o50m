# Township Signal Finder

# LOVABLE MASTER PROMPT — O50M BROADBAND WEBSITE REDESIGN

## 1. Project overview

Recreate and modernise the existing O50M Broadband website: https://o50m.co.za/

Use the existing website as a reference for the company, its services, and its general business purpose, but do not simply copy its dated layout. Build a fresh, polished, responsive website that feels modern, trustworthy, welcoming, and easy to use.

The company provides internet connectivity for residential and business customers, including customers in South African townships and surrounding communities.

**The main objective is to help visitors check internet coverage at their address and discover which products are available in their area.**

The website must be simple enough for people of all ages and levels of technical experience to navigate comfortably.

### Important project constraints

- Build the frontend only for now.
- Firebase will be connected later for authentication, customer accounts, address coverage data, and product availability.
- Do not implement Firebase authentication, Firestore, a backend, or real network coverage APIs yet.
- Use realistic mock data and a working frontend demonstration for the coverage-checking experience.
- Structure the code cleanly so Firebase can be integrated later without rebuilding the website.
- Do not invent actual coverage claims, confirmed product availability, prices, or package specifications.
- Do not use a black-and-white gradient or a generic black-and-white luxury technology theme.

## 2. Brand direction and visual design

Create a modern South African broadband website with a distinctive, community-focused identity.

### Design style

- Modern, clean, minimal, and professional.
- Warm, approachable, and trustworthy rather than overly corporate.
- Generous whitespace and clear visual hierarchy.
- Large, readable typography.
- Rounded cards and subtle borders.
- Soft shadows used sparingly.
- Consistent spacing and alignment.
- Smooth, subtle hover effects and transitions.
- A responsive layout that looks excellent on mobile, tablet, and desktop.

### Colour palette

Use a fresh, light colour scheme with a strong primary colour.

Preferred direction:
- Deep navy or dark blue for headings and important text.
- Bright blue or turquoise for primary buttons and interactive elements.
- Soft sky blue for backgrounds and highlights.
- White and very light grey for content areas.
- A restrained warm accent, such as amber or orange, for selected highlights.

Use a predominantly light interface. Avoid excessive dark sections, black backgrounds, monochrome gradients, neon effects, glassmorphism, and flashy animations.

The result should feel like a modern local internet service provider, not a generic AI startup or a luxury fashion brand.

## 3. Township-focused hero imagery

The hero section is one of the most important parts of this redesign.

Use a high-quality, realistic photograph that represents everyday life in a South African township or residential community.

Suitable visual references include:
- South African township homes and neighbourhood streets.
- Families using the internet at home.
- A young person studying or working on a laptop.
- A small local business owner serving customers.
- A welcoming residential environment with recognisable township architecture.

The photograph should communicate connectivity, opportunity, family, education, entrepreneurship, and access to reliable internet.

**Do not use a city skyline, glass skyscrapers, luxury apartments, high-rise office districts, or generic Western suburban imagery.**

Use an authentic, contemporary, aspirational township setting. Avoid stereotypes, poverty-focused imagery, or making the community look neglected.

Prefer one strong hero photograph rather than a collage of unrelated stock images. Use a subtle blue-tinted overlay or a soft light overlay only where necessary to ensure text readability. Keep the image prominent and visually engaging.

Do not place the hero text inside a heavy bordered box.

## 4. Main navigation

Create a clean navigation bar with the following exact menu labels and order:

1. Home
2. For Your Home
3. For Your Business
4. Hotspot
5. Login / Sign Up

Important:
- Use **Hotspot**, not Air Fibre.
- Keep the navigation simple and uncluttered.
- The O50M logo should appear on the left.
- Navigation links should be on the right on desktop.
- Make Login / Sign Up easy to find, styled as a clear button or outlined action.
- On mobile, use a neat hamburger menu with accessible touch targets.
- Keep the header sticky only if it improves navigation without taking up too much screen space.
- Do not add unnecessary menu items or duplicate links.

Use the existing O50M brand identity where the original logo is available. Do not invent a replacement logo unnecessarily.

## 5. Homepage hero section

Create a visually strong hero section immediately beneath the navigation.

Use a two-column desktop composition, with compelling township photography on one side and concise marketing content on the other. On mobile, stack the content naturally and keep the coverage checker prominent.

Suggested copy:

Eyebrow:
O50M BROADBAND

Main heading:
**Reliable internet. Right where you live.**

Supporting text:
Discover fast, dependable internet options for your home or business. Check your address to find out which O50M connections are available in your area.

Primary CTA:
**Check Coverage**

Secondary CTA:
**Login / Sign Up**

The primary button must scroll to or focus the coverage checker.

The secondary button should navigate to a placeholder login page or login modal.

Do not add several competing calls to action.

### Coverage checker in the hero

Include a prominent address input, either directly within the hero or in a clearly connected coverage-checking panel.

Suggested interface:

Label:
Check availability at your address

Placeholder:
Enter your street address, suburb or postal code

Button:
Check Coverage

Include a location-pin icon and a small privacy reassurance, such as:
Your address helps us find the available connection options for your area.

The input must be large, readable, and easy to operate on mobile devices.

The coverage checker must be the main interactive feature of the homepage.

## 6. Address-based coverage checking

Implement a functional frontend coverage-checking experience using mock data.

This is essential. Do not create a decorative input that does nothing.

### Step 1: Enter an address

Allow the visitor to enter:
- Street address.
- Suburb or township.
- Town or city.
- Postal code.

Allow ordinary free-text input. Do not require GPS permissions or the user's precise device location.

Add sensible input validation and an accessible loading state when the user clicks Check Coverage.

### Step 2: Demonstrate a coverage lookup

Since Firebase and live coverage services are not connected yet, simulate the lookup against a clearly defined local mock dataset.

Create a separate mock data module so the demonstration addresses and their coverage results can be replaced later by Firestore queries or a real coverage API.

The mock dataset should include illustrative examples of:
- An address with fibre, 5G, hotspot, and LTE available.
- An address with only selected technologies available.
- An address with no matching coverage information.

Use realistic South African address examples from clearly labelled demonstration data. Do not suggest that the examples represent verified O50M network coverage.

For the initial prototype, exact address matching or a simple mock suburb/postal-code lookup is acceptable. Clearly distinguish this simulation from a real coverage service.

### Step 3: Display the result

After a successful mock lookup, display a clear result:

**Internet options for [entered address]**

Show the available connection technologies as cards:

- Fibre
- 5G
- Hotspot
- LTE

Only show available products as selectable options. Unavailable technologies can be shown in a separate, understated section labelled “Not currently available in this demonstration area” if useful.

Each available product card should contain:
- Product name.
- A small, relevant icon or illustration.
- A short description.
- Availability status.
- A “View Options” or “Explore Packages” button.

Use the same visual structure for all four connection types.

For technologies without matching mock data, do not show them as available.

### Step 4: Handle unsuccessful lookups

If no matching address is found, show a friendly message:

**We couldn't confirm coverage for this address yet.**

Supporting text:
Check that your address is correct, try entering your suburb or postal code, or contact our team for assistance.

Actions:
- Try Another Address.
- Contact Us.

Do not falsely claim that O50M has no network coverage simply because an address is missing from the prototype dataset.

### Step 5: Allow a new search

Visitors must be able to change their address and perform another lookup without refreshing the page.

Retain the address in the input while displaying the result, and provide a clear option to search again.

### Technical requirements for the coverage feature

- Use reusable React components.
- Store mock coverage records separately from presentation components.
- Keep coverage lookup logic isolated in a service module.
- Use clear loading, success, empty, and error states.
- Avoid making real API calls.
- Do not store customer addresses permanently.
- Ensure keyboard navigation and screen-reader accessibility.
- Make the results responsive and easy to compare.
- Do not display invented speeds, prices, installation fees, or package limits.

The future implementation should allow the mock lookup service to be replaced by a Firebase-backed coverage service without changing the overall interface.

## 7. Brief product introduction

Directly below the hero and coverage checker, add a concise section introducing the available connection types.

Section heading:
**Find the right connection for you.**

Supporting text:
Different needs call for different connections. Explore our internet options and discover what suits your home or business.

Use four compact cards in a responsive grid.

### Fibre

Description:
Fast, stable internet delivered over a fibre-optic connection, where infrastructure is available.

### 5G

Description:
High-speed wireless connectivity for compatible devices and locations with suitable 5G coverage.

### Hotspot

Description:
Convenient wireless connectivity for supported locations and devices.

### LTE

Description:
Flexible mobile-network connectivity for locations with suitable LTE coverage.

Each card should have:
- A simple, consistent icon.
- A clear title.
- One concise description.
- A small “Learn More” link.

Use restrained colours and a subtle hover effect. Do not fill the page with oversized cards.

These cards introduce the products only. The address-specific coverage results must remain the authoritative place for showing which technologies are available at a particular address.

## 8. For Your Home section

Create a dedicated page at `/for-your-home`.

Keep the design consistent with the homepage.

Use a welcoming image of a South African family at home, a learner studying, or someone working remotely in a residential setting.

Suggested heading:
**Better connected at home.**

Supporting text:
From online learning and working remotely to streaming and staying in touch, find an internet connection that fits your household.

Include:
- A brief introduction.
- The four connection types where relevant.
- A prominent Check Coverage action.
- A simple explanation that availability depends on the address.
- A Login / Sign Up action.

Do not repeat the entire homepage. Keep the information specific to residential customers.

Do not invent package pricing or technical specifications.

## 9. For Your Business section

Create a dedicated page at `/for-your-business`.

Use authentic imagery of a small South African business, such as a local shop, salon, office, or entrepreneur working with a laptop or point-of-sale system.

Suggested heading:
**Keep your business connected.**

Supporting text:
Reliable internet helps your business serve customers, manage daily operations, and grow. Discover the connectivity options available at your business address.

Include:
- A short introduction to business connectivity.
- Relevant connection types.
- A prominent Check Coverage action.
- A Contact Us or Request Assistance action.
- A Login / Sign Up action.

Use a professional but approachable visual style.

Avoid complex enterprise jargon and long feature lists. Do not copy the original website's WorkPass-focused content as the main selling point.

## 10. Hotspot page

Create a dedicated page at `/hotspot`.

This replaces the previous Air Fibre navigation item.

Suggested heading:
**Stay connected with Hotspot.**

Supporting text:
Explore hotspot connectivity options and check whether a supported service is available at your location.

Include:
- A short explanation of the hotspot offering.
- A relevant image showing people using Wi-Fi in a local community or business environment.
- A Check Coverage button.
- A View Options action that connects to the relevant available product options.

Do not assume that every hotspot product is available at every address. Use the mock coverage dataset to control what is displayed.

Keep the page concise and consistent with the rest of the website.

## 11. Login / Sign Up experience

Create the frontend UI for authentication, but do not connect Firebase yet.

Provide a clean, accessible login page or modal.

Login fields:
- Email address.
- Password.

Actions:
- Log In.
- Forgot Password?
- Create an Account.

Create a separate sign-up interface with the basic fields needed for an initial visual prototype:
- Full name.
- Email address.
- Phone number.
- Password.
- Confirm password.

Include appropriate validation and show clear feedback.

For now, authentication actions should display a clear demonstration message rather than pretending to create an actual account or authenticate a user.

Keep authentication components separate from the coverage checker so that Firebase Authentication can be added later.

Do not create a fake logged-in state or store passwords in local storage.

## 12. Footer

Build a compact footer containing:
- O50M logo.
- A short company description.
- Home.
- For Your Home.
- For Your Business.
- Hotspot.
- Login / Sign Up.
- Contact information, but only use verified details from the existing website or assets supplied to the project.
- Privacy Policy and Terms links, using placeholders if the final legal pages are not yet available.

Use a light background, clean typography, and restrained styling.

Do not repeat the entire navigation and every call to action in multiple footer sections.

## 13. Excluded content

**Completely exclude the section titled “Our Personalized Platform Delivers” from the recreated website.**

Do not reproduce its Adapt, Guard, Control, and Sense content or create a renamed equivalent of the same section.

Also avoid:
- Repetitive marketing statements.
- Repeated coverage checkers in every section.
- Fake testimonials or fabricated customer ratings.
- Unverified network statistics.
- Invented prices and package specifications.
- Unnecessary carousels.
- Excessive animation.
- Long paragraphs.
- Excessive icon usage.
- Unnecessary decorative gradients.
- A generic city-focused hero image.
- Black-and-white gradients.

## 14. Navigation and interactions

Make the website feel like a real product even though it is initially a static frontend.

Ensure:
- The logo navigates home.
- All menu links work.
- The mobile navigation opens and closes correctly.
- Check Coverage focuses the address input or scrolls to the coverage section.
- Submitting an address produces a mock result.
- Available product cards open a relevant product-options view.
- Changing the address updates the results.
- Login / Sign Up opens the relevant authentication interface.
- Form validation works.
- Loading and error states are visible.
- Buttons and links are functional rather than decorative.
- The footer links navigate to the relevant pages or clearly marked placeholders.

Use sensible routing and reusable components. Avoid unnecessary dependencies.

## 15. Firebase-ready architecture

Although Firebase must not be connected yet, prepare the codebase for future integration.

Separate the project into logical areas such as:

- `components/navigation`
- `components/coverage`
- `components/products`
- `components/auth`
- `pages`
- `services/coverageService`
- `services/authService`
- `data/mockCoverage`
- `data/mockProducts`
- `types`

Use TypeScript if the project supports it.

Create clear interfaces for:
- Address search requests.
- Coverage results.
- Available connection technologies.
- Product options.
- Authentication forms.

The mock coverage service should return structured data that can later be provided by Firestore or an external network-coverage API.

Do not initialise Firebase, request Firebase credentials, or create production database rules in this phase.

Do not hardcode mock coverage logic throughout the React components.

## 16. Accessibility and usability

The website must be easy to use for people with varying levels of digital literacy, including older customers.

Requirements:
- Readable font sizes.
- Strong text contrast.
- Large buttons and input fields.
- Clear labels rather than relying only on placeholders.
- Simple, familiar wording.
- Visible focus states.
- Keyboard accessibility.
- Proper form error messages.
- Meaningful image alt text.
- Mobile-friendly spacing.
- No tiny text or unnecessarily complex interactions.

The primary action should always be obvious.

## 17. Responsive design

Design and test for:
- Desktop screens.
- Tablets.
- Mobile phones.

On desktop, use a balanced hero layout and a four-column product grid when there is enough space.

On tablets, reduce the grid columns naturally.

On mobile:
- Stack the hero image and text cleanly.
- Keep the address input and Check Coverage button easy to use.
- Avoid horizontal scrolling.
- Use readable card layouts.
- Ensure the mobile menu is accessible.
- Do not shrink desktop elements until they become difficult to read.

## 18. Final quality expectations

The finished website should feel like a professionally designed broadband provider website that is ready for a client presentation.

Prioritise:
1. A strong township-focused hero image.
2. A modern, light colour palette without black-and-white gradients.
3. A simple, clear navigation.
4. A genuinely interactive address-based mock coverage checker.
5. Product results that accurately reflect the demonstration dataset.
6. Minimal, non-repetitive content.
7. Consistent typography, spacing, and responsive layouts.
8. Clean code ready for future Firebase integration.

Do not stop after creating the homepage. Build all five navigation destinations: Home, For Your Home, For Your Business, Hotspot, and Login / Sign Up.

First inspect the existing project and preserve any useful working configuration. Then implement the website, test the navigation and coverage-checking interactions, and refine the visual design for both desktop and mobile.

**Final design principle: Make checking coverage effortless. Show customers what is available at their address, keep everything else simple, and make the website feel local, welcoming, modern, and trustworthy.**

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/8d1e3961-c611-489d-8e5a-5c00965aa06e).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
