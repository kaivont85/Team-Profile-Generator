const Intern = require("../lib/Intern")


test("can generate an instance of intern", function() {
    const jessica = new Intern(1, "jessica@email.com", "jessica sanchez", "hard knocks")
    expect(typeof(jessica)).toBe("object")

})

test("can generate id of Intern ", function() {
    const expected = 2
    const larry = new Intern(expected, "larry@email.com", "larry sanders", "hard knocks")
    expect(larry.getID()).toBe(expected)
})
test("can generate email of Intern", function() {
    const expected = "larry@email.com"
    const larry = new Intern(2, expected, "larry sanders", "hard knocks")
    expect(larry.getEmail()).toBe(expected)
})
test("can generate name of Intern", function() {
    const expected = "larry sanders"
    const larry = new Intern(2, "larry@email.com", expected, "hard knocks")
    expect(larry.getName()).toBe(expected)
})
test("can generate school of Intern", function() {
    const expected = "hard knocks"
    const larry = new Intern(2, "larry@email.com", "larry sanders", expected)
    expect(larry.getSchool()).toBe(expected)
})
test("can generate role of Intern", function() {
    const larry = new Intern(2, "larry@email.com", "larry sanders", "hard knocks")
    expect(larry.getRole()).toBe("Intern")
})

