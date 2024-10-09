function add(){
   alert('function working')
   var input1Element = document.getElementById("input1");
   console.log(input1Element)
   var input2Element = document.getElementById("input2");
   console.log(input2Element);

var result = parseInt(input1Element.value)  + parseInt(input2Element.value);
document.getElementById("result").innerHTML=result;

input1Element.value ="";
input2Element.value ="";

}

function subract(){
   alert('function working')
   var input1Element = document.getElementById("input1");
   console.log(input1Element)
   var input2Element = document.getElementById("input2");
   console.log(input2Element);

var result = parseInt(input1Element.value) - parseInt(input2Element.value);
document.getElementById("result").innerHTML=result;

clear();
}