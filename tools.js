const timer = {
  seconds: (seconds) => seconds / 1000,
  Minutes: (minutes) => this.seconds(minutes / 60),
};

const sortLetter = (word) => word.charAt(0).toUpperCase();

module.exports = { timer, sortLetter };
