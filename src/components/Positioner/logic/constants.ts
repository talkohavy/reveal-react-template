export const Positions = {
  topLeftCorner: 'items-start justify-start',
  topRightCorner: 'items-start justify-end',
  bottomLeftCorner: 'items-end justify-start',
  bottomRightCorner: 'items-end justify-end',
  center: 'items-center justify-center',
  topCenter: 'items-start justify-center',
  bottomCenter: 'items-end justify-center',
  leftCenter: 'items-center justify-start',
  rightCenter: 'items-center justify-end',
};

type PositionsType = typeof Positions;
export type PositionKeys = keyof PositionsType;
