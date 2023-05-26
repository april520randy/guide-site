import "./assets/styles/index.scss";
import "./assets/js/rem.js";
let BASE_URL = import.meta.env.VITE_API_URL;

// 获取列表
function fetchList() {
  let url = `${BASE_URL}/money-pos/bphyh/page?page=1&size=10&sort=string&status=0`;
  return fetch(url).then((res) => res.json());
}

// 页面初始化
async function initData() {
  showLoading();
  try {
    const res = await fetchList();
    if (res.code === 200) {
      let list = res.data.records;
      let newList = list.map((item) => {
        item = item.gmsPhyB[0];
        item.logo = getImageUrl(item.logo);
        return item;
      });
      console.log(newList);
      const listDom = document.querySelector("#sport-list");
      let html = "";
      newList.forEach((item) => {
        html += `
      <div class="box-item ${getTypeClassName(item.type)}">
          <div class="item-h">
            <div><img class="" src="${item.logo}" alt=""
                style="width:64rem;height:62rem;margin-right: 13rem;"></div>
            <div class="item-h-right">
              <div class="item-name">
                <div class="guan-name">官方</div>
                <div class="main-title">${item.bbannerTitle}</div>
                <div class="main-star">
                  <text>强烈推荐：</text>
                  <img src="./assets/img/Star 5@2x.png" alt="" style="width: 16rem; height: 16rem;">
                  <img src="./assets/img/Star 5@2x.png" alt="" style="width: 16rem; height: 16rem;">
                  <img src="./assets/img/Star 5@2x.png" alt="" style="width: 16rem; height: 16rem;">
                  <img src="./assets/img/Star 5@2x.png" alt="" style="width: 16rem; height: 16rem;">
                  <img src="./assets/img/Star 5@2x.png" alt="" style="width: 16rem; height: 16rem;">
                </div>
              </div>
              <div class="main-gif">新人注册即&nbsp;<text>送${
                item.registerHandsel
              }元</text></div>
              <div class="main-mes">流水+包赔&nbsp;<text>累计可拿${
                item.otherHandsel
              }元</text></div>
            </div>
          </div>
          <div class="item-bot">
            <a href="${prefixUrl(item.bbannerBtnLink)}" class="bot-btn">${
          item.bbannerBtn
        }</a>
            <a href="${prefixUrl(item.bbannerBtn2Link)}" class="bot-btn">${
          item.bbannerBtn2
        }</a>
          </div>
        </div>
      `;
      });
      if (listDom) {
        listDom.innerHTML = html;
      }

      // 处理banner
      const commonData = res.data.records[0];
      let banner = document.querySelector(".head-img-box img");
      banner.src = getImageUrl(commonData.imgphone);
      // 处理banner 跳转
      let btnLink = document.querySelector(".head-title .head-right");
      btnLink.style.display = "flex";
      btnLink.onclick = function () {
        window.location.href = prefixUrl(commonData.bannerTopLink);
      };

      // 底部标题设置
      let bottomTitle1 = document.querySelector("#bottom-title1");
      let bottomTitle2 = document.querySelector("#bottom-title2");
      let bottomBtn1 = document.querySelector("#bottom-btn1");
      let bottomBtn2 = document.querySelector("#bottom-btn2");
      // 标题1
      if (commonData.otherTitle) {
        document.querySelector("#item-one").style.display = "flex";
        bottomTitle1.innerHTML = commonData.otherTitle.replace(
          /(\d+%*)/g,
          '<span  style="color:#FF0000">$&</span>'
        );
        bottomBtn1.onclick = function () {
          window.location.href = prefixUrl(commonData.otherBtn);
        };
      }
      // 标题2
      if (commonData.otherContent) {
        document.querySelector("#item-two").style.display = "flex";
        bottomTitle2.innerHTML = commonData.otherContent.replace(
          /(\d+%*)/g,
          '<span  style="color:#C03BFF">$&</span>'
        );
        bottomBtn2.onclick = function () {
          window.location.href = prefixUrl(commonData.otherBtnLink);
        };
      }
    }
  } catch (err) {
    // console.log(err);
  }
  hideLoading();
}

initData();

function showLoading() {
  const loadingDom = getLoadingDom();
  loadingDom.style.visibility = "visible";
}

function hideLoading() {
  const loadingDom = getLoadingDom();
  loadingDom.style.visibility = "hidden";
}

function getLoadingDom() {
  return document.querySelector(".loading-wrapper");
}

function getImageUrl(src) {
  return BASE_URL + "/money-pos/assets/" + src;
}
function getTypeClassName(type) {
  switch (Number(type)) {
    case 1:
      return "b-sport";
    case 2:
      return "ml-sport";
    case 3:
      return "bb-sport";
    case 4:
      return "k-sport";
    default:
      return "b-sport";
  }
}

function prefixUrl(url) {
  if (!url.includes("http")) {
    url = "https://" + url;
  }
  return;
}
