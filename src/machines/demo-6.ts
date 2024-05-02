import { createMachine } from 'xstate';

export const demo1Machine = createMachine({
  /** @xstate-layout N4IgpgJg5mDOIC5QTAWwPYFoBsA6QUgyAhDICYMgofqCGDAMRHGBJDIEIMgSgyDRDANoAMAuoqAA7qwAlgBdB6AHY8QAD0QAOAKy4ALAsUBGOQCYAnNmUB2HcoDMAGhABPROoPtc2ddhMbTJ9WoUBfHxfHoUeCQQFAwcKX4hUQkpWQRMDxNcE1MtA1tVbAUTAwMLa3jsPB12F3VlOXUTaoV1LV8QtCw8GgoIgRExSWC4hPYlFJM0jIUsnLyrRCzcUa0h5R1c9gM1ep8vIA */
  id: 'demo-6',
  initial: 'おやつ待ち',
  description: "自己遷移で`おやつ待ち`状態に戻ります。",
  states: {
    "おやつ待ち": {
      on: {
        "おやつをあげる": {
          target: "おやつ待ち",
        },
      },
      description:
      "![happy walking puppy](https://raw.githubusercontent.com/statelyai/assets/main/example-images/dogs/begging.svg)",
    },
  },
});