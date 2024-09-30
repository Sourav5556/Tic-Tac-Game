let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#button");
let newGamebtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turn0 = true;
const WinPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [6, 7, 8],
];
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turn0) {
      box.innerText = "O";
      turn0 = false;
    } else {
      box.innerText = "X";
      turn0 = true;
    }
    box.disabled = true;
    checkwinner();
  });
});
const checkwinner = () => {
  for (let pattern of WinPatterns) {
    let pos1val = boxes[pattern[0]].innerText;
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;
    if (pos1val != "" && pos2val != "" && pos3val != "") {
      if ([pos1val === pos2val && pos2val === pos3val]) {
        console.log("winner", pos1val);
        showwinner(pos1val);
      }
    }
  }
};
const showwinner = (winner) => {
  msg.innerText = `Congratulation Winner🎉🎉🎉 is ${winner}`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};
const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};
const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};
const resetGame = () => {
  turn0 = true;
  enableBoxes();
  msgContainer.classList.add("hide");
};
newGamebtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);