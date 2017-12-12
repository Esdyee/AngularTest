function countdown(seconds) {
  return new Promise(function(resolve, reject) {
    for (let i = seconds; i >= 0; i--) {
      setTimeout(function() {
        if (i > 1) console.log(i + '...');
        else if (i == 1) return reject(new Error("OMG!!"));
        else resolve(console.log("GO!"));
      }, (seconds - i) * 1000)
    }
  })
}

countdown(5)
  .then(function() {
    console.log("countdown completed successfully");
  })
  .catch(function(err) {
    console.log(err.message);
  })