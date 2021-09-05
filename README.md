## TYPESCRIPT

### Dictionary

Create New File (ex: txconfig.json) :
`$ echo {} > tsconfig.json && tsc`

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