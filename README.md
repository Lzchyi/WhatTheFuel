# WhatTheFuel

A static GitHub Pages-friendly site for Malaysia fuel context.

## Current state

This repo intentionally avoids fake live data.

- homepage fuel cards are driven by static JSON
- news can stay empty until reviewed source ingestion is connected
- timeline can stay empty until reviewed entries are added
- no runtime server is required

## Local development

```bash
npm install
npm run dev
```

## Deployment

GitHub Actions deploys the built site to GitHub Pages.
