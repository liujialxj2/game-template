/**
 * 游戏数据模块类型定义
 */
import { Game, GamesList } from './game';

declare module '../data/games' {
  export const games: GamesList;
  
  export function getAllGames(): GamesList;
  export function getGameById(id: string): Game | undefined;
  export function getGamesByCategory(category: string): GamesList;
  export function getGamesByTag(tag: string): GamesList;
  export function searchGames(query: string): GamesList;
  export function setGamesData(games: GamesList): void;
  
  const gamesModule: {
    games: GamesList;
    getAllGames: () => GamesList;
    getGameById: (id: string) => Game | undefined;
    getGamesByCategory: (category: string) => GamesList;
    getGamesByTag: (tag: string) => GamesList;
    searchGames: (query: string) => GamesList;
  };
  
  export default gamesModule;
} 