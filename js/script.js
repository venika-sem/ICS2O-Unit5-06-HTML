/* Created by: Venika Sem
 * Created on: May 2022
 * This file contains the JS functions for index.html 
*/

'use strict'

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit5-05-HTML/sw.js", {
    scope: "/ICS2O-Unit5-05-HTML/",
  })
}

/**
 * This function determines the type of triangle
 */
function check() {
  // input
  var firstLength = document.getElementById("first-dimension").value
  var secondLength = document.getElementById("second-dimension").value
  var thirdLength = document.getElementById("third-dimension").value

  // process and output
  if ((firstLength <= 0) || (secondLength <= 0) || (thirdLength <= 0)) {
    document.getElementById("answer").innerHTML = 'Please input a positive number.'
  } else {
    if ((firstLength == secondLength) && (secondLength == thirdLength)) {
      document.getElementById("answer").innerHTML = 'It is an Equilateral Triangle!'
    } else if ((firstLength == secondLength) || (firstLength == thirdLength) || (secondLength == thirdLength)) {
      document.getElementById("answer").innerHTML = 'It is an Isosceles Triangle!'
    } else {
      document.getElementById("answer").innerHTML = 'It is a Scalene Triangle!'
    }    
  }
}