import { createMachine } from 'xstate';

export const demo1Machine = createMachine({
  /** @xstate-layout N4IgpgJg5mDOIC5QTAWwPYFoDMA6QxqaCW1oKH6ghgwDEgbdqBJDIF+Kg0QwDaADALqKgAO6sAlgC690AOw4gAHokwBGAGwAOXNOzyATNmYBOVbOYAWbJoA0IAJ6JpAVkXZLs9dL2zpOgOwBfdyZQYcBQoC0clSA1gyAAu6A8gws7Egg3HyCImKSCMqKzLKyrq7MOrJ6qpa2JuYp1ri29tiOzm6eXiDC6CjwMT5Y2GJxAkKiMck4mniq8vKa+vkqY3rFUrKa5ZbMrqMaqpquqnp6nt5o7f5knTzdiX1S2HqWuMOj4+q302aII7jOzKny0pryli7YOyA2n4iAEjvEeklzlc1nYVHosks5vIZgg1K8loUNpppBs9PIPPUgXgiIAhX0AYXJgk69UDJVSuK7vMaaTSybAFTR2FHyPTlWSFPTrVnLX6WOruIA */
  id: 'demo-3',
  initial: '散歩待ち',
  description: "多くのステートマシンには最終状態があります。この図では`散歩終了`状態が最終状態となります。",
  states: {
    "散歩待ち": {
      on: {
        "家を出る": {
          target: "散歩中",
        },
      },
      description:
      "![puppy patiently waiting](https://raw.githubusercontent.com/statelyai/assets/main/example-images/dogs/waiting.svg)",
    },
    "散歩中": {
      on: {
        "家に着く": {
          target: "散歩終了",
        },
      },
      description:
      "![happy walking puppy](https://raw.githubusercontent.com/statelyai/assets/main/example-images/dogs/walking.svg)",
    },
    "散歩終了": {
      type: "final",
      description:
      "![sleeping puppy](https://raw.githubusercontent.com/statelyai/assets/main/example-images/dogs/asleep.svg)",
    }
  },
});