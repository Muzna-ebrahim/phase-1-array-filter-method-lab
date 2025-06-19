// Code your solution here
function findMatching (drivers, Name) {
    return drivers.filter(driver => driver.toLowerCase() === Name.toLowerCase());
}

function fuzzyMatch (drivers, names) {
    return drivers.filter(driver => driver.toLowerCase().startsWith(names.toLowerCase()));
}

function matchName (drivers, name) {
    return drivers.filter(driver => driver.name.toLowerCase() === name.toLowerCase());
}