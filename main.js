/** Class for simplifying and standardizing console logs */
class PConsole {
  /**
   * Create a new prefix logger
   * @param {string} [prefix] - Immediately set's the logger's prefix
   */
  constructor (prefix) {
    this.prefix = prefix || ''
  }

  /**
   * Returns a reference to the logger for easy syntax
   * @returns {function(...string): void} - The logger function
   */
  getLogger () {
    return (...message) => this.log(...message)
  }

  /**
   * Update the prefix used by the logger
   * @param {string} prefix - The prefix
   */
  setPrefix (prefix) {
    this.prefix = prefix
  }

  /**
   * Log a message with the configured prefix
   * @param  {...string} message - The message(s) to log
   */
  log (...message) {
    if (this.prefix) console.log(this.prefix, ...message)
    else console.log(...message)
  }
}

module.exports = PConsole
