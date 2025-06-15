/**
 * 配置加载器
 * 用于加载网站核心配置和游戏数据
 */

const fs = require('fs');
const path = require('path');

/**
 * 加载站点配置
 * @returns {Object} 站点配置对象
 */
function loadSiteConfig() {
  try {
    const configPath = path.resolve(process.cwd(), 'site.config.js');
    if (fs.existsSync(configPath)) {
      const config = require(configPath);
      console.log('✅ 站点配置加载成功');
      return config;
    } else {
      console.error('❌ 站点配置文件不存在: site.config.js');
      return null;
    }
  } catch (error) {
    console.error('❌ 加载站点配置失败:', error);
    return null;
  }
}

/**
 * 加载游戏数据
 * @returns {Array} 游戏数据数组
 */
function loadGamesData() {
  try {
    const gamesPath = path.resolve(process.cwd(), 'src/data/games.js');
    if (fs.existsSync(gamesPath)) {
      const gamesModule = require(gamesPath);
      console.log('✅ 游戏数据加载成功');
      return gamesModule.games || [];
    } else {
      console.error('❌ 游戏数据文件不存在: src/data/games.js');
      return [];
    }
  } catch (error) {
    console.error('❌ 加载游戏数据失败:', error);
    return [];
  }
}

module.exports = {
  loadSiteConfig,
  loadGamesData
}; 