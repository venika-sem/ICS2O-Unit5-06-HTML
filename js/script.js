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

function multiplyBy()
  // input
  var firstInteger = document.getElementById("firstInteger").value;
  var secondInteger = document.getElementById("secondInteger").value;

  // process and output
  document.getElementById("answer").innerHTML = firstInteger * secondInteger;
}