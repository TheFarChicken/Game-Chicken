const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const scoreEl = document.getElementById('score');
const livesEl = document.getElementById('lives');
const timerEl = document.getElementById('timer');
const overlay = document.getElementById('overlay');
const overlayTitle = document.getElementById('overlayTitle');
const overlayText = document.getElementById('overlayText');
const overlayBtn = document.getElementById('overlayBtn');
const startBtn = document.getElementById('startBtn');

const WORLD = {
  width: canvas.width,
  height: canvas.height,
};

const input = {
  up: false,
  down: false,
  left: false,
  right: false,
};

const state = {
  running: false,
  score: 0,
  lives: 3,
  timeLeft: 60,
  player: null,
  eggs: [],
  foxes: [],
  particles: [],
  lastTime: 0,
  eggSpawnTimer: 0,
};

function createPlayer() {
  return {
    x: WORLD.width / 2,
    y: WORLD.height / 2,
    radius: 18,
    speed: 230,
    color: '#f3d55b',
    wingOffset: 0,
  };
}

function randomBetween(min, max) {
  return Math.random() * (max - min) + min;
}

function spawnEgg() {
  const radius = 12;
  const margin = 26;

  state.eggs.push({
    x: randomBetween(margin, WORLD.width - margin),
    y: randomBetween(margin, WORLD.height - margin),
    radius,
    bob: randomBetween(0, Math.PI * 2),
    pulse: randomBetween(0.8, 1.5),
  });
}

function spawnFox() {
  state.foxes.push({
    x: randomBetween(40, WORLD.width - 40),
    y: randomBetween(40, WORLD.height - 40),
    radius: 20,
    speed: randomBetween(85, 130),
    color: '#d86d2a',
    darkColor: '#8d3a12',
    direction: randomBetween(0, Math.PI * 2),
  });
}

function createBurst(x, y, color) {
  for (let i = 0; i < 12; i += 1) {
    state.particles.push({
      x,
      y,
      vx: randomBetween(-110, 110),
      vy: randomBetween(-110, 110),
      life: randomBetween(0.35, 0.7),
      maxLife: randomBetween(0.35, 0.7),
      color,
      radius: randomBetween(2, 5),
    });
  }
}

function resetGame() {
  state.score = 0;
  state.lives = 3;
  state.timeLeft = 60;
  state.player = createPlayer();
  state.eggs = [];
  state.foxes = [];
  state.particles = [];

  for (let i = 0; i < 4; i += 1) {
    spawnEgg();
  }

  for (let i = 0; i < 3; i += 1) {
    spawnFox();
  }

  updateHud();
}

function updateHud() {
  scoreEl.textContent = Math.floor(state.score);
  livesEl.textContent = state.lives;
  timerEl.textContent = Math.max(0, Math.ceil(state.timeLeft));
}

function setOverlay(title, text, buttonText = 'Play') {
  overlayTitle.textContent = title;
  overlayText.textContent = text;
  overlayBtn.textContent = buttonText;
  overlay.classList.add('visible');
}

function hideOverlay() {
  overlay.classList.remove('visible');
}

function startGame() {
  resetGame();
  state.running = true;
  hideOverlay();
}

function endGame() {
  state.running = false;
  const message = state.score >= 60
    ? 'Amazing job! You turned the farm into a chicken victory!'
    : 'The foxes won this round. Try again and gather more eggs!';
  setOverlay('Game Over', `${message} Final score: ${Math.floor(state.score)}`);
}

function hitPlayer() {
  if (!state.running) {
    return;
  }

  state.lives -= 1;
  createBurst(state.player.x, state.player.y, '#f7e38c');

  if (state.lives <= 0) {
    endGame();
    return;
  }

  state.player.x = WORLD.width / 2;
  state.player.y = WORLD.height / 2;
  updateHud();
}

function collectEgg(egg) {
  state.score += 10;
  createBurst(egg.x, egg.y, '#f2d978');
  const index = state.eggs.indexOf(egg);
  if (index !== -1) {
    state.eggs.splice(index, 1);
  }
  spawnEgg();
  updateHud();
}

function handleInput(dt) {
  const player = state.player;
  let dx = 0;
  let dy = 0;

  if (input.left) dx -= 1;
  if (input.right) dx += 1;
  if (input.up) dy -= 1;
  if (input.down) dy += 1;

  if (dx !== 0 || dy !== 0) {
    const length = Math.hypot(dx, dy) || 1;
    dx /= length;
    dy /= length;
  }

  player.x += dx * player.speed * dt;
  player.y += dy * player.speed * dt;

  player.x = Math.max(player.radius, Math.min(WORLD.width - player.radius, player.x));
  player.y = Math.max(player.radius, Math.min(WORLD.height - player.radius, player.y));
  player.wingOffset = Math.sin(performance.now() * 0.015) * 10;
}

function updateFoxes(dt) {
  for (const fox of state.foxes) {
    const dx = state.player.x - fox.x;
    const dy = state.player.y - fox.y;
    const distance = Math.hypot(dx, dy) || 1;

    if (distance < 200) {
      fox.x += (dx / distance) * fox.speed * dt;
      fox.y += (dy / distance) * fox.speed * dt;
    } else {
      fox.direction += dt * 1.5;
      fox.x += Math.cos(fox.direction) * fox.speed * dt * 0.8;
      fox.y += Math.sin(fox.direction) * fox.speed * dt * 0.8;
    }

    fox.x = Math.max(18, Math.min(WORLD.width - 18, fox.x));
    fox.y = Math.max(18, Math.min(WORLD.height - 18, fox.y));

    const playerDist = Math.hypot(fox.x - state.player.x, fox.y - state.player.y);
    if (playerDist < fox.radius + state.player.radius) {
      hitPlayer();
      break;
    }
  }
}

function updateEggs(dt) {
  for (const egg of state.eggs) {
    egg.bob += dt * 5;
    const eggRadius = egg.radius + Math.sin(egg.bob) * 2;
    const dist = Math.hypot(egg.x - state.player.x, egg.y - state.player.y);
    if (dist < eggRadius + state.player.radius) {
      collectEgg(egg);
      break;
    }
  }
}

function updateParticles(dt) {
  for (let i = state.particles.length - 1; i >= 0; i -= 1) {
    const particle = state.particles[i];
    particle.x += particle.vx * dt;
    particle.y += particle.vy * dt;
    particle.life -= dt;
    if (particle.life <= 0) {
      state.particles.splice(i, 1);
    }
  }
}

function update(dt) {
  if (!state.running) {
    return;
  }

  state.timeLeft -= dt;
  if (state.timeLeft <= 0) {
    state.timeLeft = 0;
    endGame();
    return;
  }

  handleInput(dt);
  updateFoxes(dt);
  updateEggs(dt);
  updateParticles(dt);
  updateHud();
}

function drawBackground() {
  ctx.fillStyle = '#63b861';
  ctx.fillRect(0, 0, WORLD.width, WORLD.height);

  ctx.strokeStyle = 'rgba(255,255,255,0.12)';
  ctx.lineWidth = 1;
  for (let x = 0; x <= WORLD.width; x += 40) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, WORLD.height);
    ctx.stroke();
  }
  for (let y = 0; y <= WORLD.height; y += 40) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(WORLD.width, y);
    ctx.stroke();
  }
}

function drawEgg(egg) {
  const bob = Math.sin(egg.bob) * 3;
  ctx.save();
  ctx.translate(egg.x, egg.y + bob);
  ctx.fillStyle = '#f9f5d3';
  ctx.beginPath();
  ctx.ellipse(0, 0, egg.radius, egg.radius * 1.2, 0, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = '#e1d89a';
  ctx.beginPath();
  ctx.ellipse(0, 0, 5, 10, Math.PI / 2, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = '#d7b31c';
  ctx.fillRect(-1, -egg.radius * 1.06, 2, 7);
  ctx.restore();
}

function drawFox(fox) {
  ctx.save();
  ctx.translate(fox.x, fox.y);

  ctx.fillStyle = fox.darkColor;
  ctx.beginPath();
  ctx.ellipse(-9, 8, 9, 7, 0, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = fox.color;
  ctx.beginPath();
  ctx.ellipse(0, 0, 18, 12, 0, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = '#f6d1a4';
  ctx.beginPath();
  ctx.arc(10, -5, 7, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = '#d85a2a';
  ctx.fillRect(15, -8, 12, 4);

  ctx.fillStyle = '#000';
  ctx.beginPath();
  ctx.arc(14, -7, 1.5, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
}

function drawPlayer() {
  const player = state.player;
  if (!player) {
    return;
  }

  ctx.save();
  ctx.translate(player.x, player.y);

  ctx.fillStyle = '#f0d479';
  ctx.beginPath();
  ctx.ellipse(0, 0, player.radius, player.radius * 0.9, 0, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = '#f6d760';
  ctx.beginPath();
  ctx.ellipse(-8, -10, 10, 10, 0, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = '#f9c642';
  ctx.beginPath();
  ctx.arc(8, -12, 9, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = '#f6b613';
  ctx.beginPath();
  ctx.moveTo(16, -10);
  ctx.lineTo(26, -8);
  ctx.lineTo(16, -4);
  ctx.closePath();
  ctx.fill();

  ctx.fillStyle = '#ffe29a';
  ctx.beginPath();
  ctx.ellipse(-10, -4, 4, 8, 0.4 + player.wingOffset * 0.02, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = '#1b1b1b';
  ctx.beginPath();
  ctx.arc(12, -13, 2, 0, Math.PI * 2);
  ctx.fill();

  ctx.restore();
}

function drawParticles() {
  for (const particle of state.particles) {
    ctx.fillStyle = particle.color;
    const alpha = Math.max(0, particle.life / particle.maxLife);
    ctx.globalAlpha = alpha;
    ctx.beginPath();
    ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalAlpha = 1;
  }
}

function draw() {
  drawBackground();

  for (const egg of state.eggs) {
    drawEgg(egg);
  }

  for (const fox of state.foxes) {
    drawFox(fox);
  }

  drawPlayer();
  drawParticles();
}

function gameLoop(timestamp) {
  if (!state.lastTime) {
    state.lastTime = timestamp;
  }

  const dt = Math.min((timestamp - state.lastTime) / 1000, 0.033);
  state.lastTime = timestamp;

  update(dt);
  draw();
  requestAnimationFrame(gameLoop);
}

window.addEventListener('keydown', (event) => {
  const key = event.key.toLowerCase();
  if (key === 'w' || key === 'arrowup') input.up = true;
  if (key === 's' || key === 'arrowdown') input.down = true;
  if (key === 'a' || key === 'arrowleft') input.left = true;
  if (key === 'd' || key === 'arrowright') input.right = true;

  if (key === ' ' && !state.running) {
    startGame();
  }
});

window.addEventListener('keyup', (event) => {
  const key = event.key.toLowerCase();
  if (key === 'w' || key === 'arrowup') input.up = false;
  if (key === 's' || key === 'arrowdown') input.down = false;
  if (key === 'a' || key === 'arrowleft') input.left = false;
  if (key === 'd' || key === 'arrowright') input.right = false;
});

startBtn.addEventListener('click', startGame);
overlayBtn.addEventListener('click', startGame);

resetGame();
setOverlay('Chicken Run', 'Collect eggs, dodge foxes, and survive the farmyard chaos.');
requestAnimationFrame(gameLoop);
