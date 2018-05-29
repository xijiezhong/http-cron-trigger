module.exports = function (env) {
  return Object.keys(env)
    .filter(key => key.startsWith('TRIGGER_'))
    .filter(key => !!env[key])
    .map(key => env[key])
    .map(string => string.split('|'))
    .map((tokens) => tokens.map(token => token.trim()))
}