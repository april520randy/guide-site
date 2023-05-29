(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function l(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(o){if(o.ep)return;o.ep=!0;const n=l(o);fetch(o.href,n)}})();(function(){var t=390,r=document.documentElement,l=function(){r.style.fontSize=r.getBoundingClientRect().width/t+"px"};l(),window.onresize=l})();let h="http://122.10.17.3:9101/money-pos";function S(){let t=`${h}/bphyh/page?page=1&size=10&sort=string`;return fetch(t).then(r=>r.json())}async function x(){L();try{const r=await S();if(r.code===200){let d=function(){window.location.href=c(i.bannerTopLink)};var t=d;let s=r.data.data.records.map(e=>(e=e.gmsPhyB[0],e.logo=f(e.logo),e));s=s.filter(e=>e.bstatus),s.sort((e,a)=>e.sort-a.sort),console.log(s);const o=document.querySelector("#sport-list");let n="";s.forEach(e=>{n+=`
      <div class="box-item ${P(e.type)}">
          <div class="item-h">
            <div><img class="" src="${e.logo}" alt=""
                style="width:64rem;height:62rem;margin-right: 13rem;"></div>
            <div class="item-h-right">
              <div class="item-name">
                <div class="guan-name">官方</div>
                <div class="main-title">${e.bbannerTitle}</div>
                <div class="main-star">
                  <text>强烈推荐：</text>
                  <img src="./assets/img/Star 5@2x.png" alt="" style="width: 16rem; height: 16rem;">
                  <img src="./assets/img/Star 5@2x.png" alt="" style="width: 16rem; height: 16rem;">
                  <img src="./assets/img/Star 5@2x.png" alt="" style="width: 16rem; height: 16rem;">
                  <img src="./assets/img/Star 5@2x.png" alt="" style="width: 16rem; height: 16rem;">
                  <img src="./assets/img/Star 5@2x.png" alt="" style="width: 16rem; height: 16rem;">
                </div>
              </div>
              <div class="main-gif">新人注册即&nbsp;<text>送${e.registerHandsel}元</text></div>
              ${A(e)}
            </div>
          </div>
          <div class="item-bot">
            <a  href="javascript:;" class="register bot-btn ${e.type==="2"?"black":""}">立即注册</a>
            <a href="javascript:;" class="download bot-btn ${e.type==="2"?"black":""}">APP下载</a>
          </div>
        </div>
      `}),o&&(o.innerHTML=n);const i=r.data.data.records[0];let u=document.querySelector(".head-img-box img");u.src=f(i.imgphone);let g=document.querySelector(".head-title .head-right");g.style.display="flex",u.onclick=d,g.onclick=d;let y=document.querySelector("#bottom-title1"),b=document.querySelector("#bottom-title2"),v=document.querySelector("#bottom-btn1"),w=document.querySelector("#bottom-btn2");i.otherTitle&&(document.querySelector("#item-one").style.display="flex",y.innerHTML=i.otherTitle.replace(/(\d+%*)/g,'<span  style="color:#FF0000">$&</span>'),v.onclick=function(){window.location.href=c(i.otherBtn)}),i.otherContent&&(document.querySelector("#item-two").style.display="flex",b.innerHTML=i.otherContent.replace(/(\d+%*)/g,'<span  style="color:#C03BFF">$&</span>'),w.onclick=function(){window.location.href=c(i.otherBtnLink)}),document.querySelectorAll(".box-item .register").forEach((e,a)=>{e.onclick=function(){const m=s[a];window.location.href=c(m.bbannerBtn)}}),document.querySelectorAll(".box-item .download").forEach((e,a)=>{e.onclick=function(){const m=s[a];window.location.href=c(B(m))}})}}catch(r){console.log(r)}q()}x();function L(){const t=p();t.style.visibility="visible"}function q(){const t=p();t.style.visibility="hidden"}function p(){return document.querySelector(".loading-wrapper")}function f(t){return h+"/assets/"+t}function P(t){switch(Number(t)){case 1:return"b-sport";case 2:return"ml-sport";case 3:return"bb-sport";case 4:return"k-sport";default:return"b-sport"}}function A(t){return t.type!=="1"?`<div class="main-mes">流水+包赔&nbsp;<text>累计可拿${t.otherHandsel}元</text></div>`:`<div class="main-mes" style="font-size:13rem">每周<text>任领${t.otherHandsel}元</text></div>`}function c(t){return t?(t.includes("http")||(t="https://"+t),t):""}function $(){return navigator.userAgent.match(/Android/i)?"Android":navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/iPod/i)?"IOS":navigator.userAgent.match(/Windows Phone/i)?"Windows Phone":"other"}function B({bbannerBtnLink:t,bbannerBtn2Link:r}){return $()==="IOS"?t:r}
