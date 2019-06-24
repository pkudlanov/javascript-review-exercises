const createDog = require('./create-dog');

describe('dog create function', () => {
  it('returns a dog object', () => {
    const dog = createDog('balloon', 3, '45lbs');
    expect(dog).toEqual({
      name: 'balloon',
      age: 3,
      weight: '45lbs'
    });
  });
});
