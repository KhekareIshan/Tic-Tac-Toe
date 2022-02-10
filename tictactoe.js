var toplay = "X"
var scoreo = "0"
var scorex = "0"
var scorecpu = "0"
var turn = 1
var players = "2"
var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");
var button4 = document.getElementById("button4");
var button5 = document.getElementById("button5");
var button6 = document.getElementById("button6");
var button7 = document.getElementById("button7");
var button8 = document.getElementById("button8");
var button9 = document.getElementById("button9");
var m = document.getElementById("message");
var option = ""

function play(id) {
    var button1 = document.getElementById("button1");
    var button2 = document.getElementById("button2");
    var button3 = document.getElementById("button3");
    var button4 = document.getElementById("button4");
    var button5 = document.getElementById("button5");
    var button6 = document.getElementById("button6");
    var button7 = document.getElementById("button7");
    var button8 = document.getElementById("button8");
    var button9 = document.getElementById("button9");
    var m = document.getElementById("message");
    var m2 = document.getElementById("message2");
        if (toplay == "X") {
            if (id == "1" && button1.innerHTML === "") {
            button1.innerHTML = "X"
            button1.style.backgroundColor = "#50ff4060" 
            toplay = "O"  
            } else   if (id == "2" && button2.innerHTML === "") {
               button2.innerHTML = "X"
               button2.style.backgroundColor = "#50ff4060" 
               toplay = "O"  
                } else   if (id == "3" && button3.innerHTML === "") {
                    button3.innerHTML = "X"
                    button3.style.backgroundColor = "#50ff4060" 
                    toplay = "O"  
                    } else   if (id == "4" && button4.innerHTML === "") {
                        button4.innerHTML = "X"
                        button4.style.backgroundColor = "#50ff4060" 
                        toplay = "O"  
                        } else   if (id == "5" && button5.innerHTML === "") {
                            button5.innerHTML = "X"
                            button5.style.backgroundColor = "#50ff4060" 
                            toplay = "O"  
                            } else   if (id == "6" && button6.innerHTML === "") {
                                button6.innerHTML = "X"
                                button6.style.backgroundColor = "#50ff4060" 
                                toplay = "O"  
                                } else   if (id == "7" && button7.innerHTML === "") {
                                    button7.innerHTML = "X"
                                    button7.style.backgroundColor = "#50ff4060" 
                                    toplay = "O"  
                                    } else   if (id == "8" && button8.innerHTML === "") {
                                        button8.innerHTML = "X"
                                        button8.style.backgroundColor = "#50ff4060" 
                                        toplay = "O"  
                                        } else   if (id == "9" && button9.innerHTML === "") {
                                            button9.innerHTML = "X"
                                            button9.style.backgroundColor = "#50ff4060" 
                                            toplay = "O"  
                                            }                         
        } else if (toplay == "O"){
            if (id == "1" && button1.innerHTML === "") {
                button1.innerHTML = "O"
                button1.style.backgroundColor = "#ff000060" 
                toplay =  "X"   
                } else   if (id == "2" && button2.innerHTML === "") {
                   button2.innerHTML = "O"
                   button2.style.backgroundColor = "#ff000060" 
                   toplay =  "X"   
                    } else   if (id == "3" && button3.innerHTML === "") {
                        button3.innerHTML = "O"
                        button3.style.backgroundColor = "#ff000060" 
                        toplay =  "X"   
                        } else   if (id == "4" && button4.innerHTML === "") {
                            button4.innerHTML = "O"
                            button4.style.backgroundColor = "#ff000060" 
                            toplay =  "X"   
                            } else   if (id == "5" && button5.innerHTML === "") {
                                button5.innerHTML = "O"
                                button5.style.backgroundColor = "#ff000060" 
                                toplay =  "X"   
                                } else   if (id == "6" && button6.innerHTML === "") {
                                    button6.innerHTML = "O"
                                    button6.style.backgroundColor = "#ff000060" 
                                    toplay =  "X"   
                                    } else   if (id == "7" && button7.innerHTML === "") {
                                        button7.innerHTML = "O"
                                        button7.style.backgroundColor = "#ff000060" 
                                        toplay =  "X"   
                                        } else   if (id == "8" && button8.innerHTML === "") {
                                            button8.innerHTML = "O"
                                            button8.style.backgroundColor = "#ff000060" 
                                            toplay =  "X"   
                                            } else   if (id == "9" && button9.innerHTML === "") {
                                                button9.innerHTML = "O"
                                                button9.style.backgroundColor = "#ff000060" 
                                                toplay =  "X"   
                                                }                                
        }
        m.innerHTML = toplay
        m2.innerHTML = players
    }
function win() {
    var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");
var button4 = document.getElementById("button4");
var button5 = document.getElementById("button5");
var button6 = document.getElementById("button6");
var button7 = document.getElementById("button7");
var button8 = document.getElementById("button8");
var button9 = document.getElementById("button9");
var m = document.getElementById("message");
var m2 = document.getElementById("message2");
var m4 = document.getElementById("message4");
var m5 = document.getElementById("message5");
if (button1.innerHTML !== "" && button2.innerHTML !== "" && button3.innerHTML !== "" && button4.innerHTML !== "" && button5.innerHTML !== "" && button6.innerHTML !== "" && button7.innerHTML !== "" && button8.innerHTML !== "" && button9.innerHTML !== "") {
    m.innerHTML = "DRAW!"
    m2.innerHTML = ""
    m4.innerHTML = ""
    m5.innerHTML = ""
    toplay = "over"
}
if (button1.innerHTML == "X" && button4.innerHTML == "X" && button7.innerHTML == "X" ||button2.innerHTML == "X" && button5.innerHTML == "X" && button8.innerHTML == "X" || button3.innerHTML == "X" && button6.innerHTML == "X" && button9.innerHTML == "X") {
        m.innerHTML = "Player 1 WINS!"
        m2.innerHTML = ""
        m4.innerHTML = ""
        m5.innerHTML = ""
        toplay = "over"
        scorex++
    } else if (button1.innerHTML == "X" && button2.innerHTML == "X" && button3.innerHTML == "X" || button4.innerHTML == "X" && button5.innerHTML == "X" && button6.innerHTML == "X" || button7.innerHTML == "X" && button8.innerHTML == "X" && button9.innerHTML == "X") {
        m.innerHTML = "Player 1 WINS!"
        m2.innerHTML = ""
        m4.innerHTML = ""
        m5.innerHTML = ""
        toplay = "over"
        scorex++
    } else if (button1.innerHTML == "X" && button5.innerHTML == "X" && button9.innerHTML == "X" || button3.innerHTML == "X" && button5.innerHTML == "X" && button7.innerHTML == "X") {
        m.innerHTML = "Player 1 WINS!"
        m2.innerHTML = ""
        m4.innerHTML = ""
        m5.innerHTML = ""
        toplay = "over"
        scorex++
    }    
    if (players == "2") {
        if (button1.innerHTML == "O" && button4.innerHTML == "O" && button7.innerHTML == "O" ||button2.innerHTML == "O" && button5.innerHTML == "O" && button8.innerHTML == "O" || button3.innerHTML == "O" && button6.innerHTML == "O" && button9.innerHTML == "O") {
            m.innerHTML = "Player 2 WINS!"
            m2.innerHTML = ""
            m4.innerHTML = ""
            m5.innerHTML = ""
            toplay = "over"
            scoreo++
        } else if (button1.innerHTML == "O" && button2.innerHTML == "O" && button3.innerHTML == "O" || button4.innerHTML == "O" && button5.innerHTML == "O" && button6.innerHTML == "O" || button7.innerHTML == "O" && button8.innerHTML == "O" && button9.innerHTML == "O") {
            m.innerHTML = "Player 2 WINS!"
            m2.innerHTML = ""
            m4.innerHTML = ""
            m5.innerHTML = ""
            toplay = "over"
            scoreo++
        } else if (button1.innerHTML == "O" && button5.innerHTML == "O" && button9.innerHTML == "O" || button3.innerHTML == "O" && button5.innerHTML == "O" && button7.innerHTML == "O") {
            m.innerHTML = "Player 2 WINS!"
            m2.innerHTML = ""
            m4.innerHTML = ""
            m5.innerHTML = ""
            toplay = "over"
            scoreo++
        }
    } else if (players == "cpu") {
        if (button1.innerHTML == "O" && button4.innerHTML == "O" && button7.innerHTML == "O" ||button2.innerHTML == "O" && button5.innerHTML == "O" && button8.innerHTML == "O" || button3.innerHTML == "O" && button6.innerHTML == "O" && button9.innerHTML == "O") {
            m.innerHTML = "CPU WINS!"
            m2.innerHTML = ""
            m4.innerHTML = ""
            m5.innerHTML = ""
            toplay = "over"
            scorecpu++
        } else if (button1.innerHTML == "O" && button2.innerHTML == "O" && button3.innerHTML == "O" || button4.innerHTML == "O" && button5.innerHTML == "O" && button6.innerHTML == "O" || button7.innerHTML == "O" && button8.innerHTML == "O" && button9.innerHTML == "O") {
            m.innerHTML = "CPU WINS!"
            m2.innerHTML = ""
            m4.innerHTML = ""
            m5.innerHTML = ""
            toplay = "over"
            scorecpu++
        } else if (button1.innerHTML == "O" && button5.innerHTML == "O" && button9.innerHTML == "O" || button3.innerHTML == "O" && button5.innerHTML == "O" && button7.innerHTML == "O") {
            m.innerHTML = "CPU WINS!"
            m2.innerHTML = ""
            m4.innerHTML = ""
            m5.innerHTML = ""
            toplay = "over"
            scorecpu++
        }
    }   
    score();
}
function restart() {
var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");
var button4 = document.getElementById("button4");
var button5 = document.getElementById("button5");
var button6 = document.getElementById("button6");
var button7 = document.getElementById("button7");
var button8 = document.getElementById("button8");
var button9 = document.getElementById("button9");
var m = document.getElementById("message");
var m2 = document.getElementById("message2");
var m4 = document.getElementById("message4");
var m5 = document.getElementById("message5");
    button1.innerHTML = ""
    button2.innerHTML = ""
    button3.innerHTML = ""
    button4.innerHTML = ""
    button5.innerHTML = ""
    button6.innerHTML = ""
    button7.innerHTML = ""
    button8.innerHTML = ""
    button9.innerHTML = ""
    button1.style.backgroundColor = "#00000060" 
    button2.style.backgroundColor = "#00000060" 
    button3.style.backgroundColor = "#00000060" 
    button4.style.backgroundColor = "#00000060" 
    button5.style.backgroundColor = "#00000060" 
    button6.style.backgroundColor = "#00000060" 
    button7.style.backgroundColor = "#00000060" 
    button8.style.backgroundColor = "#00000060" 
    button9.style.backgroundColor = "#00000060" 
    score();
    if (players == "2") {
        if (turn % 2 == 1) {
            toplay = "X"
        } else {
            toplay = "O"
        }
        turn++
    } else {
        toplay = "X"
    }
    m.innerHTML = toplay
    m2.innerHTML = players
    m4.innerHTML = "Turn: "
    m5.innerHTML = " Players: "
}
function score() {
    var table = document.getElementById("scoretab");
    var x = document.getElementById("xtab");
    var o = document.getElementById("otab");
    var calc = document.getElementById("calc");
    var car = document.getElementById("car");
    var mark = document.getElementById("mark");
    var p2 = document.getElementById("2p");
    var cpu = document.getElementById("cpu");
    var heading = document.getElementById("heading")
    calc.style.visibility = "hidden"
    car.style.visibility = "hidden"
    mark.style.visibility = "hidden"
    p2.style.visibility = "hidden"
    cpu.style.visibility = "hidden"
    table.style.visibility = "visible"
    if (players == "2") {
        x.innerHTML = scorex
        o.innerHTML = scoreo
        heading.innerHTML = "Score: P2"
    } else {
        x.innerHTML = scorex
        o.innerHTML = scorecpu 
        heading.innerHTML = "Score: CPU"
    }
// alert(scorex + " " + scoreo + " " + scorecpu)
}
function more() {
    var table = document.getElementById("scoretab");
    var calc = document.getElementById("calc");
    var car = document.getElementById("car");
    var mark = document.getElementById("mark");
    var p2 = document.getElementById("2p");
    var cpu = document.getElementById("cpu");
    table.style.visibility = "hidden"
    p2.style.visibility = "hidden"
    cpu.style.visibility = "hidden"
    calc.style.visibility = "visible"
    car.style.visibility = "visible"
    mark.style.visibility = "visible"
}
function selectp() {
    var table = document.getElementById("scoretab");
    var p2 = document.getElementById("2p");
    var cpu = document.getElementById("cpu");
    var calc = document.getElementById("calc");
    var car = document.getElementById("car");
    var mark = document.getElementById("mark");
    calc.style.visibility = "hidden"
    car.style.visibility = "hidden"
    mark.style.visibility = "hidden"
    table.style.visibility = "hidden"
    p2.style.visibility = "visible"
    cpu.style.visibility = "visible"
}
function cpu(){
    var random = Math.floor(Math.random() * 9);
    var m = document.getElementById("message");
    var m2 = document.getElementById("message2");
    var answer = [1,2,3,4,5,6,7,8,9];
    if (toplay == "O") {
        option = answer[random]
        if (players == "cpu") {
            cpu2();
            m.innerHTML = "X";
        }
        console.log(option)
        // alert(option)
    }
}
function cpu2() {
var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");
var button4 = document.getElementById("button4");
var button5 = document.getElementById("button5");
var button6 = document.getElementById("button6");
var button7 = document.getElementById("button7");
var button8 = document.getElementById("button8");
var button9 = document.getElementById("button9");
    if (players == "cpu") {
        if (toplay == "O") {
                    //O to win
        if (button1.innerHTML == "O" && button2.innerHTML == "O" && button3.innerHTML == "") {
            button3.innerHTML = "O"
            button3.style.backgroundColor = "#ff000060" 
            toplay = "X"
            m = toplay
            m2 = players
            win();
        } else if (button1.innerHTML == "O" && button3.innerHTML == "O" && button2.innerHTML == "") {
            button2.innerHTML = "O"
            button2.style.backgroundColor = "#ff000060" 
            toplay = "X"
            m = toplay
            m2 = players
            win();
        } else if (button2.innerHTML == "O" && button3.innerHTML == "O" && button1.innerHTML == "") {
            button1.innerHTML = "O"
            button1.style.backgroundColor = "#ff000060" 
            toplay = "X"
            m = toplay
            m2 = players
            win();
        } else if (button4.innerHTML == "O" && button5.innerHTML == "O" && button6.innerHTML == "") {
            button6.innerHTML = "O"
            button6.style.backgroundColor = "#ff000060" 
            toplay = "X"
            m = toplay
            m2 = players
            win();
        } else if (button4.innerHTML == "O" && button6.innerHTML == "O" && button5.innerHTML == "") {
            button5.innerHTML = "O"
            button5.style.backgroundColor = "#ff000060" 
            toplay = "X"
            m = toplay
            m2 = players
            win();
        } else if (button5.innerHTML == "O" && button6.innerHTML == "O" && button4.innerHTML == "") {
            button4.innerHTML = "O"
            button4.style.backgroundColor = "#ff000060" 
            toplay = "X"
            m = toplay
            m2 = players
            win();
        } else if (button7.innerHTML == "O" && button8.innerHTML == "O" && button9.innerHTML == "") {
            button9.innerHTML = "O"
            button9.style.backgroundColor = "#ff000060" 
            toplay = "X"
            m = toplay
            m2 = players
            win();
        } else if (button7.innerHTML == "O" && button9.innerHTML == "O" && button8.innerHTML == "") {
            button8.innerHTML = "O"
            button8.style.backgroundColor = "#ff000060" 
            toplay = "X"
            m = toplay
            m2 = players
            win();
        } else if (button9.innerHTML == "O" && button8.innerHTML == "O" && button7.innerHTML == "") {
            button7.innerHTML = "O"
            button7.style.backgroundColor = "#ff000060" 
            toplay = "X"
            m = toplay
            m2 = players
            win();
        } else if (button4.innerHTML == "O" && button1.innerHTML == "O" && button7.innerHTML == "") {
            button7.innerHTML = "O"
            button7.style.backgroundColor = "#ff000060" 
            toplay = "X"
            m = toplay
            m2 = players
            win();
        } else if (button4.innerHTML == "O" && button7.innerHTML == "O" && button1.innerHTML == "") {
            button1.innerHTML = "O"
            button1.style.backgroundColor = "#ff000060" 
            toplay = "X"
            m = toplay
            m2 = players
            win();
        } else if (button1.innerHTML == "O" && button7.innerHTML == "O" && button4.innerHTML == "") {
            button4.innerHTML = "O"
            button4.style.backgroundColor = "#ff000060" 
            toplay = "X"
            m = toplay
            m2 = players
            win();
        } else if (button2.innerHTML == "O" && button5.innerHTML == "O" && button8.innerHTML == "") {
            button8.innerHTML = "O"
            button8.style.backgroundColor = "#ff000060" 
            toplay = "X"
            m = toplay
            m2 = players
            win();
        } else if (button2.innerHTML == "O" && button8.innerHTML == "O" && button5.innerHTML == "") {
            button5.innerHTML = "O"
            button5.style.backgroundColor = "#ff000060" 
            toplay = "X"
            m = toplay
            m2 = players
            win();
        } else if (button5.innerHTML == "O" && button8.innerHTML == "O" && button2.innerHTML == "") {
            button2.innerHTML = "O"
            button2.style.backgroundColor = "#ff000060" 
            toplay = "X"
            m = toplay
            m2 = players
            win();
        } else if (button3.innerHTML == "O" && button6.innerHTML == "O" && button9.innerHTML == "") {
            button9.innerHTML = "O"
            button9.style.backgroundColor = "#ff000060" 
            toplay = "X"
            m = toplay
            m2 = players
            win();
        } else if (button3.innerHTML == "O" && button9.innerHTML == "O" && button6.innerHTML == "") {
            button6.innerHTML = "O"
            button6.style.backgroundColor = "#ff000060" 
            toplay = "X"
            m = toplay
            m2 = players
            win();
        } else if (button6.innerHTML == "O" && button9.innerHTML == "O" && button3.innerHTML == "") {
            button3.innerHTML = "O"
            button3.style.backgroundColor = "#ff000060" 
            toplay = "X"
            m = toplay
            m2 = players
            win();
        } else if (button1.innerHTML == "O" && button5.innerHTML == "O" && button9.innerHTML == "") {
            button9.innerHTML = "O"
            button9.style.backgroundColor = "#ff000060" 
            toplay = "X"
            m = toplay
            m2 = players
            win();
        } else if (button1.innerHTML == "O" && button9.innerHTML == "O" && button5.innerHTML == "") {
            button5.innerHTML = "O"
            button5.style.backgroundColor = "#ff000060" 
            toplay = "X"
            m = toplay
            m2 = players
            win();
        } else if (button5.innerHTML == "O" && button9.innerHTML == "O" && button1.innerHTML == "") {
            button1.innerHTML = "O"
            button1.style.backgroundColor = "#ff000060" 
            toplay = "X"
            m = toplay
            m2 = players
            win();
        } else if (button3.innerHTML == "O" && button5.innerHTML == "O" && button7.innerHTML == "") {
            button7.innerHTML = "O"
            button7.style.backgroundColor = "#ff000060" 
            toplay = "X"
            m = toplay
            m2 = players
            win();
        } else if (button3.innerHTML == "O" && button7.innerHTML == "O" && button5.innerHTML == "") {
            button5.innerHTML = "O"
            button5.style.backgroundColor = "#ff000060" 
            toplay = "X"
            m = toplay
            m2 = players
            win();
        } else if (button5.innerHTML == "O" && button7.innerHTML == "O" && button3.innerHTML == "") {
            button3.innerHTML = "O"
            button3.style.backgroundColor = "#ff000060" 
            toplay = "X"
            m = toplay
            m2 = players
            win();
        } else 
            //to block X from winning
        if (button1.innerHTML == "X" && button2.innerHTML == "X" && button3.innerHTML == "") {
            button3.innerHTML = "O"
            button3.style.backgroundColor = "#ff000060" 
            toplay = "X"
            m = toplay
            m2 = players
            win();
        } else if (button1.innerHTML == "X" && button3.innerHTML == "X" && button2.innerHTML == "") {
            button2.innerHTML = "O"
            button2.style.backgroundColor = "#ff000060" 
            toplay = "X"
            m = toplay
            m2 = players
            win();
        } else if (button2.innerHTML == "X" && button3.innerHTML == "X" && button1.innerHTML == "") {
            button1.innerHTML = "O"
            button1.style.backgroundColor = "#ff000060" 
            toplay = "X"
            m = toplay
            m2 = players
            win();
        } else if (button4.innerHTML == "X" && button5.innerHTML == "X" && button6.innerHTML == "") {
            button6.innerHTML = "O"
            button6.style.backgroundColor = "#ff000060" 
            toplay = "X"
            m = toplay
            m2 = players
            win();
        } else if (button4.innerHTML == "X" && button6.innerHTML == "X" && button5.innerHTML == "") {
            button5.innerHTML = "O"
            button5.style.backgroundColor = "#ff000060" 
            toplay = "X"
            m = toplay
            m2 = players
            win();
        } else if (button5.innerHTML == "X" && button6.innerHTML == "X" && button4.innerHTML == "") {
            button4.innerHTML = "O"
            button4.style.backgroundColor = "#ff000060" 
            toplay = "X"
            m = toplay
            m2 = players
            win();
        } else if (button7.innerHTML == "X" && button8.innerHTML == "X" && button9.innerHTML == "") {
            button9.innerHTML = "O"
            button9.style.backgroundColor = "#ff000060" 
            toplay = "X"
            m = toplay
            m2 = players
            win();
        } else if (button7.innerHTML == "X" && button9.innerHTML == "X" && button8.innerHTML == "") {
            button8.innerHTML = "O"
            button8.style.backgroundColor = "#ff000060" 
            toplay = "X"
            m = toplay
            m2 = players
            win();
        } else if (button8.innerHTML == "X" && button9.innerHTML == "X" && button7.innerHTML == "") {
            button7.innerHTML = "O"
            button7.style.backgroundColor = "#ff000060" 
            toplay = "X"
            m = toplay
            m2 = players
            win();
        } else if (button4.innerHTML == "X" && button1.innerHTML == "X" && button7.innerHTML == "") {
            button7.innerHTML = "O"
            button7.style.backgroundColor = "#ff000060" 
            toplay = "X"
            m = toplay
            m2 = players
            win();
        } else if (button4.innerHTML == "X" && button7.innerHTML == "X" && button1.innerHTML == "") {
            button1.innerHTML = "O"
            button1.style.backgroundColor = "#ff000060" 
            toplay = "X"
            m = toplay
            m2 = players
            win();
        } else if (button1.innerHTML == "X" && button7.innerHTML == "X" && button4.innerHTML == "") {
            button4.innerHTML = "O"
            button4.style.backgroundColor = "#ff000060" 
            toplay = "X"
            m = toplay
            m2 = players
            win();
        } else if (button2.innerHTML == "X" && button5.innerHTML == "X" && button8.innerHTML == "") {
            button8.innerHTML = "O"
            button8.style.backgroundColor = "#ff000060" 
            toplay = "X"
            m = toplay
            m2 = players
            win();
        } else if (button2.innerHTML == "X" && button8.innerHTML == "X" && button5.innerHTML == "") {
            button5.innerHTML = "O"
            button5.style.backgroundColor = "#ff000060" 
            toplay = "X"
            m = toplay
            m2 = players
            win();
        } else if (button5.innerHTML == "X" && button8.innerHTML == "X" && button2.innerHTML == "") {
            button2.innerHTML = "O"
            button2.style.backgroundColor = "#ff000060" 
            toplay = "X"
            m = toplay
            m2 = players
            win();
        } else if (button3.innerHTML == "X" && button6.innerHTML == "X" && button9.innerHTML == "") {
            button9.innerHTML = "O"
            button9.style.backgroundColor = "#ff000060" 
            toplay = "X"
            m = toplay
            m2 = players
            win();
        } else if (button3.innerHTML == "X" && button9.innerHTML == "X" && button6.innerHTML == "") {
            button6.innerHTML = "O"
            button6.style.backgroundColor = "#ff000060" 
            toplay = "X"
            m = toplay
            m2 = players
            win();
        } else if (button6.innerHTML == "X" && button9.innerHTML == "X" && button3.innerHTML == "") {
            button3.innerHTML = "O"
            button3.style.backgroundColor = "#ff000060" 
            toplay = "X"
            m = toplay
            m2 = players
            win();
        } else if (button1.innerHTML == "X" && button5.innerHTML == "X" && button9.innerHTML == "") {
            button9.innerHTML = "O"
            button9.style.backgroundColor = "#ff000060" 
            toplay = "X"
            m = toplay
            m2 = players
            win();
        } else if (button1.innerHTML == "X" && button9.innerHTML == "X" && button5.innerHTML == "") {
            button5.innerHTML = "O"
            button5.style.backgroundColor = "#ff000060" 
            toplay = "X"
            m = toplay
            m2 = players
            win();
        } else if (button5.innerHTML == "X" && button9.innerHTML == "X" && button1.innerHTML == "") {
            button1.innerHTML = "O"
            button1.style.backgroundColor = "#ff000060" 
            toplay = "X"
            m = toplay
            m2 = players
            win();
        } else if (button3.innerHTML == "X" && button5.innerHTML == "X" && button7.innerHTML == "") {
            button7.innerHTML = "O"
            button7.style.backgroundColor = "#ff000060" 
            toplay = "X"
            m = toplay
            m2 = players
            win();
        } else if (button3.innerHTML == "X" && button7.innerHTML == "X" && button5.innerHTML == "") {
            button5.innerHTML = "O"
            button5.style.backgroundColor = "#ff000060" 
            toplay = "X"
            m = toplay
            m2 = players
            win();
        } else if (button5.innerHTML == "X" && button7.innerHTML == "X" && button3.innerHTML == "") {
            button3.innerHTML = "O"
            button3.style.backgroundColor = "#ff000060" 
            toplay = "X"
            m = toplay
            m2 = players
            win();
        }
        //to play random
       else if (option == "1" && button1.innerHTML == "") {
                    button1.innerHTML = "O"
                    button1.style.backgroundColor = "#ff000060" 
                    toplay = "X"
                    m = toplay
                    m2 = players
                    win();
    } else 
        if (option == "2" && button2.innerHTML == "") {
                    button2.innerHTML = "O"
                    button2.style.backgroundColor = "#ff000060" 
                    toplay = "X"
                    m = toplay
                    m2 = players
                    win();
    } else
        if (option == "3" && button3.innerHTML == "") {
                    button3.innerHTML = "O"
                    button3.style.backgroundColor = "#ff000060" 
                    toplay = "X"
                    m = toplay
                    m2 = players
                    win();
    } else
        if (option == "4" && button4.innerHTML == "") {
                    button4.innerHTML = "O"
                    button4.style.backgroundColor = "#ff000060" 
                    toplay = "X"
                    m = toplay
                    m2 = players
                    win();
        }    
     else
            if (option == "5" && button5.innerHTML == "") {
                    button5.innerHTML = "O"
                    button5.style.backgroundColor = "#ff000060" 
                    toplay = "X"
                    m = toplay
                    m2 = players
                    win();
        }
     else
        if (option == "6" && button6.innerHTML == "") {
                    button6.innerHTML = "O"
                    button6.style.backgroundColor = "#ff000060" 
                    toplay = "X"
                    m = toplay
                    m2 = players
                    win();
    } else
        if (option == "7" && button7.innerHTML == "") {
                    button7.innerHTML = "O"
                    button7.style.backgroundColor = "#ff000060" 
                    toplay = "X"
                    m = toplay
                    m2 = players
                    win();
    } else
        if (option == "8" && button8.innerHTML == "") {
                    button8.innerHTML = "O"
                    button8.style.backgroundColor = "#ff000060" 
                    toplay = "X"
                    m = toplay
                    m2 = players
                    win();
    } else
        if (option == "9" && button9.innerHTML == "") {
                    button9.innerHTML = "O"
                    button9.style.backgroundColor = "#ff000060" 
                    toplay = "X"
                    m = toplay
                    m2 = players
                    win();
    } else 
        if (button1.innerHTML !== "" && button2.innerHTML !== "" && button3.innerHTML !== "" && button4.innerHTML !== "" && button5.innerHTML !== "" && button6.innerHTML !== "" && button7.innerHTML !== "" && button8.innerHTML !== "" && button9.innerHTML !== "") {
        win();
    } else {
        cpu();
    }
    }
    }
    m.innerHTML = "X"
}
function player(i){
    var m = document.getElementById("message");
    var m2 = document.getElementById("message2");
    var m4 = document.getElementById("message4");
    var m5 = document.getElementById("message5");
    if (i == "2") {
        players = "2"
        scorecpu = "0"
        scoreo = "0"
        scorex = "0"
    } else if (i == "c") {
        players = "cpu"
        scorecpu = "0"
        scoreo = "0"
        scorex = "0"
        toplay = "X"
    }
    m.innerHTML = toplay
    m2.innerHTML = players
    m4.innerHTML = "Turn: "
    m5.innerHTML = " Players: "
    restart();
}
//the end
