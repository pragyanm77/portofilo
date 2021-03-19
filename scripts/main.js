//button for toggling website theme//

function myFunction() {
    var element = document.body;
    element.classList.toggle("light-mode");

}

//Button for Function 1 (larger number)//
function largernumber() {
    let num1 = paresInt(promt("Insert a NUMBER"));
    let num2 = paresInt(promt("Insert a another NUMBER"));

    if (num1>num2) {
      document.getElementById("button1").innerHTML=(num1 + "is bigger")
    }
    else if (num1 < num2){
      document.getElementById("button1").innerHTML=(num2 + "is bigger")
    }
    else if (num1 === num2){
      document.getElementById("button1").innerHTML=("Nice try, its the same number. Try again")
    } 
    else{
      document.getElementById("button1").innerHTML=("Put some numbers in and Try again")
    }
  
//Button for Function 2//
  function function2() {
    alert('Something very cool coming soon (Assignment B)')
    } 

//Button for Function 3//
  function function3() {
    alert('Something very cool coming soon (Assignment C)')
    } 
  
//Button for Function 4//
  function function4() {
    alert('Something very cool coming soon (Assignment D)')
    } 
  
//Button for Function 5//
  function function5() {
    alert('Something very cool coming soon (Assignment E)')
    } 

//Button for Function 6//  
  function function6() {
    alert('Something very cool coming soon (Assignment F)')
    } 
  
//Button for Function 7//
  function function7() {
    alert('Something very cool coming soon (Assignment G)')
    } 

//Button for Function 8//
  function function8() {
    alert('Something very cool coming soon (Assignment H)')
    } 

//Button for Function 9//
  function function9() {
    alert('Something very cool coming soon (Assignment I)')
    } 
