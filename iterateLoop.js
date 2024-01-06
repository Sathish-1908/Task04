const jsonData = {
  name: "sathish",
  age: 25,
  city: "Example City",
  skills: ["JavaScript", "HTML", "CSS"],
  isStudent: false,
};

//Using for loop:

for (let key in jsonData) {
  console.log(`${key}: ${jsonData[key]}`);
}
