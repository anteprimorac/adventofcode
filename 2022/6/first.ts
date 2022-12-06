import { distinct } from 'https://deno.land/std@0.167.0/collections/distinct.ts';

const input = await Deno.readTextFile('./input.txt');

const markerIndex = input.split('').findIndex((char, index, array) => {
  if (index >= array.length - 4) {
    return false;
  }

  const markerChars = array.slice(index, index + 4);

  return distinct(markerChars).length === 4;
});

const markerChars = input.split('').slice(markerIndex, markerIndex + 4);

console.log(markerIndex + 4);
