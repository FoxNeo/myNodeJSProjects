Debug code with nodejs
======================

## Requeriments ##
* [Nodejs 8 or higher](https://nodejs.org/en/download/)
```
$ node inspect app.js
```
Next line 
```
$ n
```
Call variables:
```
$ repl
```
Debug defined lines of code for example 10 lines:
```
$ list(10)
```
## Breakpoit ##
write the following constant
```javascript
debugger;
```
```
$ node inspect app.js
$ c
```
# Framework #
[nodemon](https://nodemon.io/)
```
$ npm install -g nodemon
```
```
$ nodemon app.js
```
```
$ nodemon inspect app.js
```




