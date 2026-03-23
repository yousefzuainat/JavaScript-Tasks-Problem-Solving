for (let i = 1; i <= 200; i++) {
    //56 => 5+6=11
    let sum = 0; 
    let temp = i; //56
    
    while (temp > 0) {
        sum += temp % 10; //6
        temp = Math.floor(temp / 10); //5
    }
    
    
    if (sum > 10) {
        console.log(i);
    }
}