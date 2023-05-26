import "./assets/styles/index.scss";
import "./assets/js/rem.js";
let BASE_URL = "http://192.168.3.156:9101";
const box = document.querySelector(".box");
if (box) {
  box.addEventListener("touchstart", createUser);
}
// 获取列表
function fetchList() {
  let url =
    "http://192.168.3.156:9101/money-pos/bphyh/page?page=1&size=10&sort=string&status=0";
  // url = "https://jsonplaceholder.typicode.com/users"
  return fetch(url).then((res) => res.json());
}
function getImageUrl(src) {
  return BASE_URL + "/money-pos/assets/" + src;
}

// 页面初始化
async function initData() {
  showLoading();
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
      <div class="box-item">
          <div class="item-h">
            <div><img class="" src="${item.logo}" alt=""
                style="width:64rem;height:62rem;margin-right: 13rem;"></div>
            <div class="item-h-right">
              <div class="item-name">
                <div class="guan-name" style="background-color:#CA0101;color: #FFFFFF;">官方</div>
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
              <div class="main-gif">新人注册即&nbsp;<text>送${item.registerHandsel}元</text></div>
              <div class="main-mes">流水+包赔&nbsp;<text>累计可拿${item.otherHandsel}元</text></div>
            </div>
          </div>
          <div class="item-bot">
            <a href="${item.bbannerBtnLink}" class="bot-btn b-bgcolor">${item.bbannerBtn}</a>
            <a href="${item.bbannerBtn2Link}" class="bot-btn b-bgcolor">${item.bbannerBtn2}</a>
          </div>
        </div>
      `;
    });
    if (listDom) {
      listDom.innerHTML = html;
    }

    // 处理banner
    const commonData = res.data.records[0]
    let banner = document.querySelector(".head-img-box img");
    banner.src = getImageUrl(commonData.imgphone);
    // 处理banner 跳转
    let btnLink = document.querySelector(".head-title .head-right");
    btnLink.onclick = function () {
      window.location.href = commonData.bannerTopLink;
    };

    // 底部标题设置
    let bottomTitle1 = document.querySelector('#bottom-title1')
    let bottomTitle2 = document.querySelector('#bottom-title2')
    let bottomBtn1 = document.querySelector('#bottom-btn1')
    let bottomBtn2 = document.querySelector('#bottom-btn2')

    bottomTitle1.innerHTML = commonData.otherTitle
    bottomTitle2.innerHTML = commonData.otherContent
    bottomBtn1.onclick = function () {
      window.location.href = commonData.otherBtn;
    }
    bottomBtn2.onclick = function () {
      window.location.href = commonData.otherBtnLink;
    }



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
