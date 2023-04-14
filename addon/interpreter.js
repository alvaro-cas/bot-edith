// Speaking
const googleTTS = require("google-tts-api")
const mpv = require("node-mpv")

// Bayes Theorem
const bayes = require('bayes')
const classifier = bayes()
const bys = require('./learner')
// Bayes start learning
const keys = Object.keys(bys)
console.log(keys)
keys.forEach((key, index) => {
  bys[key](classifier)
})

// Import possible answers
const answers = require('./answers')
 
async function start (message) {
  console.log(`Message: "${message}"` +
    `, Category: "${await classifier.categorize(message)}"`)

  for (var i=0; keys.length; i++) {
    if (await classifier.categorize(message) == keys[i]) {
      var answer = answers[keys[i]]
      console.log(answer)
      speak(answer)
      break
    }
  }

  // Start interpreting input speech
  if (await classifier.categorize(message) == 'fechaDeHoy'){
    var dd = new Date()
    var date = dd.getDate()
    var month = dd.getMonth() + 1
    var year = dd.getFullYear()
    speak("Hoy es " + date + " " 
    + month + " del " + year)
  }
}

// Speaking function
function speak(text) {
  var answer = text[Math.floor(Math.random()*text.length)]
  var mpvPlayer = new mpv()

  var url = googleTTS.getAudioUrl(answer, {
    lang: 'es',
    slow: false,
    host: 'https://translate.google.com',
  })

  mpvPlayer.load(url)
  mpvPlayer.on('stopped', function() {
    mpvPlayer.quit()
  })
}

module.exports = { start }

