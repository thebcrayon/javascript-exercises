const getTheTitles = function(array) {
    return array.map(book => book.title);
    // return array.reduce((ary, book, index) => {
    //     ary[index] = book.title; 
    //     return ary;
    // }, []);
};

// Do not edit below this line
module.exports = getTheTitles;
