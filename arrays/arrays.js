// Shuffle
function shuffle(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

var array = [50, 88, 153, 617];
shuffle(array);
console.log(array);

// Skyline Heights
function viewOrder(array) {
    var maxHeight = 0;
    var heights = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i] > maxHeight) {
            heights.push(array[i]);
            maxHeight = array[i]
        }
    }
    return heights;
}
var result = viewOrder([-1,1,1,7,3]);
console.log(result);
var result2 = viewOrder([0,4]);
console.log(result2);
var result3 = viewOrder([4,3,8,9,-2,1,6]);
console.log(result3);

// Zip It
function merge(arr1, arr2) {
    var merged = [];
    var largestArr = Math.max(arr1.length, arr2.length);
    for(var i = 0; i < largestArr; i+=1){
        if(arr1[i]){
            merged.push(arr1[i]);
        }
        if (arr2[i]) {
            merged.push(arr2[i]);
        }
    }
    for(var x = 1; x < merged.length; x++) {
        var y = x -1;
        var temp = merged[x];
        while(y >= 0 && merged[y] > temp) {
            merged[y + 1] = merged[y];
            y--
        }
        merged[y+1] = temp;
    }
    
    return merged;
}
var result = merge([4,15,100], [10,20,30,40])
console.log(result)