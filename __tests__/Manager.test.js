const Manager = require("../lib/Manager");

test("creates a new Manager instance", () => {
    const manager = new Manager("Ani");

    // expect(employee.name).toBe("Ani");
    expect(manager.name).toEqual(expect.any(String));
    // expect(manager.officeNumber).toEqual(expect.any(Number));
});