/**
 * Project Euler #9
 */

// aˆ2 + bˆ2 = cˆ2
// a < b < c
// a + b + c = 1000
//
// Find product abc

const getTriple = (m: number, n: number): [number, number, number] => {
    return [
        (Math.pow(m, 2) - Math.pow(n, 2)),
        2 * m * n,
        (Math.pow(m, 2) + Math.pow(n, 2)),
    ];
}

const isTripleEqual = (triple: [number, number, number]) => (target: number): boolean => {
    return triple.reduce((prev, curr) => prev + curr, 0) === target;
}

const getProduct = (sumOfSides: number) => {
    let m = 2;
    let n = 1;
    // Using sumOfSides here is a bit overkill
    // But, optimizing on this wasn't the point of the exercise.
    for (let i = m; i < sumOfSides; i++) {
        for (let j = n; j < sumOfSides; j++) {
            if (i === j) break;
            const t = getTriple(i, j);
            if (isTripleEqual(t)(sumOfSides)) {
                console.log("Generating integers", [i, j]);
                console.log("Pythagorean Triple", t);
                return t.reduce((prev, curr) => prev * curr);
            }
        }
    }
    throw new Error("Not Found");
}

try {
    console.log("Product of abc when a+b+c = 1000: ", getProduct(1000));
} 
catch({ message }) {
    console.log(message);
}

