var isValid = function(expr) {

    if (expr.replace(/[\(\)\{\}\[\]]/g,"") !== "") {
        return false; // invalid string
    }

    let stack = [];

    for (let i = 0; i < expr.length; i++) {
        if (expr[i] === "(") {
            stack.push(")");
        } else if (expr[i] === "[") {
            stack.push("]");
        } else if (expr[i] === "{") {
            stack.push("}");   
        } else { // encountered a closing bracket
            if (expr[i] !== stack.pop()) {
                return false;
            }
        }
    }

    return stack.length === 0;

};

let expr = "([{()])";

if (isValid(expr)) {

  console.log("Balanced ");

} else {

  console.log("Not Balanced ");

}

// Time Complexity : O(n)

// Auxiliary Space : O(n)