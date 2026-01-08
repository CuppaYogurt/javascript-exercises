const removeFromArray = function(arr, ...remove) {

    //let removed = arr.filter(item => (item, remove) ? item != remove : removed += item);
    //return removed;
    //The above code only works if it accepted one argument

    //return arr.filter(item => (item != remove))
    //how to get function to accept multiple parameters
    return arr.filter ( item => !remove.includes(item) );
    
};

// Do not edit below this line
module.exports = removeFromArray;
