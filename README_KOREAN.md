# 초보자를 위한 [헥소 블로그 overdose 테마](https://github.com/HyunSeob/hexo-theme-overdose) v0.2.8
⚠ **이 저장소는 오버도스 테마의 [v0.2.8](https://github.com/HyunSeob/hexo-theme-overdose/releases/tag/v0.2.8)을 내장하고 있습니다.** ⚠

⚠ **이 테마는 노드 v8을 지원하지 않습니다.** ⚠  
오버도스는 hexo-render-bourbon v1.0.4라는 패키지를 사용하는데,
그 패키지는 노드 v8을 지원하지 않는 패키지입니다.  
**따라서 노드 v7 이하만 사용하셔야 합니다.**  

⚠ **이 테마는 npm5와 어울리지 않습니다.** ⚠  
이 테마에서 사용하는 [패키지](https://github.com/mapbox/node-pre-gyp/issues/298) 중에 npm5와 어울리지 않는 패키지가 존재합니다.  
따라서 .gitignore에 있는 package-lock.json은 삭제하시면 안 됩니다.  
하지만 npm5를 사용할 수 없는 것은 아닙니다!

## Translation  
* [English](README.md)

## 설치하기
**0 번째. [hexo-cli](https://hexo.io/docs/index.html)는 먼저 설치되어 있는 상태여야합니다.**  
1 번째. 이 저장소를 포크 떠주세요.  
2 번째. 포크 뜬 저장소의 이름을 GITHUB_ID.github.io로 바꿔주세요.  
3 번째. 터미널을 열어주세요. (윈도우에서는 CMD나 파워쉘)  
4 번째. 포크 뜬 저장소를 클론해주세요.
```bash
git clone https://github.com/GITHUB_ID/GITHUB_ID.github.io DIR_NAME
```
5 번째. 클론한 저장소로 이동해주세요.
```bash
cd DIR_NAME
```
6 번째. 패키지들을 설치해주세요.
```bash
npm i
```
7 번째. 이제 블로그를 꾸미시면 됩니다!

## 폰트 설치하기
아래와 같은 옵션 중에서 선택하시면 됩니다.  
설치를 마치신 후에는 theme/overdose/_config.yml에 있는 폰트 설정을 바꿔주셔야합니다.  
* noto-sans-kr
```bash
npm run noto-kr
```
* spoqa-han-sans-kr
```bash
npm run spo-kr
```
* spoqa-han-sans-jp
```bash
npm run spo-jp
```
* Korean fonts(noto-sans-kr, spoqa-han-sans-kr)
```bash
npm run font-kr
```
* Spoqa fonts(spoqa-han-sans-kr, spoqa-han-sans-jp)
```bash
npm run spoqa
```
* All fonts(noto-sans-kr, spoqa-han-sans-kr, spoqa-han-sans-jp)
```bash
npm run font
```

## SEO 친화적으로 만들기 ([이 포스트](http://futurecreator.github.io/2016/06/23/search-engine-optimization-hexo-plugins/)를 참고했습니다)
ROOT_DIR/_config.yml에서 URL 부분에 자신의 깃헙 페이지 도메인을 입력하시면 됩니다.
```yaml
# URL
## If your site is put in a subdirectory, set url as 'http://yoursite.com/child' and root as '/child/'
url: https://GITHUB_ID.github.io
```

아래 세 단계는 자동적으로 처리되는 내용이니 크게 신경쓰지 않으셔도 됩니다.  
1. [hexo-generator-seo-friendly-sitemap](https://github.com/ludoviclefevre/hexo-generator-seo-friendly-sitemap)을 이용하여 사이트맵 만들기.  
2. [hexo-generator-feed](https://github.com/hexojs/hexo-generator-feed)을 이용하여 RSS Feed를 만들기.  
3. [hexo-autonofollow](https://github.com/liuzc/hexo-autonofollow)를 이용하여 크롤러를 위해 외부 링크에는 nofollow 속성이 달리게 끔 하기.

## 포트폴리오 얹기
⚠ **포트폴리오는 웹서버나 데이터베이스를 사용하지 않는 정적인 페이지에만 적합합니다. (예) 홈페이지, 웹 어플리케이션).** ⚠

지금 당장 확인해보시려면 아래 URL을 입력해주세요.
```
http://localhost:4000/test/
```

1. source/_static 디렉토리 안에 포트폴리오 디렉토리를 생성해줍니다.  
2. 그 안에 작성한 포트폴리오를 넣어주시면 됩니다.  

## 배포
1. gh-pages 브랜치에서는 포스트 파일, 테마 파일, 기타 등등의 파일을 관리할 수 있습니다.  
2. master 브랜치에서는 github page로 서비스 할 포스트 등등을 관리할 수 있습니다.

1 번째. ROOT_DIR/_config.yml에서 git repo를 설정해주세요.
```yaml
# Deployment
## Docs: https://hexo.io/docs/deployment.html
deploy:
type: git
repo: https://github.com/USER_ID/YOUR_REPOSITORY
branch: master
```
2 번째. 아래 명령어를 입력하시면 배포가 이뤄집니다!  
```bash
npm run deploy
```