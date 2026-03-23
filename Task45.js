for (let i = 1; i <= 1000; i++) {
    let digits = String(i).split('').map(Number);
    let digitSum = digits.reduce((acc, d) => acc + d, 0);
    let count = digits.length;
    let reversedNumber = Number(String(i).split('').reverse().join(''));
    if (digitSum === reversedNumber) {
        console.log(i);
    }
}
