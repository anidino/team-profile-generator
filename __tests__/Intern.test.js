const Intern = require("../lib/Intern");

test("creates a new Intern instance", () => {
    const intern = new Intern("Ani");

    // expect(employee.name).toBe("Ani");
    expect(intern.name).toEqual(expect.any(String));
});