for (let i = 1; i <= 300; i++) {
    let temp = i;    //35
      //3-5 =2 
    
    while (temp > 0) {
               let LastDigit = temp % 10; //5
               let FirstDigit = Math.floor(temp / 10); //3
               if (LastDigit - FirstDigit == 2) {
                   console.log(i); 
                
               }
               break;
               
    }

   
}

