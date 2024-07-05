let ques = document.getElementById("ques");
let optionA = document.getElementById("optionA");
let optionB = document.getElementById("optionB");
let optionC = document.getElementById("optionC");
let start = document.getElementById("start");
let counter = document.getElementById("counter");
let score = document.getElementById("score");
let s = 0;

let conf;
let num = 2;
score.style.display="none";

function begin() {

    question1();
    score.style.display="flex";
}

function question1() {

    start.style.display = "none";
    ques.textContent = "Who built Taj Mahal?";
    optionA.value = "Babur";
    optionB.value = "Shahjhaan";
    optionC.value = "Salim";

    optionA.style.display = "inline-block";
    optionB.style.display = "inline-block";
    optionC.style.display = "inline-block";

}

function question2() {

    start.style.display = "none";
    ques.textContent = "Taj Mahal is made of which stone?";
    optionA.value = "Limestone";
    optionB.value = "RedStone";
    optionC.value = "White Marble";

    optionA.style.display = "inline-block";
    optionB.style.display = "inline-block";
    optionC.style.display = "inline-block";

}

function question3() {

    start.style.display = "none";
    ques.textContent = "Taj Mahal is located in which state?";
    optionA.value = "UttarPradesh";
    optionB.value = "Delhi";
    optionC.value = "Rajasthan";

    optionA.style.display = "inline-block";
    optionB.style.display = "inline-block";
    optionC.style.display = "inline-block";

}

function question4() {

    start.style.display = "none";
    ques.textContent = "Taj Mahal was built in ______.";
    optionA.value = "18th century";
    optionB.value = "17th century";
    optionC.value = "19th century";

    optionA.style.display = "inline-block";
    optionB.style.display = "inline-block";
    optionC.style.display = "inline-block";

}

function question5() {

    start.style.display = "none";
    ques.textContent = "Taj Mahal is located the bank of which river?";
    optionA.value = "Ganga";
    optionB.value = "Yamuna";
    optionC.value = "Saraswati";

    optionA.style.display = "inline-block";
    optionB.style.display = "inline-block";
    optionC.style.display = "inline-block";

}

function opt(ele) {

    console.log(ele);
    switch (ele) {

        case 'Shahjhaan': optionB.style.backgroundColor = " rgb(20, 255, 20)";
            optionB.style.color = "black";
            s++;
            break;

        case 'Babur': optionA.style.backgroundColor = " rgb(255, 2, 2)"
            optionA.style.color = "black";
            break;

        case 'Salim': optionC.style.backgroundColor = " rgb(255, 2, 2)"
            optionC.style.color = "black";
            break;

        case 'White Marble': optionC.style.backgroundColor = " rgb(20, 255, 20)";
            s++;
            optionC.style.color = "black";
            break;

        case 'Limestone': optionA.style.backgroundColor = " rgb(255, 2, 2)"
            optionA.style.color = "black";
            break;

        case 'RedStone': optionB.style.backgroundColor = " rgb(255, 2, 2)"
            optionB.style.color = "black";
            break;

        case 'Rajasthan': optionC.style.backgroundColor = " rgb(255, 2, 2)";
            optionC.style.color = "black";
            break;

        case 'UttarPradesh': optionA.style.backgroundColor = "rgb(20, 255, 20)";
            s++;
            optionA.style.color = "black";
            break;

        case 'Delhi': optionB.style.backgroundColor = " rgb(255, 2, 2)"
            optionB.style.color = "black";
            break;

        case '19th century': optionC.style.backgroundColor = " rgb(255, 2, 2)";
            optionC.style.color = "black";
            break;

        case '18th century': optionA.style.backgroundColor = "rgb(255, 2, 2)";
            optionA.style.color = "black";
            break;

        case '17th century': optionB.style.backgroundColor = "rgb(20, 255, 20)";
            s++;
            optionB.style.color = "black";
            break;

        case 'Sarawati': optionC.style.backgroundColor = " rgb(255, 2, 2)";
            optionC.style.color = "black";
            break;

        case 'Ganga': optionA.style.backgroundColor = "rgb(255, 2, 2)";
            optionA.style.color = "black";
            break;

        case 'Yamuna': optionB.style.backgroundColor = "rgb(20, 255, 20)";
            s++;
            optionB.style.color = "black";
            break;


    }

    optionB.disabled = true;
    optionA.disabled = true;
    optionC.disabled = true;



    score.textContent = s;

    setTimeout(() => { clean(); }, 1500);
    conf = true;
    console.log(conf);
    if (conf) {

        switch (num) {
            case 2: setTimeout(() => { question2(); }, 1500);
                break;
            case 3: setTimeout(() => { question3(); }, 1500);
                break;
            case 4: setTimeout(() => { question4(); }, 1500);
                break;
            case 5: setTimeout(() => { question5(); }, 1500);
                break;
            default: score.textContent = `Your final score is ${s}`;
                optionA.style.display = "none";
                optionB.style.display = "none";
                optionC.style.display = "none";
                ques.textContent = "";
                setTimeout(()=>{
                    window.location.replace("http://127.0.0.1:5500/quiz/quiz.html");
                },1500);


        }
        conf = false;
        num++;

    }
    console.log(num);

    return ele;

}

function clean() {
    // optionA.style.display="none";
    // optionB.style.display="none";
    // optionC.style.display="none";
    optionC.style.backgroundColor = " rgb(189, 227, 249)";
    optionA.style.backgroundColor = " rgb(189, 227, 249)";
    optionB.style.backgroundColor = " rgb(189, 227, 249)";


    optionC.disabled = false;
    optionA.disabled = false;
    optionB.disabled = false;

    console.log("this clean is called");
}