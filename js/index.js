let players = [
  { name: '櫻木花道', pts: 0, reb: 0, ast: 0, stl: 0, blk: 2 },
  { name: '流川楓', pts: 30, reb: 6, ast: 3, stl: 3, blk: 0 },
  { name: '赤木剛憲', pts: 16, reb: 10, ast: 0, stl: 0, blk: 5 },
  { name: '宮城良田', pts: 6, reb: 0, ast: 7, stl: 6, blk: 0 },
  { name: '三井壽', pts: 21, reb: 4, ast: 3, stl: 0, blk: 0 }
]

const dataPanel = document.querySelector('#data-panel')

// write your code here
function displayPlayerList (data) {
  let addRow = ``
  const plusButton = `<button class="fa fa-plus-circle" aria-hidden="true"></button>`
  const minusButton = `<button class="fa fa-minus-circle" aria-hidden="true"></button>`
    
  for (let i = 0; i < players.length; i++) {
    addRow += `
      <tr>
        <td>${players[i].name}</td>
        <td><span>${players[i].pts}</span>${plusButton}${minusButton}</td>
        <td>${players[i].reb}${plusButton}${minusButton}</td>
        <td>${players[i].ast}${plusButton}${minusButton}</td>
        <td>${players[i].stl}${plusButton}${minusButton}</td>
        <td>${players[i].blk}${plusButton}${minusButton}</td>
      </tr>
    `
  }

  dataPanel.innerHTML = addRow
  
}

displayPlayerList(players)

dataPanel.addEventListener('click', function (event) {
  
  if (event.target.classList.contains('fa-plus-circle')) {
    let counts = event.target.previousElementSibling.innerHTML
    counts ++
    event.target.previousElementSibling.innerHTML = counts
  } 
    else if (event.target.classList.contains('fa-minus-circle')) {
    let counts = event.target.previousElementSibling.previousElementSibling.innerHTML
    counts --
    event.target.previousElementSibling.previousElementSibling.innerHTML = counts
  } 
})