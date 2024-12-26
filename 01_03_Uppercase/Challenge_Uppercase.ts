type Alphabet =
  | "a"
  | "b"
  | "c"
  | "d"
  | "e"
  | "f"
  | "g"
  | "h"
  | "i"
  | "j"
  | "k"
  | "l"
  | "m"
  | "n"
  | "o"
  | "p"
  | "q"
  | "r"
  | "s"
  | "t"
  | "u"
  | "v"
  | "w"
  | "x"
  | "y"
  | "z";

// https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html
// Statt Capitalize geht hier auch Uppercase
type GermanUppercaseStrings = `${Capitalize<Alphabet>}${string}`;

// das hier reicht nicht aus
// type GermanUppercaseStrings = `${Capitalize<string>}`;

// komplexe Lösung möglich, aber nicht notwendig

export const Output = (s: GermanUppercaseStrings) => {
  console.log(s);
};

Output("sabrina"); // ❌
Output(23); // ❌
Output("23"); // ❌
Output("mark"); // ❌
Output(" Jessy"); // ❌
Output("Jess"); // ✅
Output("David"); // ✅
