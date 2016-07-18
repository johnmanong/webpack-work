# Notes

- VPN would not let me connect to github, SIGH
- used this thoughtbot article to setup webpack, babel, react
  - https://robots.thoughtbot.com/setting-up-webpack-for-react-and-hot-module-replacement

- issue with babel loader, missing babel-core
  - from github: `npm install babel-loader babel-core babel-preset-es2015 --save-dev
`
  - also: `npm-install babel-preset-react`

- had an issue rendering dom, this helped: http://stackoverflow.com/questions/26627665/error-with-basic-react-example-uncaught-typeerror-undefined-is-not-a-function
- new in react 0.14, `npm install react-dom` (we're on 0.we15 here)
- getting a render error, might switch to this tutorial
https://www.twilio.com/blog/2015/08/setting-up-react-for-es6-with-webpack-and-babel-2.html
- ok using both things are compiling, going to move mount from body to a div, since react says no.