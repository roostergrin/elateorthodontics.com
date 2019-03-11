/* eslint-disable */

// ----------------------------
// to learn more about importing => https://github.com/typekit/webfontloader
// ----------------------------

var WebFont = require('webfontloader')

const fonts = () => {
  // WebFont.load({
  //   google: {
  //     families: [ 'Lato:300,400,500' ]
  //   }
  // })
  WebFont.load({
    typekit: {
      id: 'vyu7jue'
    }
  })
}

export default fonts()
/* eslint-enable */
