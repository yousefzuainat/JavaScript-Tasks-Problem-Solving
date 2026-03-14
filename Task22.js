for (let i = 1; i <= 100; i++) {
    //i = 21
    let lastDigit = i % 10; // 1 right
    
    let firstDigit = i; // 21
    while (firstDigit >= 10) {
        firstDigit = Math.floor(firstDigit / 10); // 2 left
    }

    if (firstDigit > lastDigit) {
        console.log(i); 
    }
}
