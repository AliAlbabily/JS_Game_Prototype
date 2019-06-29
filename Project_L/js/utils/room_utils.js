
// HTML-elements manipulation consists of three main steps
// 1. Create all elements -> 2. Hide elements -> 3. Show elements

// 1. Create all elements stored inside an object
function creatObject(screenObject) {
  screenObject.elements.forEach( function(element) {
    $(screenObject.container).append(element);
  });
}

// 2. Hide one element
function hideObject(selector) {
  $(selector).addClass("hidden");
}

// 2. Hide all elements
function hideObjects(listOfObjects) {
  listOfObjects.forEach(function(object){
    object.selectors.forEach(function(element) {
      $(element).addClass("hidden");
    });
  });
}

// 2. Hide effect element
function hideEffectObject(effectObject) {
  effectObject.selectors.forEach(function(cssSelector) {
    $(cssSelector).addClass("hidden");
  });
}

// 3. Show one element
function showObject(selector) {
  $(selector).removeClass("hidden");
}

// 3. Show effect element
function showEffectObject(effectObject) {
  console.log(effectObject);
  effectObject.selectors.forEach(function(cssSelector) {
    $(cssSelector).removeClass("hidden");
  });
}

// Other. Remove element
function removeObject(selector) {
  $(selector).remove();
}
