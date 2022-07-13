const translate = require("../src/translate");

describe("translate function", () => {
  test(" translate words that start with the vowel a to piglatin", () => {
    let result = translate("apple");
    expect(result).toBe("appleway");
  });
  test("translate words that start with the vowel e to piglatin", () => {
    let result = translate("else");
    expect(result).toBe("elseway");
  });
  test("translate words that start with the vowel i to piglatin", () => {
    let result = translate("icarus");
    expect(result).toBe("icarusway");
  });
  test("translate words that start with the vowel o to piglatin", () => {
    let result = translate("Octopus");
    expect(result).toBe("octopusway");
  });
  test("translate words that start with the vowel u to piglatin", () => {
    let result = translate("umbrella");
    expect(result).toBe("umbrellaway");
  });
  test("translate words that start with a consonant to piglatin", () => {
    let result = translate("singer");
    expect(result).toBe("ingersay");
  });
  test("translate words that start with a consonant to piglatin", () => {
    let result = translate("giraffe");
    expect(result).toBe("iraffegay");
  });
  test("translate words that start with two consonants to piglatin", () => {
    let result = translate("child");
    expect(result).toBe("ildchay");
  });
  test("translate words that start with two consonants to piglatin", () => {
    let result = translate("blank");
    expect(result).toBe("ankblay");
  });
  test("translate words that start with three consonants to piglatin", () => {
    let result = translate("splendid");
    expect(result).toBe("endidsplay");
  });
  test("translate word entered in all caps and convert to lowercase", () => {
    let result = translate("CREEP");
    expect(result).toBe("eepcray");
  });
});
