const setOfWords = ["unit important light corporate cash OS Javascript us", "big vice national half important OS user Python charge", "some just start First way different JS this Swift watch", "add really day Open school call Java hardware question"];  //questions in array

const typeWords = document.querySelector('#textArea');
const btn = document.querySelector('#btn');
const msg = document.querySelector('#question');
const disabled = document.querySelector('.disabled');

let startTime, endtTime;
var randomNumber = Math.floor(Math.random() * setOfWords.length);
var quest = setOfWords[randomNumber];

// starting of Test
const playgame = () => {
    msg.innerText = `Q. ${quest}`;
    let date = new Date();
    startTime = date.getTime();
    btn.innerHTML = "Done";
}


// ending of test
const endplay = () => {
    let date = new Date();
    endTime = date.getTime();
    let totalTime = ((endTime - startTime) / 1000);  

    let totalStr = typeWords.value;
    let wordCount = wordCounter(totalStr);

    let speed = Math.round((wordCount / totalTime) * 60);
    let finalMsg = `You typed total at ${speed} words per minutes `;
    finalMsg += compareWords(quest, totalStr);
    typeWords.value = finalMsg;
}

// comparing of Question and Answers
const compareWords = (str1, str2) => {
    let words1 = str1.split(" ");
    let words2 = str2.split(" ");
    let cnt = 0;
    words1.forEach((item, index) => {
        if(item == words2[index]){
            cnt ++;
        }
    });

    let errorWords = (words1.length - cnt);
    return `${cnt} correct out of ${words1.length} words and the total number of error are ${errorWords}.`
}

const wordCounter = (str) => {
    let response = str.split(" ").length;
    return response;
}


// EventListener(Button)
btn.addEventListener('click', function() {
    if(this.innerText == "Start"){
        disabled.style.pointerEvents = "all";
        playgame();
    }
    else if(this.innerText == "Done"){
        btn.innerHTML = "Finish";
        disabled.style.pointerEvents = "none";
        endplay();
    }
})