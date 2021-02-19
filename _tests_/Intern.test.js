const Intern = require("../lib/Intern");

test("Can set school via constructor", () => {
  const school = "UCLA";
  const intern = new Intern("bob", 4, "test@test.com", school);
  expect(intern.school).toBe(school);
});

test("getRole() should return \"Intern\"", () => {
  const getRole = "Intern";
  const intern = new Intern("bob", 4, "test@test.com", "UCLA");
  expect(intern.getRole()).toBe(getRole);
});

test("Can get school via getSchool()", () => {
  const getSchool = "UCLA";
  const intern = new Intern("bob", 4, "test@test.com", getSchool);
  expect(intern.getSchool()).toBe(getSchool);
});