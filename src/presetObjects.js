// Relative cell arrangements representing objects to initialize on the grid
const presetObjects = {
  '--empty grid--': [
  ],
  'block': [
    [0, 0],
    [1, 0],
    [0, 1],
    [1, 1]
  ],
  'bee-hive': [
    [0, -1],
    [1, -1],
    [-1, 0],
    [2,  0],
    [0,  1],
    [1,  1]
  ],
  'loaf': [
    [0, -1],
    [1, -1],
    [-1, 0],
    [2,  0],
    [0,  1],
    [2,  1],
    [1,  2]
  ],
  'boat': [
    [0, 0],
    [1, 0],
    [0, 1],
    [2, 1],
    [1, 2]
  ],
  'tub': [
    [0, -1],
    [1,  0],
    [-1, 0],
    [0,  1]
  ],
  'blinker': [
    [-1, 0],
    [0,  0],
    [1,  0]
  ],
  'toad': [
    [0,  0],
    [1,  0],
    [2,  0],
    [-1, 1],
    [0,  1],
    [1,  1]
  ],
  'beacon': [
    [-1, -1],
    [0,  -1],
    [-1,  0],
    [2,   1],
    [1,   2],
    [2,   2]
  ],
  'pulsar': [
    [-4, -6],
    [-3, -6],
    [-2, -6],
    [4,  -6],
    [3,  -6],
    [2,  -6],
    [-6, -2],
    [-6, -3],
    [-6, -4],
    [-1, -2],
    [-1, -3],
    [-1, -4],
    [1,  -2],
    [1,  -3],
    [1,  -4],
    [6,  -2],
    [6,  -3],
    [6,  -4],
    [-4, -1],
    [-3, -1],
    [-2, -1],
    [4,  -1],
    [3,  -1],
    [2,  -1],
    [-4,  1],
    [-3,  1],
    [-2,  1],
    [4,   1],
    [3,   1],
    [2,   1],
    [-4,  6],
    [-3,  6],
    [-2,  6],
    [4,   6],
    [3,   6],
    [2,   6],
    [1,   2],
    [1,   3],
    [1,   4],
    [6,   2],
    [6,   3],
    [6,   4],
    [-1,  2],
    [-1,  3],
    [-1,  4],
    [-6,  2],
    [-6,  3],
    [-6,  4]
  ],
  'penta-decathalon': [
    [0,  -4],
    [0,  -3],
    [0,  -1],
    [0,   0],
    [0,   1],
    [0,   2],
    [0,   4],
    [0,   5],
    [-1, -2],
    [1,  -2],
    [-1,  3],
    [1,   3]
  ],
  'glider': [
    [0, -1],
    [1,  0],
    [-1, 1],
    [0,  1],
    [1,  1]
  ],
  'light-weight spaceship': [
    [-1,-1],
    [0, -1],
    [1, -1],
    [2, -1],
    [-2, 0],
    [2,  0],
    [2,  1],
    [-2, 2],
    [1,  2]
  ],
  'middle-weight spaceship': [
    [-1, -2],
    [0,  -2],
    [1,  -2],
    [2,  -2],
    [3,  -2],
    [-2, -1],
    [3,  -1],
    [3,   0],
    [-2,  1],
    [2,   1],
    [0,   2]
  ],
  'heavy-weight spaceship': [
    [-2, -2],
    [-1, -2],
    [-0, -2],
    [1,  -2],
    [2,  -2],
    [3,  -2],
    [-3, -1],
    [3,  -1],
    [3,   0],
    [-3,  1],
    [2,   1],
    [-1,  2],
    [0,   2]
  ],
  'r-pentomino': [
    [0, -1],
    [1, -1],
    [-1, 0],
    [0,  0],
    [0,  1]
  ],
  'diehard': [
    [-3, 0],
    [-2, 0],
    [3, -1],
    [-2, 1],
    [2,  1],
    [3,  1],
    [4,  1]
  ],
  'acorn': [
    [-2, -1],
    [0,   0],
    [-3,  1],
    [-2,  1],
    [1,   1],
    [2,   1],
    [3,   1]
  ],
  'block-laying switch engine #1': [
    [3, -2],
    [1, -1],
    [3, -1],
    [4, -1],
    [1,  0],
    [3,  0],
    [1,  1],
    [-1, 2],
    [-1, 3],
    [-3, 3]
  ],
  'block-laying switch engine #2': [
    [-2, -2],
    [-1, -2],
    [0,  -2],
    [2,  -2],
    [-2, -1],
    [1,   0],
    [2,   0],
    [-1,  1],
    [0,   1],
    [2,   1],
    [-2,  2],
    [0,   2],
    [2,   2]
  ]
};

export { presetObjects };
