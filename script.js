let but = document.querySelectorAll(".button");
let reset = document.querySelector(".reset");
let newgame = document.querySelector(".newgame");
let msgcontainer = document.querySelector(".msgcontainer");
let msg = document.querySelector("#msg");
let xscore = document.querySelector("#x-score");
let oscore = document.querySelector("#o-score");
let draw = document.querySelector(".drawmsg");
let start_menu = document.querySelector(".start-menu")
let start_but = document.querySelector("#start-button");
let main_game = document.querySelector(".main-game");
let turn = document.querySelector(".turn");
let next = document.querySelector(".next");

let count = 0;
let score0 = 0;
let scoreX = 0;
let turn0 = true;

let win_pat = [
    [0,1,2], [3,4,5], [6,7,8],
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [6,4,2]];

start_but.addEventListener("click", () => {
    start_but.classList.add("popclass");

    setTimeout(() => {
        start_menu.classList.add("hide");
        main_game.classList.remove("hide");

        
        start_but.classList.remove("popclass");
    }, 600); 
});

but.forEach((el) => {
    el.addEventListener("click", () => {
        if(turn0){
            turn.innerText = "Player X's turn";
            el.innerText = "O";
            turn0 = false;
        } else {
            turn.innerText = "Player O's turn";
            el.innerText = "X";
            turn0 = true;
        }
        el.disabled = true;

        count++;
        
        let isWinner = checkWinner();

        console.log(count, isWinner);

        if(count === 9 && !isWinner){
            console.log("draw");
            draw.classList.remove("hide");
        }
    });
});

const checkWinner = () => {
    for(let pattern of win_pat){
        let pos0Val = but[pattern[0]].innerText;
        let pos1Val = but[pattern[1]].innerText;
        let pos2Val = but[pattern[2]].innerText;

        if(pos0Val !== ""  && pos1Val !== "" && pos2Val !== ""){
        if(pos0Val == pos1Val && pos1Val == pos2Val){
            console.log("Winner", pos0Val);
            showWinner(pos0Val);

            turn.classList.add("hide");
            return true;
            }
        }
    }

    return false;
};

const disable = () => {
    for(let box of but){
        box.disabled = true;
    }
};

const enable = () => {
    for(let box of but){
        box.disabled = false;
    }
};

const showWinner = (winner) => {
    msg.innerText = `Winner : ${winner}`;
    msgcontainer.classList.remove("hide");
    disable();
    if(winner === "X"){
        scoreX++;
        xscore.innerText = scoreX;
    } else {
        score0++;
        oscore.innerText = score0;
    }
};

const reset_game = () => {
    turn0 = true;
    count = 0;
    msgcontainer.classList.add("hide");
    draw.classList.add("hide");
    enable();

    but.forEach ((el) => {
        el.innerText = "";
        el.disabled = false;
    });       
};

reset.addEventListener("click", reset_game);

const new_game = () => {
     reset_game();

    score0 = 0;
    scoreX = 0;

    document.querySelector("#x-score").innerText = scoreX;
    document.querySelector("#o-score").innerText = score0;
};

newgame.addEventListener("click", new_game);


const next_round = () => {
     reset_game();

    document.querySelector("#x-score").innerText = scoreX;
    document.querySelector("#o-score").innerText = score0;
};

next.addEventListener("click", next_round);


