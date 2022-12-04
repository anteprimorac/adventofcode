const input = await Deno.readTextFile('./input.txt');

const rangeToArray = (start: number, end: number) => {
  const array = [];
  for (let i = start; i <= end; i++) {
    array.push(i);
  }
  return array;
};

const pairs = input.split('\n').map(
  (line) =>
    line.split(',').map((item) => {
      const [startRange, endRange] = item.split('-').map(Number);

      return rangeToArray(startRange, endRange);
    }) as [number[], number[]],
);

const isRangeIntersection = (range1: number[], range2: number[]) => {
  return (
    range1.some((item) => range2.includes(item)) ||
    range2.some((item) => range1.includes(item))
  );
};

console.log(
  pairs.filter(([range1, range2]) => isRangeIntersection(range1, range2))
    .length,
);
