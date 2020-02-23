const {generateText,validateAndReturn} = require('./util');

test('should output name and age',()=>{
    const text = generateText('Max',29);
    const text2 = generateText('Max',29);
    expect(text).toBe('Max (29 years old)');
    expect(text2).toBe('Max (29 years old)');
});

test('should output name and age',()=>{
    const text = generateText('Max',29);    
    expect(text).toMatch(/Max/);
});

test('integrated function',()=>{
    const text = validateAndReturn('bikash',16);
    expect(text).toBe('bikash (16 years old)')
});