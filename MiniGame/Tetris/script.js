const canvas = document.getElementById('gameCanvas');
const context = canvas.getContext('2d');
const grid = 32;
const tetrominoes = [
    [1, 1, 1, 1], // I
    [1, 1, 1, 0, 1], // T
    [1, 1, 0, 0, 1, 1], // S
    [0, 1, 1, 1, 1], // Z
    [1, 1, 1, 0, 0, 1], // L
    [1, 1, 1, 0, 1], // J
    [1, 1, 1, 1] // O
];

let tetromino = tetrominoes[0];
let position = { x: 5, y: 5 };

function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    for (let row = 0; row < 4; row++) {
        for (let col = 0; col < 4; col++) {
            if (tetromino[row * 4 + col]) {
                context.fillStyle = 'cyan';
                context.fillRect((position.x + col) * grid, (position.y + row) * grid, grid - 1, grid - 1);
            }
        }
    }
}

function update() {
    position.y++;
    draw();
}

setInterval(update, 1000);
