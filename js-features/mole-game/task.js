const dead = document.getElementById('dead'),
      lost = document.getElementById('lost'),
      getHole = index => document.getElementById('hole'+index);

for (let i = 1; i < 9; i++) {
   const hole = getHole(i);
   hole.onclick = function () {
      if (hole.className.includes('hole_has-mole')) {
         dead.textContent++;
      } else {
         lost.textContent++;
      }
      if (dead.textContent == 10) {
         alert('Вы победили!');
         dead.textContent = '0';
         lost.textContent = '0';
      }
      if (lost.textContent == 5) {
         alert('Вы проиграли!');
         dead.textContent = '0';
         lost.textContent = '0';
      }
   }
}