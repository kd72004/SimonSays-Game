let gameSeq=[];
let userSeq=[];

let started=false;
let level=0;
let buttons=['red','green','yellow','blue'];
let h2=document.querySelector(".heading-2");
let body=document.querySelector('body');

// key pressed 
// random button will flash and level will be updated
document.addEventListener('keypress', function(){
    if(started==false){
        console.log("Game started");
        started=true;
        levelUp();
    }
});

function btnFlash(btn) {
    btn.classList.add('flash');
    setTimeout(function(){
        btn.classList.remove('flash');
    },350);
}
function checkAnswer(index){
    if(userSeq[index]==gameSeq[index]){
        // middle 
        // last 
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,200);
        }
    }
    else{
        body.classList.add('alert');
        setTimeout(() => {
            body.classList.remove('alert');
        }, 100);
        h2.innerHTML=`Game Over! Your Score was <b>${level}</b><br>
        Press any key to restart`;
        reSet();
    }
}

function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level : ${level}`;
    let random=Math.floor(Math.random() * 4);
    let button=buttons[random];
    let randomButton=document.querySelector(`.${button}`);
    gameSeq.push(button);
    btnFlash(randomButton);
}

function btnPress(){
    // which button you have pressed 
    let btn=this;
    let userColor=btn.getAttribute('id');
    userSeq.push(userColor);
    btnFlash(btn);
    checkAnswer(userSeq.length-1);
}

let allButtons = document.querySelectorAll('.btn');
for(btn of allButtons){
    btn.addEventListener('click',btnPress);
}


function reSet(){
    started = false;
    gameSeq=[];
    userSeq=[];
    level=0;
}




