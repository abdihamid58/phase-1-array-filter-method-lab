// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];

function findMatching(drivers, Sammy){
    
    return drivers.filter(function (driver){
        return driver.toLowerCase() === Sammy.toLowerCase()
    })
};

function fuzzyMatch(drivers, Sammy){
    return drivers.filter(function (driver){
        return driver.toLowerCase().substring(0, Sammy.length) === Sammy.toLowerCase()
    })
};
function matchName(drivers,Sally){
    return drivers.filter(function (driver) {
        return driver.name === Sally
    })
}