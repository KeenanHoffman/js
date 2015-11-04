/*var i = 1;
while (i <= 10) {
    if (i % 2 === 0) {
        console.log(i+"(even)");
    } else {
        console.log(i+"(odd)");
    }
    i++;
}
 for (i = 1; i <= 10; i++) {

    if (i % 2 === 0) {
        console.log(i+"(even)");
    } else {
        console.log(i+"(odd)");
    }
 }
var i = 1;
while (i <= 4) {
    console.log("Conference " +i);
    for (j = 1; j <= 4; j++) {
    console.log("Team " +j);
    }
    i++;
}
j = 1;
for (i = 1; i <= 4; i++) {
    console.log("Conference " +i);
    j = 1;
    while (j <= 4) {
        console.log("Team "+j);
        j++;
    }
}
for (i = 1; i <= 5; i++) {
    j = i * 11;
    console.log("11 times "+i+" equals "+j);
}

i = 1;
while (i <= 5) {
    j = i * 11;
    console.log("11 times "+i+" equals "+j);
    i++;
}*/
function recur(n) {
    if (n % 2 === 0) {
        console.log(n+"(even)");
    } else {

        console.log(n+"(odd)");
    }
    n = n + 1;
    if (n >= 11) {
        return "Done!";
    }
    recur(n);
}
recur(1);
