DEWI PORTFOLIO - ABOUT ME PERSONAL STORY UPDATE

SCOPE:
- Refactors About Me into a personal, bilingual story. Keeps the original graduation photo.
- Keeps the website's shared layout, styles, interactions, and all other pages unchanged.
- Removes the Certifications menu item, which Dewi previously approved removing.
- Does not delete certificate PDFs or modify other sections.

INSTALLATION (Windows):
1. Back up your whole C:\xampp\htdocs\dewi-portfolio-multipage folder first.
2. Extract this ZIP to a temporary folder, not directly over your website.
3. Copy about.html into C:\xampp\htdocs\dewi-portfolio-multipage, choosing Replace.
4. MERGE the css, js and components folders (do not replace the folders themselves).
   Replace components/navbar.html when prompted. Leave all other existing files untouched.
5. Do not delete the assets folder. The About photo path remains:
   assets/images/foto-about-dewi.jpg
6. With local server running at port 8001, open:
   http://127.0.0.1:8001/about.html
7. Press Ctrl+Shift+R, then check ID/EN, photo caption, About sections,
   navbar, scroll and layout on a mobile screen.

FILES INCLUDED:
- about.html             (new personal story)
- css/about-story.css    (scoped styling; keeps existing CSS)
- js/about-story.js      (new About-only bilingual copy)
- components/navbar.html (removes Certifications only; keeps Skills link active)

NOTE:
The old About education highlight and thesis showcase were intentionally removed
from About Me because those topics already appear on Education and Projects.
No information was deleted from those other pages.
Date of birth is intentionally not shown on the public-facing page.
The user's custom white-on-photo name is explicitly retained in about-story.css.
