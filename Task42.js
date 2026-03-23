for (let i = 1; i <= 1000; i++) {
    let reversed = Number(String(i).split('').reverse().join(''));
    if (reversed === i + 9) {
        console.log(i);
    }
}
