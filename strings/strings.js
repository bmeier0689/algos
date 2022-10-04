// Remove Blanks
function addRemoveBlanks() {
    var string = "Pl ayTha tF u nkyM usi c";
    var array = string.split(" ");
    console.log(array.join(""));
}

addRemoveBlanks();

// Get Digits
function getDigits() {
    var randomString = ("0s1a3y5w7h9a2t4?6!8?0")
    var newArr = randomString.split("");
    var newStr = [];
    for (var i = 2; i < newArr.length; i += 2){
        newStr.push(newArr[i]);
    }
    console.log(newStr.join(""));
}

getDigits();

// Acronyms
function makeAcronym(str) {
    var strArr = str.split(' ');
    var acronym = "";
    for (var x in strArr) {
        acronym += x.charAt(0);
    }
    return acronym
}

var string = makeAcronym("there's no free lunch - gotta pay yer way.")
console.log(string)