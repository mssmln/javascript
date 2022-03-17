// Record Collection
let recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: ['prova']
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

  
function updateRecords(records, id, prop, value) {
  if (prop !== 'tracks' && value !== "") {
    records[id][prop] = value;
  } else if (prop === "tracks" && records[id].hasOwnProperty("tracks") === false) {
    records[id][prop] = [value];
  } else if (prop === "tracks" && value !== "") {
    records[id][prop].push(value);
  } else if (value === "") {
    delete records[id][prop];
  }
  return records;
}

console.log( updateRecords(recordCollection, 5439, 'artist', 'ABBA') );
console.log("or");

// or
function updateRecords1(records, id, prop, value) {
  if (value === '') {
    delete records[id][prop];
  } else if (prop === 'tracks') {
    // a riga 46 se scrivessimo "records[id][prop] = []" sovrascriveremmo un eventuale esistente arr di tracks, 
    // in questo caso contiene già "prova" e infatti viene mantenuto
    records[id][prop] = records[id][prop] || []; // shortcircuit evaluation
    records[id][prop].push(value);
  } else {
    records[id][prop] = value;
  }
  return records;
}

console.log( updateRecords1(recordCollection, 1245, 'tracks', 'jazz') );