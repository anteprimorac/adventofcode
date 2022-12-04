const input = await Deno.readTextFile('./input.txt');

const elfs = input.split('\n\n').map((elf) => elf.split('\n').map(Number));

const elfsCalories = elfs.map((elf) => elf.reduce((a, b) => a + b, 0));

let mostCalories = 0;
let elfWithMostCalories = 0;

elfsCalories.forEach((calories, index) => {
  if (calories > mostCalories) {
    mostCalories = calories;
    elfWithMostCalories = index;
  }
});

console.log(mostCalories, elfWithMostCalories);
