export interface Letter {
  char: string;
  guessed: boolean;
}

export interface WordList {
  category: string;
  level: string;
  words: Word[];
}

export interface Word {
  word: string;
  description: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  readyForPlay: boolean;
  baseColor:
    | "orange"
    | "lime"
    | "emerald"
    | "cyan"
    | "violet"
    | "pink"
    | "fuchsia"
    | "sky"
    | "rose";
}

export interface DifficultyLevel {
  id: string;
  name: string;
  icon: string;
  baseColor: "green" | "amber" | "red";
}

export interface StartGameResponse {
  categories: Category[];
  difficultyLevels: DifficultyLevel[];
}
