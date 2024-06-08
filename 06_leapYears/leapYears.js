const leapYears = function (year) {
    let yearNormal = year % 4 == 0;
    let yearCenturyD100 = year % 100 == 0;
    let yearCenturyD400 = year % 400 == 0;

    if (yearNormal && yearCenturyD100) {
        if (yearCenturyD400) {
            return true;
        } else {
            return false;
        }
    } else if (yearNormal) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
