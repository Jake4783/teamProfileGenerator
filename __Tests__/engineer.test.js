const Engineer = require('../lib/Engineer');

test('Engineer object', () => {
    const engineer = new Engineer('Jacob', 'jc656441@gmail', 'jake4783');
    
    expect(engineer.github) .toEqual(expect.any(String));
});

test('github', () => {
    const engineer = new Engineer('Jacob', 'jc656441@gmail', 'jake4783');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

test('employee role', () => {
    const engineer = new Engineer('Jacob', 'jc656441@gmail', 'jake4783');

    expect(engineer.getRole()).toEqual("Engineer");
});