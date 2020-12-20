const templator = class {
	constructor(elements, data) {
  	this.rawElement = elements
    this.element = document.querySelector(elements).innerHTML
    this.data = data
  }
  replaceTokens() {
    return this.element.replace(/\#\{([^}]+)\}/g, (str, match) => {
      return this.data[match]
    })
	}
  init() {
  	document.querySelector(this.rawElement).innerHTML = this.replaceTokens()
  }
}
