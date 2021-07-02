const Employee = require('../lib/Employee')

test("can create Employee instance", function() {
    const amanda = new Employee(1, "amanda@email.com", "amanda smith")
    expect(typeof(amanda)).toBe("object")
}) 

test("can retrieve id of employee", function() {
    const expected = 2
    const kaivon = new Employee(expected, "kaivon@email.com", "kaivon tolooee")
    expect(kaivon.getID()).toBe(expected)
})

test("can retriece email of employee", function() {
    const expected = "steven@email.com";
    const steven = new Employee(3, expected, "steven alexander");
    expect(steven.getEmail()).toBe(expected)
})

test("can retrieve name of employee", function() {
    const expected = "laura sanders";
    const laura = new Employee(4, "laura@email.com", expected);
    expect(laura.getName()).toBe(expected)
})

test("can retrieve the role of an employee", function() {
    const luisa = new Employee(5, "luisa@email.com", "Luisa Fernanda");
    expect(luisa.getRole()).toBe("Employee")
})