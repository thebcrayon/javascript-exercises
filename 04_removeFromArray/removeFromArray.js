const removeFromArray = function (arrayToCheck, ...args) {
    let output = arrayToCheck.filter((item) => !args.includes(item))
    return output;
};

// Do not edit below this line
module.exports = removeFromArray;
