import { defineConfig } from "vite";
import { resolve } from "path";
// const root = resolve(__dirname, "src");
// const outDir = resolve(__dirname, "dist");
// const procedure_path= resolve(__dirname, '@blockly/block-shareable-procedures/');
// console.log(procedure_path)
// import {registerProcedureSerializer} from ${procedure_path};
/*saco la base
root:"src"
outDir:"../dist"
*/
export default defineConfig({
  // plugins: [
  //   registerProcedureSerializer(),
  // ],
  base: "/",
//   root,
  build: {
//   outDir,
    // emptyOutDir: true,
    rollupOptions: {
      input: "index.html"
        //main: resolve(root, "index.html"),
        // act1: resolve(root, "pages", "actividad001", "act.html"),
      
    },
  },
//   assetsDir: "img",
//   assetsInclude: [
//     "./interprete/acorn.js",
//     "./interprete/interpreter.js",
//     "**/*.css?type=text/css",
//   ],
});
