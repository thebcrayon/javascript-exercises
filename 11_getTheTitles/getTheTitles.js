const getTheTitles = function(array) {
    return array.reduce((ary, book, index) => {
        ary[index] = book.title; 
        return ary;
    }, []);
};

// Do not edit below this line
module.exports = getTheTitles;
