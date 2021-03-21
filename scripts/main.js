//button for toggling website theme//

function myFunction() {
    var element = document.body;
    element.classList.toggle("light-mode");

}

//Button for Function 1 (larger number)//
function largernumber() {
    let num1 = parseInt(prompt("Insert a NUMBER"));
    let num2 = parseInt(prompt("Insert a another NUMBER"));

    if (num1>num2) {
      document.getElementById("button1").innerHTML= num1 + " is bigger";
    }
    else if (num1 < num2){
      document.getElementById("button1").innerHTML= num2 + " is bigger";
    }
    else if (num1 === num2){
      document.getElementById("button1").innerHTML="Nice try, its the same number. Try again";
    } 
    else{
      document.getElementById("button1").innerHTML="Put some numbers in and Try again";
    }
}

//Button for Function 2 (sign of product)//
  function signOfProduct() {
    let num1 = parseInt(prompt("Insert a NUMBER"));
    let num2 = parseInt(prompt("Insert a another NUMBER"));
    let num3 = parseInt(prompt("Insert one more NUMBER"));

    if (num1*num2*num3 < 0){
      document.getElementById("button2").innerHTML = " The product will be negative (-)";
    }
    else if (num1*num2*num3 > 0){
      document.getElementById("button2").innerHTML = " The product will be positive (+)";
    }
    else if (num1*num2*num3 == 0){
      document.getElementById("button2").innerHTML = " The product is 0 --- neither positive nor negative";
    }  
    else{
        document.getElementById("button1").innerHTML="Put some numbers in and Try again";
    }
  } 

//Button for Function 3 (number sort)//
  function threeNumberSort() {
    let num1 = parseInt(prompt("Insert a NUMBER"));
    let num2 = parseInt(prompt("Insert a another NUMBER"));
    let num3 = parseInt(prompt("Insert one more NUMBER"));
    

    if (num1<=num2&&num2<=num3){
      document.getElementById("button3").innerHTML = num1+ "<" + num2 + "<" + num3;
    }
    else if (num1<=num3&&num3<=num2){
      document.getElementById("button3").innerHTML = num1+ "<" + num3 + "<" + num2;
    }
    else if (num2<=num1&&num1<=num3){
      document.getElementById("button3").innerHTML = num2+ "<" + num1 + "<" + num3;
    }
    else if (num2<=num3&&num3<=num1){
      document.getElementById("button3").innerHTML = num2+ "<" + num3 + "<" + num1;
    }
    else if (num3<=num1&&num1<=num2){
      document.getElementById("button3").innerHTML = num3+ "<" + num1 + "<" + num2;
    }
    else if (num3<=num2&&num2<=num1){
      document.getElementById("button3").innerHTML = num3+ "<" + num2 + "<" + num1;
    }
    else{
      document.getElementById("button3").innerHTML= "Enter a real number "
    }
  } 

  
//Button for Function 4 (forSumThrees)//
  function forSumThrees() {
    let forloop= 0
    for (let i=1; i<=1000; i++){
      if(i % 3 === 0){
        document.getElementById("button4").innerHTML = forloop +=i
      }
    }
  }

  
//Button for Function 5 (whileSumThrees)//
  function whileSumThrees() {
  let whileloop= 0;
  let i = 0;
    while(i<1000){
      i++
      if(i%3===0){
        document.getElementById("button5").innerHTML = whileloop += i
      }
    }  
  }

//Button for Function 6 (tenFour)//  
  function tenFour() {
    let forloop = 0
    for (let i=1; i<=100; i++){
      if (i%4===0&&i%10===0){
        console.log ("TenFour!");
      }
      else if (i%10===0){
        console.log ("Ten");
      }
      else if (i%4===0){
        console.log ("Four");
      }
      else{
        console.log (i);
      }
    }
  }

  
//Button for Function 7 (centuryFromYear)//
  function  centuryFromYear() {
    let num1 = parseInt(prompt("Enter the year please: "))
    if (num1>0){
    document.getElementById("button7").innerHTML= "This year is in the " +  Math.ceil(num1/100)+"th"+ " century"
    }
    else{
      document.getElementById("button7").innerHTML= "Make sure you have entered a real number "
    }
  }


//Button for Function 8 (thirdAngle)//
  function thirdAngle() {
    let num1 = parseInt(prompt( "Enter the first angle°"))
    let num2 =  parseInt(prompt( "Enter the second angle°"))
    let num3 = 180-(num1+num2)
    if (num3>0){
      document.getElementById("button8").innerHTML= "The third angle is " + num3+ "°"
    }
    else if (num3<=0){
      document.getElementById("button8").innerHTML= "Enter two angles of a triangle please"
    }
    else{
      document.getElementById("button8").innerHTML= "Make sure you entered a real number"
    }
  } 


//Button for Function 9//
  function function9() {
    alert('Something very cool coming soon (Assignment I)')
  }