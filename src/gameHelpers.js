export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;

export const createStage = () => 
    Array.from(Array(STAGE_HEIGHT), () => 
    new Array(STAGE_WIDTH).fill([0, 'clear'])
    );

export const checkCollision = (player, stage, { x: moveX, y: moveY }) => {

  // Using for loops to be able to return (and break). Not possible with forEach
  for (let y = 0; y < player.tetromino.length; y += 1) {
    for (let x = 0; x < player.tetromino[y].length; x += 1) {
      // 1. Check that we're on an actual Tetromino cell
      if (player.tetromino[y][x] !== 0) {
        if (
          // 2. Check that our move is inside the game areas height (y)
          // That we're not go through bottom of the play area
          !stage[y + player.pos.y + moveY] ||
          // 3. Check that our move is inside the game areas width (x)
          !stage[y + player.pos.y + moveY][x + player.pos.x + moveX] ||
          // 4. Check that the cell wer'e moving to isn't set to clear
          stage[y + player.pos.y + moveY][x + player.pos.x + moveX][1] !==
            'clear'
        ) {
          return true;
        }
      }
    }
  }
  // 5. If everything above is false
  return false;

  
  //     return player.tetromino.some((row, y) =>
  //   row.some((cell, x) => {
  //     if (cell !== 0) {
  //       return (
  //         !stage[y + player.pos.y + moveY] ||
  //         !stage[y + player.pos.y + moveY][x + player.pos.x + moveX] ||
  //         stage[y + player.pos.y + moveY][x + player.pos.x + moveX][1] !==
  //           'clear'
  //       );
  //     }
  //     return false;
  //   })
  // );
//   // Using for loops to be able to return (and break). Not possible with forEach
//   for (let y = 0; y < player.tetromino.length; y += 1) {
//     for (let x = 0; x < player.tetromino[y].length; x += 1) {
//       if (
//         // Check:
//         // 1. That we're on a tetromino "cell"
//         // 2. That we're inside the game areas height (y)
//         // 3. That we're inside the game areas width (x)
//         // 4. That the actual cell wer'e moving to isn't set to clear
//         player.tetromino[y][x] !== 0 &&
//         (stage[y + player.pos.y + moveY] &&
//           stage[y + player.pos.y + moveY][x + player.pos.x + moveX] &&
//           stage[y + player.pos.y + moveY][x + player.pos.x + moveX][1]) !==
//           'clear'
//     ) { 
//         return true;
//         }
//       }
//     }
    // 5. If everything above is false
    // return false;
};