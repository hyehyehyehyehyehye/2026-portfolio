<<<<<<< HEAD
# 2026-portfolio
=======
# Jo So Hye Portfolio Website

PDF 포트폴리오를 기반으로 제작한 반응형 원페이지 웹사이트입니다.

## 실행 방법

`index.html`을 브라우저에서 열거나, 폴더에서 간단한 로컬 서버를 실행하세요.

```bash
python3 -m http.server 8000
```

이후 브라우저에서 `http://localhost:8000`으로 접속하면 됩니다.

## 구성

- 반응형 데스크톱/모바일 레이아웃
- 분야별 프로젝트 필터
- 프로젝트 상세 팝업
- 외부 프로젝트 링크
- 스크롤 등장 효과
- 이메일 및 전화 연결

배포 시 이 폴더 전체를 Netlify, Vercel, GitHub Pages 등의 정적 호스팅에 업로드하면 됩니다.

## 목록 이미지와 상세 이미지 따로 지정하기

프로젝트 데이터의 `image`는 스크롤 목록에 표시되고, `detailImage`는 프로젝트를 클릭한 뒤 열리는 상세 팝업에 표시됩니다.

```js
image: "assets/liftree.jpg",
detailImage: "assets/liftree-detail.jpg",
```

이미지 파일은 `assets` 폴더에 넣습니다. `detailImage`를 작성하지 않으면 목록용 `image`가 상세 화면에도 자동으로 표시됩니다.
>>>>>>> 673fdbc (포트폴리오 업로드)
# 2026-portfolio
# 2026-portfolio
