/* const = a variable that can't be changed once you assign them
    the reason why we would use const for things like pi, 
    it's so that if you or someone else accidentally
    changed the value of pi later in the code, it's going to
    change the whole program
    
    by assigning const to pi, pi will forever be 3.14159
    it's an extra security measure
*/

const pi = 3.14159;
let radius;
let circumference; 

// when we click on the submit button, whatever inside the function happens
document.getElementById("mySubmit").onclick = function(){
    // get the value from the text box and assign it to radius
    radius = document.getElementById("myText").value;
    // type cast the radius into a number
    radius = Number(radius);
    circumference = 2 * pi * radius;
    //change the text element of H3 to the circumference
    document.getElementById("myH3").textContent = circumference + "cm";
}