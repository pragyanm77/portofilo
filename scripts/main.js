//button for toggling website theme//

function myFunction() {
    var element = document.body;
    element.classList.toggle("light-mode");
}

//Button for Function 1 (larger number)//
//enter 2 numbers which are assigned a variable, larger one gets outputed//
function largernumber() {
    let largnum1 = parseInt(prompt("Insert a NUMBER"));
    let largnum2 = parseInt(prompt("Insert a another NUMBER"));

    if (largnum1>largnum2) {
      document.getElementById("button1").innerHTML= largnum1 + " is bigger";
    }
    else if (largnum1 < largnum2){
      document.getElementById("button1").innerHTML= largnum2 + " is bigger";
    }
    else if (largnum1 === largnum2){
      document.getElementById("button1").innerHTML="Nice try, its the same number. Try again";
    } 
    else{
      document.getElementById("button1").innerHTML="Put some numbers in and Try again";
    } 
}

//Button for Function 2 (sign of product)//
//enter 3 numbers, progarm nultiplies the numbers and gives sign of the product//
  function signOfProduct() {
    let signnum1 = parseInt(prompt("Insert a NUMBER"));
    let signnum2 = parseInt(prompt("Insert a another NUMBER"));
    let signnum3 = parseInt(prompt("Insert one more NUMBER"));

    if (signnum1*signnum2*signnum3 < 0){
      document.getElementById("button2").innerHTML = " The product will be negative (-)";
    }
    else if (signnum1*signnum2*signnum3 > 0){
      document.getElementById("button2").innerHTML = " The product will be positive (+)";
    }
    else if (signnum1*signnum2*signnum3 == 0){
      document.getElementById("button2").innerHTML = " The product is 0 --- neither positive nor negative";
    }  
    else{
        document.getElementById("button2").innerHTML="Put some numbers in and Try again";
    }
  } 

//Button for Function 3 (number sort)//
//enter 3 numbers and sort from low to high. each number is assigned a varible//
  function threeNumberSort() {
    let sortnum1 = parseInt(prompt("Insert a NUMBER"));
    let sortnum2 = parseInt(prompt("Insert a another NUMBER"));
    let sortnum3 = parseInt(prompt("Insert one more NUMBER"));
    

    if (sortnum1<=sortnum2&&sortnum2<=sortnum3){
      document.getElementById("button3").innerHTML = sortnum1+ "<" + sortnum2 + "<" + sortnum3;
    }
    else if (sortnum1<=sortnum3&&sortnum3<=sortnum2){
      document.getElementById("button3").innerHTML = sortnum1+ "<" + sortnum3 + "<" + sortnum2;
    }
    else if (sortnum2<=sortnum1&&sortnum1<=sortnum3){
      document.getElementById("button3").innerHTML = sortnum2+ "<" + sortnum1 + "<" + sortnum3;
    }
    else if (sortnum2<=sortnum3&&sortnum3<=sortnum1){
      document.getElementById("button3").innerHTML = sortnum2+ "<" + sortnum3 + "<" + sortnum1;
    }
    else if (sortnum3<=sortnum1&&sortnum1<=sortnum2){
      document.getElementById("button3").innerHTML = sortnum3+ "<" + sortnum1 + "<" + sortnum2;
    }
    else if (sortnum3<=sortnum2&&sortnum2<=sortnum1){
      document.getElementById("button3").innerHTML = sortnum3+ "<" + sortnum2 + "<" + sortnum1;
    }
    else{
      document.getElementById("button3").innerHTML= "Enter a real number "
    }
  } 

  
//Button for Function 4 (forSumThrees)//
//using for loops setting conditions for and the loop. and preform only if i is a multiple of 3 with 0 remainder//
  function forSumThrees() {
    let forloop= 0
    for (let i=1; i<=1000; i++){
      if(i % 3 === 0){
        document.getElementById("button4").innerHTML = forloop +=i
      }
    }
  }

  
//Button for Function 5 (whileSumThrees)//
////using while loops setting conditions for and the loop. and preform only if i is a multiple of 3 with 0 remainder//
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
//finding the multiples if 4,10 and both in console using forloops//
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
//rounding up the the nearest 100 to find the century the input year is in//
  function  centuryFromYear() {
    let yearnum1 = parseInt(prompt("Enter the year please: "))
    if (yearnum1>0){
    document.getElementById("button7").innerHTML= "This year is in the " +  Math.ceil(yearnum1/100)+"th"+ " century"
    }
    else{
      document.getElementById("button7").innerHTML= "Make sure you have entered a real number "
    }
  }


//Button for Function 8 (thirdAngle)//
//assign provided angle varibles, subtract from 180 (total of all angles in triagle) to get last angle//
  function thirdAngle() {
    let angnum1 = parseInt(prompt( "Enter the first angle°"))
    let angnum2 =  parseInt(prompt( "Enter the second angle°"))
    let angnum3 = 180-(angnum1+angnum2)
    if (angnum3>0){
      document.getElementById("button8").innerHTML= "The third angle is " + angnum3+ "°"
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