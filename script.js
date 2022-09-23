function createGrid(size){
  const grid = document.querySelector('.grid');
  grid.innerHTML = '';
  for(let i = 0; i < size; i++){
    const row = document.createElement('div');
    row.classList.add('row');
    grid.appendChild(row);
    for(let j = 0; j < size; j++){
      const square = document.createElement('div');
      square.classList.add('square');
      row.appendChild(square);
    }
  }

  const squares = document.querySelectorAll('.square');
  squares.forEach(square => square.addEventListener('mouseover', (e) => {
    e.target.style["background-color"] = 'black';
  }));
}




const sizePrompt = document.querySelector('.sizePrompt');
sizePrompt.addEventListener('click', () => {
  let size = prompt("Enter number of square each side (max. 100)");
  size = +size;
  if (typeof size === 'number' && size > 0 & size <= 100){
    if (size > 0 & size <= 100){
      createGrid(size)
    }
    else if (size <= 0){
      createGrid(1)
    }
    else if (size > 100){
      createGrid(100)
    }
  }
});

createGrid(16)