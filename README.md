# Learning
- iisnode file is auto generated when browser opens.
- We need to provide node_modules built along with package.json file
- No need to provide port because in server we decide what port should be assign.


# Choosing a Build Tool


- Babel : For transpiling modern JavaScript to older syntax.

- Webpack: For bundling and optimizing code. <br/>
    - to install webpack
        ```npm install --save-dev webpack webpack-cli```
    - Create a Webpack Configuration file in root:
         ```Add a webpack.config.js file```
    - Content inside webpack.config.js
       
```javascript
import path from 'path';
import { fileURLToPath } from 'url';

// Get the directory name of the current module
const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default {
  entry: './src/app.js', // Entry point of your application
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js', // Name of the output file
  },
  target: 'node', // Specifies that the bundle is for Node.js
  mode: 'production', // Use 'development' for development mode
};
```

    - Add Script
        ``` "build": "webpack"```



- esbuild: A faster alternative to Babel/webpack.
- pkg: To package your Node.js project into a single executable file.

# How to host Node backend in IIS Server
- 