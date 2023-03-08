// IMPORT THE MODULE

// COLLECT FIRST NUMBER FROM USER
// COLLECT SECOND NUMBER FROM USER
// COLLECT OPERATION TO PERFORM (+,-,*,/) FROM USER

// CHECK TO SEE WHAT OPERATION THEY'RE USING
// CALL THE APPROPRIATE FUNCTION

let x=prompt("Please Enter the First Number:");
let y=prompt("Please Enter the Second Number:");
let operator=prompt("Please select the operation: + , - , * , /");

function calculate (x,y) {

    add();
    subtract();
    multiply();
    divind();
}

    function add ( x , y){
        if (operator=="+"){
            document.write(x+y);
        }
    }

    function subtract ( x , y ){
        if (operator=="-"){
            document.write(x-y);
        }
    }

    function multiply(x,y){
        if (operator=="*"){
            document.write(x*y);
        }
        
    }

    function divind (x,y){
        if (operator=="/"){
            document.write(x/y);
        }
       
    }
   