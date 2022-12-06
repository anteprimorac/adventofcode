const input = await Deno.readTextFile('./input.txt');

const inputRows = input.split('\n');

const columnKeys = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
const columnIndexesRow = inputRows.find((row) =>
  columnKeys.every((key) => row.includes(key)),
);

if (!columnIndexesRow) {
  throw new Error('Could not find column indexes row');
}

const columnIndexes = columnKeys.reduce((obj, key) => {
  obj[key] = columnIndexesRow.indexOf(key);
  return obj;
}, {} as Record<string, number>);

const stackRows = inputRows.slice(
  0,
  inputRows.findIndex((row) => row === columnIndexesRow),
);

const stacks = Object.entries(columnIndexes).reduce((obj, [key, index]) => {
  obj[key] = stackRows
    .map((row) => row[index])
    .filter((value) => value?.trim()?.length);
  return obj;
}, {} as Record<string, string[]>);

const moveCommands = inputRows.filter((row) => row.startsWith('move'));

const finalStacks = moveCommands.reduce(
  (obj, command) => {
    // extract "move {countInput} from {fromStack} to {toStack}" from "move 3 from 1 to 2"
    const [, countInput, fromStack, toStack] =
      command.match(/move (\d+) from (\d+) to (\d+)/) || [];
    const count = parseInt(countInput, 10);

    if (!count || !fromStack || !toStack) {
      throw new Error(`Could not parse move command: ${command}`);
    }

    if (!obj[fromStack]) {
      throw new Error(`Could not find fromStack: ${fromStack}`);
    }

    if (!obj[toStack]) {
      throw new Error(`Could not find toStack: ${toStack}`);
    }

    const items = obj[fromStack].slice(0, count);

    obj[fromStack] = obj[fromStack].slice(count);
    obj[toStack] = [...items.reverse(), ...obj[toStack]];

    return obj;
  },
  { ...stacks },
);

console.log(
  Object.entries(finalStacks)
    .map(([key, stack]) => stack[0])
    .join(''),
);
