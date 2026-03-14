for (let i = 1; i <= 100; i++) {
    //i = 22
    let lastDigit = i % 10; // 2
    
    let firstDigit = i; // 22

    while (firstDigit >= 10) {

        firstDigit = Math.floor(firstDigit / 10); // 2 left
        
    }

    if (firstDigit == lastDigit) {
        console.log(i); 
    }
}
