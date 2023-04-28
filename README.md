### About Game
Guess Master is a word-guessing game developed using NextJS, Tailwind, and TypeScript. The game's rules are as follows:

At the beginning of the game, the player selects the difficulty level and category.
The player has 5 attempts to correctly guess the word.
If the player can guess the word within these 5 attempts, they win the game.
If the player chooses to use a clue, a brief description of the word is provided, and 2 attempts are deducted. Therefore, the player can use a clue only when they have 3 or more attempts remaining.
In this first version, the words are taken from JSON files. In future versions, I plan to modify the game to work with a backend service.

You can try the game by clicking [here](https://guess-master.vercel.app).

In the future, I plan to implement several enhancements to Guess Master, which I will share with you below:

- To ensure the safety and security of the data, including words and categories, I will develop a backend structure for the game.
- To allow users to track their progress and improve their performance, an authentication feature will be added that records past games.
- To create a competitive atmosphere and motivate users to play more, a scoring system will be established based on the challenges completed by users. This scoring system will be accompanied by a leaderboard that displays the top players.
- To offer users more customization options and improve their experience, a settings section will be added that allows for interface customization.

These upcoming features will further enhance Guess Master's gameplay and provide users with a more personalized experience.

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
