import { createMachine } from 'xstate';

export const demo1Machine = createMachine({
  /** @xstate-layout N4IgpgJg5mDOIC5QTAWwPYFoCsA6QxqaCW1oKH6ghgwDEgbdqBJDIF+Kg0QwDaADALqKgAO6sAlgC690AOw4gAHokwB2AEwAOXM1kBObNIBs2DSo0AWWQEYANCACeiQwGYruWXuwqHG5numGFVgL5fTKDDgEhIC0clSA1gyAAu6A8gws7Egg3HyCImKSCDIKSqraCirM2HpW0qYWCKrMuNhWhtKuzPUF0tLeviD+WHhEwbiAzbGAdgyAq0qAsgy4hFHkgJ0MgCsMgD8MgJMMgEUMgMMMgOsMsWKJAkKi8WmYstq4hlXM8irNhhpnsiWIeoaVjk3yelpn+fY+fmgdQd39w1wgAdY+iTWZzQADDIAyhkAzwzreKbZI7UB7A4aI4nM4XK4qG7mSyGPR2U55eSyVTybBk6RfNo-QJdXCAbh1AHw6gxGrOogHpjQCRDIArBkAIgzkQC+loB1BgF8K4PC2KV2UnJ6Ok2Fkyis2j0ylO2FuCA16MKLw00nkHipVjUtPaDJCzLZgM5XNBgF4Q0jRSUJaVI1LyqxEg4qjRWHTyeTKWRWHUOaS4KxGdTyGzqXQ+VrCdAoeDxK3YDae7be9KUiryJqFFQqE3Sc7a-HpWOyXC49TqQy6ArYbCW+mdEikXNJfNy9JVolWE2+6QGE0eeQ6zCXaO1MdFPSUmwKeRdgI94L9mXIiRSKqKZgVjSyHSr5p6FRzmoVawaylaNznPRb36MgFDPdeoeYVdFEMZh9F9FRjmYCNa0wMlcGnY5CSsSDVCaD9rX+dlRiiX9BxRKQ9A1I4QMKG8IKg0oiWwQwampJxrGNAi0J3XpMJBHDZTw9JlVwJUNFbNUNH0U5qJ1FRKmoppmCVC9BK0Fpvm3P5bXZdiDz2G8KlPeRz0vEswPIxBZFqXAb0pZpQyKawmKU1lMIdfkBVUgsAIMJQzwvJw9JvAyEDVaMyUJAjT00dR5LpRTGVs+0WW5egnP-TQTIrQpmikhMjJrUogwbECQwTFQgyo8CaVabMgkAIV9ADC5eLOJg5Q4NLc0KxqatI0IoopLcK5anuZMUyAA */
  id: "demo-5",
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
      type: "parallel",
      on: {
        "家に着く": {
          target: "散歩終了",
        },
      },
      states: {
        "足の動き": {
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
        "尻尾の動き": {
          initial: "尻尾を振らない",
          states: {
            "尻尾を振らない": {
              on: {
                "楽しい": {
                  target: "尻尾を振る",
                },
              },
              description:
              "![puppy sniffing the ground with a still tail](https://raw.githubusercontent.com/statelyai/assets/d236419f16a3b51a653e401084e9e9be8cfdbaa3/example-images/dogs/sniffing.svg)",
            },
            "尻尾を振る": {
              on: {
                "落ち着く": {
                  target: "尻尾を振らない",
                },
              },
              description:
              "![puppy sniffing the ground with a wagging tail](https://raw.githubusercontent.com/statelyai/assets/d236419f16a3b51a653e401084e9e9be8cfdbaa3/example-images/dogs/wagging.svg)",
            },
          },
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