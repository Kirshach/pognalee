"use strict"

let emptyLinks = document.querySelectorAll('a[href="#"]');
if (emptyLinks.length !== 0) {
  for (let link of emptyLinks) {
    link.onclick = function(event) {
      event.preventDefault();
    }
  }
}
