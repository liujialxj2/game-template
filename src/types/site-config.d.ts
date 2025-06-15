/**
 * 网站配置类型定义
 */

// 网站核心信息配置
export interface SiteInfo {
  name: string;
  domain: string;
  mainKeyword: string;
  description: string;
  logo: string;
  favicon: string;
  socialLinks: {
    twitter: string;
    facebook: string;
    instagram: string;
    discord: string;
  };
  contactInfo: {
    email: string;
    supportEmail: string;
  };
  footerLinks: Array<{
    text: string;
    url: string;
  }>;
  keywords: string[];
}

// 网站主题配置
export interface ThemeConfig {
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    text: string;
  };
  fonts: {
    main: string;
    heading: string;
  };
}

// 爬虫配置
export interface ScraperConfig {
  gamedistribution: {
    enabled: boolean;
    sourceUrl: string;
    maxGames: number;
    outputFile: string;
    categories: string[];
    tags: string[];
    type: string;
    mobile: string;
    rewarded: string;
  };
  otherScraper: {
    enabled: boolean;
    sourceUrl: string;
    maxGames: number;
    outputFile: string;
  };
}

// 游戏卡片动效配置
export interface CardAnimationConfig {
  hoverTranslateY: string;
  hoverScale: string;
  transitionDuration: string;
  hoverShadow: string;
}

// 声明模块
declare module '../site.config' {
  export const siteInfo: SiteInfo;
  export const themeConfig: ThemeConfig;
  export const scraperConfig: ScraperConfig;
  export const cardAnimationConfig: CardAnimationConfig;
  
  const config: {
    siteInfo: SiteInfo;
    themeConfig: ThemeConfig;
    scraperConfig: ScraperConfig;
    cardAnimationConfig: CardAnimationConfig;
  };
  
  export default config;
}

declare module '../../site.config' {
  export const siteInfo: SiteInfo;
  export const themeConfig: ThemeConfig;
  export const scraperConfig: ScraperConfig;
  export const cardAnimationConfig: CardAnimationConfig;
  
  const config: {
    siteInfo: SiteInfo;
    themeConfig: ThemeConfig;
    scraperConfig: ScraperConfig;
    cardAnimationConfig: CardAnimationConfig;
  };
  
  export default config;
} 