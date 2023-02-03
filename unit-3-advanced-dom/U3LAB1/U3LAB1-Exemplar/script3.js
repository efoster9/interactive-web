// Array Iteration

// filter, map, forEach / for of, [stretch: reduce]

/******** Part 1 ********/

fav_foods = ["Cheeseburger", "Ramen", "Tamales", "Bulgogi", "Donuts"];


// 1. Console log the sentence "I like ______" 5 times, with a food filling the blank each time.

// 2. Produce this: ["⭐️CHEESEBURGER⭐️","⭐️RAMEN⭐️","⭐️TAMALES⭐️","⭐️BULGOGI⭐️","⭐️DONUTS⭐️"]

// 3. Produce a shortened list of just the words with the letter "e" in them.

// 4. Produce the total number of letters in all five strings combined.

// 5. Produce a shorter list of all the words at least 7 letters long.

// 6. [Spicy] Produce this: ["C","R","T","B","D"]



/******** Part 2 ********/


const people = [
  {
    name: "Yhadira",
    nickname: "Deary",
    age: 18,
    animal: "Cat",
    born: "Queens",
  },
  {
    name: "Kadiatou",
    nickname: "Kadi-B",
    age: 17,
    animal: "Ferret",
    born: "The Bronx",
  },
  {
    name: "Isiah",
    nickname: "Izzy",
    age: 16,
    animal: "Dog",
    born: "Manhattan",
  },
  {
    name: "Yadelin",
    nickname: "Loki",
    age: 19,
    animal: "Sloth",
    born: "The Bronx",
  },
  {
    name: "Darius",
    nickname: "Yaddy",
    age: 17,
    animal: "Zebra",
    born: "Brooklyn",
  },
  {
    name: "Jocelyn",
    nickname: "JayJay",
    age: 15,
    animal: "Fennec Fox",
    born: "Staten Island",
  },
];

// 7. Find the average age.

// 8. Create a smaller list of just the people who are at least 18.

// 9. Produce this: ['Yhadira', 'Kadiatou', 'Isiah', 'Yadelin', 'Darius', 'Jocelyn']
const firstNames = people.map((person) => person.name);
console.log(firstNames);

// 10. Produce this:
// ['<p>A Cat for Yhadira!</p>', '<p>A Ferret for Kadiatou!</p>', '<p>a Dog for Isiah!</p>', '<p>a Sloth for Yadelin!</p>', '<p>a Zebra for Darius!</p>', '<p>a Fennec Fox for Jocelyn!</p>']
const nameMap = people.map(
  (person) => `<p>a ${person.animal} for ${person.name}!</p>`
);
console.log(nameMap);

// 11. Create a smaller list of just the people from The Bronx or Brooklyn.


/******** Stretch ********/

// 12. [Spicy] With this starting object, count the number of occurrences of each vowel in the people's names and nicknames combined.
const vowelCount = { a: 0, e: 0, i: 0, o: 0, u: 0 };

// 13. [Super Spicy] Count the occurrences of all 26 letters of the alphabet in the people's names and nicknames combined.
