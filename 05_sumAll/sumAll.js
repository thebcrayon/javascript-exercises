const sumAll = function (sumStart, sumEnd) {
    let anyTypeError = (
        typeof sumStart !== 'number' ||
        typeof sumEnd !== 'number' ||
        sumStart < 0 ||
        sumEnd < 0 
    );

    if (anyTypeError) {
        return 'ERROR';
    }

    let startIndex = sumStart;
    let endIndex = sumEnd;
    let totalSum = 0;
    
    if (sumStart > sumEnd) {
        startIndex = sumEnd;
        endIndex = sumStart;
    }

    let i = startIndex;
    while (i <= endIndex) {
        totalSum += i;
        i++;
    }
    return totalSum;
};

// Do not edit below this line
module.exports = sumAll;
