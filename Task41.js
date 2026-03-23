for (let i = 1; i <= 1000; i++) {
    let digits = String(i).split('').map(Number);
    let sum = digits.reduce((acc, d) => acc + d, 0);
    let product = digits.reduce((acc, d) => acc * d, 1);
    if (sum === product) {
        console.log(i);
    }
}
