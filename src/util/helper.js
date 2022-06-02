function printDate()
{
console.log("todays date is 01-june-2022");
}
printDate()

function printMonth()
{
console.log("current month is june");
}
printMonth()
function getBatchInfo()
{
console.log("radon,w3d1,the topic for today is nodejs module system");
}
getBatchInfo()


module.exports.printDate = printDate
module.exports.printMonth = printMonth
module.exports.getBatchInfo = getBatchInfo