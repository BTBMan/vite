import('@vitejs/dep-that-dynamic-imports-css/index.css').then((res) => {
  const sheet = new CSSStyleSheet()
  sheet.replaceSync(res.default)

  document.adoptedStyleSheets = [...document.adoptedStyleSheets, sheet]
})
