// Object Destructuring
const band = {
    bandName: "led Zeppelin",
    famousSong: "stairway to heaven",
    year: 1968,
    anotherFamousSong: "Kashmir"
};
// const var1 = band.bandName;
// const var2 = band.famousSong;
// console.log(var1, var2);

const {bandName, famousSong} = band; // Object Destructuring.
console.log(bandName);

// const {bandName: var1, famousSong: var2} = band;
// console.log(var1, var2);

// const {bandName, famousSong, ...restProps } = band;
// const {var1, var2, ...restProps } = band;
// console.log(restProps);