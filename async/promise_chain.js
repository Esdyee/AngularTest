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

function launch() {
  return new Promise(function(resolve, reject) {
    console.log("Lift off!");
    setTimeout(function() {
      resolve("In orbit!");
    }, 2 * 1000);
  })
}

const c = new countdown(5)
  //.on('tick', i => console.log(i + '...'));

c.go()
  .then(launch)
  .then(function(msg) {
    console.log(msg);
  })
  .catch(function(err) {
    console.error("Houston, we have a prob...");
  });