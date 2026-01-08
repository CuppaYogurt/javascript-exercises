function sumAll (a, b) {
    let total = 0;
    let start;
    let end;

    if (a < b) {
        start = a;
        end = b;
    } else {
        start = b;
        end = a;
    }

    
    if (typeof start != 'number' || typeof end != 'number') {
        total = 'ERROR'
        return total;
    }
    else if (start >= 0 && end > 0 && start % 1 === 0 && end % 1 === 0) {
        for (let i = start ; i <= end ; i++) {
        total += i;
        }
        return total;
    } else {
        total = 'ERROR';
        return total;
    }

};

// Do not edit below this line
module.exports = sumAll;
