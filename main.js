let prefix = ''

function setPrefix (newPrefix) {
  prefix = newPrefix
}

function log (...message) {
  if (prefix) {
    console.log(prefix, ...message)
  } else {
    console.log(...message)
  }
  return this
}

module.exports = log
module.exports.setPrefix = setPrefix
