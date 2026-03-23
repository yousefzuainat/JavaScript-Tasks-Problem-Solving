for (let i = 1; i <= 500; i++) {   

    let temp = i;  
    let sum = 0;    

    while (temp > 0) {

        let digit = temp % 10;   
        sum += digit;            

        temp = Math.floor(temp / 10); 
    }

    let isPrime = true;

    if (sum <= 1) {
        isPrime = false;
    }

    for (let j = 2; j < sum; j++) {
        if (sum % j === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log(i);
    }
}