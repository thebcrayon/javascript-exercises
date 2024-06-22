const findTheOldest = function (peopleArray) {
    let sorted = peopleArray.sort((a, b) => {
        let currentDate;

        if (a.yearOfDeath === undefined || b.yearOfDeath === undefined) {
            currentDate = (new Date()).getFullYear();
        }

        let ageA = (a.yearOfDeath || currentDate) - a.yearOfBirth;
        let ageB = (b.yearOfDeath || currentDate) - b.yearOfBirth;

        if (ageA > ageB ){
            return -1;
        } else {
            return 1;
        }
    });

    return sorted[0];
};

// Do not edit below this line
module.exports = findTheOldest;
