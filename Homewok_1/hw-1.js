// TASK-1

// Даны две строки. В каждой из них необходимо посчитать количество букв "а" и вывести ту строку, в которой таких букв больше. 

const firstRow = 'мама мыла раму';
const secondRow = 'собака друг человека';
// let findLetter = 'а'

function showRow() {
  let findLetter = prompt('123');
  getRow(firstRow, secondRow, findLetter);
}

function getRow(firstRow, secondRow, findLetter) {
  let numberFirstLine = countedChar(firstRow, findLetter);
  let numberSecondLine = countedChar(secondRow, findLetter);

  return alert(numberFirstLine > numberSecondLine ? firstRow : secondRow);
  // return numberFirstLine > numberSecondLine ? firstRow : secondRow;
}

function countedChar(row, lettter) {
  let counted = 0;
  for (let i = 0; i < row.length; i++) {

    // !Краще Тернарного оператора тим що він повертає тільки щось одне. 
    if ( row.charAt(i) === lettter ) {
      counted++;
    }
  }
  return counted;
}
showRow();


// console.log(getRow(firstRow, secondRow, findLetter));