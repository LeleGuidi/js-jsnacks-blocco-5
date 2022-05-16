class zucchina {
    constructor (variety, weight, length) {
        this.variety = variety;
        this.weight = weight;
        this.length = length;
    }
}
const zucchine = [];

const zucchina1 = new zucchina ("variety1", 1, 5)
const zucchina2 = new zucchina ("variety2", 3, 2)
const zucchina3 = new zucchina ("variety3", 2, 4)
const zucchina4 = new zucchina ("variety4", 5, 10)
const zucchina5 = new zucchina ("variety5", 1, 3)
const zucchina6 = new zucchina ("variety6", 3, 7)
const zucchina7 = new zucchina ("variety7", 6, 15)
const zucchina8 = new zucchina ("variety8", 3, 5)
const zucchina9 = new zucchina ("variety9", 6, 9)
const zucchina10 = new zucchina ("variety10", 3, 5)

zucchine.push(zucchina1)
zucchine.push(zucchina2)
zucchine.push(zucchina3)
zucchine.push(zucchina4)
zucchine.push(zucchina5)
zucchine.push(zucchina6)
zucchine.push(zucchina7)
zucchine.push(zucchina8)
zucchine.push(zucchina9)
zucchine.push(zucchina10)
console.log(zucchine)

let total = 0;
for (let i = 0; i < 10; i++) {
    total += zucchine[i].weight;
}
console.log(total)
