// Speech to Text Vosk
const vosk = require('vosk')
const mic = require("mic")

// Interpreter
const interpreter = require('./addon/interpreter')

// Download model from here:
// https://alphacephei.com/vosk/models
// Unpack as 'model' on current folder
MODEL_PATH = "model"
SAMPLE_RATE = 16000

const model = new vosk.Model(MODEL_PATH)
const rec = new vosk.Recognizer({model: model, sampleRate: SAMPLE_RATE})

var micInstance = mic({
    rate: String(SAMPLE_RATE),
    channels: '1',
    debug: false,
    device: 'default',
});

var micInputStream = micInstance.getAudioStream();

micInputStream.on('data', async data => {
    if (rec.acceptWaveform(data)) {
        var message = rec.result().text
        if (message !== '') {
          interpreter.start(message)
        }
      }
});

micInputStream.on('audioProcessExitComplete', function() {
    rec.free()
    model.free()
})

process.on('SIGINT', function() {
    console.log("\nBYE")
    micInstance.stop()
})

micInstance.start()
