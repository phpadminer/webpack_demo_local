module.exports = {
  mode:'production',
  entry:{
    app:'./main1.js',
    home:'./main2.js'
  },
  output:{
    filename:'[name].js'
  }
}
