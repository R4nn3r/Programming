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

// console.log(cc(cards1));
// console.log(cc(cards2));
// console.log(cc(cards3));

const myMusic = [
  {
    artist: "Billy Joel",
    title: "Piano Man",
    release_year: 1973,
    formats: ["CD", "8T", "LP"],
    gold: true,
  },
  {
    artist: "Billy Joel",
    title: "Piano Man",
    release_year: 1973,
    formats: ["CD", "8T", "LP"],
    gold: true,
  },
];

// console.log(myMusic);

const myPlants = [
  {
    type: "flowers",
    list: ["rose", "tulip", "dandelion"],
  },
  {
    type: "trees",
    list: ["fir", "pine", "birch"],
  },
];

// Setup
const recordCollection = {
  2548: {
    albumTitle: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: ["Let It Rock", "You Give Love a Bad Name"],
  },
  2468: {
    albumTitle: "1999",
    artist: "Prince",
    tracks: ["1999", "Little Red Corvette"],
  },
  1245: {
    artist: "Robert Palmer",
    tracks: [],
  },
  5439: {
    albumTitle: "ABBA Gold",
  },
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
  if (prop != "tracks" && value !== "") {
    records[id][prop] = value;
  } else {
    if (records[id].hasOwnProperty(prop) && value !== "") {
      records[id][prop].push(value);
    } else if (!records[id].hasOwnProperty(prop) && value !== "") {
      records[id][prop] = [];
      records[id][prop].push(value);
    } else {
      delete records[id][prop];
    }
  }
  return records;
}

// updateRecords(recordCollection, 5439, "artist", "ABBA");
updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me");
// updateRecords(recordCollection, 5439, "tracks", "");

// console.log(recordCollection);
