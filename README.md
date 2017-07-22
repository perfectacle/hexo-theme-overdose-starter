# [Hexo theme overdose](https://github.com/HyunSeob/hexo-theme-overdose) for starter, v0.2.8
⚠ **This repository is [v0.2.8](https://github.com/HyunSeob/hexo-theme-overdose/releases/tag/v0.2.8) of the theme.** ⚠   

⚠ **This theme isn't support Node v8** ⚠  
Because it use hexo-renderer-bourbon v1.0.4,
but it isn't support Node v8.  
**so You must use Node v7 or lower.**

⚠ **This theme isn't suitable for npm5** ⚠  
[Some package](https://github.com/mapbox/node-pre-gyp/issues/298) in this theme isn't suitable for npm5,
so you don't have to remove package-lock.json in .gitignore  
But that does not mean you can't use npm5!

## Translation  
* [Korean](README_KOREAN.md)

## Installation
**Step 0. You must install [hexo-cli](https://hexo.io/docs/index.html)**  
Step 1. fork this repository  
Step 2. rename your repository to USER_ID.github.io  
Step 3. open terminal (in Windows, CMD or PowerShell) 
Step 4. clone your repository
```bash
git clone https://github.com/USER_ID/YOUR_REPOSITORY DIR_NAME
```
Step 5. move your hexo blog repository
```bash
cd DIR_NAME
```
Step 6. install packages.
```bash
npm i
```
Step 7. change ROOT_DIR/_config.yml about git repo  
```yaml
# Deployment
## Docs: https://hexo.io/docs/deployment.html
deploy:
  type: git
  repo: https://github.com/USER_ID/YOUR_REPOSITORY
  branch: master
```
Step 8. If you want to install font
* noto-sans-kr
```bash
npm run noto
```
Step 8. Enjoy your self!

## Add Portfolio
⚠ **Portfolios are only suitable for static pages that do not use a Web server or database. (ex) Web site, Web application).** ⚠

Please enter the URL below to verify it now.
```
http://localhost:4000/test/
```

1. make directory about portfolio in source/_static  
2. You can put your portfolio in it.  

## Deploy
1. in gh-pages branch, you can manage your post, theme, etc.  
2. in master branch, deploy your post to github page.

Type below command!  
```bash
npm run deploy
```