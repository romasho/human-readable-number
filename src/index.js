function toReadable (number) {
    const arr = ['','one','two','three','four', 'five','six','seven','eight','nine','ten',
    'eleven','twelve', 'thirteen ','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen']
    const arrDozens = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];

    if (number < 20) {return arr[number]}
    else if (number >= 20 && number < 100) {return `${arrDozens[Math.floor(number / 10)]} ${arr[number % 10]}`}
    else if (number > 99) { return console.log(`${arr[Math.floor(number / 100)]} hundred ${arrDozens[Math.floor((number % 100) / 10)]} ${arr[number % 10]}`)}
}

toReadable(72)