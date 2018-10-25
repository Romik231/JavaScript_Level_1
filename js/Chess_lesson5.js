// let content2 = document.getElementById('div1');
// content2.innerHTML = ('Совершено новый текст');


// let some = document.getElementsByClassName('the');
// console.log(some);
// some.innerHTML = ('Поменяли цифры');

// let block = document.createElement('div');
// block.className = 'new_div';



// content2.setAttribute('class', 'changeColor');
// content2.style.color = 'green';
// console.log(content2.getAttribute('class'));


// console.log('++++++Генерация шахматной доски++++++')


// function chessBoard() {
//     let blockBoard = document.querySelector('.main');
//     let block;

//     for (let i = 0; i < 8; i++){
//         for(let j = 0; j < 8; j++){

//             block = document.createElement('div');
//             blockBoard.appendChild(block);
//                   console.log(j);     
//         }console.log(i);  
//     } 
// }

// chessBoard();


// let cells = [];
// let cell = {
//     "column_ind": "",
//     "row_ind": "",
//     "color": ""
// };

let table = document.createElement("table");
for (let i = 1; i <= 8; i++){
    var tr = document.createElement('tr');
    for (let j = 1; j <= 8; j++){
        let td = document.createElement('td');
        // cell.column_ind = i;
        // cell.row_ind = j;
        if (i % 2 == j % 2){
            td.className = "black";
            // cell.color = "black";
        } else {
            td.className = "white";
            // cell.color = "white";
        }
        tr.appendChild(td);
        // cells.push(cell);
        // cell = {};
    }
    table.appendChild(tr);
}

// document.body.appendChild(table);
document.body.appendChild(table)

// var table = document.createElement("table");
// for (i = 0; i <= cells.length; i++){
//     var tr = document.createElement('tr');
//     var td = document.createElement('td');
//     let marker = cells[i].color;
//     if (marker == "black"){
//         console.log("I'm black")
//         td.className = "black";
//      } else{
//          console.log("I'm white")
//          td.className = "white";
//      }
//         tr.appendChild(td);
//     table.appendChild(tr);
// }
// document.main.appendChild(table);
