const btn1 = document.querySelector(".btn");
const h1 = document.querySelector("h1");
const output = document.querySelector(".output");
const inputVal = document.querySelector(".val");
const baseURL = "https://api.stackexchange.com";

window.addEventListener("DOMContentLoaded", (e) => {
  console.log("DOM ready");
  pageLoad();
});

btn1.addEventListener("click", (e) => {
  console.log("Click ready");
});

function pageLoad() {
  const url =
    baseURL + "/2.3/questions?order=desc&sort=activity&site=stackoverflow";
  console.log(url);

  fetch(url)
    .then((rep) => rep.json())
    .then((data) => {
      outputItems(data.items);
    })
    .catch((err) => {
      console.log(err);
    });
}

function outputItems(data) {
  //   console.log(data);
  output.innerHTML = "";
  data.forEach((item) => {
    outputPage(item);
  });
}

function outputPage(data) {
  console.log(data);

  const main = makeNode(output, "div", "");
  main.classList.add("box");

  const ele = makeNode(main, "div", data.title);
  ele.classList.add("topTitle");
  ele.addEventListener("click", getById);
  ele.qid = data.question_id;

  const ansCount = makeNode(main, "div", `Answers ${data.answer_count}`);
  ansCount.classList.add("ans");

  data.tags.forEach((tag) => {
    const span = makeNode(main, "span", tag);
    span.classList.add("tag");
  });
  console.log(ele);
}

function makeNode(parent, typeEle, html) {
  const element = document.createElement(typeEle);
  element.innerHTML = html;
  return parent.appendChild(element);
}

function getById(e) {
  const el = e.target;
  console.log(el.qid);

  // /2.3/questions/75199800?order=desc&sort=activity&site=stackoverflow
}
