import { chunk } from 'https://deno.land/std@0.167.0/collections/chunk.ts';
import { intersect } from 'https://deno.land/std@0.167.0/collections/intersect.ts';

const input = await Deno.readTextFile('./input.txt');

const rucksacks = input.split('\n').map((line) => line.split(''));

const groups = chunk(rucksacks, 3);

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

const findSameLetterInGroup = (rucksacks: string[][]) => {
  const [rucksack1, rucksack2, rucksack3] = rucksacks;
  const rucksack1Letters = rucksack1;
  const rucksack2Letters = rucksack2;
  const rucksack3Letters = rucksack3;

  const lettersInAllRucksacks = intersect(
    rucksack1Letters,
    rucksack2Letters,
    rucksack3Letters,
  );

  return lettersInAllRucksacks[0];
};

console.log(
  groups
    .map(findSameLetterInGroup)
    .map(letterToPriority)
    .reduce((a, b) => a + b, 0),
);
