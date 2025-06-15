/**
 * 网站配置文件
 * 
 * 本文件是网站的核心配置中心。修改此文件可以快速定制网站的基本信息、
 * 外观、爬虫参数等，无需修改任何代码。
 */

/**
 * 网站核心信息配置
 * 这些信息将用于SEO、页面标题、页脚等处
 */
export const siteInfo = {
  name: "Mindseye 游戏平台", // 网站名称，会显示在标题和页脚
  domain: "mindseye.games", // 网站域名，用于生成完整的链接
  mainKeyword: "HTML5游戏", // 网站核心关键词，用于SEO
  description: "一个现代化的HTML5游戏平台，提供各种类型的免费在线游戏。", // 网站描述，用于SEO
  logo: "/images/logo.svg", // Logo图片路径
  favicon: "/favicon.ico", // 网站图标路径
  
  // 社交媒体链接
  socialLinks: {
    twitter: "https://twitter.com/mindseye_games",
    facebook: "https://facebook.com/mindseye_games",
    instagram: "https://instagram.com/mindseye_games",
    discord: "https://discord.gg/mindseye_games"
  },
  
  // 联系信息
  contactInfo: {
    email: "contact@mindseye.games",
    supportEmail: "support@mindseye.games"
  },
  
  // 页脚链接
  footerLinks: [
    { text: "关于我们", url: "/about" },
    { text: "服务条款", url: "/terms" },
    { text: "隐私政策", url: "/privacy" },
    { text: "联系我们", url: "/contact" }
  ],
  
  // 额外的SEO关键词
  keywords: [
    "免费游戏",
    "在线游戏",
    "HTML5游戏",
    "休闲游戏",
    "益智游戏",
    "动作游戏",
    "冒险游戏"
  ]
};

/**
 * 网站主题配置
 * 定义网站的颜色、字体等视觉元素
 */
export const themeConfig = {
  // 主色调
  colors: {
    primary: '#4A90E2', // 主色
    secondary: '#F5A623', // 辅助色
    accent: '#50E3C2', // 强调色
    background: '#0F172A', // 背景色
    text: '#FFFFFF' // 文本色
  },
  
  // 字体设置
  fonts: {
    main: "'Inter', sans-serif", // 主要字体
    heading: "'Inter', sans-serif" // 标题字体
  }
};

/**
 * 爬虫配置
 * 用于自动抓取游戏数据
 */
export const scraperConfig = {
  // GameDistribution 爬虫配置
  gamedistribution: {
    enabled: true, // 是否启用此爬虫
    sourceUrl: "https://catalog.api.gamedistribution.com/api/v1.0/rss/All/", // 目标抓取网址
    maxGames: 50, // 一次最多抓取的游戏数量
    outputFile: "src/data/gamedistribution-games.json", // 抓取结果的输出文件
    categories: ["All"], // 要抓取的游戏分类
    tags: ["All"], // 要抓取的游戏标签
    type: "All", // 游戏类型
    mobile: "All", // 是否支持移动设备
    rewarded: "all" // 是否包含激励游戏
  },
  
  // 可以为其他爬虫添加类似配置
  otherScraper: {
    enabled: false,
    sourceUrl: "https://some-other-games-site.com/all",
    maxGames: 100,
    outputFile: "src/data/another-source-games.json"
  }
};

/**
 * 游戏卡片动效配置
 * 定义游戏卡片的悬停动画效果
 */
export const cardAnimationConfig = {
  hoverTranslateY: "-4px", // 卡片上浮距离
  hoverScale: "1.03", // 图片放大比例
  transitionDuration: "0.3s", // 过渡动画时长
  hoverShadow: "0 8px 20px rgba(0, 0, 0, 0.15)" // 悬停阴影效果
};

export default {
  siteInfo,
  themeConfig,
  scraperConfig,
  cardAnimationConfig
}; 