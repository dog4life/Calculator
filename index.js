
function add_numbers(){

  var num1= parseInt(document.getElementById('num1').value) ;
  var num2= parseInt(document.getElementById('num2').value) ;
  

  var sum = num1+num2;
  
  document.getElementById('show-result').innerHTML=`Sum of ${num1} and ${num2} = ${sum}`
  
  return sum;
  
  }
  

  function sub_numbers(){
  
  var num1= parseInt(document.getElementById('num1').value) ;
  var num2= parseInt(document.getElementById('num2').value) ;
  
  
  var sub = num1-num2;
  
  document.getElementById('show-result').innerHTML=`Subtraction of ${num1} and ${num2} = ${sub}`
  
  return sub;
  
  }

  function mul_numbers(){
      var num1= parseInt(document.getElementById('num1').value) ;
      var num2= parseInt(document.getElementById('num2').value) ;
      var mul = num1*num2;
      document.getElementById('show-result').innerHTML=`Multiplication of ${num1} and ${num2} = ${mul}`
      
      return mul;
      
      }
  
  function div_numbers(){
  
      var num1= parseInt(document.getElementById('num1').value) ;
      var num2= parseInt(document.getElementById('num2').value) ;
      
      
      var div = num1/num2;
      
      document.getElementById('show-result').innerHTML=`Division of ${num1} and ${num2} = ${div}`
      
      return div;
      
      }
  