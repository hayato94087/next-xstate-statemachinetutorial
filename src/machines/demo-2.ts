import { createMachine } from 'xstate';

export const demo1Machine = createMachine({
  /** @xstate-layout N4IgpgJg5mDOIC5QTAWwPYFoBMA6Qu9qBmDICIMg0QwDEg7rGCyDKQNoAMAuoqAA7qwCWALl+gDtWIAB6IcuAOwA2aQE4ArNgAskhrIAcc6RoUAaEAE9xARgYbc2dQGZsM7Ao0M52gL6uDKDBJokK+emZhDm4+QWExBGUpa2sGVWUzE2wTGWsDYwRMZWlcLUk5bDkNOJNbDWx3DxABdBR4JBAvLGxgzl5+IUbInEdcVI1pazKGbF0FBWUM8WG8MeUNDWSGBQLFZXdPNBaCPzbQzojxFIZ+yUHhuLGJyemskwVTqzlla0kc7Fi5Fc2m7Z9qHtGiEOuFuogynJcF8FJpJGpJiYNHdMA8oco5LYke9zhVFlVXEA */
  id: 'demo-2',
  initial: '寝ている',
  description: "`起きる`イベントをトリガーに`寝ている`状態から`起きている`状態へ、`寝る`イベントをトリガーに`起きている`状態から`寝ている`状態へ遷移します。",
  states: {
    "寝ている": {
      on: {
        "起きる": {
          target: "起きている",
        },
      },
      description:
      "![sleeping puppy](https://raw.githubusercontent.com/statelyai/assets/main/example-images/dogs/asleep.svg)",
    },
    "起きている": {
      on: {
        "寝る": {
          target: "寝ている",
        },
      },
      description:
      "![happy awake puppy](https://raw.githubusercontent.com/statelyai/assets/main/example-images/dogs/walking.svg)",

    },
  },
});