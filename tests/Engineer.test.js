const Engineer = require("../lib/Engineer")


test("can generate an instance of Engineer", function() {
    const jessica = new Engineer(1, "jessica@email.com", "jessica sanchez", "kaivont85")
    expect(typeof(jessica)).toBe("object")

})

test("can generate id of Engineer", function() {
    const expected = 2
    const larry = new Engineer(expected, "larry@email.com", "larry sanders", "kaivont85")
    expect(larry.getID()).toBe(expected)
})
test("can generate email of Engineer", function() {
    const expected = "larry@email.com"
    const larry = new Engineer(2, expected, "larry sanders", "kaivont85")
    expect(larry.getEmail()).toBe(expected)
})
test("can generate name of Engineer", function() {
    const expected = "larry sanders"
    const larry = new Engineer(2, "larry@email.com", expected, "kaivont85")
    expect(larry.getName()).toBe(expected)
})
test("can generate gitHub of Engineer", function() {
    const expected = "kaivont85"
    const larry = new Engineer(2, "larry@email.com", "larry sanders", expected)
    expect(larry.getGitHub()).toBe(expected)
})
test("can generate role of Engineer", function() {
    const larry = new Engineer(2, "larry@email.com", "larry sanders", "kaivont85")
    expect(larry.getRole()).toBe("Engineer")
})

