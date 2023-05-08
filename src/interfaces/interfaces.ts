export interface Letter {
  char: string;
  guessed: boolean;
}

export interface WordList {
  words: Word[];
}

export interface Word {
  id: String;
  categoryId: String;
  difficultyLevelId: String;
  word: string;
  description: string;
}

export interface RandomWord {
  id: String;
  categoryId: String;
  categoryName?: String;
  difficultyLevelId: String;
  difficultyLevelName?: String;
  word: string;
  description: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  readyForPlay: boolean;
  baseColor: string;
}

export interface DifficultyLevel {
  id: string;
  name: string;
  icon: string;
  baseColor: string;
}

export interface Game {
  category: Category;
  difficultyLevel: DifficultyLevel;
}

export interface StartGameResponse {
  categories: Category[];
  difficultyLevels: DifficultyLevel[];
}
