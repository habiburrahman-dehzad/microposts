# Micro Posts

This is a sample project which could be used as a starter project to build JavaScript applications using standards from ES2015, ES2016 & ES2017. It is created using vanilla Javascript (no use of React, Angular, and Vue).

It uses webpack, Babel and webpack-dev-server to compile and serve. It is fully compatible with async and await as it uses the Babel polyfill.

It also provides Json Server as an API server. You can send get/post/put/delete requests to this server and it will update the file: api/db.json. You can then fetch all the posts and display them on the page.

### Version

1.0.0

## Usage

### Installation

Install the dependencies

```sh
$ yarn install
```

### Serve

To serve in the browser - Runs webpack-dev-server

```sh
$ yarn start
```

### Build

Compile and build

```sh
$ yarn build
```

### Run json-server

You can run the json server which provides a rest api (http get/post/put/delete) for your posts

```sh
$ yarn json:server
```

## More Info

### Author

Habiburrahman Dehzad

### License

This project is licensed under the MIT License
