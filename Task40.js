for (let i = 1; i <= 1000; i++) {
    let sum = String(i).split('').reduce((acc, d) => acc + Number(d), 0);
    if (sum === 15) {
        console.log(i);
    }
}
