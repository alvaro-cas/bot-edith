async function greeting(classifier) {
  await classifier.learn(
    'hola,' +
    'qué onda,' +
    'saludos,' +
    'buenos días,' +
    'buenas'
    , 'greeting')
}
async function i_am_here(classifier) {
  await classifier.learn(
    'estás ahí,' +
    'edith te necesito,' +
    'volví,' +
    'regrese,' +
    'sigues viva,' +
    'estas escuchándome,' +
    'me escuchas,' +
    'contéstame,' +
    'estás ahí'
    , 'i_am_here')
}
async function do_not_know(classifier) {
  await classifier.learn(
    ''
    , 'do_not_know')
}
async function name(classifier) {
  await classifier.learn(
    'llamas,' +
    'cómo te llamas,' +
    'cuál es tu nombre,' +
    'quién eres,' +
    'tú quién eres,' +
    'tu nombre,' +
    'como te dicen,' +
    'tú eres,' +
    'cuál es tu apodo'
    , 'name')
}
async function what_are_you_doing(classifier) {
  await classifier.learn(
    'qué estás haciendo,' +
    'que planeas,' +
    'qué has hecho hoy' +
    'qué piensas'
    , 'what_are_you_doing')
}
async function you_welcome(classifier) {
  await classifier.learn(
    'gracias,' +
    'qué amable eres,' +
    'qué excelente servicio,' +
    'excelente muchas gracias,' +
    'buen servicio,' +
    'cinco estrellas'
    , 'you_welcome')
}
async function how_are_you(classifier) {
  await classifier.learn(
    'cómo estás,' +
    'cómo te encuentras,' +
    'cómo estás el día de hoy,' +
    'como te trata la vida'
    , 'how_are_you')
}
async function date(classifier) {
  await classifier.learn(
    'qué día es hoy,' +
    'la fecha de hoy,' +
    'la fecha'
    , 'date')
}
async function hour(classifier) {
  await classifier.learn(
    'la hora,' +
    'qué hora es,' +
    'sabes la hora,' +
    'qué horas traes'
    , 'hour')
}
async function daddy(classifier) {
  await classifier.learn(
    'creador,' +
    'quién te invento,' +
    'quién te inventor,' +
    'cómo se llama tu inventor,' +
    'el nombre de tu creador'
    , 'daddy')
}

module.exports = { greeting, i_am_here, do_not_know, name,
  what_are_you_doing, you_welcome, how_are_you, date, hour,
  daddy }
