# Front-end Travel App

This is the final project Udacity Front-end Developer Nanodegree

## Description and Preview

This project is a capstone which consist in a simple front-end page to get informations of travel including weather, image of city and city informations. To do it were used Weatherbit to get wheater, Geonames to get city infos and Pixabay to get city images.

Basically the project have a server in NodeJS to get data and a client to run data and obtain the data to put in page. All data are saved on local storage to could be view at the future.

Below we have mobile and desktop illustrations:

<div>
  <img src="https://github.com/lejoaoconte/front-end-travel-app/blob/main/images/image1.png?raw=true" width="550px" />
  <img src="https://github.com/lejoaoconte/front-end-travel-app/blob/main/images/image2.png?raw=true" width="130px" />
</div>

## Getting start

#### Configurations

First of all it's important install and configure API keys of project, the example of .env could be seen in .env.example or in code below:

```env
PORT=8055

GEONAME_USERNAME=
GEONAME_BASE_URL=http://api.geonames.org/searchJSON?

WEATHERBIT_API_KEY=
WEATHERBIT_BASE_URL=https://api.weatherbit.io/v2.0/forecast/daily?


PIXABAY_API_KEY=
PIXABAY_BASE_URL=https://pixabay.com/api/?key=32191201-869cb54a7013e5d4074702cae
```

The port is the server port, and just copy and past this code in .env and pass your keys.

#### Install and run project

After it just run the code below to install all dependeces and finally run the code to run server, to run project and to run tests.

install:

```shell
    yarn install
```

server:

```shell
    yarn server 
```

build production:

```shell
    yarn build-prod 
```

build dev:

```shell
    yarn build-dev 
```

tests:

```shell
    yarn test
```

The server will be run on port 8055 and the client was run on port 8080.

## Tech stack

- NodeJS
- Express
- Webpack
- HTML
- SCSS
- Javascript

#### Libraries

|      library                              | version |
|:-----------------------------------------:|:-------:|
|    axios                                  | 1.2.2    |
|    dotenv                                 |  16.0.3  |
|    express                                |  4.18.2  |
|    moment                                 |  2.29.4  |
|    webpack                                |  5.75.0  |
|    webpack-cli                            |  5.0.1   |
|    jest                                   |  29.3.1  |
|    @babel/preset-env                      |  7.20.2  |
|    babel-loader                           |  9.1.0   |
|    clean-webpack-plugin                   |  4.0.0   |
|    cors                                   |  2.8.5   |
|    css-loader                             |  6.7.3   |
|    file-loader                            |  6.2.0   |
|    html-webpack-plugin                    |  5.5.0   |
|    mini-css-extract-plugin                |  2.7.2   |
|    optimize-css-assets-webpack-plugin     |  6.0.1   |
|    sass                                   |  1.57.0  |
|    sass-loader                            |  13.2.0  |
|    style-loader                           |  3.3.1   |
|    webpack-dev-server                     |  4.11.1  |
|    workbox-webpack-plugin                 |  6.5.4   |

# Author

**João Conte** - <a href="https://www.linkedin.com/in/lejoaoconte/" target="_blank">Linkedin</a> - <a href="https://github.com/lejoaoconte" target="_blank">Github</a> - <a href="malito:lejoaoconte@gmail.com">E-mail</a>
