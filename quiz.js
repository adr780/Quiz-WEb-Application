
window.onload = function(){
    show(0);
}
let questions = [

    {
        id : 1,
        question: "Choose the color of an emerald",
        answer: "Green",
        options :[
            "Red",
            "Green",
            "Blue",
            "Violet"
        ]

    },
    {
        id : 2,
        question :"Select the object that you hit with a hammer",
        answer: "Nail",
        options:[
            "Spanner",
            "Nail",
            "Screw",
            "Pillow"
        ]

    },
    {
        id: 3,
        question:"Select the name of the place where you go to see animals",
        answer : "The Zoo",
        options:[
            "The Cave",
            "The Ocean",
            "The Forest",
            "The Zoo"



        ]
    },
    {
        id: 4,
        question : "Select the number of legs a spider has",
        answer : "Eight",
        options:[
            "Eight",
            "Nine",
            "Twelve",
            "Six"
        ]

    },
    {
        id : 5,
        question : "Select the number of planets we have in our Solar System",
        answer:"Eight",
        options:[
            "Eight",
            "Nine",
            "Twelve",
            "Six"
        ]
    },
    {
        id :6,
        question :"Choose the color of a school bus",
        answer :"Yellow",
        options:[
            "Red",
            "Yellow",
            "Green",
            "Violet"
        ]
    }
]
    
function submitForm(e){
    e.preventDefault();
    let name = document.forms["welcome_form"]["name"].value;
    sessionStorage.setItem("name",name);
    location.href = "quiz.html";
    
}

let question_count = 0;

function next(){
    
    question_count++;
    show(questions_count);

}

function show(count){
    let question = document.getElementById("question");
    
    question.innerHTML = `
    <h2>${questions[count].question}<\h2>
    `
}    