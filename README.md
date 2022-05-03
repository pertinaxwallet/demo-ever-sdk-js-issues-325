# DEMO for reproducing bug for https://github.com/tonlabs/ever-sdk-js/issues/325

Install all dependencies

```sh
npm i
```

Open `src/index.js` and replace OWN_PK, OWN_SK, OWN_ADDRESS on own values

```js
const keyPair = { "public": "OWN_PK",
                  "secret": "OWN_SK"};
const address = "OWN_ADDRESS";
const destination = "OWN_ADDRESS";
```

Keep in mind that your wallet with `SafeMultisigWallet` code must be deployed on DEV NET blockchain

Start developing process

```sh
npm start
```

Navigate in browser http//localhost:10001 and check the result

To fix this issue just set `const reproduce_bug = true;` in `false`