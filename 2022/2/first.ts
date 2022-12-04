const input = await Deno.readTextFile('./input.txt');

const rounds = input.split('\n').map((round) => round.split(' '));

type Hand = 'A' | 'B' | 'C' | 'X' | 'Y' | 'Z';

const getShape = (hand: Hand) => {
  if (hand === 'A' || hand === 'X') {
    return 'rock';
  }
  if (hand === 'B' || hand === 'Y') {
    return 'paper';
  }

  return 'scissors';
};

const shapeScore = (shape: 'rock' | 'paper' | 'scissors') => {
  if (shape === 'rock') {
    return 1;
  }
  if (shape === 'paper') {
    return 2;
  }

  return 3;
};

const roundScore = (
  shapeA: 'rock' | 'paper' | 'scissors',
  shapeB: 'rock' | 'paper' | 'scissors',
) => {
  if (shapeA === shapeB) {
    return 3;
  }

  if (
    (shapeB === 'rock' && shapeA === 'scissors') ||
    (shapeB === 'paper' && shapeA === 'rock') ||
    (shapeB === 'scissors' && shapeA === 'paper')
  ) {
    return 6;
  }

  return 0;
};

const roundResult = (a: Hand, b: Hand) => {
  const shapeA = getShape(a);
  const shapeB = getShape(b);

  const scoreB = shapeScore(shapeB);

  return roundScore(shapeA, shapeB) + scoreB;
};

console.log(
  rounds.reduce((acc, round) => {
    const [a, b] = round;

    return acc + roundResult(a as Hand, b as Hand);
  }, 0),
);
