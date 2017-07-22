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
Step 2. rename your repository to GITHUB_ID.github.io  
Step 3. open terminal (in Windows, CMD or PowerShell) 
Step 4. clone your repository
```bash
git clone https://github.com/GITHUB_ID/GITHUB_ID.github.io DIR_NAME
```
Step 5. move your hexo blog repository
```bash
cd DIR_NAME
```
Step 6. install packages.
```bash
npm i
```
Step 7. Enjoy your self! 

## Install fonts
You could choose from the following options.  
After install, you should set font config in themes/overdose/_config.yml
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

## Making it SEO Friendly (Thanks to [this post](http://futurecreator.github.io/2016/06/23/search-engine-optimization-hexo-plugins/))
Set your github page domain in ROOT_DIR/_config.yml about URL
```yaml
# URL
## If your site is put in a subdirectory, set url as 'http://yoursite.com/child' and root as '/child/'
url: https://GITHUB_ID.github.io
```

The three steps below are handled automatically so you do not have to worry about them.  
1. make sitemap with [hexo-generator-seo-friendly-sitemap](https://github.com/ludoviclefevre/hexo-generator-seo-friendly-sitemap)  
2. make RSS feed with [hexo-generator-feed](https://github.com/hexojs/hexo-generator-feed)  
3. make external link to nofollow for crawler with [hexo-autonofollow](https://github.com/liuzc/hexo-autonofollow)

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

Step 1. change ROOT_DIR/_config.yml about git repo
```yaml
# Deployment
## Docs: https://hexo.io/docs/deployment.html
deploy:
  type: git
  repo: https://github.com/GITHUB_ID/GITHUB_ID.github.io
  branch: master
```
Step 2. Type below command!  
```bash
npm run deploy
```