const functions = require("./functions");

it(`Somando dois valores`, () => {
  expect(functions.soma(2, 2)).toBe(4);
});
it(`Should be null`, () => {
  expect(functions.isNull()).toBeNull();
});
it(`Should be falsy`, () => {
  expect(functions.checkValue(null)).toBeFalsy();
});
it(`Should be Paulo Sarmento Object`, () => {
  expect(functions.createUser()).toEqual({
    firstName: "Paulo",
    lastName: "Sarmento",
  });
});
it(`Should be under 1600`, () => {
  const val1 = 800;
  const val2 = 800;

  expect(val1 + val2).toBeLessThanOrEqual(1600);
});

it(`Using regex to match expression`, () => {
  expect("Developer").not.toMatch(/JS/i);
});

it(`Admin should be in usernames`, () => {
  const usernames = ["Paulo", "João", "Rafael"];
  expect(usernames).toContain("Rafael");
});
it(`User fetched name should be Glenna Reichert`, async () => {
  expect.assertions(1);

  const data = await functions.fetchUser();
  expect(data.name).toEqual("Glenna Reichert");
});
