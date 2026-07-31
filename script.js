let but = document.querySelectorAll(".button");
let reset = document.querySelector("reset");

let turn0 = true;

let win_pat = [[0,1,2], [3,4,5], [6,7,8],
               [0,3,6], [1,4,7], [2,5,8],
               [0,4,8], [6,4,2]];
