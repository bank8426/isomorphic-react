describe(`Question list `, () => {
  beforeEach(() => {
    console.log("Before Each");
  });
  beforeAll(() => {
    console.log("Before All");
  });

  afterEach(() => {
    console.log("After Each");
  });
  afterAll(() => {
    console.log("After All");
  });

  it(`should display a list of items`, () => {
    expect(2 + 2).toEqual(4);
  });

  it(`should display a list of items2`, () => {
    expect(2 + 3).toEqual(5);
  });

  it.skip(`should display a list of items3`, () => {
    expect(3 + 3).toEqual(8);
  });
});
