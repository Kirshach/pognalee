"use strict";let emptyLinks=document.querySelectorAll('a[href=""]');if(0!==emptyLinks.length)for(let e of emptyLinks)e.onclick=function(e){e.preventDefault()};let headerToggler=document.querySelector(".page-header__menu-toggler");if(void 0!==headerToggler){let e=document.querySelector(".page-header"),t=document.querySelector(".page-header__bottom-container"),o=document.querySelector(".page-header__top-container");e.classList.add("page-header--has-js","page-header--is-on-top"),t.classList.add("page-header__bottom-container--has-js","page-header__bottom-container--closed"),headerToggler.classList.add("page-header__menu-toggler--has-js","page-header__menu-toggler--closed"),o.classList.add("page-header__top-container--is-on-top");document.querySelector(".page-body");headerToggler.onclick=function(){if(headerToggler.classList.contains("page-header__menu-toggler--closed"))document.body.style.top=`-${window.scrollY}px`,document.body.style.position="fixed";else{const e=document.body.style.top;document.body.style.position="",document.body.style.top="",window.scrollTo(0,-1*parseInt(e||"0"))}headerToggler.classList.toggle("page-header__menu-toggler--closed"),t.classList.toggle("page-header__bottom-container--closed"),o.classList.toggle("page-header__top-container--modal-mode")};let n=.01*window.innerHeight;document.documentElement.style.setProperty("--vh",`${n}px`),window.addEventListener("resize",()=>{let e=.01*window.innerHeight;if(document.documentElement.style.setProperty("--vh",`${e}px`),window.innerWidth>=1200&&"fixed"===document.body.style.position){const e=document.body.style.top;document.body.style.position="",document.body.style.top="",window.scrollTo(0,-1*parseInt(e||"0")),headerToggler.classList.add("page-header__menu-toggler--closed"),t.classList.add("page-header__bottom-container--closed"),o.classList.remove("page-header__top-container--modal-mode")}});let s=document.createElement("style");s.innerHTML="\n  .page-header__bottom-container--has-js { transition: transform 0.5s }\n  .page-header__bottom-container--closed { transition: transform 0.4s ease-out }\n  .page-header__menu-toggler rect { transition: transform 0.2s }\n  ";let d=document.querySelector("script");d.parentNode.insertBefore(s,d),window.addEventListener("scroll",function(){let t=50,n=window.scrollY;window.innerWidth>=1200?(t=92,scrollY<28?e.style.top=`calc(28px - ${scrollY}px)`:e.style.top="0px"):e.style.top="0px",n>t&&o.classList.contains("page-header__top-container--is-on-top")?(o.classList.remove("page-header__top-container--is-on-top"),e.classList.remove("page-header--is-on-top")):n<t-20&&!o.classList.contains("page-header__top-container--is-on-top")&&(o.classList.contains("page-header__top-container--modal-mode")||(o.classList.add("page-header__top-container--is-on-top"),e.classList.add("page-header--is-on-top")))})}function applyFocusVisiblePolyfill(e){var t=!0,o=!1,n=null,s={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function d(e){return!!(e&&e!==document&&"HTML"!==e.nodeName&&"BODY"!==e.nodeName&&"classList"in e&&"contains"in e.classList)}function i(e){e.classList.contains("focus-visible")||(e.classList.add("focus-visible"),e.setAttribute("data-focus-visible-added",""))}function a(e){t=!1}function r(){document.addEventListener("mousemove",c),document.addEventListener("mousedown",c),document.addEventListener("mouseup",c),document.addEventListener("pointermove",c),document.addEventListener("pointerdown",c),document.addEventListener("pointerup",c),document.addEventListener("touchmove",c),document.addEventListener("touchstart",c),document.addEventListener("touchend",c)}function c(e){e.target.nodeName&&"html"===e.target.nodeName.toLowerCase()||(t=!1,document.removeEventListener("mousemove",c),document.removeEventListener("mousedown",c),document.removeEventListener("mouseup",c),document.removeEventListener("pointermove",c),document.removeEventListener("pointerdown",c),document.removeEventListener("pointerup",c),document.removeEventListener("touchmove",c),document.removeEventListener("touchstart",c),document.removeEventListener("touchend",c))}document.addEventListener("keydown",function(o){o.metaKey||o.altKey||o.ctrlKey||(d(e.activeElement)&&i(e.activeElement),t=!0)},!0),document.addEventListener("mousedown",a,!0),document.addEventListener("pointerdown",a,!0),document.addEventListener("touchstart",a,!0),document.addEventListener("visibilitychange",function(e){"hidden"===document.visibilityState&&(o&&(t=!0),r())},!0),r(),e.addEventListener("focus",function(e){var o,n,a;d(e.target)&&(t||(o=e.target,n=o.type,"INPUT"===(a=o.tagName)&&s[n]&&!o.readOnly||"TEXTAREA"===a&&!o.readOnly||o.isContentEditable))&&i(e.target)},!0),e.addEventListener("blur",function(e){var t;d(e.target)&&(e.target.classList.contains("focus-visible")||e.target.hasAttribute("data-focus-visible-added"))&&(o=!0,window.clearTimeout(n),n=window.setTimeout(function(){o=!1},100),(t=e.target).hasAttribute("data-focus-visible-added")&&(t.classList.remove("focus-visible"),t.removeAttribute("data-focus-visible-added")))},!0),e.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&e.host?e.host.setAttribute("data-js-focus-visible",""):e.nodeType===Node.DOCUMENT_NODE&&(document.documentElement.classList.add("js-focus-visible"),document.documentElement.setAttribute("data-js-focus-visible",""))}if("undefined"!=typeof window&&"undefined"!=typeof document){var event;window.applyFocusVisiblePolyfill=applyFocusVisiblePolyfill;try{event=new CustomEvent("focus-visible-polyfill-ready")}catch(e){(event=document.createEvent("CustomEvent")).initCustomEvent("focus-visible-polyfill-ready",!1,!1,{})}window.dispatchEvent(event)}"undefined"!=typeof document&&applyFocusVisiblePolyfill(document);