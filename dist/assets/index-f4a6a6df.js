(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();(function(){var n=390,r=document.documentElement,i=function(){r.style.fontSize=r.getBoundingClientRect().width/n+"px"};i(),window.onresize=i})();let d="http://192.168.3.156:9101";function p(){let n=`${d}/money-pos/bphyh/page?page=1&size=10&sort=string&status=0`;return fetch(n).then(r=>r.json())}async function y(){b();try{const n=await p();if(n.code===200){let i=n.data.records.map(o=>(o=o.gmsPhyB[0],o.logo=a(o.logo),o));console.log(i);const s=document.querySelector("#sport-list");let e="";i.forEach(o=>{e+=`
      <div class="box-item ${w(o.type)}">
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
            <a href="${o.bbannerBtnLink}" class="bot-btn">${o.bbannerBtn}</a>
            <a href="${o.bbannerBtn2Link}" class="bot-btn">${o.bbannerBtn2}</a>
          </div>
        </div>
      `}),s&&(s.innerHTML=e);const t=n.data.records[0];let l=document.querySelector(".head-img-box img");l.src=a(t.imgphone);let c=document.querySelector(".head-title .head-right");c.style.display="flex",c.onclick=function(){window.location.href=t.bannerTopLink};let u=document.querySelector("#bottom-title1"),g=document.querySelector("#bottom-title2"),h=document.querySelector("#bottom-btn1"),f=document.querySelector("#bottom-btn2");t.otherTitle&&(document.querySelector("#item-one").style.display="flex",u.innerHTML=t.otherTitle.replace(/(\d+%*)/g,'<span  style="color:#FF0000">$&</span>'),h.onclick=function(){window.location.href=t.otherBtn}),t.otherContent&&(document.querySelector("#item-two").style.display="flex",g.innerHTML=t.otherContent.replace(/(\d+%*)/g,'<span  style="color:#C03BFF">$&</span>'),f.onclick=function(){window.location.href=t.otherBtnLink})}}catch{}v()}y();function b(){const n=m();n.style.visibility="visible"}function v(){const n=m();n.style.visibility="hidden"}function m(){return document.querySelector(".loading-wrapper")}function a(n){return d+"/money-pos/assets/"+n}function w(n){switch(Number(n)){case 1:return"b-sport";case 2:return"ml-sport";case 3:return"bb-sport";case 4:return"k-sport";default:return"b-sport"}}
