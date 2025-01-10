// break and continue in the while loop in the java script:

// break in the the java script:
let i =0;
while (i<=10) {
    console.log(i);
    i++;
    if (i==5) {
        break;
    }
}

// continue in the java script:

let j = 0;
while (j<=10) {
    if (j==5) {
        j++;
        console.log(`5 is detected`)
        continue;
    }
    console.log(j);
    j++
}