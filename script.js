let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);

//Evaluating the expression on the calculator
arr.forEach(button => {
    button.addEventListener('click', (e) =>{
        //If equals is pressed
        if(e.target.innerHTML == '='){
            string = eval(string);
            input.value = string;
        }
        //If all clear is pressed we clear the expression entirely
        else if(e.target.innerHTML == 'AC'){
            string = "";
            input.value = string;
        }
        //If DEL is pressed then we delete just the last character
        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1);
            input.value = string;
        }
        //For any other button we just add to the expression
        else{
            string += e.target.innerHTML;
            input.value = string;
        }
        
    })
})