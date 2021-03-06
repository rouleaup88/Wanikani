// ==UserScript==
// @name         Wanikani: Lessons & Reviews in header
// @namespace    http://tampermonkey.net/
// @version      1.2.2
// @description  Puts the lessons and review counts back into the header
// @author       Kumirei
// @include      /^https://(www|preview).wanikani.com/(dashboard)?$/
// @grant        none
// ==/UserScript==
/*jshint esversion: 8 */

(function() {
    document.getElementsByTagName('head')[0].insertAdjacentHTML('beforeEnd', `
<style id="L&RHeader">
    .navigation-shortcuts.hidden {display: flex; visibility: visible;}
    .lessons-and-reviews {display: none;}
    .dashboard-progress {grid-row: 1/3 !important;}
</style>`);
})();
