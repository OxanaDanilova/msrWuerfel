const displaySelectedCard = (num) => {
  const arrCards = document.querySelectorAll(".active");
  arrCards.forEach((el, index) => {
    if (index === num) {
      el.classList.remove("active");
      el.classList.add("selected");
    }
  });
};

const makeInactive = () => {
  const selectedCard = document.querySelector(".selected");
  if (selectedCard) {
    selectedCard.classList.remove("selected");
    selectedCard.classList.add("inactive");
  }
};

const disableChooseBtn = ()=> {
    const chooseBtn = document.querySelector('.choose');
    chooseBtn.disabled = true;    
}

const enableChooseBtn = ()=> {
    const chooseBtn = document.querySelector('.choose');
    chooseBtn.disabled = false;
}

const cutArr = (arr, num) => {
  arr.splice(num, 1);
  console.log("result arr", arr);
};

const randomFunc = (arr) => {
  console.log("length", arr.length);
  console.log("random func arr", arr);
  makeInactive();
  if (arr.length) {
    let randomNumb = Math.floor(Math.random() * arr.length);

    console.log("random Number", randomNumb);
    console.log("random user", arr[randomNumb]);

    cutArr(arr, randomNumb);
    displaySelectedCard(randomNumb);
  } else {
    disableChooseBtn();
    console.log("Finish!");
  }
};

const renderArr = (arr) => {
  const main = document.querySelector("main");
  main.innerHTML = '';
  const ul = document.createElement("ul");
  arr.forEach((el) => {
    const li = document.createElement("li");
    li.innerHTML = el;
    li.classList.add("active");
    ul.appendChild(li);
  });
  main.appendChild(ul);  
};

const arrCreate = () => {
  const arr = ["vera", "alex", "petr", "gregor", "anna"];
  renderArr(arr);
  const chooseBtn = document.querySelector(".choose");
  chooseBtn.addEventListener("click", () => randomFunc(arr));
  enableChooseBtn();
  // randomFunc(arr);
};

const app = () => {
  const startBtn = document.querySelector(".start");
  startBtn.addEventListener("click", arrCreate);  
};

app();
