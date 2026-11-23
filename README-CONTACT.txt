DEWI PORTFOLIO - CONTACT PAGE UPDATE
====================================

This patch adds the Contact page, activates the Contact link, and leaves
all other page contents untouched. Navbar source reflects the existing
site after the Certifications menu was removed.

FILES
  contact.html
  css/contact.css
  js/contact.js
  components/navbar.html

INSTALLATION ON WINDOWS / VS CODE
1. Back up C:\xampp\htdocs\dewi-portfolio-multipage first.
2. Extract the ZIP to a temporary folder.
3. Copy contact.html into your portfolio root.
4. Copy contact.css into css and contact.js into js.
5. Replace ONLY components/navbar.html with the updated file.
   DO NOT replace your whole css, js, or components folders.
6. Leave Home, About, Education, Projects, Experience, Skills, and assets alone.
7. With your existing local server running, visit:
   http://127.0.0.1:8001/contact.html
   Press Ctrl+Shift+R to bypass cached files.

CHECKLIST
[ ] Contact menu is active on the Contact page.
[ ] ID/EN switches every label and persists when navigating.
[ ] WhatsApp opens: https://wa.me/qr/GXC65RB64FU6C1
[ ] Email opens: mailto:dewidini1234@gmail.com
[ ] GitHub opens: https://github.com/dewidini1234-lab
[ ] LinkedIn opens: https://www.linkedin.com/in/dewi-embun-permata-dini-034103430/
[ ] Four floating cards display well on desktop and mobile.
[ ] Other pages retain their existing appearance and links.

CONTACT DETAILS
These contact links were explicitly provided for the public portfolio.
There are no analytics trackers, web fonts, CDNs, or external icon requests
within Contact. Brand icons are included inline.

ICON ATTRIBUTION
WhatsApp, GitHub, and LinkedIn icons and the envelope icon use
Font Awesome Free 6.7.2 icon vectors. License: CC BY 4.0 for icons.
https://fontawesome.com/license/free
Names and brand marks remain the property of their owners.

IMPORTANT
The shared navbar and footer load via fetch(), so do not double-click
contact.html from File Explorer. Use XAMPP or Python http.server.
If you previously made other changes to your navbar after the last
About Me patch, merge the single Contact button-to-link change manually
rather than overwriting those newer edits.
