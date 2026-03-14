for (let i = 1; i <= 500; i++) {
    let temp = i;   //123
    let reverse = 0;
      
    while (temp > 0) {//1:123  2:12  3:1  4:0
        let lastDigit = temp % 10;            // 1:3    2:2    3:1 
        reverse = (reverse * 10) + lastDigit; // 1:3    2:32   3:320 + 1 = 321 
        temp = Math.floor(temp / 10);         // 1:12   2:1    3:0 
    }

    if (reverse % 3 === 0) {
        console.log(`Number: ${i}`); 
        console.log(`Reverse: ${reverse}\n`);
        console.log(`${reverse} % 3 = 0`);
        console.log("-----------------"); 
    }
}

/*
25 
25 % 10 =5 
25 / 10 =2.5 usnig floor(2.5) = 2


*/