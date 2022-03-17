# T-Ether Web App

## Introduction 

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/nightttide/T-Ether-Webapp/)

Using gitpod and github will make our work on this app much easier. I suggest you install the [Gitpod chrome extension](https://chrome.google.com/webstore/detail/gitpod-always-ready-to-co/dodmmooeoklaejobgleioelladacbeki)

## How do I see what we are working on?
To start the server and view the page we are working on you wil need to use the console. All you need to do is run these two commands to see the page
```
cd app
http-server
```

To stop or restart the server hit `ctrl + c` on the console. You will need to do this when you want to see the changes you made.

Everything that we will be working is in the app/public folder. Here you will find your index.html, app.js, styles.css and anything else that is used in the final product.

## Notes on gitpod (Backend stuff)

The first thing you should know is the `.gitpod.yml` will run all the commands listed when the computer starts

> NOTE: In order to save space in the `.gitpod.yml` file we will simply execute a bash script --> `gitpod-init.sh` 
> For everything that can't be installed in a bash script we will add it to the `.gitpod.yml`

Our packages that we install won't be needed in github so we will also be sure to automaticly add them into the `.gitignore` file in the install scripts

## Packages

For development we will use the npm packge http-server. It will serve files out of the `app/public` directory. To start the server just run these commands
```
cd app
http-server
```

### Package List
node http-server