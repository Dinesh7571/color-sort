const gameLevels = [
  // Level 1: Simplest
  {
    id: 1,
    locked: false,
    tubes: [
      [1, 1, 2, 2],
      [],
      [],
    ],
  },
  // Level 2
  {
    id: 2,
    locked: true,
    tubes: [
      [1, 2, 1, 2],
      [3, 3],
      [],
      [],
    ],
  },
  // Level 3
  {
    id: 3,
    locked: true,
    tubes: [
      [1, 2, 3, 4],
      [4, 3, 2, 1],
      [],
      [],
    ],
  },
  // Level 4
  {
    id: 4,
    locked: true,
    tubes: [
      [1, 1, 2, 2],
      [3, 3, 4, 4],
      [],
      [],
      [],
    ],
  },
  // Level 5
  {
    id: 5,
    locked: true,
    tubes: [
      [1, 2, 3, 4],
      [1, 3, 2, 4],
      [4, 3, 2, 1],
      [],
      [],
    ],
  },
  // Level 6
  {
    id: 6,
    locked: true,
    tubes: [
      [1, 2, 3, 4],
      [5, 5, 2, 3],
      [4, 5, 1, 2],
      [],
      [],
    ],
  },
  // Level 7
  {
    id: 7,
    locked: true,
    tubes: [
      [1, 2, 3, 1],
      [4, 5, 4, 2],
      [3, 5, 2, 4],
      [],
      [],
    ],
  },
  // Level 8
  {
    id: 8,
    locked: true,
    tubes: [
      [1, 2, 3, 4],
      [5, 4, 3, 2],
      [1, 5, 4, 3],
      [],
      [],
    ],
  },
  // Level 9
  {
    id: 9,
    locked: true,
    tubes: [
      [1, 2, 3, 4],
      [5, 4, 3, 2],
      [1, 5, 2, 4],
      [3, 1, 5, 4],
      [],
      [],
    ],
  },
  // Level 10 - Challenge mode
  {
    id: 10,
    locked: true,
    tubes: [
      [1, 2, 3, 4],
      [5, 5, 4, 3],
      [1, 2, 4, 3],
      [2, 5, 1, 3],
      [],
      [],
    ],
  },
];

export default gameLevels;
