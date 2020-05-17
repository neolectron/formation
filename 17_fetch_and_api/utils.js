const getRandomNumber = function(min, max) {
    return Math.floor(min + Math.random() * (max - min));
}

exports.getRandomNumber = getRandomNumber;