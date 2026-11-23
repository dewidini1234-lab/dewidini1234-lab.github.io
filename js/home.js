"use strict";
/* Home-only interactions. Shared language and animation are in common.js. */
document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll("[data-website-link]");
    const note = document.getElementById("website-link-note");
    if (!buttons.length) return;

    buttons.forEach(function (button) {
        button.addEventListener("click", function () {
            const key = button.dataset.websiteLink;
            const url = window.DewiPortfolio.websiteUrls[key];
            const number = key === "website01" ? "01" : "02";
            const message = function (id) { return window.DewiPortfolio.translate(id); };

            if (!url || !url.trim()) {
                if (note) note.textContent = message("websiteUrlMissing").replace("{number}", number);
                return;
            }

            let parsed;
            try { parsed = new URL(url); }
            catch (error) {
                if (note) note.textContent = message("websiteUrlInvalid");
                return;
            }

            if (parsed.protocol !== "https:" && parsed.protocol !== "http:") {
                if (note) note.textContent = message("websiteProtocolInvalid");
                return;
            }
            const link = document.createElement("a");
            link.href = parsed.href;
            link.rel = "noopener noreferrer";
            link.target = "_blank";
            link.click();
        });
    });
});
