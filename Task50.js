for (let i = 1; i <= 1000; i++) {
    let reversed = Number(String(i).split('').reverse().join(''));
    if ((i * reversed) % 10 === 1) {
        console.log(i);
    }
}
