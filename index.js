import{S as d,i as l}from"./assets/vendor-5ObWk2rO.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();async function u(s){const n=`https://pixabay.com/api/?key=45481518-557ec69fe97012c17356df52c&q=${encodeURIComponent(s)}&image_type=photo&orientation=horizontal&safesearch=true`;try{const t=await(await fetch(n)).json();if(t.hits.length===0)throw new Error("No images found");return t.hits}catch(e){throw e}}let i;function f(s){const o=document.querySelector(".gallery");o.innerHTML="",s.forEach(r=>{const n=document.createElement("a");n.href=r.largeImageURL,n.classList.add("gallery-link"),n.setAttribute("data-lightbox","gallery");const e=document.createElement("img");e.src=r.webformatURL,e.alt=r.tags,e.classList.add("gallery-image");const t=document.createElement("div");t.classList.add("gallery-card");const a=document.createElement("div");a.classList.add("gallery-info"),a.innerHTML=`
            <p><b>Likes:</b> ${r.likes}</p>
            <p><b>Views:</b> ${r.views}</p>
            <p><b>Comments:</b> ${r.comments}</p>
            <p><b>Downloads:</b> ${r.downloads}</p>
        `,n.appendChild(e),t.appendChild(n),t.appendChild(a),o.appendChild(t)}),i?i.refresh():i=new d(".gallery a",{captionsData:"alt",captionDelay:250})}function c(s){l.error({title:"Error",message:s})}function m(){l.warning({title:"Warning",message:"Sorry, there are no images matching your search query. Please try again!"})}document.querySelector(".search-form").addEventListener("submit",async s=>{s.preventDefault();const o=s.currentTarget.elements.searchQuery.value.trim();if(o===""){c("Search query cannot be empty!");return}try{const r=await u(o);f(r)}catch(r){r.message==="No images found"?m():c("Something went wrong. Please try again later.")}});
//# sourceMappingURL=index.js.map
