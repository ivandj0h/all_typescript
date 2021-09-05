## TYPESCRIPT

### About
Welcome to my typescript repo, here you can find several things about typescript.


### Dictionary

Source links : `https://indepth.dev/posts/1164/configuring-typescript-compiler`

Create New File (ex: txconfig.json) :
`$ echo {} > tsconfig.json && tsc`

define which version of JS the compiler should transpile into :
```javascript
{
  "compilerOptions": {
    "target": "es6"
  }
}
```

Compile ts file :
`tsc`

Setup Output Directory for js after compiler :
```javascript
{
  "compilerOptions": {
    "outDir": "dist"
  }
}
```

Change behavior errors during compilation : 
```javascript
{
  "compilerOptions": {
    "noEmitOnError": true
  }
}
```

enable source maps generation :
```javascript
"compilerOptions": {
  "sourceMap": true
}
```

modify the generated URL that is added to map files :
```javascript
"compilerOptions": {
  "mapRoot": "/sourcemap/directory/on/webserver",
}
```