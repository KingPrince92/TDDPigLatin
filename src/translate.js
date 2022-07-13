const translate = (word) => {
  word = word.toLowerCase();
  if (word.startsWith("a")) {
    return `${word}way`;
  } else if (word.startsWith("e")) {
    return `${word}way`;
  } else if (word.startsWith("i")) {
    return `${word}way`;
  } else if (word.startsWith("o")) {
    return `${word}way`;
  } else if (word.startsWith("u")) {
    return `${word}way`;
  } else {
    const vowels = ["a", "e", "i", "o", "u"];
    for (let i = 0; i < word.length; i++) {
      if (vowels.indexOf(word[i]) > -1) {
        let firstConsonant = word.slice(0, i);
        let middle = word.slice(i, word.length);
        word = middle + firstConsonant + "ay";
        break;
      }
    }
    return word;
  }
};

module.exports = translate;
