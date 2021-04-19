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
//enter 3 numbers, progarm multiplies the numbers and gives sign of the product (why testing is it is elow or above 0)//
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
//enter 3 numbers and sort from low to high. each number is assigned a varible, then one of the 6 possiblities is outputed//
  function threeNumberSort() {
    let sortnum1 = parseInt(prompt("Insert a NUMBER"));
    let sortnum2 = parseInt(prompt("Insert a another NUMBER"));
    let sortnum3 = parseInt(prompt("Insert one more NUMBER"));
    

    if (sortnum1 <= sortnum2 && sortnum2 <= sortnum3){
      document.getElementById("button3").innerHTML = sortnum1+ "<" + sortnum2 + "<" + sortnum3;
    }
    else if (sortnum1 <= sortnum3 && sortnum3 <= sortnum2){
      document.getElementById("button3").innerHTML = sortnum1+ "<" + sortnum3 + "<" + sortnum2;
    }
    else if (sortnum2 <= sortnum1 && sortnum1 <= sortnum3){
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
//using for loops setting conditions for and the loop. and preform only if i is a multiple of 3 with 0 remainder. The output is the sum of all multiples of 3's up to 1000 //
  function forSumThrees() {
    let runningTotal= 0;
    let sumOfThrees=0;
    for (let i=1; i<=1000; i++){
      if(i % 3 === 0){
        sumOfThrees = runningTotal +=i;
      }
    }
    document.getElementById("button4").innerHTML= sumOfThrees;
  }

  
//Button for Function 5 (whileSumThrees)//
////using while loops setting conditions for and the loop. and preform only if i is a multiple of 3 with 0 remainder. The output is the sum of all multiples of 3's up to 1000//
  function whileSumThrees() {
  let runningtotal= 0;
  let i = 0;
    while(i<1000){
      i++
      if(i%3===0){
        document.getElementById("button5").innerHTML = runningtotal += i;
      }
    }  
  }

//Button for Function 6 (tenFour)//  
//finding the multiples if 4,10 and both in console using forloops. outputs onto console.log//
  function tenFour() {
    let forloop = 0
    for (let i=1; i<=100; i++){
      if (i%4===0 && i%10===0){
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
//rounding up the the nearest 100 to find the century the input year is in by using math.ceil//
  function  centuryFromYear() {
    let yearnum1 = parseInt(prompt("Enter the year please: "))
    if (yearnum1>0){
      // math.ceil rounds the number up to the nearest 100 //
      document.getElementById("button7").innerHTML= "This year is in the " +  Math.ceil (yearnum1/100) +"th"+ " century"
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


//Button for Function 9 (encryptor)//
  function encryptor() {
    let plaintext = prompt("Enter your plaintext message:"); // enter a plain text which will be encrypted
    let bintext = "";
    for (i = 0; i < plaintext.length; i++) { //forloop going throught each character one by one
    bintext += plaintext[i].charCodeAt(0).toString(2) + " "; //each letter is being covnvered to binary using charcode, 2 setting it to base 2
  }
  let ciphertext= bintext.split("").reverse().join(""); // the converted text is now being split then reversed and then joined back again
    document.getElementById("button10").innerHTML= ciphertext // the encrypted code is not displayed on the button
  }

  //Button for Function 10 (decryptor)//
  function decryptor() {
    let plaintext = prompt("Enter your plaintext message:"); // enter the encrypted text
    let reversetext= plaintext.split("").reverse().join(""); // reverse the encypted code by splitting, reversing and then rejoining
    let bintext = reversetext.split(" ")  // new varible for the reversed text to be split so there is now binary text which can go throught the loop
    let deciphertext= [];
    for (i = 0; i < bintext.length; i++) { // forloop going through each charater 
      deciphertext.push(String.fromCharCode(parseInt(bintext[i],2))); // .push lets us know the new lenght which is then turned from binary to plaintext. using the string.fromcharcode we convert it to plaintext (2 tells progarm that the base is 2)  
    }
    let final= deciphertext.join(""); //join the text
    document.getElementById("button11").innerHTML= final // print final decoded message on button
  }
