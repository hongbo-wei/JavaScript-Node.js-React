# JavaScript and React

Create projects with React

## Set-up the running environment
When another developer downloads a React app and the **node_modules** folder is ignored (which is standard practice), they can install the necessary dependencies by using the **package-lock.json** file. Here's how they can do it:

Steps for the Developer:
Navigate to the project directory:
1. Open a terminal or command prompt and navigate to the root directory of the project where the package.json file is located: `cd path/to/project`

2. Install the dependencies:
Run the following command to install all the dependencies listed in the package.json file. This command uses the npm package manager: `npm install`. Alternatively, if the project uses Yarn as the package manager, they can run: `yarn install`.
3. Check for outdated packages: After installing dependencies, developers might want to check if there are any outdated packages using: `npm outdated` or `yarn outdated`.

### Run apps (Commands for React)
1. JavaScript with React `cd first-app` or `cd customizing-example`

    ```
    npm start
    ```

2. JavaScript and TypeScript with React `cd react-app-with-typescript`
    
    Use _Vite_ to create a project with _React_ framework and _TypeScript_ variant

    ```
    npm create vite@latest
    ```

    Then install all thrid part dependencies
    `npm install`

    Run server

    ```
    npm run dev
    ```