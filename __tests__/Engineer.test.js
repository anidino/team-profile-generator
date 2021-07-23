const Engineer = require("../lib/Engineer");
// const Employee = require("../lib/Employee");


test("creates a new engineer instance", () => {
    const engineer = new Engineer("Ani");

    // expect(employee.name).toBe("Ani");
    expect(engineer.name).toEqual(expect.any(String));
});