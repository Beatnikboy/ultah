function showSecret() {
  const secret = document.getElementById('secret');
  secret.classList.remove('hidden');
  blowCandle();
}

function playMusic() {
  const music = document.getElementById('music');
  music.play();
}

function blowCandle() {
  const flame = document.getElementById('flame');
  flame.style.animation = 'none';
  flame.style.opacity = 0;
}

function startCelebration() {
  const welcome = document.getElementById('welcome');
  const main = document.getElementById('main');
  const fireworks = document.getElementById('fireworks');

  // Sembunyikan welcome
  welcome.classList.add('hidden');

  // Tampilkan main dengan efek slide
  main.classList.remove('hidden');
  setTimeout(() => {
    main.classList.add('show');
  }, 100);

  // Tampilkan kembang api sebentar
  setTimeout(() => {
    fireworks.classList.add('show');
    setTimeout(() => {
      fireworks.classList.remove('show');
    }, 3000);
  }, 1000);

  // Start confetti
  initConfetti();
}

// CONFETTI
function initConfetti() {
  const canvas = document.getElementById('confetti');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const confetti = [];
  for (let i = 0; i < 100; i++) {
    confetti.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - canvas.height,
      r: Math.random() * 6 + 4,
      d: Math.random() * 10 + 5,
      color: `hsl(${Math.random() * 360}, 100%, 70%)`,
    });
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    confetti.forEach(c => {
      ctx.beginPath();
      ctx.fillStyle = c.color;
      ctx.fillRect(c.x, c.y, c.r, c.r);
    });
    update();
  }

  function update() {
    confetti.forEach(c => {
      c.y += c.d * 0.2;
      if (c.y > canvas.height) {
        c.y = -10;
        c.x = Math.random() * canvas.width;
      }
    });
  }

  setInterval(draw, 33);
}
