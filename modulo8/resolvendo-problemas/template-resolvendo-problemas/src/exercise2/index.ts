// contagem caracteres repetidos na string
// se o resultado for maior deve retornar a string inicial

function string(input: string) {
  const strings = [];
  let lasCharacter = input[0];
  let characterCount = 0;

  for (const character of input) {
    if (character !== lasCharacter) {
      strings.push(lasCharacter + characterCount);
      lasCharacter = character;
      characterCount = 0;
    }

    characterCount++;
  }

  strings.push(lasCharacter + characterCount);
  let result = "";
  for (const key of strings) {
    result += key;
  }

  return result.length > input.length ? input : result;
}
