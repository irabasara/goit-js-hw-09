const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),d=document.querySelector("body");let a=null;t.addEventListener("click",(function(){a=setInterval((()=>{d.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`,t.disabled=!0,e.disabled=!1}),1e3)})),e.addEventListener("click",(function(){clearInterval(a),t.disabled=!1,e.disabled=!0}));
//# sourceMappingURL=01-color-switcher.56c1fcd2.js.map
