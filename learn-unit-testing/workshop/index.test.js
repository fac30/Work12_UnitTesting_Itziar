test("Correctly create URLs", () => {
  const result = makeUrl("pikachu");
  const expected = "https://pokeapi.co/api/v2/pikachu";
  equal(result, expected);
});

test("Correctly create URLs", () => {
  const result = makeUrl("charmander");
  const expected = "https://pokeapi.co/api/v2/charmander";
  equal(result, expected);
});

// test("makeUrl should create the correct PokéAPI URL", () => {
//     equal(makeUrl("pikachu"), "https://pokeapi.co/api/v2/pikachu");
//     equal(makeUrl("bulbasaur"), "https://pokeapi.co/api/v2/bulbasaur");
//   });

test("Correctly create objects", () => {
  const result = searchParamsToObject("name=oliver&email=hello@oliverjam.es");
  const expected = { name: "oliver", email: "hello@oliverjam.es" };
  equal(result.name, expected.name);
  equal(result.email, expected.email);
});

test("Checks if the year is a leap year", () => {
  equal(isLeapYear(2020), true);
  equal(isLeapYear(1991), false);
  equal(isLeapYear("hello"), "hello is not a number");
  equal(isLeapYear(-5), "Year can't be negative");
});
