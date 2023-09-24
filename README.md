# bluesunnetwork

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### VS Code connecting to Dreamhost Server
permission issues:
run in /home/kizzet/.vscode-server: setfattr -n user.pax.flags -v "mr" $(find ~/.vscode-server -type f -iname "node" -o -iname "npm" -o -iname "npx") 

### p5 Canvas Background
Use p5 in instance mode to not conflict with other librarys' properties and methods

### SCSS
Sass Stylesheets. Use the node-sass package to convert scss files to css in the desired folder with this command:

node-sass src/assets/styles/sass/main.scss src/assets/styles/main.css
