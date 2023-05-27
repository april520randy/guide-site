(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function a(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(n){if(n.ep)return;n.ep=!0;const r=a(n);fetch(n.href,r)}})();(function(){var t=390,o=document.documentElement,a=function(){o.style.fontSize=o.getBoundingClientRect().width/t+"px"};a(),window.onresize=a})();let p="http://192.168.3.156:9101/money-pos/api";function x(){let t=`${p}/bphyh/page?page=1&size=10&sort=string&status=0`;return fetch(t).then(o=>o.json())}async function L(){q();try{const o=await x();if(o.code===200){let u=function(){window.location.href=d(i.bannerTopLink)};var t=u;let s=o.data.data.records.map(e=>(e=e.gmsPhyB[0],e.logo=h(e.logo),e));s=s.filter(e=>e.status),s.sort((e,l)=>e.sort-l.sort),console.log(s);const n=document.querySelector("#sport-list");let r="";s.forEach(e=>{r+=`
      <div class="box-item ${A(e.type)}">
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
              ${$(e)}
            </div>
          </div>
          <div class="item-bot">
            <a  href="javascript:;" class="register bot-btn ${e.type==="2"?"black":""}">立即注册</a>
            <a href="javascript:;" class="download bot-btn ${e.type==="2"?"black":""}">APP下载</a>
          </div>
        </div>
      `}),n&&(n.innerHTML=r);const i=o.data.data.records[0];let g=document.querySelector(".head-img-box img");g.src=h(i.imgphone);let f=document.querySelector(".head-title .head-right");f.style.display="flex",g.onclick=u,f.onclick=u;let b=document.querySelector("#bottom-title1"),v=document.querySelector("#bottom-title2"),w=document.querySelector("#bottom-btn1"),S=document.querySelector("#bottom-btn2");i.otherTitle&&(document.querySelector("#item-one").style.display="flex",b.innerHTML=i.otherTitle.replace(/(\d+%*)/g,'<span  style="color:#FF0000">$&</span>'),w.onclick=function(){window.location.href=d(i.otherBtn)}),i.otherContent&&(document.querySelector("#item-two").style.display="flex",v.innerHTML=i.otherContent.replace(/(\d+%*)/g,'<span  style="color:#C03BFF">$&</span>'),S.onclick=function(){window.location.href=d(i.otherBtnLink)}),document.querySelectorAll(".box-item .register").forEach((e,l)=>{e.onclick=function(){const c=s[l];m("register",c),window.location.href=d(c.bbannerBtn)}}),document.querySelectorAll(".box-item .download").forEach((e,l)=>{e.onclick=function(){const c=s[l];m("download",c),window.location.href=d(I(c))}})}}catch(o){console.log(o)}P()}L();m("init");function m(t,o){const a={action_type:t};o&&(a.id=o.bbannerId),console.log(a)}function q(){const t=y();t.style.visibility="visible"}function P(){const t=y();t.style.visibility="hidden"}function y(){return document.querySelector(".loading-wrapper")}function h(t){return p+"/assets/"+t}function A(t){switch(Number(t)){case 1:return"b-sport";case 2:return"ml-sport";case 3:return"bb-sport";case 4:return"k-sport";default:return"b-sport"}}function $(t){return t.type!=="1"?`<div class="main-mes">流水+包赔&nbsp;<text>累计可拿${t.otherHandsel}元</text></div>`:`<div class="main-mes" style="font-size:13rem">每周<text>任领${t.otherHandsel}元</text></div>`}function d(t){return t?(t.includes("http")||(t="https://"+t),t):""}function B(){return navigator.userAgent.match(/Android/i)?"Android":navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/iPod/i)?"IOS":navigator.userAgent.match(/Windows Phone/i)?"Windows Phone":"other"}function I({bbannerBtnLink:t,bbannerBtn2Link:o}){return B()==="IOS"?t:o}
