var n = 9;
var ar = [10, 20, 20, 10, 10, 30, 50, 10, 20];
var count = 0;

for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
        if (ar[i] === ar[j]) {
            ar.splice(i, 1);
            ar.splice(j-1, 1);
            count++;
            i = -1;
            n = ar.length;
            break;
            // ar[i] = ar[0];
        }
    }
}

console.log(count);