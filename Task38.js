for (let i = 1; i <= 300; i++) {
    let str = String(i);
    let lastDigit = Number(str[str.length - 1]);
    let firstDigit = Number(str[0]);
    if (lastDigit * lastDigit === firstDigit) {
        console.log(i);
    }
}
