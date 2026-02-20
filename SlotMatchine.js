// 24 emoji images for demonstration (replace with your own images if desired)
const IMAGES = [
  '🍒','🍋','🍉','🍇','🍓','🍊','🍌','🍍',
  '🥝','🥥','🥭','🍏','🍎','🍐','🍑','🍈',
  '🍔','🍕','🍩','🍪','🍫','🍿','🍦','🍭'
];

const ROWS = 3;
const COLS = 4;
const slotMachine = document.getElementById('slotMachine');
const spinBtn = document.getElementById('spinBtn');

// Create slots
document.addEventListener('DOMContentLoaded', () => {
  for (let i = 0; i < ROWS * COLS; i++) {
    const slot = document.createElement('div');
    slot.className = 'slot';
    slot.textContent = IMAGES[Math.floor(Math.random() * IMAGES.length)];
    slotMachine.appendChild(slot);
  }
});

function spinSlots() {
  const slots = document.querySelectorAll('.slot');
  let results = [];
  slots.forEach((slot, i) => {
    slot.classList.remove('spin');
    setTimeout(() => {
      slot.classList.add('spin');
      setTimeout(() => {
        const img = IMAGES[Math.floor(Math.random() * IMAGES.length)];
        slot.textContent = img;
        results[i] = img;
      }, 350);
      setTimeout(() => {
        slot.classList.remove('spin');
        // After last slot, check results
        if (i === slots.length - 1) {
          setTimeout(() => checkWin(results), 100);
        }
      }, 700);
    }, i * 80);
  });
}

function checkWin(results) {
  // Example: check if any row has all the same image
  let win = false;
  for (let r = 0; r < ROWS; r++) {
    const row = results.slice(r * COLS, (r + 1) * COLS);
    if (row.every((img) => img === row[0])) {
      win = true;
      break;
    }
  }
  if (win) {
    alert('🎉 You win! (Row match)');
  }
}

spinBtn.addEventListener('click', spinSlots);
