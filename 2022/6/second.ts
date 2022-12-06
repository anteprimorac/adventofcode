import { distinct } from 'https://deno.land/std@0.167.0/collections/distinct.ts';

const input = await Deno.readTextFile('./input.txt');

const markerIndex = input.split('').findIndex((char, index, array) => {
  if (index >= array.length - 14) {
    return false;
  }

  const markerChars = array.slice(index, index + 14);

  return distinct(markerChars).length === 14;
});

const markerChars = input.split('').slice(markerIndex, markerIndex + 14);

console.log(markerIndex + 14);
