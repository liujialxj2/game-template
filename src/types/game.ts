/**
 * 游戏类型定义
 */

export interface Game {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  iframeUrl: string;
  controls: string;
  highlights: string[];
  originalUrl: string;
  category: string;
  tags: string[];
  rating?: number;
}

export type GamesList = Game[];

export interface GameRatingDetails {
  rating: number;
  votes: number;
} 