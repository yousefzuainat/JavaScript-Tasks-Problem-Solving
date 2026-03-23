for (let i = 1; i <= 500; i++) {
    let digits = String(i).split('');
    let sum = digits.reduce((acc, d) => acc + Number(d), 0);
    let count = digits.length;
    if (sum % count === 0) {
        console.log(i);
    }
}
