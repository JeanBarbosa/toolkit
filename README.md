![toolkit logo](assets/images/toolkit.png)

# Toolkit Electron

A JavaScript library to interface with Pagar.me's API, it works in the browser
and with Node.js.

The documentation can be found in our [JSDocs](https://pagarme.github.io/pagarme-js)

<br>

<a href="https://travis-ci.org/pagarme/pagarme-js" >
  <img src="https://travis-ci.org/pagarme/pagarme-js.svg?branch=master" align="left" />
</a>

<br>

## Description

This library covers all your needs for integrating with Pagar.me, providing:

* A clean Promise-based interface for all endpoints in Pagarme's API
* A fast way to generate card hashes
* Postback signature validation
* Documents validations (CPF, CNPJ, and others)

## How to use

First, install it:

```bash
yarn add pagarme
```

Or using npm:

```bash
npm install pagarme
```

Pagar.me's JavaScript library can be used in three ways:

## Building

To build the library, use `npm start`.

* Node.js build is produced inside the `dist` directory.
* Browser build is produced inside the `browser` directory.

## Testing

To run the library tests, use `npm test`.

>To run tests, you need to export `API_KEY` environment variable with your
API key. When submitting a PR, Travis will already have it exported.

## License

```
The MIT License (MIT)
```