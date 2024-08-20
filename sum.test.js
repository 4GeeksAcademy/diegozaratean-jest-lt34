const sum = require('./sum');


test('si sumo 2 y 2 debe ser 4', () => {
  expect(sum(2, 2)).toBe(4);
});

test('si sumo 5 y 0 debe ser 5', () => {
    expect(sum(5, 0)).toBe(5);
});

test('si sumo 7 y 2 debe ser 9', () => {
    expect(sum(7, 2)).toBe(9);
});

test('si sumo 4 y 8 debe ser 12', () => {
    expect(sum(4, 8)).toBe(12);
});