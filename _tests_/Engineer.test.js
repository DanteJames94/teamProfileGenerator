const Engineer = require("../lib/Engineer");

test("Can get GitHub info", () => {
  const  gitHubUser = "GitHubUser";
  const engineer = new Engineer("bob", 4, "test@test.com", gitHubUser);
  expect(engineer.gitHubUser).toBe(gitHubUser);
});

test("getRole() should get engineer", () => {
  const role = "Engineer";
  const engineer = new Engineer("bob", 4, "test@test.com", "GitHubUser", role);
  expect(engineer.getRole()).toBe(role);
});

test("Can getGitHub return user name", () => {
//   const getGitHub = "bob7";
  const engineer = new Engineer("bob", 4, "test@test.com", "bob7");
  expect(engineer.getGitHub()).toBe("bob7");
});