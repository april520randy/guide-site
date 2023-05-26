(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const e of n)if(e.type==="childList")for(const l of e.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function i(n){const e={};return n.integrity&&(e.integrity=n.integrity),n.referrerPolicy&&(e.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?e.credentials="include":n.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function s(n){if(n.ep)return;n.ep=!0;const e=i(n);fetch(n.href,e)}})();(function(){var t=390,r=document.documentElement,i=function(){r.style.fontSize=r.getBoundingClientRect().width/t+"px"};i(),window.onresize=i})();let m="https://192.168.3.156:9101";function y(){let t=`${m}/money-pos/bphyh/page?page=1&size=10&sort=string&status=0`;return fetch(t).then(r=>r.json())}async function b(){v();try{const t=await y();if(t.code===200){let i=t.data.records.map(o=>(o=o.gmsPhyB[0],o.logo=d(o.logo),o));console.log(i);const s=document.querySelector("#sport-list");let n="";i.forEach(o=>{n+=`
      <div class="box-item ${x(o.type)}">
          <div class="item-h">
            <div><img class="" src="${o.logo}" alt=""
                style="width:64rem;height:62rem;margin-right: 13rem;"></div>
            <div class="item-h-right">
              <div class="item-name">
                <div class="guan-name">官方</div>
                <div class="main-title">${o.bbannerTitle}</div>
                <div class="main-star">
                  <text>强烈推荐：</text>
                  <img src="./assets/img/Star 5@2x.png" alt="" style="width: 16rem; height: 16rem;">
                  <img src="./assets/img/Star 5@2x.png" alt="" style="width: 16rem; height: 16rem;">
                  <img src="./assets/img/Star 5@2x.png" alt="" style="width: 16rem; height: 16rem;">
                  <img src="./assets/img/Star 5@2x.png" alt="" style="width: 16rem; height: 16rem;">
                  <img src="./assets/img/Star 5@2x.png" alt="" style="width: 16rem; height: 16rem;">
                </div>
              </div>
              <div class="main-gif">新人注册即&nbsp;<text>送${o.registerHandsel}元</text></div>
              <div class="main-mes">流水+包赔&nbsp;<text>累计可拿${o.otherHandsel}元</text></div>
            </div>
          </div>
          <div class="item-bot">
            <a href="${c(o.bbannerBtnLink)}" class="bot-btn">${o.bbannerBtn}</a>
            <a href="${c(o.bbannerBtn2Link)}" class="bot-btn">${o.bbannerBtn2}</a>
          </div>
        </div>
      `}),s&&(s.innerHTML=n);const e=t.data.records[0];let l=document.querySelector(".head-img-box img");l.src=d(e.imgphone);let a=document.querySelector(".head-title .head-right");a.style.display="flex",a.onclick=function(){window.location.href=c(e.bannerTopLink)};let h=document.querySelector("#bottom-title1"),g=document.querySelector("#bottom-title2"),f=document.querySelector("#bottom-btn1"),p=document.querySelector("#bottom-btn2");e.otherTitle&&(document.querySelector("#item-one").style.display="flex",h.innerHTML=e.otherTitle.replace(/(\d+%*)/g,'<span  style="color:#FF0000">$&</span>'),f.onclick=function(){window.location.href=c(e.otherBtn)}),e.otherContent&&(document.querySelector("#item-two").style.display="flex",g.innerHTML=e.otherContent.replace(/(\d+%*)/g,'<span  style="color:#C03BFF">$&</span>'),p.onclick=function(){window.location.href=c(e.otherBtnLink)})}}catch{}w()}b();function v(){const t=u();t.style.visibility="visible"}function w(){const t=u();t.style.visibility="hidden"}function u(){return document.querySelector(".loading-wrapper")}function d(t){return m+"/money-pos/assets/"+t}function x(t){switch(Number(t)){case 1:return"b-sport";case 2:return"ml-sport";case 3:return"bb-sport";case 4:return"k-sport";default:return"b-sport"}}function c(t){t.includes("http")||(t="https://"+t)}
