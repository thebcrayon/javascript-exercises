const fibonacci = function (pos) {
    const seq = [1,1,2,3];
    let num = 0;

    if (pos > 0){
        for (let i = 0 ; i < pos ; i++){
            num = seq[seq.length - 1] + seq[seq.length - 2];
            seq.push(num);
        }
    } else if (pos < 0){
        return 'OOPS';
    } else {
        return 0;
    }

    //starting from i = 1
    //at each iteration of i, calculate current value based on 2 numbers before
    //push that total to the next avaialble space in sequence.
    //take the new sequence and build upon it with num = i - 2 + i - 1 
    //push that value to end of sequence array.
    //do this up to nth argument.
    return seq[pos-1];
};

// Do not edit below this line
module.exports = fibonacci;
