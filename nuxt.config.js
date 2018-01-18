module.exports = {
  head: {
    title: 'portfolio',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Miyachik\'s portfolio site in Github Pages.' },
      { hid: 'og:image' , property: 'og:image', conent: "https://raw.githubusercontent.com/miyachik/Portfolio/7ab66014d710fbb10588c1b52d464cb5960dbd16/static/prof.png"}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' }
    ]
  },
  loading: { color: '#3B8070' },
  generate: {
    minify: {
      minifyJS: false
    }
  },
  build: {
    vendor: ['livephotoskit'],
    publicPath: "https://miyachik.github.io/Portfolio/",
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
}
