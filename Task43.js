for (let i = 1; i <= 1000; i++) {
    let square = i * i;
    let strI = String(i);
    let strSquare = String(square);
    if (strSquare.endsWith(strI)) {
        console.log(i);
    }
}
