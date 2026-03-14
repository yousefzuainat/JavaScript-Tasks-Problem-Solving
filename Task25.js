for (let i = 10; i <= 300; i++) {
    //i = 22
    //  22 => (2+2=4)&&(2*2=4)
    let lastDigit = i % 10;  // 2
    
    let firstDigit = i; 

    while (firstDigit >= 10) {
        firstDigit = Math.floor(firstDigit / 10); // 2
    }

    if (firstDigit + lastDigit == firstDigit * lastDigit) {
        console.log(i); 
        console.log(`First ${firstDigit} + Last ${lastDigit} = ${firstDigit+lastDigit}`)
        console.log(`First ${firstDigit} * Last ${lastDigit} = ${firstDigit*lastDigit}`)
    }
}
