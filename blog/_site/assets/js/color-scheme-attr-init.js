/*! Mr. Green Jekyll Theme (https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme)
 *  Copyright (c) 2022 Mr. Green's Workshop https://www.MrGreensWorkshop.com
 *  Licensed under MIT
*/

 
 

(function () {
  'use strict';

  var globals = {
     
    modeAttr: "data-color-scheme"
    , storageKey: "color-scheme"
    , mode: { light: "light", dark: "dark" }
  };

  function setColorScheme() {
    let defaultColorSchemeDark = (document.currentScript.dataset.mode == "true") ? true : false;
     
    const userColorScheme = defaultColorSchemeDark ? globals.mode.dark : null;
     
    const browserColorScheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? globals.mode.dark : null;
     
    const storedColorScheme = localStorage.getItem(globals.storageKey);
     
    const colorScheme = storedColorScheme || userColorScheme || browserColorScheme;
    if (colorScheme) document.body.setAttribute(globals.modeAttr, colorScheme);
  }

  setColorScheme();

  (function (window) {
    window.colorScheme = globals;
  })(window);

})();
 
