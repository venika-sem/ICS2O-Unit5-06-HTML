/* Created by: Venika Sem
 * Created on: May 2022
 * This file contains the JS functions for index.html 
*/

'use strict'

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit5-06-HTML/sw.js", {
    scope: "/ICS2O-Unit5-06-HTML/",
  })
}

/**
 * This function does a multiplication loop.
 */
function multiplyBy() {
  // input
  var firstInteger = document.getElementById("first-integer").value
  var secondInteger = document.getElementById("second-integer").value

  // process
  let counter = 0
  var answer = 0
  const negativeOne = -1
  var firstIntegerAsInt = parseInt(firstInteger)

  while (counter < secondInteger) {
    console.log("Once through loop:" + counter)
    answer += firstIntegerAsInt
    counter++
  }

  if (secondInteger < 0) {
    answer = (firstInteger * negativeOne) * (secondInteger * negativeOne)
  }

  // output
  document.getElementById("answer").innerHTML = "The answer is " + (answer)
}