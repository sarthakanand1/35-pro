var ball;
var database,position;
function setup(){
    database=firebase.database();
    createCanvas(500,500);
    var heading=createElement('h2');
var inputbox1=createInput('name');
var question1=createElement('h2',"do you think we should provide food to neady kids in school");
var radio=createRadio('h2');
radio.option('yes');
radio.option('no');
var question2=createElement('h2',"will you like to contribute");
var radio1=createRadio('h2');
radio1.option('yes');
radio1.option('no');
var question3=createElement('h2',"will you contribute 100 rs per month");

var radio2=createRadio('h2');
radio2.option('yes');
radio2.option('no');
var submit=createButtton('submit');  
}

function draw(){
    background("white");
   heading.html('survey to help neady kids');
   heading.position(130,10);
inputbox1.position(130,100);

submit.position(350,300);
question1.postion(100,160);
radio.position(100,180);
question2.postion(100,210);
radio1.position(100,230);
question3.postion(100,270);
radio2.position(100,290);
submit.mousePressed(()=>{
    var value1=inputbox.value;
    playercount++;
    var greeting =createElement("thankyou for your response");
    greeting.position(100,250);
    inputbox1.hide();
    
})
}


