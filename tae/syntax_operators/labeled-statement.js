let i, j;

loop1:
for (i = 0; i < 3; i++) {      //The first for statement is labeled "loop1"
   loop2:
   for (j = 0; j < 3; j++) {   //The second for statement is labeled "loop2"
      if (i === 1 && j === 1) {
         continue loop1;
      }
      console.log('i = ' + i + ', j = ' + j);
   }
}
// Notice how it skips both "i = 1, j = 1" and "i = 1, j = 2"
// nel momento in cui incontra i = 1 e j = 1 continua dal loop1 con la i incrementata a 2