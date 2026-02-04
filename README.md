# 📖 바이브코딩 백과사전

> **비전공자 바이브코더를 위한 개발 용어집**

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![Terms](https://img.shields.io/badge/용어-150개-green)
![License](https://img.shields.io/badge/license-MIT-yellow)

바이브코딩 백과사전은 AI 도구(Cursor, ChatGPT, Claude 등)를 활용하여 코딩에 입문한 **비전공자**들이 개발 용어를 쉽고 빠르게 이해할 수 있도록 돕는 웹 애플리케이션입니다.

## 🌐 데모

**[👉 라이브 데모 보기](https://vibe-coding-dictionary.vercel.app)**

---

## ✨ 주요 기능

| 기능 | 설명 |
|------|------|
| 🔍 **초성 검색** | 'ㄱ', 'ㅂㅅ' 등 한글 초성만으로 용어 검색 |
| 🏷️ **카테고리 필터** | 12개 분야별 용어 탐색 (프론트엔드, 백엔드, DB, AWS 등) |
| 🎨 **다크/라이트 테마** | 4가지 테마 지원 (다크, 라이트, 슬레이트, 퍼플) |
| 📚 **150개 용어** | 비전공자 눈높이에 맞춘 쉬운 설명과 공식 문서 링크 |
| 📱 **반응형 디자인** | 모바일, 태블릿, 데스크톱 모든 기기 지원 |

---

## 📂 카테고리

- 🛠️ 개발 도구 & 버전 관리 (20개)
- 🎨 프론트엔드 & UI/UX (20개)
- 💻 프로그래밍 언어 & 프레임워크 (27개)
- 🌐 네트워크 & 인프라 (17개)
- 🗄️ 데이터베이스 (15개)
- 🐧 리눅스 & 서버 (12개)
- 🖥️ 웹 서버 (10개)
- 🔐 보안 & 인증 (8개)
- ⚡ 성능 & 최적화 (7개)
- ☁️ AWS (6개)
- 🎬 미디어 & 특수 기술 (5개)
- 🔌 플랫폼 & 통합 (5개)

---

## 🛠️ 기술 스택

| 영역 | 기술 |
|------|------|
| **Frontend** | React 18, Vite |
| **Styling** | Vanilla CSS (Glassmorphism, Modern Sans) |
| **Icons** | Lucide React |
| **Search** | Hangul.js (초성 검색) |
| **Deploy** | Vercel |

---

## 🚀 로컬 실행

### 1. 저장소 클론
```bash
git clone https://github.com/iebunie5-design/vibe-coding-dictionary.git
cd vibe-coding-dictionary
```

### 2. 의존성 설치
```bash
npm install
```

### 3. 개발 서버 실행
```bash
npm run dev
```

### 4. 브라우저 접속
```
http://localhost:5173
```

---

## 📁 프로젝트 구조

```
vibe-coding-dictionary/
├── src/
│   ├── data/
│   │   └── terms.json       # 150개 용어 데이터
│   ├── App.jsx              # 메인 애플리케이션
│   ├── App.css              # 컴포넌트 스타일
│   ├── index.css            # 글로벌 스타일 (Modern Sans)
│   └── main.jsx
├── public/
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## 🎨 디자인 시스템

- **폰트**: Inter + Pretendard (Modern Sans)
- **컴포넌트**: Rounded Soft (border-radius: 12px)
- **애니메이션**: Smooth Slide (translateX, 0.3s)
- **반응형**: Mobile First 접근법
- **접근성**: prefers-reduced-motion 지원

---

## 📝 용어 데이터 구조

```json
{
  "id": "git",
  "term": "Git",
  "category": "개발 도구 & 버전 관리",
  "definition": "코드 변경 이력을 관리하는 버전 관리 시스템...",
  "usage": "팀 프로젝트에서 협업할 때 사용...",
  "references": [
    { "title": "Git 공식 사이트", "url": "https://git-scm.com" }
  ],
  "tags": ["필수", "기초"]
}
```

---

## 🤝 기여하기

1. 이 저장소를 Fork 합니다
2. 새 브랜치를 만듭니다 (`git checkout -b feature/새기능`)
3. 변경사항을 커밋합니다 (`git commit -m 'Add: 새 기능 추가'`)
4. 푸시합니다 (`git push origin feature/새기능`)
5. Pull Request를 생성합니다

---

## 📄 라이선스

MIT License © 2025

---

<div align="center">

**Made with ❤️ by 바이브코더**

*비전공자도 개발 용어를 쉽게 이해할 수 있도록*

</div>
