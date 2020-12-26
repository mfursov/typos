async function helloWorld(): Promise<string[]> {
  return Promise.resolve(['Hello', 'World']);
}

describe('helloWorld', () => {

  it('should work asynchronously', async () => {
    const result = await helloWorld();
    expect(result.join(', ')).toBe('Hello, World');
  });

});
