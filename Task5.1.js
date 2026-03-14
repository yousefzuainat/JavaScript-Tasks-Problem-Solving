for (let i = 1; i <= 5; i++) {
    let row = "";
    for (let j = 1; j <= 5; j++) {
        if (j <= 5 - i) {
            row += "A";
        }
        else {
            row += String.fromCharCode(64 + i);
        }
    }
    console.log(row);
}
