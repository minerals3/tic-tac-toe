let but = document.querySelectorAll(".button");
let reset = document.querySelector(".reset");

let turn0 = true;

let win_pat = [
    [0,1,2], [3,4,5], [6,7,8],
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [6,4,2]];

but.forEach((el) => {
    el.addEventListener("click", () => {
        if(turn0){
            el.innerText = "O";
            turn0 = false;
        } else {
            el.innerText = "X";
            turn0 = true;
        }
        el.disabled = true;

        checkWinner();
    });
});

const checkWinner = () => {
    for(let pattern of win_pat){
        let pos0Val = but[pattern[0]].innerText;
        let pos1Val = but[pattern[1]].innerText;
        let pos2Val = but[pattern[2]].innerText;

        if(pos0Val !== ""  && pos1Val !== "" && pos2Val !== ""){
        if(pos0Val == pos1Val && pos1Val == pos2Val){
            console.log("Winner");
            }
        }
    }

    
};

const reset_game = () => {
    turn0 = true;

    but.forEach ((el) => {
            but.innerText = "";
            but.disabled = false;
        });       
}

reset.addEventListener("click", reset_game);

