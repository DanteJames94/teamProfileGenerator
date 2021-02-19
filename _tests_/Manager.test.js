const Manager = require("../lib/Manager");

test("Can set office number via constructor argument", () => {
  const officeNumber = 100;
  const manager = new Manager("bob", 4, "test@test.com", officeNumber);
  expect(manager.officeNumber).toBe(officeNumber);
});

test("getRole() should return \"Manager\"", () => {
  const role = "Manager";
  const manager = new Manager("bob", 4, "test@test.com", 100);
  expect(manager.getRole()).toBe(role);
});

test("Can get office number via getOffice()", () => {
  const getOfficeNumber = 100;
  const manager = new Manager("Foo", 1, "test@test.com", getOfficeNumber);
  expect(manager.getOfficeNumber()).toBe(getOfficeNumber);
});