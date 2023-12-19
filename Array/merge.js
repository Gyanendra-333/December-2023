let data = [1, 2, 3, 4];
let data1 = [5, 6, 7, 8];
let data2 = [];

for (let i = 0; i < data.length; i++) {
    data2[i] = data[i];
}
for (let i = 0; i < data1.length; i++) {
    data2[data.length + i] = data1[i];
}
console.log(data2);