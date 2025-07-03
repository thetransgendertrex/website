// ==UserScript==
// @name         Aza'raan Website Core Loader (Merged Dynamic Styles)
// @namespace    https://github.com/thetransgendertrex/website
// @version      3.0
// @description  Loads dynamic Azara style, scripts, donations, and swaps sections dynamically
// @match        https://www.azara-trademarked-projects.com/*
// @grant        none
// ==/UserScript==

(function () {
  'use strict';

  console.log('✨ Aza\'raan Site Script initializing...');

  // ✅ Insert dynamic CSS directly
  // Move @import to <link> tags for browser compatibility
  [
    "https://fonts.googleapis.com/css2?family=Cinzel+Decorative&display=swap",
    "https://fonts.googleapis.com/css2?family=Pridi&display=swap",
    "https://fonts.googleapis.com/css2?family=Uncial+Antiqua&display=swap"
  ].forEach(href => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    document.head.appendChild(link);
  });

  const css = `

 /*
Aza'ra Trademarked Projects

Base Template: Reflux (https://templatemo.com/tm-531-reflux)
Customized with layered Moonpunk background and custom fonts.
*/

/* === Google Fonts === */
@import url("https://fonts.googleapis.com/css2?family=Cinzel+Decorative&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Pridi&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Uncial+Antiqua&display=swap");


/* ===================================================================================================
 * OVERLAY
 * ===================================================================================================*/
/* === Base Styles === */
#page-wraper {
    background: black url("https://raw.githubusercontent.com/thetransgendertrex/website/refs/heads/main/Aza'ra%20Moonpunk%20Settlement%20(AI%20Generated).JPG.jpg");
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    width: 100%;
}

 #overlay {
  background: rgba(0, 0, 0, 0.3);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow-y: auto;
}

/* Basic */

body {
    overflow-x: hidden;
}

input,
select,
textarea {
    outline: none;
}

a,
a:hover {
    text-decoration: none;
}

p {
    font-size: 16px;
    line-height: 24px;
}

h4 {
    font-size: 26px;
    font-weight: 700;
    letter-spacing: 0.25px;
}

img {
    width: 100%;
    overflow: hidden;
}

ul {
    padding: 0;
    margin: 0;
    list-style: none;
}

ul li {
    display: inline-block;
}

html {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}

/* ===============================
   ✅ CUSTOM MAIN NAV (Reflux Fit)
   =============================== */

.main-nav {
  text-align: center;
}

.main-nav li {
  display: block;
}

.main-nav li:last-child a {
  border-bottom: 2px solid cyan;
}

.main-nav li a {
  height: 70px;
  line-height: 70px;
  display: inline-block;
  font-size: 20px;
  font-weight: 700;
  font-family: 'Times New Roman', serif;
  color: white;
  width: 100%;
  transition: all 0.5s;
  border-top: 2px solid cyan;
  text-decoration: none;
}

.main-nav li:hover a,
.main-nav li.active a {
  background: white;
  color: black;
}

/* ===============================
   ✅ CUSTOM SIDEBAR (Reflux Fit)
   =============================== */

.menu {
  text-align: center;
  font-family: 'Times New Roman', serif;
  background-color: black;
  color: white;
  box-sizing: border-box;
  height: 100vh;
  max-height: 100vh !important;
  max-width: 80vw !important;
  min-width: 45px !important;
  outline: none;
  overflow-x: hidden !important;
  overflow-y: auto !important;
  padding: 0;
  position: fixed !important;
  top: 0;
  left: 10%;
  width: 20%;
  z-index: 9999 !important;
  will-change: transform;
  -webkit-transition: -webkit-transform 233ms cubic-bezier(0, 0, 0.21, 1);
  transition: transform 233ms cubic-bezier(0, 0, 0.21, 1);
  -webkit-overflow-scrolling: touch;
}

.menu a {
  display: block;
  text-decoration: none;
  padding: 20px 0;
  font-size: 18px;
  color: white;
  transition: all 0.3s;
}

.menu a:hover {
  background-color: cyan;
  color: black;
}

.menu::-webkit-scrollbar {
  display: none;
}

/* ===============================
   ✅ UNIVERSAL RESETS & BASICS
   =============================== */
.menu a,
.menu a:visited {
  text-decoration: none;
  outline: none;
}

.menu a:hover {
  outline: none;
}

/* ===============================
   ✅ SIDEBAR TOGGLE BUTTON (Updated)
   =============================== */
#menu-toggle,
#menu-close {
  cursor: pointer;
  background-color: #fff;
  color: #000;
  width: 60px;
  height: 60px;
  text-align: center;
  line-height: 60px;
  display: inline-block;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  border: none;
  transition: background 0.3s ease, color 0.3s ease;
}

#menu-toggle:hover,
#menu-close:hover {
  background-color: #000;
  color: #fff;
}

/* ===============================
   ✅ UNIQUE LINK COLORS & SHADOWS
   =============================== */

.menu a.home {
  color: #ECEEF1;
  text-shadow: -0.5px -0.5px #1a114b, 0.5px -0.5px #1a114b, -0.5px 0.5px #1a114b, 0.5px 0.5px #1a114b;
}
.menu a.home:hover {
  color: #1a114b;
  text-shadow: -0.5px -0.5px #ECEEF1, 0.5px -0.5px #ECEEF1, -0.5px 0.5px #ECEEF1, 0.5px 0.5px #ECEEF1;
}

.menu a.lore {
  color: #0075FF;
  text-shadow: -0.5px -0.5px #0c4530, 0.5px -0.5px #0c4530, -0.5px 0.5px #0c4530, 0.5px 0.5px #0c4530;
}
.menu a.lore:hover {
  color: #0c4530;
  text-shadow: -0.5px -0.5px #0075FF, 0.5px -0.5px #0075FF, -0.5px 0.5px #0075FF, 0.5px 0.5px #0075FF;
}

.menu a.navigation {
  color: #C5ECFF;
  text-shadow: -0.5px -0.5px #342c61, 0.5px -0.5px #342c61, -0.5px 0.5px #342c61, 0.5px 0.5px #342c61;
}
.menu a.navigation:hover {
  color: #342c61;
  text-shadow: -0.5px -0.5px #C5ECFF, 0.5px -0.5px #C5ECFF, -0.5px 0.5px #C5ECFF, 0.5px 0.5px #C5ECFF;
}

.menu a.font-project {
  color: #C1FF8A;
  text-shadow: -0.5px -0.5px #572a45, 0.5px -0.5px #572a45, -0.5px 0.5px #572a45, 0.5px 0.5px #572a45;
}
.menu a.font-project:hover {
  color: #572a45;
  text-shadow: -0.5px -0.5px #C1FF8A, 0.5px -0.5px #C1FF8A, -0.5px 0.5px #C1FF8A, 0.5px 0.5px #C1FF8A;
}

.menu a.mmorpg {
  color: #FBC96D;
  text-shadow: -0.5px -0.5px #014d4e, 0.5px -0.5px #014d4e, -0.5px 0.5px #014d4e, 0.5px 0.5px #014d4e;
}
.menu a.mmorpg:hover {
  color: #014d4e;
  text-shadow: -0.5px -0.5px #FBC96D, 0.5px -0.5px #FBC96D, -0.5px 0.5px #FBC96D, 0.5px 0.5px #FBC96D;
}

.menu a.book-series {
  color: #D88EBA;
  text-shadow: -0.5px -0.5px #78581f, 0.5px -0.5px #78581f, -0.5px 0.5px #78581f, 0.5px 0.5px #78581f;
}
.menu a.book-series:hover {
  color: #78581f;
  text-shadow: -0.5px -0.5px #D88EBA, 0.5px -0.5px #D88EBA, -0.5px 0.5px #D88EBA, 0.5px 0.5px #D88EBA;
}

.menu a.timekeeping {
  color: #DCE1E8;
  text-shadow: -0.5px -0.5px #A63A2C, 0.5px -0.5px #A63A2C, -0.5px 0.5px #A63A2C, 0.5px 0.5px #A63A2C;
}
.menu a.timekeeping:hover {
  color: #A63A2C;
  text-shadow: -0.5px -0.5px #DCE1E8, 0.5px -0.5px #DCE1E8, -0.5px 0.5px #DCE1E8, 0.5px 0.5px #DCE1E8;
}

.menu a.language-rules {
  color: #8FE9F0;
  text-shadow: -0.5px -0.5px #7A7C86, 0.5px -0.5px #7A7C86, -0.5px 0.5px #7A7C86, 0.5px 0.5px #7A7C86;
}
.menu a.language-rules:hover {
  color: #7A7C86;
  text-shadow: -0.5px -0.5px #8FE9F0, 0.5px -0.5px #8FE9F0, -0.5px 0.5px #8FE9F0, 0.5px 0.5px #8FE9F0;
}

.menu a.lexicon {
  color: #7A7C86;
  text-shadow: -0.5px -0.5px #1a114b, 0.5px -0.5px #1a114b, -0.5px 0.5px #1a114b, 0.5px 0.5px #1a114b;
}
.menu a.lexicon:hover {
  color: #1a114b;
  text-shadow: -0.5px -0.5px #7A7C86, 0.5px -0.5px #7A7C86, -0.5px 0.5px #7A7C86, 0.5px 0.5px #7A7C86;
}

.menu a.support {
  color: #FBC96D;
  text-shadow: -0.5px -0.5px #342c61, 0.5px -0.5px #342c61, -0.5px 0.5px #342c61, 0.5px 0.5px #342c61;
}
.menu a.support:hover {
  color: #342c61;
  text-shadow: -0.5px -0.5px #FBC96D, 0.5px -0.5px #FBC96D, -0.5px 0.5px #FBC96D, 0.5px 0.5px #FBC96D;
}

/* === Social (Facebook) === */
.menu .social-network {
  margin-top: 40px;
}

.menu .social-network ul {
  padding: 0;
}

.menu .social-network ul li {
  display: inline-block;
}

.menu .social-network ul li a {
  display: inline-block;
  width: 40px;
  height: 40px;
  line-height: 40px;
  background: rgba(0, 0, 0, 0.5);
  transition: all 0.3s ease;
}

.menu .social-network ul li a img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.menu .social-network ul li a:hover {
  background: cyan;
}


/* === Home Section === */
.section.home {
  position: relative;
  margin-left: 20%;
  width: 80%;
  min-height: 100vh;
  padding: 80px 5%;
  text-align: center;
  overflow-x: auto;
  overflow-y: auto;
  border-bottom: 3px solid rgba(250, 250, 250, 0.25);
  background: transparent;
  font-family: "Times New Roman", serif;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.section.home h2 {
  text-align: center;
  margin: 20px auto;
}

.section.home p {
  text-align: center;
  margin: 20px auto;
  max-width: 900px;
}

.section.home table {
  width: 100%;
  max-width: 100%;
  margin: 40px auto;
  background: rgba(255, 255, 255, 0.7);
  border-collapse: collapse;
  overflow-x: auto;
  display: block;
  padding: 20px;
  text-align: center;
}

.section.home table th,
.section.home table td {
  font-family: "Times New Roman", serif;
  text-align: center;
  vertical-align: middle;
  padding: 10px;
  color: black;
}


/* === Lore Section === */
.section.lore {
  position: relative;
  margin-left: 20%;
  width: 80%;
  min-height: 100vh;
  padding: 80px 5%;
  text-align: center;
  overflow-x: auto;
  overflow-y: auto;
  border-bottom: 3px solid rgba(250, 250, 250, 0.25);
  background: transparent;
  font-family: "Times New Roman", serif;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.section.lore h2 {
  text-align: center;
  margin: 20px auto;
}

.section.lore p {
  text-align: center;
  margin: 20px auto;
  max-width: 900px;
}

.section.lore table {
  width: 100%;
  max-width: 100%;
  margin: 40px auto;
  background: rgba(255, 255, 255, 0.7);
  border-collapse: collapse;
  overflow-x: auto;
  display: block;
  padding: 20px;
  text-align: center;
}

.section.lore table th,
.section.lore table td {
  font-family: "Times New Roman", serif;
  text-align: center;
  vertical-align: middle;
  padding: 10px;
  color: black;
}


/* === Navigation Section === */
.section.navigation {
  position: relative;
  margin-left: 20%;
  width: 80%;
  min-height: 100vh;
  padding: 80px 5%;
  text-align: center;
  overflow-x: auto;
  overflow-y: auto;
  border-bottom: 3px solid rgba(250, 250, 250, 0.25);
  background: transparent;
  font-family: "Times New Roman", serif;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.section.navigation h2 {
  text-align: center;
  margin: 20px auto;
}

.section.navigation p {
  text-align: center;
  margin: 20px auto;
  max-width: 900px;
}

.section.navigation table {
  width: 100%;
  max-width: 100%;
  margin: 40px auto;
  background: rgba(255, 255, 255, 0.7);
  border-collapse: collapse;
  overflow-x: auto;
  display: block;
  padding: 20px;
  text-align: center;
}

.section.navigation table th,
.section.navigation table td {
  font-family: "Times New Roman", serif;
  text-align: center;
  vertical-align: middle;
  padding: 10px;
  color: black;
}


/* === Font-project Section === */
.section.font-project {
  position: relative;
  margin-left: 20%;
  width: 80%;
  min-height: 100vh;
  padding: 80px 5%;
  text-align: center;
  overflow-x: auto;
  overflow-y: auto;
  border-bottom: 3px solid rgba(250, 250, 250, 0.25);
  background: transparent;
  font-family: "Times New Roman", serif;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.section.font-project h2 {
  text-align: center;
  margin: 20px auto;
}

.section.font-project p {
  text-align: center;
  margin: 20px auto;
  max-width: 900px;
}

.section.font-project table {
  width: 100%;
  max-width: 100%;
  margin: 40px auto;
  background: rgba(255, 255, 255, 0.7);
  border-collapse: collapse;
  overflow-x: auto;
  display: block;
  padding: 20px;
  text-align: center;
}

.section.font-project table th,
.section.font-project table td {
  font-family: "Times New Roman", serif;
  text-align: center;
  vertical-align: middle;
  padding: 10px;
  color: black;
}


/* === Mmorpg Section === */
.section.mmorpg {
  position: relative;
  margin-left: 20%;
  width: 80%;
  min-height: 100vh;
  padding: 80px 5%;
  text-align: center;
  overflow-x: auto;
  overflow-y: auto;
  border-bottom: 3px solid rgba(250, 250, 250, 0.25);
  background: transparent;
  font-family: "Times New Roman", serif;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.section.mmorpg h2 {
  text-align: center;
  margin: 20px auto;
}

.section.mmorpg p {
  text-align: center;
  margin: 20px auto;
  max-width: 900px;
}

.section.mmorpg table {
  width: 100%;
  max-width: 100%;
  margin: 40px auto;
  background: rgba(255, 255, 255, 0.7);
  border-collapse: collapse;
  overflow-x: auto;
  display: block;
  padding: 20px;
  text-align: center;
}

.section.mmorpg table th,
.section.mmorpg table td {
  font-family: "Times New Roman", serif;
  text-align: center;
  vertical-align: middle;
  padding: 10px;
  color: black;
}


/* === Book-series Section === */
.section.book-series {
  position: relative;
  margin-left: 20%;
  width: 80%;
  min-height: 100vh;
  padding: 80px 5%;
  text-align: center;
  overflow-x: auto;
  overflow-y: auto;
  border-bottom: 3px solid rgba(250, 250, 250, 0.25);
  background: transparent;
  font-family: "Times New Roman", serif;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.section.book-series h2 {
  text-align: center;
  margin: 20px auto;
}

.section.book-series p {
  text-align: center;
  margin: 20px auto;
  max-width: 900px;
}

.section.book-series table {
  width: 100%;
  max-width: 100%;
  margin: 40px auto;
  background: rgba(255, 255, 255, 0.7);
  border-collapse: collapse;
  overflow-x: auto;
  display: block;
  padding: 20px;
  text-align: center;
}

.section.book-series table th,
.section.book-series table td {
  font-family: "Times New Roman", serif;
  text-align: center;
  vertical-align: middle;
  padding: 10px;
  color: black;
}


/* === Timekeeping Section === */
.section.timekeeping {
  position: relative;
  margin-left: 20%;
  width: 80%;
  min-height: 100vh;
  padding: 80px 5%;
  text-align: center;
  overflow-x: auto;
  overflow-y: auto;
  border-bottom: 3px solid rgba(250, 250, 250, 0.25);
  background: transparent;
  font-family: "Times New Roman", serif;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.section.timekeeping h2 {
  text-align: center;
  margin: 20px auto;
}

.section.timekeeping p {
  text-align: center;
  margin: 20px auto;
  max-width: 900px;
}

.section.timekeeping table {
  width: 100%;
  max-width: 100%;
  margin: 40px auto;
  background: rgba(255, 255, 255, 0.7);
  border-collapse: collapse;
  overflow-x: auto;
  display: block;
  padding: 20px;
  text-align: center;
}

.section.timekeeping table th,
.section.timekeeping table td {
  font-family: "Times New Roman", serif;
  text-align: center;
  vertical-align: middle;
  padding: 10px;
  color: black;
}


/* === Language-rules Section === */
.section.language-rules {
  position: relative;
  margin-left: 20%;
  width: 80%;
  min-height: 100vh;
  padding: 80px 5%;
  text-align: center;
  overflow-x: auto;
  overflow-y: auto;
  border-bottom: 3px solid rgba(250, 250, 250, 0.25);
  background: transparent;
  font-family: "Times New Roman", serif;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.section.language-rules h2 {
  text-align: center;
  margin: 20px auto;
}

.section.language-rules p {
  text-align: center;
  margin: 20px auto;
  max-width: 900px;
}

.section.language-rules table {
  width: 100%;
  max-width: 100%;
  margin: 40px auto;
  background: rgba(255, 255, 255, 0.7);
  border-collapse: collapse;
  overflow-x: auto;
  display: block;
  padding: 20px;
  text-align: center;
}

.section.language-rules table th,
.section.language-rules table td {
  font-family: "Times New Roman", serif;
  text-align: center;
  vertical-align: middle;
  padding: 10px;
  color: black;
}


/* === Lexicon Section === */
.section.lexicon {
  position: relative;
  margin-left: 20%;
  width: 80%;
  min-height: 100vh;
  padding: 80px 5%;
  text-align: center;
  overflow-x: auto;
  overflow-y: auto;
  border-bottom: 3px solid rgba(250, 250, 250, 0.25);
  background: transparent;
  font-family: "Times New Roman", serif;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.section.lexicon h2 {
  text-align: center;
  margin: 20px auto;
}

.section.lexicon p {
  text-align: center;
  margin: 20px auto;
  max-width: 900px;
}

.section.lexicon table {
  width: 100%;
  max-width: 100%;
  margin: 40px auto;
  background: rgba(255, 255, 255, 0.7);
  border-collapse: collapse;
  overflow-x: auto;
  display: block;
  padding: 20px;
  text-align: center;
}

.section.lexicon table th,
.section.lexicon table td {
  font-family: "Times New Roman", serif;
  text-align: center;
  vertical-align: middle;
  padding: 10px;
  color: black;
}


/* === Support Section === */
.section.support {
  position: relative;
  margin-left: 20%;
  width: 80%;
  min-height: 100vh;
  padding: 80px 5%;
  text-align: center;
  overflow-x: auto;
  overflow-y: auto;
  border-bottom: 3px solid rgba(250, 250, 250, 0.25);
  background: transparent;
  font-family: "Times New Roman", serif;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.section.support h2 {
  text-align: center;
  margin: 20px auto;
}

.section.support p {
  text-align: center;
  margin: 20px auto;
  max-width: 900px;
}

.section.support table {
  width: 100%;
  max-width: 100%;
  margin: 40px auto;
  background: rgba(255, 255, 255, 0.7);
  border-collapse: collapse;
  overflow-x: auto;
  display: block;
  padding: 20px;
  text-align: center;
}

.section.support table th,
.section.support table td {
  font-family: "Times New Roman", serif;
  text-align: center;
  vertical-align: middle;
  padding: 10px;
  color: black;
}

/* ===================================================================================================
 * FOOTER
 * ===================================================================================================*/
footer {
  background: rgba(0, 0, 0, 0.3);
  color: #A63A2C;
  text-shadow:
    -0.5px -0.5px #141223,
     0.5px -0.5px #141223,
    -0.5px  0.5px #141223,
     0.5px  0.5px #141223;
  text-align: center;
  font-size: 0.75rem;
  padding: 0.5rem 1rem;
  z-index: 1000;
}


/* === Button List & Wrappers === */
.button-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.button-wrapper {
  margin: 2rem 0; /* Big vertical gap between buttons */
  text-align: center;
}

.button-wrapper hr {
  margin: 1rem auto; /* Space above and below hr */
  width: 50%;        /* Width of divider line */
  border: none;
  border-top: 2px solid #8FE9F0; /* Cyan line to match your theme */
}



/* === Comic Sans Override for index.html === */
body[data-doc-name*="index"] {
  font-family: 'Comic Sans MS', cursive !important;
}

/* === Force Comic Sans size on all spans or elements === */
span[style*="Comic Sans MS"],
*[style*="Comic Sans MS"] {
  font-family: 'Comic Sans MS', cursive !important;
  font-size: 22x !important;
}

@media screen and (max-width: 1024px) {
  span[style*="Comic Sans MS"],
  *[style*="Comic Sans MS"] {
    font-size: 18px !important;
  }
}

/* === Aza'raan Font Substitution === */
.azaraan-word {
  font-family: 'Azaraan', cursive;
  color: #014d4e;
  text-shadow: 0 0 2px var(--cyan);
}

/* =======================
   Universal Responsive
   ======================= */

/* Large Desktop → Large Tablet */
@media screen and (max-width: 1680px) {
  .menu {
    left: 0%;
    width: 25%;
  }

  .section {
    margin-left: 25%;
    width: 75%;
    padding: 60px 4%;
  }
}
.button {
  touch-action: manipulation;
}

/* Medium Desktop → Standard Tablet */
@media screen and (max-width: 1280px) {
  .menu {
    width: 20%;
  }

  .section {
    margin-left: 20%;
    width: 70%;
    padding: 50px 4%;
  }
}

/* Large Tablet → Small Tablet */
@media screen and (max-width: 1024px) {
  .menu {
    width: 35%;
  }

  .section {
    margin-left: 35%;
    width: 65%;
    padding: 40px 3%;
  }
}
.button {
  touch-action: manipulation;
}

/* Small Tablet → Large Mobile */
@media screen and (max-width: 900px) {
  .menu {
    width: 320px;
    transform: translateX(-100%);
    transition: transform 0.3s ease;
    left: 0;
    top: 0;
    z-index: 9999;
  }

  .menu.open {
    transform: translateX(0);
  }

  #menu-toggle,
  #menu-close {
    display: inline-block;
  }

  .section {
    margin-left: 0;
    width: 100%;
    padding: 30px 5%;
  }

  footer {
    width: 100%;
  }
}
.button {
  touch-action: manipulation;
}

/* Large Mobile Screens */
@media screen and (max-width: 768px) {
  .section {
    padding: 25px 5%;
  }

  .section table th,
  .section table td {
    padding: 6px 10px;
    font-size: 0.85em;
  }

  .button {
    display: block;
    width: 100%;
    padding: 10px 0;
    font-size: 0.9rem;
  }

  .divider-home,
  .divider-lore,
  .divider-navigation,
  .divider-font-project,
  .divider-mmorpg,
  .divider-book-series,
  .divider-timekeeping,
  .divider-language-rules,
  .divider-lexicon,
  .divider-support,
  .divider-footer {
    margin: 15px 0;
  }
}
.button {
  touch-action: manipulation;
}

/* Small Mobile Screens */
@media screen and (max-width: 480px) {
  .section {
    padding: 20px 5%;
  }

  .section table th,
  .section table td {
    padding: 5px 8px;
    font-size: 0.8em;
  }

  .button {
    font-size: 0.85rem;
    padding: 8px 0;
  }
}
.button {
  touch-action: manipulation;
}


`;


  const style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);
  console.log('✅ Dynamic CSS injected.');

  // ✅ Load dynamic scripts
  fetch('https://raw.githubusercontent.com/thetransgendertrex/website/main/override.js')
    .then(r => r.text())
    .then(code => {
      const s = document.createElement('script');
      s.textContent = code; document.head.appendChild(s);
      console.log('✅ override.js loaded.');
    });

  // Removed self-injection of script.js to prevent infinite recursion and errors.

  fetch('https://raw.githubusercontent.com/thetransgendertrex/website/main/donations.js')
    .then(r => r.text())
    .then(code => {
      const s = document.createElement('script');
      s.textContent = code; document.head.appendChild(s);
      console.log('✅ donations.js loaded.');
    });

  document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const navLinks = document.querySelectorAll('.menu a');
    const menu = document.getElementById('menu');
    const toggle = document.getElementById('menu-toggle');
    const close = document.getElementById('menu-close');

    const sectionIds = ['home','lore','navigation','font-project','mmorpg','book-series','timekeeping','language-rules','lexicon','support'];
    const loadedSections = new Set();

    if (navLinks && navLinks.length > 0) {
      navLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
          e.preventDefault();
          navLinks.forEach(function(l) { l.classList.remove('active'); });
          link.classList.add('active');
          var href = link.getAttribute('href') ? link.getAttribute('href').replace('.html','').toLowerCase() : '';
          var id = sectionIds.indexOf(href) !== -1 ? href : 'home';
          var section = document.getElementById(id);
          if (!section) return;
          if (!loadedSections.has(id)) {
            fetch('https://raw.githubusercontent.com/thetransgendertrex/website/main/' + href + '.html')
              .then(function(r) { return r.text(); })
              .then(function(html) { section.innerHTML = html; loadedSections.add(id); })
              .catch(function(err) { console.error('Failed to load section:', err); });
          }
          section.scrollIntoView({ behavior: 'smooth' });
          if (window.innerWidth < 846 && menu) menu.classList.remove('open');
        });
      });
    }

    // Only add event listeners if the elements exist
    if (toggle && menu) {
      toggle.addEventListener('click', function() { menu.classList.toggle('open'); });
    }
    if (close && menu) {
      close.addEventListener('click', function() { menu.classList.remove('open'); });
    }

    // Defensive: If menu, toggle, or close do not exist, do nothing and avoid errors
    // Also, ensure body exists before using it
    function resize() {
      if (body && window.innerWidth < 768) body.classList.add('mobile');
      else if (body) body.classList.remove('mobile');
    }
    resize();
    window.addEventListener('resize', resize);
  });

})();


 
