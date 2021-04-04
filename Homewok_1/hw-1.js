// TASK-1

// Даны две строки. В каждой из них необходимо посчитать количество букв "а" и вывести ту строку, в которой таких букв больше. 

const firstRow = 'мама мыла раму';
const secondRow = 'собака друг человека';


function showRow() {
  let findLetter = prompt('123');
  getRow(firstRow, secondRow, findLetter);
}

function getRow(a, b, c) {

  let numberFirstLine = 0;

  for (let i = 0; i < a.length; i++) {
    numberFirstLine += a.charAt(i) === c ? 1 : 0;

  }

  let numberSecondLine = 0;

  for (let y = 0; y < b.length; y++) {
    numberSecondLine += b.charAt(y) === c ? 1 : 0;

  }
  
  return alert(numberFirstLine > numberSecondLine ? a : b);

}
showRow();

