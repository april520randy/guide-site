import "./assets/styles/index.scss";
import "./assets/js/rem.js";
const box = document.querySelector(".box");
if (box) {
  box.addEventListener("touchstart", createUser);
}
// 创建用户
function createUser() {
  showLoading();
  fetch("https://reqres.in/api/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: "morpheus",
      job: "leader",
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      hideLoading();
      // 处理响应数据
      console.log(data);
    })
    .catch((error) => {
      hideLoading();
      // 处理请求错误
      console.error(error);
    });
}
// 获取列表
function fetchList() {
  return fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
    res.json()
  );
}

// 页面初始化
async function initData() {
  showLoading();
  const list = await fetchList();
  hideLoading();
  console.log(list);
  const listDom = document.querySelector(".list");
  let html = "";
  list.forEach((item) => {
    html += `<li>${item.name}</li>`;
  });
  if (listDom) {
    listDom.innerHTML = html;
  }
}

initData();

function showLoading() {
  const loadingDom = getLoadingDom()
  loadingDom.style.visibility = "visible";
}

function hideLoading() {
  const loadingDom = getLoadingDom()
  loadingDom.style.visibility = "hidden";
}

function getLoadingDom(){
  return document.querySelector(".loading-wrapper")
}
