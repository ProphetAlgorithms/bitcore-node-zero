Bitcore Node
============

A Bitcoin full node for building applications and services with Node.js. A node is extensible and can be configured to run additional services. At the minimum a node has an interface to [Bitcoin Core with additional indexing](https://github.com/bitpay/bitcoin/tree/0.12.1-bitcore) for more advanced address queries. Additional services can be enabled to make a node more useful such as exposing new APIs, running a block explorer and wallet service.

## Install

```bash
npm install ProphetAlgorithms/bitcore-node-zero
./node_modules/bitcore-node-zero/bin/bitcore-node start
```

Note: For your convenience, we distribute bitcoind binaries for x86_64 Linux and x86_64 Mac OS X. Upon npm install, the binaries for your platform will be downloaded. For more detailed installation instructions, or if you want to compile the project yourself, then please see the Bitcore branch of [Bitcoin Core with additional indexing](https://github.com/bitpay/bitcoin/tree/0.12.1-bitcore).

## Install bitcore-node-zero with insight-api-zero and insight-ui-zero (tested with nodejs v8.17.0 lts)

```bash
cd $HOME
mkdir bitcore-node-zero
cd bitcore-node-zero
npm install ProphetAlgorithms/bitcore-node-zero
./node_modules/bitcore-node-zero/bin/bitcore-node create mynode
cd mynode
./node_modules/bitcore-node-zero/bin/bitcore-node install ProphetAlgorithms/insight-api-zero ProphetAlgorithms/insight-ui-zero
```
Now change the values of rpcuser and rpcpassword with values of your choice in the file bitcoind.js, located from the base path in: ./mynode/node_modules/bitcore-node-zero/lib/services/ .
Copy the executables of the Zero daemon (you need the version of Zero daemon patched with the addition of rpc calls needed to bitcore-node-zero - https://github.com/ProphetAlgorithms/zero-1.0.14-1-bitcore) to the folder located from the base path in: ./node_modules/bitcore-node-zero/bin/ .
If you have changed directories, go back to: ./mynode/ and run the command:

```bash
./node_modules/bitcore-node-zero/bin/bitcore-node start
```

Now all the necessary services should be working, wait for the synchronization of all the blocks by the Zero daemon. You can type in the browser's address bar: http://localhost:3001/insight/ , if everything went well you should see the Zero Insight home page.


## Prerequisites

- GNU/Linux x86_32/x86_64, or OSX 64bit *(for bitcoind distributed binaries)*
- Node.js v0.10, v0.12 or v4
- ZeroMQ *(libzmq3-dev for Ubuntu/Debian or zeromq on OSX)*
- ~200GB of disk storage
- ~8GB of RAM

## Configuration

Bitcore includes a Command Line Interface (CLI) for managing, configuring and interfacing with your Bitcore Node.

```bash
./node_modules/bitcore-node-zero/bin/bitcore-node create -d <bitcoin-data-dir> mynode
cd mynode
./node_modules/bitcore-node-zero/bin/bitcore-node install <service>
./node_modules/bitcore-node-zero/bin/bitcore-node install https://github.com/yourname/helloworld
```

This will create a directory with configuration files for your node and install the necessary dependencies. For more information about (and developing) services, please see the [Service Documentation](docs/services.md).

## Add-on Services

There are several add-on services available to extend the functionality of Bitcore:

- [Insight API Zero](https://github.com/ProphetAlgorithms/insight-api-zero)
- [Insight UI Zero](https://github.com/ProphetAlgorithms/insight-ui-zero)
<!-- - [Bitcore Wallet Service](https://github.com/bitpay/bitcore-wallet-service) -->

## Documentation

- [Upgrade Notes](docs/upgrade.md)
- [Services](docs/services.md)
  - [Bitcoind](docs/services/bitcoind.md) - Interface to Bitcoin Core
  - [Web](docs/services/web.md) - Creates an express application over which services can expose their web/API content
- [Development Environment](docs/development.md) - Guide for setting up a development environment
- [Node](docs/node.md) - Details on the node constructor
- [Bus](docs/bus.md) - Overview of the event bus constructor
- [Release Process](docs/release.md) - Information about verifying a release and the release process.

## Contributing

Please send pull requests for bug fixes, code optimization, and ideas for improvement. For more information on how to contribute, please refer to our [CONTRIBUTING](https://github.com/bitpay/bitcore/blob/master/CONTRIBUTING.md) file.

## License

Code released under [the MIT license](https://github.com/bitpay/bitcore-node/blob/master/LICENSE).

Copyright 2013-2015 BitPay, Inc.

- bitcoin: Copyright (c) 2009-2015 Bitcoin Core Developers (MIT License)
