# Dayoung Gong's Homepage

Source for [gongda0e.github.io](https://gongda0e.github.io). Plain Jekyll, built by GitHub Pages; no theme or custom plugins.

## 내용 업데이트 (대부분 여기만 고치면 됩니다)

| 바꾸고 싶은 것 | 파일 |
| --- | --- |
| 뉴스 | `_data/news.yml` (날짜순 자동 정렬, 홈에는 최근 6개 + "Older news") |
| 논문 | `_data/publications.yml` (+ 썸네일은 `assets/img/`) |
| 경력 / 학력 | `_data/experience.yml`, `_data/education.yml` |
| 서비스 / 수상 | `_data/service.yml`, `_data/honors.yml` |
| 이름 아래 직함, 링크, 사진 | `_data/profile.yml` |
| 소개글 | `_includes/bio.md` |

- 뉴스 텍스트, 경력의 `org`/`detail`, 서비스 항목은 Markdown 링크 `[텍스트](URL)`를 쓸 수 있어요.
- 논문의 `authors`에서 내 이름은 자동으로 굵게 표시돼요. 공동 1저자는 이름 뒤에 `*`.
- `selected: true`인 논문만 홈에 나오고, `/publications/`에는 전부 연도별로 나와요.
- `first_author: true`인 논문이 "First author" 필터에 나와요.
- `image_dark`를 넣으면 다크 모드에서 그 그림으로 바뀌어요.
- 뉴스를 홈에 몇 개 보여줄지는 `_config.yml`의 `news_on_home`.

## 디자인

- 레이아웃: `_layouts/default.html`, 사이드바: `_includes/sidebar.html`, 논문 한 편: `_includes/pub.html`
- 스타일: `assets/css/main.css` (색은 파일 맨 위 `:root` 변수에서 한 번에 변경)

## 로컬 미리보기 (선택)

```
bundle install
bundle exec jekyll serve
```
