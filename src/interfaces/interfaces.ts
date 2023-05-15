import { Category, DifficultyLevel, Prisma, Word } from "@prisma/client";

export interface Letter {
  char: string;
  guessed: boolean;
}

export interface WordList {
  words: Word[];
}

export interface Game {
  category: Category;
  difficultyLevel: DifficultyLevel;
}

export interface StartGameResponse {
  categories: Category[];
  difficultyLevels: DifficultyLevel[];
}

export interface ApiResult {
  success: boolean;
  message: string;
  data: any;
}

type WordWithDetails = Prisma.WordGetPayload<{
  include: { category: true; difficultyLevel: true };
}>;

export interface WordLearned {
  word: WordWithDetails | Word;
  learned: boolean;
}
