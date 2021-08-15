module.exports = function toReadable (number) {
    const arr = ['zero','one','two','three','four', 'five','six','seven','eight','nine','ten',
    'eleven','twelve', 'thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen']
    const arrDozens = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];

    if (number < 20) {return arr[number]}
    else if (number >= 20 && number < 100 && number % 10 === 0) {return arrDozens[number /10]}
    else if (number >= 20 && number < 100) {return `${arrDozens[Math.floor(number / 10)]} ${arr[number % 10]}`}
    else if (number > 99 && number % 100 === 0) {return `${arr[number/100]} hundred`}
    else if (number % 100 < 20) { return `${arr[Math.floor(number / 100)]} hundred ${arr[number % 100]}`}
    else if (number % 10 === 0) {return `${arr[Math.floor(number / 100)]} hundred ${arrDozens[Math.floor((number % 100) / 10)]}`}
    else if (number > 99) { return `${arr[Math.floor(number / 100)]} hundred ${arrDozens[Math.floor((number % 100) / 10)]} ${arr[number % 10]}`}
}

