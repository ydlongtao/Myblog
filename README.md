# Myblog

VuePress-powered academic homepage and personal blog for Longtao Huangfu.

## Website

[https://ydlongtao.github.io/Myblog/](https://ydlongtao.github.io/Myblog/)

## Structure

- `docs/`: VuePress source pages and Markdown blog content
- `docs/.vuepress/config.ts`: VuePress site and theme configuration
- `docs/.vuepress/public/`: Public images and CV files
- `scripts/sync-wechat-articles.mjs`: Sync local HFLT WeChat articles into VuePress
- `scripts/deploy-github-pages.mjs`: Publish built static files to `gh-pages`
- `public/`: Previous static website kept as a reference backup
- `TASK_LOG.md`: Full English task log and modification record

## Local Development

```bash
npm install
npm run sync:wechat
npm run dev
```

## Build

```bash
npm run sync:wechat
npm run build
```

## Deploy

```bash
npm run deploy:github
```

Deployment is local-first: the WeChat sync reads `/Users/huangfulongtao/Desktop/hflt公众号项目`, builds VuePress locally, and pushes the static output to the `gh-pages` branch of `ydlongtao/Myblog`.
