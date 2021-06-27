

// place for quick drafts for code 
let cssArray = ["font-family: Fantasy", "color: #53c7f5"]

// goal: { style: { fontFamily: "Fantasy", color: "#53c7f5" } }
// therefore, we construct the object style has as attribute 
let cssObject = {}

for (let i = 0; i < cssArray.length; i++) {
  cssArray[i] = cssArray[i].replace(/\-([a-z])/g, v => v[1].toUpperCase());
  cssArray[i] = cssArray[i].split(":")
}




for (let i = 0; i < cssArray.length; i++) {
  // getting the second attribute, always to string in " "
  console.log(cssArray[i][1])
  cssArray[i][1] = '"' + cssArray[i][1] + '"'
}

for (const key of cssArray) {

  cssObject[key[0]] = key[1];
}

setTimeout(function() {
  //console.log(cssArray)
  console.log(cssObject)
}, 500)

