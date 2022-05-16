
let zucchine = [
    {
        variety: `variety1`,
        weight: 3,
        length: 4,
    },
    {
        variety: `variety2`,
        weight: 3,
        length: 16,
    },
    {
        variety: `variety3`,
        weight: 2,
        length: 4,
    },
    {
        variety: `variety4`,
        weight: 5,
        length: 10,
    },
    {
        variety: `variety5`,
        weight: 1,
        length: 3,
    },
    {
        variety: `variety6`,
        weight: 3,
        length: 7,
    },
    {
        variety: `variety7`,
        weight: 6,
        length: 15,
    },
    {
        variety: `variety8`,
        weight: 3,
        length: 5,
    },
    {
        variety: `variety9`,
        weight: 6,
        length: 17,
    },
    {
        variety: `variety10`,
        weight: 3,
        length: 5,
    }
]

let zucchinePiccole = [];
let zucchineGrandi = [];

for (let i = 0; i < 10; i++) {
    if ( zucchine[i].length < 15) {
        zucchinePiccole.push(zucchine[i])
    } else {
        zucchineGrandi.push(zucchine[i])
    }
}

let totalPiccole = 0;
let totalGrandi = 0;

for (let i = 0; i < zucchinePiccole.length; i++) {
    totalPiccole += zucchinePiccole[i].weight
}
for (let i = 0; i < zucchineGrandi.length; i++) {
    totalGrandi += zucchineGrandi[i].weight
}

console.log(totalPiccole, totalGrandi)
