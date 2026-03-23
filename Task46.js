for (let i = 1; i <= 1000; i++) {
    let sum = String(i).split('').reduce((acc, d) => acc + Number(d), 0);
    if (sum * sum === i) {
        console.log(i);
    }
}
