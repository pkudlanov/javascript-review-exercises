const createDog = (name, age, weight) => ({
  name,
  age,
  weight
});

const dog = createDog('balloon', 3, '60lbs');
console.log(dog);