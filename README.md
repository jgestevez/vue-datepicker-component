# vue-google-flight-datepicker

## Refs

```
https://github.com/JSLancerTeam/react-google-flight-datepicker
```

### Setting vscode

```
{
  "typescript.tsdk": "node_modules/typescript/lib",
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}

```

## Build library

```
yarn build
Then u can copy ./lib to node_module for using or deploy to npm
```

## How use it?

```
There are two way for using library.
- first way: import plugins
import VueGoogleFlightDatePicker from './install'

- second way: we can build library and copy it to node_module or using alias
import VueGoogleFlightDatePicker from 'vue-google-flight-datepicker'
import 'vue-google-flight-datepicker/vue-google-flight-datepicker.css'
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Lints and fixes files

```
yarn lint
```
