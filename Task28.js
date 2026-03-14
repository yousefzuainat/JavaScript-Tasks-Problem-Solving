//does not work with  3 digits  ? 
for (let i = 1; i <= 300; i++) {
    let temp = i;    //23 => 2<3
      
    
    while (temp > 0) {
               let LastDigit = temp % 10; //3
               let FirstDigit = Math.floor(temp / 10); //2
               if (LastDigit > FirstDigit) {
                   console.log(`${i} => LastDigit ${LastDigit} > FirstDigit ${FirstDigit}`)
                
               }
               break;
               
    }

   
}

