const holaMundo = require("../src/app");

test('Debe retornar "Hola Mundo"', () => {
  expect(holaMundo()).toBe("Hola Mundo");
});
