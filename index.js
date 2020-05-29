class Formatter {

  static capitalize(string) { 
    return string.charAt(0).toUpperCase() + string.slice(1)
  } 

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-'\s]+/g, '');
  }
  
  static titleize(string) {
    const array = string.split(" ")
    const array2 = []
    for(let i = 0; i < array.length; i++) {
      if(array[i] === "the" || array[i] === "a" || array[i] === "an" || array[i] === "but" || array[i] === "of" || array[i] === "and" || array[i] === "for" || array[i] === "at" || array[i] === "by" || array[i] === "from") {
        array2.push(array[i])
      }
      else {
        array2.push(this.capitalize(array[i])) 
      }

    }
    string = array2.join(" ")
    return Formatter.capitalize(string)
  }
  
}