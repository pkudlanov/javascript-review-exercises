const createDog = require('./create-dog');

describe('dog creates function', () => {
  it('returns a dog object', () => {
    const dog = createDog('balloon', 3, '37lbs');
    expect(dog).toEqual({
      name: 'balloon',
      age: 3,
      weight: '37lbs'
    });
  });
});