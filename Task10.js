let r = "Orange Coding School"
let num =0;
for (let i = 1; i <= r.length; i++) {
    if (r[i] == "c"||r[i]=="C") {
        num++;
    }
    continue;
}
console.log(num);

// using to lower case 
/*    

    let text = "Orange Coding School".toLowerCase();
    let count = 0;

    for (let i = 0; i < text.length; i++) {
        if (text[i] === "c") {
            count++;
        }
    }

    console.log(count);


*/


console.log("------| Way 2 |------");

let text = "Orange Coding School";
let count = text.toLowerCase().split("c").length - 1;

console.log(count);
//split() = split the string into an array of strings  [Coding] [School]
