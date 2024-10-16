/**
 * Project Euler #9
 */
// aˆ2 + bˆ2 = cˆ2
// a < b < c
// a + b + c = 1000
//
// Find product abc
const getTriple = (m, n) => {
    return [
        (Math.pow(m, 2) - Math.pow(n, 2)),
        2 * m * n,
        (Math.pow(m, 2) + Math.pow(n, 2)),
    ];
};
const isTripleEqual = (triple) => (target) => {
    return triple.reduce((prev, curr) => prev + curr, 0) === target;
};
const getProduct = (sumOfSides) => {
    let m = 2;
    let n = 1;
    for (let i = m; i < sumOfSides; i++) {
        for (let j = n; j < sumOfSides; j++) {
            if (i === j)
                break;
            const t = getTriple(i, j);
            if (isTripleEqual(t)(sumOfSides)) {
                console.log("Generating integers", [i, j]);
                console.log("Pythagorean Triple", t);
                return t.reduce((prev, curr) => prev * curr);
            }
        }
    }
    throw new Error("Not Found");
};
try {
    console.log("Product of abc when a+b+c = 1000: ", getProduct(1001));
}
catch ({ message }) {
    console.error(message);
}
//# sourceMappingURL=index.js.map