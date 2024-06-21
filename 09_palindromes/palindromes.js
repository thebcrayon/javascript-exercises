const palindromes = function (string) {
    const allowedCharacters = 'abcdefghijklmnopqrstuvwxyz0123456789';

    const regularString = string
        .toLowerCase()
        .split('')
        .filter(character => allowedCharacters.includes(character))
        .join('');

    const reversedString = regularString.split('').reverse().join('');

    return (regularString === reversedString);

    // let regEx = /[.,\/#!$%\^&\*;:{}=\-_`~()\s]/g;
    // const orginalStringArray = string.toLowerCase().replace(regEx, '').split('');
    // const reversedStringArray = string.toLowerCase().replace(regEx, '').split('').reverse();
    // let isPalindrome = true;

    // for (let i = 0; i < orginalStringArray.length; i++) {
    //     let letterMatch = (orginalStringArray[i] === reversedStringArray[i]);
    //     if(!letterMatch){
    //         isPalindrome = false;
    //         break;
    //     }
    // }

    // return isPalindrome;
};

// Do not edit below this line
module.exports = palindromes;
