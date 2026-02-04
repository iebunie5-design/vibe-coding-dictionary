# 📱 바이브코딩 백과사전 (Vibe Coding Dictionary)

> **비전공자 바이브코더를 위한 쉽고 직관적인 개발 용어집**

바이브코딩 백과사전은 AI 도구(Cursor, ChatGPT, Claude 등)를 활용하여 코딩에 입문한 비전공자들이 프로젝트 진행 중 마주치는 생소한 개발 용어를 3분 안에 이해할 수 있도록 돕는 웹 애플리케이션입니다.

## ✨ 주요 기능

- **🔍 실시간 초성 검색**: 'ㅂㅅ'만 쳐도 '변수'가 검색되는 한국어 최적화 검색 엔진.
- **🏷️ 카테고리 필터링**: 프론트엔드, 백엔드, 데이터베이스, AWS 등 분야별 용어 탐색.
- **🎨 프리미엄 테마**: 다크/라이트 모드를 포함한 4가지 감각적인 테마 지원.
- **📝 쉬운 설명 & 코드 예시**: 전문 용어 대신 비유를 통한 설명과 바로 복사 가능한 코드 스니펫 제공.
- **🌐 다국어 지원**: 한국어와 영어 두 가지 버전으로 용어 설명 확인 가능.

## 🛠 기술 스택

- **Frontend**: React, Vite
- **Styling**: Vanilla CSS (Glassmorphism, Responsive Design)
- **Icons**: Lucide-React
- **Library**: Hangul-js (초성 검색 지원)

## 📂 프로젝트 구조

```text
vibe-coding-dictionary/
├── src/
│   ├── data/
│   │   └── terms.json    # 50개 이상의 용어 데이터
│   ├── App.jsx           # 메인 로직 및 UI 컴포넌트
│   ├── App.css           # 프리미엄 디자인 스타일시트
│   ├── index.css         # 글로벌 디자인 시스템 및 폰트
│   └── main.jsx
├── public/
└── README.md
```

## 🚀 시작하기

### 1. 의존성 설치
```bash
npm install
```

### 2. 개발 서버 실행
```bash
npm run dev
```

### 3. 브라우저 접속
`http://localhost:5173` 에서 실행 결과를 확인하세요.

## 📝 데이터 추가 가이드

`src/data/terms.json` 파일에 아래 형식으로 새로운 용어를 추가할 수 있습니다.

```json
{
  "id": "term_unique_id",
  "term_ko": "용어 한글명",
  "term_en": "Term English Name",
  "category": "분류",
  "description_ko": "쉬운 한글 설명",
  "description_en": "English Description",
  "example": "코드 예시",
  "related_terms": ["관련용어1", "관련용어2"],
  "difficulty": "beginner/intermediate/advanced"
}
```

---
*바이브코딩 백과사전 v1.0.0*
