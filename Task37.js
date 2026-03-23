for (let i = 1; i <= 500; i++) {
    let reversed = Number(String(i).split('').reverse().join(''));
    if (reversed % 2 === 0) {
        console.log(i);
    }
}
