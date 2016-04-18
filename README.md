# Visual Studio Code TypeScript Project: my-cool-type-script-project

## Getting Started

1. You should first install the following **extensions** for Visual Studio Code.
  - [VS Code JSHint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.jshint): ```jshint```
  - [VS Code TSHint](https://marketplace.visualstudio.com/items?itemName=eg2.tslint): ```tslint```
  - [Editor Config for VS Code](https://marketplace.visualstudio.com/items?itemName=chrisdias.vscodeEditorConfig): ```editorconfig```
    + To install an extension, type Cmd+P to diplay the Command Palette, then type ext and press Enter.
    + Type the extension keyword shown above and press Enter to install.
    + ```editorconfig``` will bring up two extensions, so just install *Editor Config for VS Code*.

2. You should install **gulp** globally using **npm**.

    ```
    npm install gulp -g
    ```

3. Make sure you can **compile** typescript files.
  -  You can compile from within Visual Studio Code by pressing **Cmd+B**.

  - You can compile from the command line using **npm**.
  
    ```
    npm run compile
    ```

  - You can also compile from the command line using **gulp**.
  
    ```
    gulp typescript-compile
    ```

  - A **dist** folder will be created with files
    generated by the TypeScript compiler, including source maps and type defs.
  
4. Make sure you can **debug** TypeScript source files and tests.

  - Select `greeter.ts` in `src\greeter\greeter.ts`
  - Click the Debug icon in VS Code.
  - Select *Debug Current TypeScript File* dropdown and press **F5** to launch
    the debugger and break on the first line.
  - Then select `greeter.spec.ts` and set a breakpoint on line 15.
  - Select *Debug Current TypeScript Test* dropdown and press **F5** to launch
    the debugger and stop at the breakpoint.
  - Press **F11** to step into `greeter.greet()`.
  - Press **Shift+F5** to stop the debugger.
    
5. Next you can execute **gulp** tasks from the Terminal.

  - Note that gulp commands can also be run from within VS Code, pressing
    **Cmd+P** and typing **task**, then typing part of the task name.

  - Show available gulp commands.
  
    ```
    gulp
    ```

  - Run jasmine tests using **karma**.
  
    ```
    gulp tests-run
    ```

  - Run jasmine tests using **karma** with a **watch**.
    After running, make a change to `greeter.spec.ts` so that it fails.
  
    ```
    gulp tests-watch
    ```

  - Serve jasmine tests in the **browser**.
    After running, make a change to `greeter.ts` so that it fails.
  
    ```
    gulp tests-serve
    ```

6. TypeScript files and tests may be added to the **src** directory, 
   either at the **src** root or in nested subdirectories.
   