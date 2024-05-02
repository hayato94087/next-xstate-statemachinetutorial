import { createMachine } from 'xstate';

export const demo1Machine = createMachine({
  /** @xstate-layout N4IgpgJg5mDOIC5gF8A0IB2B7CdGlwFssBaARnxAActYBLAFzqw0oA9FyAOAVgDoyABgDMATgAsPLgCYAbAHZZPdAE9OwwdL6zh0wWWHzxwroPk9hyNCCKkyfQLvagMwZAIgyBohko16TFu04H5AREJKTlFZRA1BHJxQIVpYR1peUEeHnEuK3Rbcj5Ad1jAWQZXDyRqWkZmVlKOBCF7RRlhHlkyc0EuSVV-HkFteUSFDtFhMh5pKysgA */
  id: 'demo-1',
  initial: '寝ている',
  description: "状態のみです。遷移はないため`寝ている`状態から`起きている`状態に遷移することはありません。",
  states: {
    "寝ている": {
      description:
      "![sleeping puppy](https://raw.githubusercontent.com/statelyai/assets/main/example-images/dogs/asleep.svg)",
    },
    "起きている": {
      description:
      "![happy awake puppy](https://raw.githubusercontent.com/statelyai/assets/main/example-images/dogs/walking.svg)",

    },
  },
});