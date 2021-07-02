const Manager = require("../lib/Manager")


test("can generate an instance of manager", function() {
    const jessica = new Manager(1, "jessica@email.com", "jessica sanchez", 1)
    expect(typeof(jessica)).toBe("object")

})

test("can generate id of manager", function() {
    const expected = 2
    const larry = new Manager(expected, "larry@email.com", "larry sanders", 2)
    expect(larry.getID()).toBe(expected)
})
test("can generate email of manager", function() {
    const expected = "larry@email.com"
    const larry = new Manager(2, expected, "larry sanders", 2)
    expect(larry.getEmail()).toBe(expected)
})
test("can generate name of manager", function() {
    const expected = "larry sanders"
    const larry = new Manager(2, "larry@email.com", expected, 2)
    expect(larry.getName()).toBe(expected)
})
test("can generate officeNumber of manager", function() {
    const expected = 2
    const larry = new Manager(2, "larry@email.com", "larry sanders", expected)
    expect(larry.getOfficeNumber()).toBe(expected)
})
test("can generate role of manager", function() {
    const larry = new Manager(2, "larry@email.com", "larry sanders", 2)
    expect(larry.getRole()).toBe("Manager")
})

