for (let i = 1; i <=5; i++) {
    let row = "";
    for (let j = 1; j <= 5; j++) {
        if (j <= 5-i) {
            // i = 1 -> j <= 4 -> 4 times
            // i = 2 -> j <= 3 -> 3 times
            // i = 3 -> j <= 2 -> 2 times
            // i = 4 -> j <= 1 -> 1 time
            // i = 5 -> j <= 0 -> 0 times
            row += "1 ";
        }
        else {
            row += i + " ";
        }
    }
    console.log(row);
}