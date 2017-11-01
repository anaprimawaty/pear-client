// import router from '../router'

document.addEventListener('deviceready', () => {
  // Facebook
  if (typeof facebookConnectPlugin !== 'undefined') {
    global.FB = window.facebookConnectPlugin
    global.FB.login = global.FB.login.papp(['public_profile', 'user_photos'])
  }

  if (typeof FCMPlugin !== 'undefined') {
    window.FCMPlugin.getToken(function(token) {
      global.fcmToken = token
    })
  }

  // Universal Links
  /* global universalLinks */
  universalLinks.subscribe('launchFromLink', data =>
    console.log('Did launch application from the link: ' + data.url)
  )
})
