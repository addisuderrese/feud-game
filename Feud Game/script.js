/*

Answers
---------------------

Write Answers Here
*/

//--------------------------------------------------------------------//

//Team - 1

// Question number one Answers
//1st answer
const T1_Q1_A1 = ""
//2nd answer
const T1_Q1_A2 = ""
//3rd answer
const T1_Q1_A3 = ""
//4th answer
const T1_Q1_A4 = ""

// Question number two Answers
//1st answer
const T1_Q2_A1 = ""
//2nd answer
const T1_Q2_A2 = ""
//3rd answer
const T1_Q2_A3 = ""
//4th answer
const T1_Q2_A4 = ""


// Question number three Answers
//1st answer
const T1_Q3_A1 = ""
//2nd answer
const T1_Q3_A2 = ""
//3rd answer
const T1_Q3_A3 = ""
//4th answer
const T1_Q3_A4 = ""

// ---------------------------------------------------------------------- //

//Team - 2
// Question number one Answers
//1st answer
const T2_Q1_A1 = ""
//2nd answer
const T2_Q1_A2 = ""
//3rd answer
const T2_Q1_A3 = ""
//4th answer
const T2_Q1_A4 = ""

// Question number two Answers
//1st answer
const T2_Q2_A1 = ""
//2nd answer
const T2_Q2_A2 = ""
//3rd answer
const T2_Q2_A3 = ""
//4th answer
const T2_Q2_A4 = ""


// Question number three Answers
//1st answer
const T2_Q3_A1 = ""
//2nd answer
const T2_Q3_A2 = ""
//3rd answer
const T2_Q3_A3 = ""
//4th answer
const T2_Q3_A4 = ""


//----------------------------------------------------------------//

//WARNING
//Do not edit anything below this




const BOXS1 = document.querySelectorAll(".boxs-1")
const BOXS2 = document.querySelectorAll(".boxs-2")
const BOXS3 = document.querySelectorAll(".boxs-3")

const X = document.querySelector(".x")
const X_CONT = document.querySelector(".wrong")
const X_BUTTON = document.querySelector(".x-button")
var SCORE = document.querySelector(".score-page")

const SOUND_CORRECT = document.querySelector("#sound-correct")
const SOUND_WRONG = document.querySelector("#sound-wrong")

const NextTeam = document.querySelector(".next-team")

const scoreBoard = document.querySelector(".winner")
const teamOneScore = document.querySelector(".teamOneScore")
const teamTwoScore = document.querySelector(".teamTwoScore")


X.addEventListener("click", close)
X_BUTTON.addEventListener("click", wrong)

SCORE.addEventListener("click", stopScore)

BOXS1.forEach(box1 => {
    box1.addEventListener("click", roundOne)
})
BOXS2.forEach(box2 => {
    box2.addEventListener("click", roundTwo)
})
BOXS3.forEach(box3 => {
    box3.addEventListener("click", roundThree)
})

NextTeam.addEventListener("click", teamTwo)

let score = 0
let stop_score = false
let isTeamTwo = false

function roundOne(e) {

    if (e.target.innerHTML == "1") {

        e.target.classList.remove("boxs-1")
        e.target.classList.add("correct")

        if (isTeamTwo) {
            e.target.innerHTML = T2_Q1_A1
        }
        else if (!isTeamTwo) {
            e.target.innerHTML = T1_Q1_A1
        }


        if (!stop_score) {
            score += 10
            SCORE.innerHTML = score
        }


        SOUND_CORRECT.play()
        check()
    }


    else if (e.target.innerHTML == "2") {
        if (isTeamTwo) {
            e.target.innerHTML = T2_Q1_A2
        }
        else if (!isTeamTwo) {
            e.target.innerHTML = T1_Q1_A2
        }
        e.target.classList.remove("boxs-1")
        e.target.classList.add("correct")

        if (!stop_score) {
            score += 5
            SCORE.innerHTML = score
        }

        SOUND_CORRECT.play()
        check()
    }


    else if (e.target.innerHTML == "3") {
        if (isTeamTwo) {
            e.target.innerHTML = T2_Q1_A3
        }
        else if (!isTeamTwo) {
            e.target.innerHTML = T1_Q1_A3
        }
        e.target.classList.remove("boxs-1")
        e.target.classList.add("correct")

        if (!stop_score) {
            score += 3
            SCORE.innerHTML = score
        }

        SOUND_CORRECT.play()
        check()
    }


    else if (e.target.innerHTML == "4") {
        if (isTeamTwo) {
            e.target.innerHTML = T2_Q1_A4
        }
        else if (!isTeamTwo) {
            e.target.innerHTML = T1_Q1_A4
        }
        e.target.classList.remove("boxs-1")
        e.target.classList.add("correct")

        if (!stop_score) {
            score += 2
            SCORE.innerHTML = score
        }

        SOUND_CORRECT.play()
        check()

    }

}

function roundTwo(e) {

    if (e.target.innerHTML == "1") {
        if (isTeamTwo) {
            e.target.innerHTML = T2_Q2_A1
        }
        else if (!isTeamTwo) {
            e.target.innerHTML = T1_Q2_A1
        }
        e.target.classList.remove("boxs-1")
        e.target.classList.add("correct")

        if (!stop_score) {
            score += 10
            SCORE.innerHTML = score
        }

        SOUND_CORRECT.play()
        check()
    }


    else if (e.target.innerHTML == "2") {
        if (isTeamTwo) {
            e.target.innerHTML = T2_Q2_A2
        }
        else if (!isTeamTwo) {
            e.target.innerHTML = T1_Q2_A2
        }
        e.target.classList.remove("boxs-1")
        e.target.classList.add("correct")

        if (!stop_score) {
            score += 5
            SCORE.innerHTML = score
        }

        SOUND_CORRECT.play()
        check()
    }


    else if (e.target.innerHTML == "3") {
        if (isTeamTwo) {
            e.target.innerHTML = T2_Q2_A3
        }
        else if (!isTeamTwo) {
            e.target.innerHTML = T1_Q2_A3
        }
        e.target.classList.remove("boxs-1")
        e.target.classList.add("correct")

        if (!stop_score) {
            score += 3
            SCORE.innerHTML = score
        }

        SOUND_CORRECT.play()
        check()
    }


    else if (e.target.innerHTML == "4") {
        if (isTeamTwo) {
            e.target.innerHTML = T2_Q2_A4
        }
        else if (!isTeamTwo) {
            e.target.innerHTML = T1_Q2_A4
        }
        e.target.classList.remove("boxs-1")
        e.target.classList.add("correct")

        if (!stop_score) {
            score += 2
            SCORE.innerHTML = score
        }

        SOUND_CORRECT.play()
        check()
    }
}

function roundThree(e) {

    if (e.target.innerHTML == "1") {
        if (isTeamTwo) {
            e.target.innerHTML = T2_Q3_A1
        }
        else if (!isTeamTwo) {
            e.target.innerHTML = T1_Q3_A1
        }
        e.target.classList.remove("boxs-1")
        e.target.classList.add("correct")

        if (!stop_score) {
            score += 10
            SCORE.innerHTML = score
        }

        SOUND_CORRECT.play()
        check()
    }


    else if (e.target.innerHTML == "2") {
        if (isTeamTwo) {
            e.target.innerHTML = T2_Q3_A2
        }
        else if (!isTeamTwo) {
            e.target.innerHTML = T1_Q3_A2
        }
        e.target.classList.remove("boxs-1")
        e.target.classList.add("correct")

        if (!stop_score) {
            score += 5
            SCORE.innerHTML = score
        }

        SOUND_CORRECT.play()
        check()
    }


    else if (e.target.innerHTML == "3") {
        if (isTeamTwo) {
            e.target.innerHTML = T2_Q3_A3
        }
        else if (!isTeamTwo) {
            e.target.innerHTML = T1_Q3_A3
        }
        e.target.classList.remove("boxs-1")
        e.target.classList.add("correct")

        if (!stop_score) {
            score += 3
            SCORE.innerHTML = score
        }

        SOUND_CORRECT.play()
        check()
    }

    else if (e.target.innerHTML == "4") {
        e.target.classList.remove("boxs-1")
        e.target.classList.add("correct")

        if (isTeamTwo) {
            e.target.innerHTML = T2_Q3_A4
        }
        else if (!isTeamTwo) {
            e.target.innerHTML = T1_Q3_A4
        }


        if (!stop_score) {
            score += 2
            SCORE.innerHTML = score
        }

        SOUND_CORRECT.play()
        check()
    }
}

let checkOne = false
let checkTwo = false
let checkThree = false


function check() {

    /* Under Work

    // BOXS1.forEach(box =>{
    //     if(box.classList[0] == "correct"){
    //         BOXS2.forEach(box2 =>{
    //             if(box2.classList[0] == "correct"){
    //                 BOXS3.forEach(box3 =>{
    //                     if(box3.classList[0] == "correct"){
    //                         alert("wtf")
    //                     }
    //                 })
    //             }
    //         })
    //     }
    // })

    if(BOXS1[0].classList.value == "correct"  &&
    BOXS1[1].classList.value == "correct" && 
    BOXS1[2].classList.value == "correct" && 
    BOXS1[3].classList.value == "correct"){

        // alert("one")
        
        if(BOXS2[0].classList.value == "correct"  &&
    BOXS2[1].classList.value == "correct" && 
    BOXS2[2].classList.value == "correct" && 
    BOXS2[3].classList.value == "correct"){

        alert("two")


        if(BOXS3[0].classList.value == "correct"  &&
        BOXS3[1].classList.value == "correct" && 
        BOXS3[2].classList.value == "correct" && 
        BOXS3[3].classList.value == "correct") {

            alert("done")


        }

    }

    }

    
    console.log(checkOne && checkTwo && checkThree)

    
    */
}


function teamTwo() {

let T1_SCORE
    if (isTeamTwo) {

        console.log(teamTwoScore)
        scoreBoard.style.visibility = "visible"
    }
    else {
        T1_SCORE = score
        score = 0
        SCORE.innerHTML = score

        console.log(T1_SCORE)
        isTeamTwo = true

        BOXS1.forEach(box => {
            box.classList.remove("correct")
            box.classList.add("boxs-1")
        })
        BOXS2.forEach(box => {
            box.classList.remove("correct")
            box.classList.add("boxs-2")
        })
        BOXS3.forEach(box => {
            box.classList.remove("correct")
            box.classList.add("boxs-2")
        })

        BOXS1[0].innerHTML = "1"
        BOXS1[1].innerHTML = "2"
        BOXS1[2].innerHTML = "3"
        BOXS1[3].innerHTML = "4"
        BOXS2[0].innerHTML = "1"
        BOXS2[1].innerHTML = "2"
        BOXS2[2].innerHTML = "3"
        BOXS2[3].innerHTML = "4"
        BOXS3[0].innerHTML = "1"
        BOXS3[1].innerHTML = "2"
        BOXS3[2].innerHTML = "3"
        BOXS3[3].innerHTML = "4"

        if (!stop_score) {
            return
        }
        else {
            stop_score = false
        }
    }


}

function wrong() {
    SOUND_WRONG.play()
    X_CONT.style.visibility = "visible"
}

function close() {
    X_CONT.style.visibility = "hidden"
}

function stopScore() {
    if (!stop_score) {
        stop_score = true
    }
    else {
        stop_score = false
    }
}