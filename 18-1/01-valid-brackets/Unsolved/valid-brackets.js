// Write a function to take a string and return true if it contains valid sets of matching brackets, else return false

var str1 = "} )";
var str2 = "{ } [ ( [] ) ]";
var str3 = "( [ ) ]";

//rules
//if theres is a starting ({{ there has to be a }})
//order matters

const validBrackets = function (str) {
    let starting = ['(', '{', '['];
    let ending = [')', '}', ']'];
    let relationObj = {
        '{': '}',
        '[': ']',
        '(': ')'
    };
    let arr = str.split('');
    let current = '';
    let queue = [];
    for (let bracket of arr) {
        if (ending.includes(bracket)) {
            if (relationObj[current] === bracket) {
                current = '';
            } else {
                return false;
            }            
            if (queue.length > 0) {
                current = queue.pop();
            }
        } else if (starting.includes(bracket)) {
            if (current !== "") {
                queue.push(current);
            }
            current = bracket;
        }
    }
    if (current !== "") {
        return false;
    }
    return true;
};

console.log(validBrackets(str1), 'true');
// console.log(validBrackets(str2),'true');
// console.log(validBrackets(str3),'false');

