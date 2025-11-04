
//##########################################################
//
//  Configuration for main.js, editing the JavaScript
//  configuration section is not recommended if you're not
//  familiar with JavaScript as it can break the site.
//
//  If the website breaks after editing this file,
//  you can revert the changes by reloading the page.
//
//##########################################################

var enableJs = true;

//##########################################################
//  START OF FILE
//##########################################################

function main() {
  
  // Add animations on load
  
  document.addEventListener("DOMContentLoaded", function() {
    Array.from(document.getElementsByClassName("animateOnLoad")).forEach(element => {
      element.classList.add("animated");
    });
  });
  
  // Open/Close language selector
  
  langButton = document.getElementById("langButton");
  langSelector = document.getElementById("langSelector");
  LangChild = document.getElementById("langText");
  
  langButton.addEventListener("click", function() {
    langSelector.classList.toggle("opened");
  });
  
  // Close language selector when clicking outside of it
  
  window.addEventListener("click", function(e) {
    if (!langSelector.contains(e.target) && !langButton.contains(e.target)) {
      langSelector.classList.remove("opened");
    }
  });
  
  // Open header when approching with mouse the top of the page
  
  header = document.getElementById("header");
  
  window.addEventListener("mousemove", function(e) {
    if (e.y < 96 || langSelector.classList.contains("opened")) {
      header.classList.add("opened");
    } else {
      header.classList.remove("opened");
    }
  });
}

if (enableJs) {
  main();
};

//##########################################################
//  END OF FILE
//##########################################################