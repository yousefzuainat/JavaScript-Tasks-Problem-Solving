for (let i = 1; i <= 1000; i++) {
    let reversed = Number(String(i).split('').reverse().join(''));
    if (Math.abs(i - reversed) % 9 === 0) {
        console.log(i);
    }
}
