import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import GamesList from './components/GamesList';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import GamePage from './pages/GamePage';
import GamesListPage from './pages/GamesListPage';
import TermsPage from './pages/TermsPage';
import ContactPage from './pages/ContactPage';
import PrivacyPage from './pages/PrivacyPage';
// 从新的games.js文件导入，而不是JSON文件
import { games, setGamesData } from './data/games';
import { getSupportedLanguageCodes } from './i18n/languageConfig';
// 导入网站配置
import { siteInfo } from '../site.config';

// 获取支持的语言代码列表
const supportedLanguages = getSupportedLanguageCodes();

function App() {
  const [loading, setLoading] = useState(true);
  const { i18n } = useTranslation();

  // Remove potential third-party tool scripts
  useEffect(() => {
    // Remove all potential third-party support tool scripts
    const scripts = document.querySelectorAll('script[src*="tawk"], script[src*="crisp"], script[src*="intercom"], script[src*="zendesk"], script[src*="help"], script[src*="support"], script[src*="chat"]');
    scripts.forEach(script => script.remove());
    
    // Remove potential floating help buttons
    const helpElements = document.querySelectorAll('[id*="help"], [class*="help"], [id*="chat"], [class*="chat"], [id*="support"], [class*="support"]');
    helpElements.forEach(el => {
      if (el.tagName !== 'SECTION' && el.tagName !== 'DIV' && el.tagName !== 'ARTICLE') {
        el.remove();
      }
    });
    
    // Add CSS rules to hide potential help floating buttons
    const style = document.createElement('style');
    style.textContent = `
      #tawk-bubble-container, #crisp-chatbox, .intercom-launcher, .zopim, .drift-widget, .olark-launch-button, .helpButtonEnabled, .help-button, .support-button, .chat-button { 
        display: none !important; 
      }
    `;
    document.head.appendChild(style);
    
    // 设置网站标题和描述
    document.title = siteInfo.name;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', siteInfo.description);
    }
  }, []);

  // Initialize game data
  useEffect(() => {
    // 直接使用导入的游戏数据
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-black">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white text-xl">Loading games...</p>
        </div>
      </div>
    );
  }

  // 语言路由包装器组件
  const LanguageRouteWrapper = ({ element }: { element: React.ReactNode }) => {
    return <>{element}</>;
  };

  return (
    <Router>
      <div className="min-h-screen bg-black text-white">
        <Routes>
          {/* 默认重定向到当前语言 */}
          <Route path="/" element={<Navigate to={`/${i18n.language}`} replace />} />
          
          {/* 多语言路由 - 首页 */}
          {supportedLanguages.map((lang) => (
            <Route key={`home-${lang}`} path={`/${lang}`} element={
              <LanguageRouteWrapper element={
                <>
                  <Header />
                  <Hero />
                  <GamesList />
                  <Features />
                  <Testimonials />
                  <FAQ />
                  <Footer />
                </>
              } />
            } />
          ))}
          
          {/* 多语言路由 - 游戏详情页 */}
          {supportedLanguages.map((lang) => (
            <Route key={`game-${lang}`} path={`/${lang}/games/:gameId`} element={
              <LanguageRouteWrapper element={<GamePage />} />
            } />
          ))}
          
          {/* 多语言路由 - 游戏列表页 */}
          {supportedLanguages.map((lang) => (
            <Route key={`games-${lang}`} path={`/${lang}/games`} element={
              <LanguageRouteWrapper element={<GamesListPage />} />
            } />
          ))}
          
          {/* 多语言路由 - 服务条款页 */}
          {supportedLanguages.map((lang) => (
            <Route key={`terms-${lang}`} path={`/${lang}/terms`} element={
              <LanguageRouteWrapper element={
                <>
                  <Header />
                  <TermsPage />
                  <Footer />
                </>
              } />
            } />
          ))}
          
          {/* 多语言路由 - 隐私政策页 */}
          {supportedLanguages.map((lang) => (
            <Route key={`privacy-${lang}`} path={`/${lang}/privacy`} element={
              <LanguageRouteWrapper element={
                <>
                  <Header />
                  <PrivacyPage />
                  <Footer />
                </>
              } />
            } />
          ))}
          
          {/* 多语言路由 - 联系页 */}
          {supportedLanguages.map((lang) => (
            <Route key={`contact-${lang}`} path={`/${lang}/contact`} element={
              <LanguageRouteWrapper element={
                <>
                  <Header />
                  <ContactPage />
                  <Footer />
                </>
              } />
            } />
          ))}
          
          {/* 兼容旧路由 */}
          <Route path="/games/:gameId" element={<Navigate to={`/${i18n.language}/games/:gameId`} replace />} />
          <Route path="/games" element={<Navigate to={`/${i18n.language}/games`} replace />} />
          <Route path="/terms" element={<Navigate to={`/${i18n.language}/terms`} replace />} />
          <Route path="/privacy" element={<Navigate to={`/${i18n.language}/privacy`} replace />} />
          <Route path="/contact" element={<Navigate to={`/${i18n.language}/contact`} replace />} />
          
          {/* 未匹配路由重定向到首页 */}
          <Route path="*" element={<Navigate to={`/${i18n.language}`} replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;