//   !  on this homework you can take  random number and result will be same 
 
let numbers = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
  "21",
  "22",
  "23",
  "24",
  "25",
  "26",
  "27",
  "28",
  "29",
  "30",
  "31",
  "32",
  "33",
  "34",
  "35",
  "36",
  "37",
  "38",
  "39",
];
let display = [];

function getRandomNum() {
  function rando() {
    for (var i = 0; i < numbers.length; i++) {
      const j = Math.floor(Math.random() * numbers.length);
      const number = numbers[j];

      if (number) {
        numbers.splice(j, 1);
      }
      if (numbers.length < 0) {
        return;
      } else {
        return number;
      }
    }
  }

  let index;
  if (numbers.length === 0) {
    index = "No more numbers";
  } else {
    index = rando();
    display.push(index);
  }
  document.getElementById("bingo").innerHTML = index;
}

function show() {
  for (let n = 0; n < display.length; n++) {
    document.getElementById("reveal").innerHTML +=
      "<br/>" + display[n] + "<br/>";
  }
}
