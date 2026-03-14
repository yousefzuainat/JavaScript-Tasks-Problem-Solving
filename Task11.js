for (let i = 0; i <=5; i++) {
    for (let j = 0; j <=5; j++) {
        console.log(`${i} * ${j} = ${i*j}`);    
    }    
    console.log("----------------");
}
///
console.log("------| Way 2 |------");
///
for (let i = 1; i <= 5; i++) {
    let row = ""; 
    for (let j = 1; j <= 5; j++) {
        row += `${i} * ${j} = ${i * j}`;
        if (j < 5) row += "   "; 
    }
    console.log(row); 
}