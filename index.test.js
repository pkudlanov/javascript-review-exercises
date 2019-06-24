const { getState, updateState } = require('./store');

describe('test store objects', () => {
  it('returns the entire state it was passed', () => {
    const wholeState = getState();
    expect(wholeState).toEqual({
      shirts: 5,
      pants: 10,
      toys: 100,
      shoes: 1,
      apples: 9
    });
  });
  it('updates state with passed key and value', () => {
    const key = 'shirts';
    const value = 9;
    updateState(key, value);
    const wholeState = getState();
    expect(wholeState).toEqual({
      shirts: 9,
      pants: 10,
      toys: 100,
      shoes: 1,
      apples: 9
    });
  });
});
