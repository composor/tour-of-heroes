tour-of-heroes
========================

Author: rbiggs 

(c) 2017 to present All Rights Reserved

This project is created using Composi. You can learn more about Composi and how to use it at its [website](https://github.com/composi/composi/docs/index.md).

This is a conversion of the Angular Tour of Heroes: 

[Angular Tutorial](https://angular.io/tutorial)
[Live Example](https://embed.plnkr.co/?show=preview)

We rebuild this using Composi. For routing with used [webix-routie](https://www.npmjs.com/package/webix-routie), an NPM module that provides client side routing. We set up the routes using the app's main component's `componentWasCreated` lifecycle hook. Routes allow us to easily render the different sub-components with conditional logic.

Getting Up and Running
----------------------

In order to build this project you need to install its dependencies. Use the terminal to `cd` to this folder. Then run:

```sh
npm i
```

After NPM finishes installing, you can build and run it:

```sh
npm run build
```

This will open your built project in your default browser. 
