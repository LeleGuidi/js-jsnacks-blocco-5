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

let total = 0;
for (let i = 0; i < 10; i++) {
    total += zucchine[i].weight;
}
console.log(total)
