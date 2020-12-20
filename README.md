# Template Engine
### Front End Javascript Templating Engine made by Sameera M.

## CDN
https://cdn.jsdelivr.net/gh/sameeramurthy/template-engine@1.0.2/dist/template-engine.min.js

## Syntax
```
#{varName}
```

## Initialization
```js
let data = {
  word1: "Hello",
  word2: "World"
}
let renderer = new Template("html", data)
renderer.init()
```

## Templating
```html
<h1>#{word1} #{word2}!</h1>
```

## Result
```html
<h1>Hello World!</h1>
```
# Hello World
