for (let i = 1; i <= 300; i++) {
    //123 => 1+2=3
    let temp = i; //123
    let f = 0;

    let LastDigit = temp % 10; //3
    temp = Math.floor(temp / 10); //12

    while (temp > 0) {
        let digit = temp % 10; //1
        f += digit; //1

        temp = Math.floor(temp / 10); //12
    }

    if (f == LastDigit) {
        console.log(i);
    }
}