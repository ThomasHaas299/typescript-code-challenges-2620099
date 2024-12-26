const personDefinition = {
  name: "David",
  age: 2000,
  gender: "male",
};

const personExtension = {
  hobbies: ["Klettern"],
};

type WantedType = {
  name: typeof personDefinition.name;
  hobbies?: typeof personExtension.hobbies;
};

const newObject:WantedType = {
  name:"Boris"
}

// Utility-Types: Pick
// https://www.typescriptlang.org/docs/handbook/utility-types.html#picktype-keys

type WantedType1 = Pick<typeof personDefinition, "name"> &
Partial<Pick<typeof personExtension, "hobbies">>

const newObject1: WantedType1 = {
  name:"Jan"
}
const newObject2: WantedType1 = {
  name:"Jan",
  hobbies: ["tauchen", "campen"]
}
const newObject3: WantedType1 = {
  name:"Falsch",
  age:23
}

export {};
