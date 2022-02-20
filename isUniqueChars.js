const isUniqueChart = (string) => {
  let stringArray = [...string];
  let char = '';
  let repeated = [];

  if (string.length > 128) return false;

  for (let i = 0; i < stringArray.length; i++) {
    char = stringArray[i - 1] || '';
    if (char === stringArray[i]) {
      if (repeated.includes(stringArray[i])) continue;
      else repeated.push(stringArray[i]);
    }
  }

  //console.log(`letras repetidas ${repeated.forEach((l) => console.log(l))}`);

  if (repeated.length === 0) return true;
  else return false;
};

console.log(isUniqueChart('abbbcddef'));
