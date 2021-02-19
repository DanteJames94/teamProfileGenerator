const Employee = require("../lib/Employee")


test('Should return an object.', () => {
    const Bob = new Employee()
  expect(typeof(Bob)).toBe("object");
});

test('Checking if name can be set in class.', () => {
    const name = "bob" 
    const employee = new Employee(name);
    expect(employee.name).toBe(name) 
})

test('testing that id returns as second constructor.', () => {
    const id = 4 
    const employee = new Employee("bob", id)
    expect(employee.id).toBe(id)
})

test('testing that email returns as third constructor', () => {
    const email = "test@test.com"
    const employee = new Employee("bob", 4, email)
    expect(employee.email).toBe(email)
})

test("when getName is ran does it get name.", () => {
    const name = "bob" 
    const employee = new Employee(name) 
    expect(employee.getName()).toBe(name)
})

test("when getID is ran does it get id", () => {
    const id = 4; 
    const employee = new Employee("bob", id)
    expect(employee.getId()).toBe(id) 
})

test("when getEmail is ran do we get an email back", () => {
    const email = "test@test.com"
    const employee = new Employee("bob", 4, email)
    expect(employee.getEmail()).toBe(email)
})