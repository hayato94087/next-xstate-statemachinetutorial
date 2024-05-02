import { createMachine } from 'xstate';

export const demo1Machine = createMachine({
  /** @xstate-layout N4IgpgJg5mDOIC5QTAWwPYFoAsA6QxqaCW1oKH6ghgwDEgbdqBJDIF+Kg0QwDaADALqKgAO6sAlgC690AOw4gAHohwBWAEy4A7AA5ZAZiUBGbAuaalq7ABoQATynYAbLmkXdATgWzpCjRrvNZ2AL5fjKDDgEhIC0clSA1gyAAu6A8gws7Egg3HyCImKSCJgaFni20h5KFrI6DgpGpoja8hrMdrIa0s6qqjVKPn5oWHhEwbiEUeSAnQyAKwyAPwyAkwyARQyAwwyA6wyxYokCQqLxaZiNCriF2HUKqrJ2mtvGZgiy+7h71fuOhbLVrSD+HUHdgA6x9AMjo4ADDIBlDIDPDHN4gtkstQKt1psSjs9gctBpjohZCpcBp9mpsLILFkNAoLD5fCBhOgUPB4k8cPMeIsUispNjVLhmNtXKpmAobNhtIj0siNhyOXdpHYLA4PAoHhTOiRSFSkktUvS6kyWRo2RystyyulXFZ1cxmBZNHdmi1CVKXnKaWCJFJ6oyNPouXZsO5CgoeQ5cJrmU5MRYqthpJL2oEuj0olbQYr0rlpKina7XeKPdrHXgRaKbMzXJ4OSGAtK3vQowq6TrtIozkpDTp2QbHDzHXZcJmauyaljtgXnkRAEK+gDC5Uu08FSRnSVQT3NadTVaSlE6WFtOaoKTv1AN4gleIA */
  id: 'demo-4',
  initial: '散歩待ち',
  description: "複数の状態を一つにまとめて階層化された状態を表現することが出来ます。階層化された状態では、親状態と子状態があります。散歩中状態に属する子状態として、`歩く`状態、`走る`状態の2つの子状態を作ることができます。",
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
      initial: "歩く",
      states: {
        "歩く": {
          on: {
            "スピードアップ": {
              target: "走る",
            },
          },
          description:
            "![happy walking puppy](https://raw.githubusercontent.com/statelyai/assets/main/example-images/dogs/walking.svg)",
        },
        "走る": {
          on: {
            "スピードダウン": {
              target: "歩く",
            },
          },
          description:
            "![puppy running bouncily](https://raw.githubusercontent.com/statelyai/assets/main/example-images/dogs/running.svg)",
        },
      },
    },
    "散歩終了": {
      type: "final",
      description:
      "![sleeping puppy](https://raw.githubusercontent.com/statelyai/assets/main/example-images/dogs/asleep.svg)",
    }
  },
});