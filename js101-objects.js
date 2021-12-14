objectName = {
    firstName: "Kristen",
    lastName: "Bartel",
    progLang: "javaScript",
    currentDate: "14th",
    flower: "lily",
}

const aName = "firstName"
objectName.currentMonth = "December"
objectName.currentYear = 2021

function intro() {
    return (`Hello I am ${objectName.firstName} ${objectName.lastName}.`);
    
}
console.log(intro());


function theDate() {
    return (`It is the ${objectName.currentDate} of ${objectName.currentMonth}, ${objectName.currentYear}`);
}
console.log(theDate());

objectName.progLang = "css"
function learning() {
    return (`I am currently learning ${objectName.progLang}!`);
}
console.log(learning());

objectName.weather = "cloudy"
// adding an key value pair
delete objectName.flower
// deleting a key value pair
console.log(objectName);
// printing Object

