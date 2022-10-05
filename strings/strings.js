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
function firstLetter(word) {
    return word[0];
}
function makeAcronym(str) {
    var words = str.split(" ");
    var acronym = words.map(firstLetter);
    return acronym.join("").toUpperCase();
}

var str = "there's no free lunch - gotta pay yer way.";
var acr = makeAcronym(str);
console.log(acr);

var str2 = "Live from New York, it's Saturday Night!";
var acr2 = makeAcronym(str2);
console.log(acr2);

// Zip Arrays into Dictionary
var keys = ["abc", 3, "yo"];
var values = [42, "wassup", true];
function buildMap(keys, values) {
        var map = new Map();
        for (var i = 0; i < keys.length; i++) {
            map.set(keys[i], values[i]);
        }
        return map;
    }

console.log(buildMap(keys, values));

// Invert Hash
function inverse(obj) {
    var inverseHash = {};
    for (var key in obj) {
        inverseHash[obj[key]] = key;
    }
    return inverseHash;
}
var obj = {
    "name": "Zaphod",
    "charm": "high",
    "morals": "dicey"
};

console.log(inverse(obj));