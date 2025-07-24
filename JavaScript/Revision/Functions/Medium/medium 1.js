function calculateDestination(currentYear, yearsForward) {
  return `You will be in the year ${yearsForward + currentYear} to get to ${yearsForward} .`;
}

console.log(calculateDestination(1969, 2090));