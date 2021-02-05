function generateRandomNumber(Issue_number)  {
    const numbers = [...Array(90000).keys()].map(n => n + 10000);
    let filteredNumbers = numbers;
    let timeStamp = new Date().valueOf();
    let rand = 0;
    const currentTimeStamp = new Date().valueOf();
    if (timeStamp === currentTimeStamp && rand !== 0) {
        filteredNumbers = filteredNumbers.filter(n => n !== value)
    } else {
        timeStamp = currentTimeStamp;
        filteredNumbers = numbers;
    }
    rand = filteredNumbers[Math.floor(Math.random() * filteredNumbers.length)];
    let out=parseInt(new Date().valueOf() + "" + rand, 10);
    out=Issue_number+out.toString()
    return out
}
module.exports = generateRandomNumber