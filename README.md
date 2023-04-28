### About Game
Guess Master is a word-guessing game developed using NextJS, Tailwind, and TypeScript. The game's rules are as follows:

At the beginning of the game, the player selects the difficulty level and category.
The player has 5 attempts to correctly guess the word.
If the player can guess the word within these 5 attempts, they win the game.
If the player chooses to use a clue, a brief description of the word is provided, and 2 attempts are deducted. Therefore, the player can use a clue only when they have 3 or more attempts remaining.
In this first version, the words are taken from JSON files. In future versions, I plan to modify the game to work with a backend service.

You can try the game by clicking [here](https://guess-master.vercel.app).

### Installation and usage

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
