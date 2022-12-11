const tableau = [
  ["","","","","","","","",""], //x
  ["","1","2","","3","4","5","6","7"],
  ["","3","4","5","","6","1","8","2"],
  ["","","1","","5","8","2","","6"],
  ["","","8","6","","","","","1"],
  ["","2","","","","7","","5",""],
  ["","","3","7","","5","","2","8"],
  ["","8","","","6","","7","",""],
  ["2","","7","","8","3","6","1","5"],
  //y
];


const tableauMemory = [
  ["","","","","","","","",""], //x
  ["","1","2","","3","4","5","6","7"],
  ["","3","4","5","","6","1","8","2"],
  ["","","1","","5","8","2","","6"],
  ["","","8","6","","","","","1"],
  ["","2","","","","7","","5",""],
  ["","","3","7","","5","","2","8"],
  ["","8","","","6","","7","",""],
  ["2","","7","","8","3","6","1","5"],
  //y
];

const numberPossible = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];


const checkLinePossibility = (x, y, tableau) => {

  //check horizontal
  const horizontalNotPossible = (numberPossible.filter(nbr => tableau[x].includes(nbr)));

  //check verticality
  numberOnVertical = [];

  for(i = 0 ; i < tableau.length ; i++) {
    numberOnVertical.push(tableau[i][y]);
  }

  const verticalNotPossible = numberPossible.filter(nbr => numberOnVertical.includes(nbr))

  const caseNoPossibility = horizontalNotPossible.concat(verticalNotPossible);

  return numberPossible.filter(numb => !caseNoPossibility.includes(numb))
}

const storeInMemory = (x, y, tableau) => {
  const caseNoPossibility = checkLinePossibility(x, y, tableau)



  if(casePossibility.length === 1) {
    tableauMemory[x][y] = caseNoPossibility[0];
  }else{
    tableauMemory[x][y] = casePossibility;
  }
}


const insertNumber = (table) => {
  for (let x = 0; x < table.length; x++){
    for (let y = 0; y < table[x].length; y++){
      if(table[x][y] === "") {
        
        numberPossible.forEach(number => {
          
        });



      }
    }
  }
}


const test = (tableau) => {
  for (let x = 0; x < tableau.length; x++){
    for (let y = 0; y < tableau[x].length; y++){
      if(tableauMemory[x][y] === "") {
        storeInMemory(x, y, tableau)
      }
    }
  }
  console.log(tableauMemory)
}

test(tableau)