const input = await Deno.readTextFile('./input.txt');

const elfs = input.split('\n\n').map((elf) => elf.split('\n').map(Number));

const elfsCalories = elfs
  .map((elf, index) => [index, elf.reduce((a, b) => a + b, 0)] as const)
  .sort((a, b) => b[1] - a[1]);

console.log(elfsCalories[0][1] + elfsCalories[1][1] + elfsCalories[2][1]);
