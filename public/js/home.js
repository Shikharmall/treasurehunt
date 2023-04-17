

function myfunc(){
    document.getElementById("subbox3").classList.toggle("show");
}

function myfucnstartgame(){
    document.getElementById("startgame").style.display = "none";
    localStorage.setItem("ansdb1", "shikhar1");
    localStorage.setItem("ansdb2", "shikhar2");
    localStorage.setItem("ansdb3", "shikhar3");
    localStorage.setItem("ansdb4", "shikhar4");
    localStorage.setItem("ansdb5", "shikhar5");
    localStorage.setItem("ansdb6", "shikhar6");

    localStorage.setItem("abc1", "0");
    localStorage.setItem("abc2", "0");
    localStorage.setItem("abc3", "0");
    localStorage.setItem("abc4", "0");
    localStorage.setItem("abc5", "0");
    localStorage.setItem("abc6", "0");
}

function myfucnendgame(){
    localStorage.clear();
    window.location.reload();
}

function over(){
    localStorage.clear();
    window.location.reload();
}

function myfunc1(){
    document.getElementById("question1").style.display = "block";
    document.getElementById("hquestion1").style.display = "none";
    document.getElementById("subboxx1").style.backgroundColor = "white";
    document.getElementById("subboxx1").style.borderColor = "#00b9f5";
}

function myfunc2(){
    document.getElementById("question2").style.display = "block";
    document.getElementById("hquestion2").style.display = "none";
    document.getElementById("subboxx2").style.backgroundColor = "white";
    document.getElementById("subboxx2").style.borderColor = "#00b9f5";
}

function myfunc3(){
    document.getElementById("question3").style.display = "block";
    document.getElementById("hquestion3").style.display = "none";
    document.getElementById("subboxx3").style.backgroundColor = "white";
    document.getElementById("subboxx3").style.borderColor = "#00b9f5";
}

function myfunc4(){
    document.getElementById("question4").style.display = "block";
    document.getElementById("hquestion4").style.display = "none";
    document.getElementById("subboxx4").style.backgroundColor = "white";
    document.getElementById("subboxx4").style.borderColor = "#00b9f5";
}

function myfunc5(){
    document.getElementById("question5").style.display = "block";
    document.getElementById("hquestion5").style.display = "none";
    document.getElementById("subboxx5").style.backgroundColor = "white";
    document.getElementById("subboxx5").style.borderColor = "#00b9f5";
}

function myfunc6(){
    document.getElementById("question6").style.display = "block";
    document.getElementById("hquestion6").style.display = "none";
    document.getElementById("subboxx6").style.backgroundColor = "white";
    document.getElementById("subboxx6").style.borderColor = "#00b9f5";
}

function openimg(a){
    let text1img = "opencart";
    let resultimg = text1img.concat(a);
    document.getElementById(resultimg).style.display="block";
}

function closeimg(a){
    let text1img = "opencart";
    let resultimg = text1img.concat(a);
    document.getElementById(resultimg).style.display="none";
}

function checkans(a){

    let text1 = "ans";
    let result = text1.concat(a);
    var answer = document.getElementById(result).value;
    var answer = answer.toLowerCase();

    
    let text2 = "ansdb";
    let result2 = text2.concat(a);
    let answerdb = localStorage.getItem(result2);

    let text3 = "desc";
    let result3 = text3.concat(a);

    let text4 = "abc";
    let result4 = text4.concat(a);
    let count = localStorage.getItem(result4);

    if(answer == answerdb){
        if(Number(count) < 2){
            document.getElementById(result3).innerHTML = "Correct &#10004;";
            document.getElementById(result3).style.color="#00ff00";
            let score = localStorage.getItem("totalscore");
            value = 100+Number(score);
            document.getElementById("score").innerHTML = value;
            document.getElementById("hidscore").value = value;
            localStorage.setItem("totalscore", value);
        }
    }
    else{
        if(Number(count) < 1){
            document.getElementById(result3).innerHTML = "Incorrect &#10006; , Try once more.";
            document.getElementById(result).value = "";
            document.getElementById(result3).style.color="#ff1a1a";
        }
        else{
            document.getElementById(result3).innerHTML = "Answer: " + answerdb;
            document.getElementById(result3).style.color="#00ff00";
        }  
    }

    count++;
    localStorage.setItem(result4 , count);
    
}

/*  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {

      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
}*/