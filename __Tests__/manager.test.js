
const Manager = require('../lib/Manager');

test('Manager object', () => {
    const manager = new Manager('Jacob', 'jc656441@gmail');
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('employee role', () => {
    const manager = new Manager('Jacob', 'jc656441@gmail.com');

    expect(manager.getRole()).toEqual("Manager");
}); 