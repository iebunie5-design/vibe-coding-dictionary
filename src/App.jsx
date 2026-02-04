import { useState, useEffect, useMemo } from 'react';
import { Search, ArrowLeft, BookOpen, ExternalLink } from 'lucide-react';
import Hangul from 'hangul-js';
import termsJson from './data/terms.json';
import './App.css';

function App() {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('전체');
  const [selectedTerm, setSelectedTerm] = useState(null);
  const [theme, setTheme] = useState('dark');

  // 새로운 JSON 구조에 맞게 데이터 접근
  const termsData = termsJson.terms || [];
  const metadata = termsJson.metadata || {};

  const themes = [
    { id: 'dark', color: '#1e293b' },
    { id: 'light', color: '#ffffff' },
    { id: 'slate', color: '#334155' },
    { id: 'purple', color: 'linear-gradient(135deg, #6366f1, #a855f7)' }
  ];

  // 카테고리 목록 (메타데이터에서 가져옴)
  const categories = useMemo(() => {
    if (metadata.categories && metadata.categories.length > 0) {
      return [
        { name: '전체', count: termsData.length },
        ...metadata.categories.map(cat => ({ name: cat.name, count: cat.count }))
      ];
    }
    // 폴백: 데이터에서 카테고리 추출
    const counts = termsData.reduce((acc, term) => {
      acc[term.category] = (acc[term.category] || 0) + 1;
      return acc;
    }, {});
    return [
      { name: '전체', count: termsData.length },
      ...Object.keys(counts).map(cat => ({ name: cat, count: counts[cat] }))
    ];
  }, [termsData, metadata]);

  useEffect(() => {
    document.body.className = `theme-${theme}`;
  }, [theme]);

  // 검색 및 필터링
  const filteredTerms = useMemo(() => {
    return termsData.filter(term => {
      const matchesCategory = selectedCategory === '전체' || term.category === selectedCategory;
      const searchTarget = term.term || '';

      // 초성 검색 지원
      const isChosungSearch = /^[ㄱ-ㅎ]+$/.test(search);
      let matchesSearch = false;

      if (isChosungSearch) {
        const dissembled = Hangul.disassemble(searchTarget, true);
        const chosung = dissembled.map(d => d[0]).join('');
        matchesSearch = chosung.includes(search);
      } else {
        matchesSearch = searchTarget.toLowerCase().includes(search.toLowerCase());
      }

      return matchesCategory && matchesSearch;
    });
  }, [search, selectedCategory, termsData]);

  const renderHome = () => (
    <div className="home-view">
      <header className="premium-header">
        <div className="header-left">
          <div className="logo-wrapper">
            <div className="logo-icon glass-card">
              <BookOpen size={24} color="#6366f1" />
            </div>
            <div className="logo-text">
              <h1>{metadata.title || '바이브코딩 백과사전'}</h1>
              <p>{metadata.description || '비전공자 바이브코더를 위한 개발 용어집'}</p>
            </div>
          </div>
        </div>
        <div className="theme-selector">
          {themes.map(t => (
            <button
              key={t.id}
              className={`theme-circle ${theme === t.id ? 'active' : ''}`}
              style={{ background: t.color }}
              onClick={() => setTheme(t.id)}
            />
          ))}
        </div>
      </header>

      <section className="search-section">
        <div className="search-bar premium-search glass-card">
          <Search size={20} opacity={0.5} />
          <input
            type="text"
            placeholder="용어 검색... (초성 검색 지원)"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </section>

      <div className="category-grid">
        {categories.map(cat => (
          <button
            key={cat.name}
            className={`premium-tag ${selectedCategory === cat.name ? 'active' : ''}`}
            onClick={() => setSelectedCategory(cat.name)}
          >
            {cat.name} <span className="cat-count">{cat.count}</span>
          </button>
        ))}
      </div>

      <div className="term-list">
        {filteredTerms.map(term => (
          <div
            key={term.id}
            className="term-card premium-card glass-card"
            onClick={() => setSelectedTerm(term)}
          >
            <div className="term-header">
              <div className="term-title">
                <h3>{term.term}</h3>
              </div>
              {term.tags && term.tags.length > 0 && (
                <span className="difficulty-badge">{term.tags[0]}</span>
              )}
            </div>
            <p className="term-description">
              {term.definition && term.definition.substring(0, 100)}...
            </p>
          </div>
        ))}
      </div>
    </div>
  );

  const renderDetail = () => (
    <div className="detail-view wiki-style">
      <div className="detail-content premium-detail glass-card">
        <header className="wiki-header">
          <span className="wiki-category">{selectedTerm.category}</span>
          <h2 className="wiki-title">{selectedTerm.term}</h2>
          <button className="wiki-back" onClick={() => setSelectedTerm(null)}>
            <ArrowLeft size={20} />
          </button>
        </header>

        {/* 정의 섹션 */}
        <section className="wiki-section">
          <div className="section-header">
            <h4>정의</h4>
          </div>
          <p className="section-body">{selectedTerm.definition}</p>
        </section>

        {/* 용도 섹션 */}
        {selectedTerm.usage && (
          <section className="wiki-section">
            <div className="section-header">
              <h4>용도</h4>
            </div>
            <p className="section-body">{selectedTerm.usage}</p>
          </section>
        )}

        {/* 참고 링크 섹션 */}
        {selectedTerm.references && selectedTerm.references.length > 0 && (
          <section className="wiki-section">
            <div className="section-header">
              <h4>참고</h4>
            </div>
            <div className="section-body">
              <ul className="wiki-list">
                {selectedTerm.references.map((ref, idx) => (
                  <li key={idx}>
                    <a href={ref.url} target="_blank" rel="noopener noreferrer" className="ref-link">
                      {ref.title} <ExternalLink size={14} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* 태그 섹션 */}
        {selectedTerm.tags && selectedTerm.tags.length > 0 && (
          <div className="tags-section">
            {selectedTerm.tags.map(tag => (
              <span key={tag} className="mini-tag">{tag}</span>
            ))}
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="app-container">
      {selectedTerm ? renderDetail() : renderHome()}
    </div>
  );
}

export default App;
