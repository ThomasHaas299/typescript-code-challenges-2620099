// Task 1:
type XYTuple = [number, number];

const XY: XYTuple = [12, 39];
const XY_Wrong: XYTuple = [12, 39, 20];

// Task 2:
// Spread-Operator:  https://www.typescriptlang.org/docs/handbook/variable-declarations.html#spread
type NameAgeHobbyTuple = [string, number, string, ...string[]];
const NameAgeHobby: NameAgeHobbyTuple = ["Anny", 25, "Surfing"];
const NameAgeHobby1: NameAgeHobbyTuple = ["Anny", 25, "Surfing", "Reading"];

const NameAgeHobby_Wrong: NameAgeHobbyTuple = ["Anny", 25];
const NameAgeHobby_Wrong1: NameAgeHobbyTuple = ["Anny", 25, 30];

export {};
