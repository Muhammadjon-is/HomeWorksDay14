//  ! I will watch lecture again and try to fix that 

const createNumberCells = function () {
  for (let i = 1; i < 77; i++) {
    let numbersBox = document.getElementById("numbers-box");
    let numberRand = document.createElement("div");
    let h4 = document.createElement("h3");
    numberRand.classList.add("number-random");
    numbersBox.appendChild(numberRand);
    numberRand.appendChild(h4);
    h4.appendChild(document.createTextNode(i));
  }
};

const generateNumber()  {
 let number = Math.floor(Math.random() * 76) + 1 ;
  let  numberOnDisplay  = document.createElemeent('span');
  
}

window.onload = function () {
  createNumberCells();

};
