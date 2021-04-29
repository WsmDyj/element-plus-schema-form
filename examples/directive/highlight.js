export default {
  install (app) {
    app.directive('highlight', function (el) {
      const blocks = el.querySelectorAll('pre code')
      blocks.forEach((block) => {
          hljs.highlightBlock(block)
      })
    })
  }
}