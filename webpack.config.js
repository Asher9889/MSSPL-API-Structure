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
