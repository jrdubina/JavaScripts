// Use an object instead of switch statement

const moves = {
    Escape: endGame,
    ArrowUp: moveUp,
    ArrowLeft: moveLeft,
    ArrowRight: moveRight,
    ArrowDown: moveDown
};

const handleKeyDown = ({ key }) => {
    if(moves[key]) {
        moves[key]();
    }
}

document.addEventListener('keydown', handleKeyDown);

// Old switch statement

const handleKeyDownSwitch = ({ key }) => {
    switch (key) {
        case 'Escape':
            endGame();
            break;
        case 'ArrowUp':
            moveUp();
            break;
        case 'ArrowDown':
            moveDown();
            break;
        case 'ArrowLeft':
            moveLeft();
            break;
        case 'ArrowRight':
            moveRight();
            break;
    }
} 