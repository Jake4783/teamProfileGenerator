const Intern = require('../lib/Intern');

test('Intern object', () => {
    const intern = new Intern('Jacob', 'jc656441@gmail', 'UCSD');
    
    expect(intern.school) .toEqual(expect.any(String));
});

test('school', () => {
    const intern = new Intern('Jacob', 'jc656441@gmail', 'UCSD');
    
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

// gets role from getRole()
test('employee role', () => {
    const intern = new Intern('Jacob', 'jc656441@gmail.com', 'UCSD');

    expect(intern.getRole()).toEqual("Intern");
}); 