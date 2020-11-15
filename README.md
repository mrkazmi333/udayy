## Hosted Link here: https://auth-development-ed961.web.app/

## Index

- [About](#about)
- [Preview](#preview)
- [Usage](#usage)
  - [Pre-Requisites](#pre-requisites)
  - [Development Environment](#development-environment)
  - [Firebase/Authentication](#authentication-firebase)
  - [File Structure](#file-structure)
  - [Commands](#command)

## About

Made this webpage as an assignment given to me for Udayy hiring process.

## Preview

## Usage

To use this code, make sure you have all the `pre-requisites` and your `development environment` is ready. After that you can read about the `file-structure`, which also explains about project structure and how things are working in background. Commands will tell you about the important `commands` you should konow.

### Pre-requisites

In order to work on this project or to develop it, you need to have some pre-installed tools and knowledge about them. Below are the tools you need to install on your system:

- NPM
- Nodejs

### Authentication/Firebase

You need have a google account to setup firease project so that you can make authentication on this app. I've used firbase authentication because it is less time conusimg and simple to configure.

#### Steps for Firebase Authentication connection

1. Go to https://console.firebase.google.com/ and click on Add project.
2. Then Enter the name of your project that you like to call
3. Then Go to the Side menu and click on Authentication, this will open a new page where inside user just enable the Email/Password
4. After that Click on Project Overview and click on the WebApp and give a nickname to your webapp.
5. Now go inisde the WebApp and copy the all the `Key: values` from the `Firebase SDK Snippet` and paste it inside the `firebase.js` file on the local repository.

### Development Environment

Once you have all the requirements checked out, you can develop this project. You need to set up the development environment to work on it. Follow the steps given below to setup:

1. Clone this repository, write in terminal `git clone https://github.com/mrkazmi333/udayy.git`.
2. Go inside the cloned folder using `$ cd udayy`, and install all the dependencies. `$ npm install`
3. To test run the dev server. `$ npm start`

### File Structure

| No  | File/Folder name   | Details                                                                       |
| --- | ------------------ | ----------------------------------------------------------------------------- |
| 1   | ./src              | Contains un-built application source code.                                    |
| 4   | ./src/contexts     | For creating a common data layer to get all the components the access to data |
| 5   | ./src/index.css    | Style for the project.                                                        |
| 6   | ./node_modules/... | Auto installed node packages.                                                 |
| 7   | package.json       | NPM package file for this project.                                            |
| 8   | package-lock.json  | NPM packages details.                                                         |
| 9   | .gitignore         | To ignore files to be a part of version control.                              |
| 10  | ./assets           | For storing the images of application preview.                                |
| 11  | ./build            | Webpack output the build here, which is then hosted by github pages.          |

### Commands

- Installing all the dependencies.
  ```
  npm install
  ```
- Starting development server.
  ```
  npm start
  ```

#### Build

To build the project for production, you can use the following command. The output will be dumped in `/build` folder which is used by the github pages to host the site.

```
$ npm run build
```

Feel free to add your own features or improve this one, any kind of help is appreciated.
