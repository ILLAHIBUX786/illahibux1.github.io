
let gameover = new Audio ("gameover.WAV");
let audioTurn = new Audio ("click.WAV");

function insert(num){
    document.form.textview.value = document.form.textview.value + num;
    audioTurn.play();
}

function equal(){
    var exp =document.form.textview.value;
    if(exp){

        document.form.textview.value = eval(exp);
    }
    // let gameover = new Audio ("gameover.WAV");
   gameover.play();

}

function clean(){
    document.form.textview.value ="";
}


function back(){
   var exp = document.form.textview.value
   document.form.textview.value = exp.substring(0,exp.length-1)
}