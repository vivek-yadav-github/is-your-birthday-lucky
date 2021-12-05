var sub = document.getElementById("submit").addEventListener('click',submit);
var bdy = document.getElementById('bday');
var num = document.getElementById('num');
var output = document.getElementById('output');


function comparevalues(sum,luckynumber){
  if(sum%luckynumber===0){
    output.innerHTML = 'Your bday is lucky😀';
  }else{
    output.innerHTML = 'opps your bday isnt lucky🙃';
  }
}

function submit(){
    const dob = bdy.value;
    const sum = calculatesum(dob);
    if(sum&&dob)
    comparevalues(sum,num.value)
    else
    output.innerHTML = 'Enter both the feilds😡';
}


function calculatesum(dob){
    dob= dob.replaceAll("-","");
    let sum = 0;
    for(let i = 0; i<dob.length ;i++){
        sum = sum + Number(dob.charAt(i));
    }
    return sum;
}