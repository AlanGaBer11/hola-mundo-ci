const holaMundo = require("../src/app");

test('Debe retornar "Hola Mundo"', () => {
  expect(holaMundo()).toBe("Hola Mundo");
});

test("No debe retornar otra cosa", () => {
  expect(holaMundo()).not.toBe("Adiós");
});
