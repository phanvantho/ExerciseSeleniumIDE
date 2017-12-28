var transCount = 0;

Selenium.prototype.doGenerateTransDes = function(_, transDes) {
  storedVars[transDes] = "Trans #" + transCount;
  transCount++;
}

Selenium.prototype.doRandomGenderIndex = function(_, genderIndex) {
  storedVars[genderIndex] = Math.floor((Math.random() * 2));
}

Selenium.prototype.doRandomName = function(length, fullName) {
  storedVars[fullName] = randomUpperCase(length);
}

Selenium.prototype.doRandomUpperCaseString = function(length) {
  storedVars["UpperCaseStr"] = randomUpperCase(length);
}

Selenium.prototype.doRandomLowerCaseString = function(length) {
  storedVars["LowerCaseStr"] = randomLowerCase(length);
}

Selenium.prototype.doTypeRandomName = function(locator) {
  var element = this.page().findElement(locator);
  this.browserbot.replaceText(element, randomUpperCase(5));
}

function randomString(length, string) {
  var text = "";

  for (var i = 0; i < length; i++) {
    text += string.charAt(Math.floor(Math.random() * string.length))
  }

  return text;
}

function randomUpperCase(length) {
  return randomString(length, "QWERTYUIOPASDFGHJKLZXCVBNM");
}

function randomLowerCase(length) {
  return randomString(length, "qwertyuiopasdfghjklzxcvbnm");
}
