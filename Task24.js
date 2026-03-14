for (let i = 1; i <= 100; i++) {
    //i = 36
    // 3 * 6 = 18        => 36 / 18 = 2
    let lastDigit = i % 10; // 6
    
    let firstDigit = i; // 36

    let m=0

    while (firstDigit >= 10) {

        firstDigit = Math.floor(firstDigit / 10); // 3 
        
        m = firstDigit * lastDigit;
    }


    if (i % m == 0) {
        console.log('Frist * Last = ',m)
        console.log(`${i} / ${m} = ${i/m}`); 
    }
}
