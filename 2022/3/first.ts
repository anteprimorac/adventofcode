const input = await Deno.readTextFile('./input.txt');

const rucksacks = input
  .split('\n')
  .map(
    (line) =>
      [
        line.substring(0, line.length / 2).split(''),
        line.substring(line.length / 2).split(''),
      ] as const,
  );

const letters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];

const letterToPriority = (letter: string) => {
  return letters.indexOf(letter) + 1;
};

const findSameLetterInBothCompartments = (
  rucksack: readonly [string[], string[]],
) => {
  const [left, right] = rucksack;
  return left.find((item) => right.includes(item));
};

console.log(
  rucksacks
    .map(findSameLetterInBothCompartments)
    .filter((letter): letter is string => typeof letter === 'string')
    .map(letterToPriority)
    .reduce((a, b) => a + b, 0),
);
