
const theNames = ["Kristen", "Bartel", "javaScript"];
const today = [12, 14, 21];
// const intro = theNames.length;

// function printArr(theName, datesFree) {
//     for (let i = 0; i < theNames.length; i++) {
//         console.log(theNames[i]);
//     }
// }


// console.log(theNames.join('! '));
// console.log(theNames[0] + theNames[1] + theNames[2]);
// console.log(`hello my name is ${theNames.length}`);

function greeting() {
    //theNames.push("yay!"); work on this one later
    today[4] = 30
// couple ways to add/push into an array above
    theNames.splice(2, 0, "I am learning");
    theNames.splice(3, 2, "HTML/CSS");
// these are ways to insert items at a specific index location
// the first value is the start point, the second value is the item you want to delete (if any)
    return (`Hello my name is ${theNames.join(' ')}. The date is ${today.join('-')}!`);
}

// console.log(greeting());
// //  console.log(theNames);
// console.log(theNames[3]);
// console.log(theNames.length);


const langs = ["HTML", "CSS", "JavaScript", "React", "Bananas"]
function introduction() {
    
    langs.pop();
    langs.push("Node");
    return (`I am learning ${langs.join(', ')}!`);
}
console.log(introduction(langs));
// how to add the word and in this sentence using this syntax