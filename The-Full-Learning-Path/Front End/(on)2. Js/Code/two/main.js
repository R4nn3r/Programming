function cc(cards) {
  // Only change code below this line
  let count = 0;

  cards.forEach((card) => {
    switch (card) {
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
        count += 1;
        break;
      case 7:
      case 8:
      case 9:
        count += 0;
        break;
      case 10:
      case "J":
      case "Q":
      case "K":
      case "A":
        count -= 1;
        break;
    }
  });

  if (count > 0) {
    return `${count} Bet`;
  } else if (count <= 0) {
    return `${count} Hold`;
  }

  return "Change Me";
  // Only change code above this line
}

const cards1 = [2, 3, 4, 5, 6];
const cards2 = [7, 8, 9];
const cards3 = [10, "J", "Q", "K", "A"];

console.log(cc(cards1));
console.log(cc(cards2));
console.log(cc(cards3));
