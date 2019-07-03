module.exports = {
  productionSourceMap: false,
  outputDir: 'docs',
  ...(process.env.NODE_ENV === 'production'
    ? { publicPath: '/drecksau/' }
    : {}
  )
}
