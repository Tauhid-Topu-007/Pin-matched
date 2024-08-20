// empty value 
function emptyValue(id){
    document.getElementById(id).value='';

}

// empty text 
function emptyText(id){
    document.getElementById(id).innerText='';
}

// display none 
function displayNone(id){
    document.getElementById(id).style.display='none';
}

// display Block 
function displayBlock(id){
    document.getElementById(id).style.display='block';
}

// generate random number 
function randomNumFun(){
    var randomNumber=Math.floor(1000+Math.random()*9000);
    document.getElementById('inputPin').value=randomNumber;

    emptyValue('generatePin');
    displayNone('matched');
    displayNone('unmatched');
    displayNone('tryContent');
}


// input number value 
function btnKey(id){
    let prevValue=document.getElementById('generatePin').value;
    let key = document.getElementById(id).innerHTML;
    document.getElementById('generatePin').value= prevValue + key;
}

// clean function 
function clean(){
    document.getElementById('generatePin').value='';
}

// clean last value 
function cleanLast(){
    var inputResult=document.getElementById('generatePin').value;
    var removeValue= inputResult.slice(0,inputResult.length -1);
    document.getElementById('generatePin').value=removeValue;
}

// submit pin (pin matching or not)
function submitBtn(){
    var randomNum=document.getElementById('inputPin').value;
    var typeNum=document.getElementById('generatePin').value;

    // pin matching condition 
    if(randomNum==typeNum){
        displayBlock('matched');
        displayNone('unmatched');
        displayNone('tryContent');
    }
    else{
        displayBlock('unmatched');
        displayNone('matched');
        tryLeft('tryLeft');
        displayBlock('tryContent');
    }
}

// pin match error try 3 left
function tryLeft(id){
    var tryAgain=document.getElementById(id).innerHTML;
    document.getElementById(id).innerHTML -=1;
    if(tryAgain=='1'){
        disableBtn('submit');
    }
}

// try left expired 
function disableBtn(id){
    let button=document.getElementById(id);
    button.style.cursor='not-allowed';
    button.setAttribute('disabled','true');
    button.title='Please Relode Page';
}



















