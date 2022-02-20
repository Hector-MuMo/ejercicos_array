const stringCompress = (string) => {
  let length = string.length;
  let counter = 0;
  let newString = '';
  let char = string[0];

  for (let i = 0; i < length; i++) {
    if (char !== string[i]) {
      newString = newString + char + counter.toString();
      counter = 0;
    }
    counter++;
    char = string[i];
  }

  if (length < newString.length) return string;
  else return newString;
};

console.log(stringCompress('aabcccccaaa'));
