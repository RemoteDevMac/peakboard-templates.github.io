!function(e){var t={};function i(s){if(t[s])return t[s].exports;var r=t[s]={i:s,l:!1,exports:{}};return e[s].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=t,i.d=function(e,t,s){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(s,r,function(t){return e[t]}.bind(null,r));return s},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=0)}([function(e,t,i){i(1),i(2),e.exports=i(3)},function(e,t,i){"use strict";i.r(t);var s=i(2);if(document.querySelector(".article-content")){new s.default(document.querySelector(".article-content")).init()}document.querySelector(".cta")&&document.querySelector("footer").classList.remove("mt-16"),window.addEventListener("load",(()=>{document.querySelector("html").classList.remove("no-js")}))},function(e,t,i){"use strict";i.r(t),i.d(t,"default",(function(){return r}));var s=i(3);class r{constructor(e){let t=document.createElement("div");t.classList.add("pk-lightbox"),t.innerHTML=s.default,this.article=e,this.lightbox=t,this.article_images=[].slice.call(document.querySelectorAll(".article-content img:not(.lightbox-ignore)")),this.gallery_image_ids=[],this.current_index=0,this.is_open=!1}init(){this.wrapArticleImages(),this.createGalleryImages(),this.setDataAttributes(),this.setControlListeners(),this.setImageListeners(),this.addPageDots(),this.article.appendChild(this.lightbox)}wrapArticleImages(){this.article_images.forEach((e=>this.wrapImage(e)))}wrapImage(e){const t=e.parentNode,i=document.createElement("div");i.innerHTML='<div class="absolute flex items-center opacity-75 p-1 bottom-0 right-0 bg-grey-darkest text-white"><svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 30 30">\n    <path d="M16,12h-2v-2c0-0.552-0.448-1-1-1s-1,0.448-1,1v2h-2c-0.552,0-1,0.448-1,1s0.448,1,1,1h2v2c0,0.552,0.448,1,1,1\n      s1-0.448,1-1v-2h2c0.552,0,1-0.448,1-1S16.552,12,16,12z"/>\n    <path d="M25.139,20.978l-4.052-4.053C21.666,15.737,22,14.408,22,13c0-4.962-4.038-9-9-9s-9,4.038-9,9s4.038,9,9,9\n      c1.408,0,2.737-0.334,3.925-0.914l4.053,4.053c0.574,0.573,1.327,0.859,2.08,0.859c0.754,0,1.507-0.287,2.081-0.86\n      C26.285,23.991,26.285,22.125,25.139,20.978z M6,13c0-3.86,3.14-7,7-7s7,3.14,7,7s-3.14,7-7,7S6,16.86,6,13z M23.725,23.725\n      c-0.367,0.367-0.964,0.368-1.333,0l-3.734-3.734c0.489-0.397,0.936-0.844,1.333-1.333l3.734,3.735\n      C24.091,22.759,24.091,23.357,23.725,23.725z"/>\n  </svg></div>\n  ',t.insertBefore(i,e),i.appendChild(e),i.classList.add("image-wrapper")}createGalleryImages(){this.article_images.forEach(((e,t)=>{const i=new Image;i.src=e.src,i.classList.add("gallery-image"),i.classList.add("z-50"),i.setAttribute("id",`gallery-img-${t+1}`),this.gallery_image_ids.push(t+1),this.lightbox.appendChild(i)}))}addPageDots(){const e=this.lightbox.querySelector(".lightbox-dots");this.article_images.forEach((t=>{const i=document.createElement("div");i.className="lightbox-dot",e.appendChild(i)}))}setDataAttributes(){this.article_images.forEach(((e,t)=>e.setAttribute("data-img-id",t+1)))}setControlListeners(){this.lightbox.querySelector(".close-lightbox").addEventListener("click",(()=>this.closeLightbox()));this.lightbox.querySelector(".lightbox-arrow.next").addEventListener("click",(()=>this.showNextImage()));this.lightbox.querySelector(".lightbox-arrow.prev").addEventListener("click",(()=>this.showPrevImage())),document.body.addEventListener("keyup",(({keyCode:e})=>this.handleKeyPress(e)))}setImageListeners(){this.article_images.forEach((e=>{const t=e.getAttribute("data-img-id");e.addEventListener("click",(()=>{this.openLightbox(t)}))}))}openLightbox(e){this.current_index=this.gallery_image_ids.indexOf(parseInt(e)),this.is_open=!0,this.showSelectedImage()}closeLightbox(){this.lightbox.classList.remove("open"),this.is_open=!1}showNextImage(){this.current_index<this.gallery_image_ids.length-1?this.current_index++:this.current_index=0,this.showSelectedImage()}showPrevImage(){this.current_index>0?this.current_index--:this.current_index=this.gallery_image_ids.length-1,this.showSelectedImage()}showSelectedImage(){this.clearImageClasses(),this.currentImage().classList.add("selected"),this.currentDot().classList.add("current"),this.lightbox.classList.add("open")}currentImage(){const e=this.gallery_image_ids[this.current_index];return this.lightbox.querySelector(`#gallery-img-${e}`)}currentDot(){return[].slice.call(this.lightbox.querySelectorAll(".lightbox-dot"))[this.current_index]}clearImageClasses(){[].slice.call(this.lightbox.querySelectorAll(".gallery-image")).forEach((e=>e.classList.remove("selected")));[].slice.call(this.lightbox.querySelectorAll(".lightbox-dot")).forEach((e=>e.classList.remove("current")))}handleKeyPress(e){if(this.is_open)switch(e){case 27:this.closeLightbox();break;case 37:this.showPrevImage();break;case 39:this.showNextImage()}}}},function(e,t,i){"use strict";i.r(t),t.default='\n        <div class="close-lightbox">\n        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" height="24px"><path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"/></svg>\n        </div>\n        <button class="lightbox-arrow next text-white hover:text-orange">\n        <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 0 30 30">\n\t<path d="M10,26c-0.256,0-0.512-0.098-0.707-0.293c-0.391-0.391-0.391-1.023,0-1.414L18.586,15L9.293,5.707\n\t\tc-0.391-0.391-0.391-1.023,0-1.414s1.023-0.391,1.414,0l10,10c0.391,0.391,0.391,1.023,0,1.414l-10,10\n\t\tC10.512,25.902,10.256,26,10,26z"/>\n</svg>\n        </button>\n        <button class="lightbox-arrow prev text-white hover:text-orange">\n        <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 0 30 30">\n\t<path d="M20,26c-0.256,0-0.512-0.098-0.707-0.293l-10-10c-0.391-0.391-0.391-1.023,0-1.414l10-10c0.391-0.391,1.023-0.391,1.414,0\n\t\ts0.391,1.023,0,1.414L11.414,15l9.293,9.293c0.391,0.391,0.391,1.023,0,1.414C20.512,25.902,20.256,26,20,26z"/>\n</svg>\n\n        </button>\n        <div class="lightbox-dots"></div>\n'}]);