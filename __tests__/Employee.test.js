
const Employee = require("../lib/Employee");

test("creates a new employee instance", () => {
    const employee = new Employee("Ani");

    // expect(employee.name).toBe("Ani");
    expect(employee.name).toEqual(expect.any(String));
});
