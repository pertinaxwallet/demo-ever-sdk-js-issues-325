import { TonClient, signerExternal, signerNone, signerKeys, abiContract, accountForExecutorAccount } from "@eversdk/core";
import { libWeb } from "@eversdk/lib-web";

const reproduce_bug = true;

const main = async () => {
  try {
    TonClient.useBinaryLibrary(libWeb);
    const instance = new TonClient({
            network: {
              endpoints: [ "https://eri01.net.everos.dev",
                           "https://rbx01.net.everos.dev",
                           "https://gra01.net.everos.dev"]
            }
          });

    const keyPair = { "public": "OWN_PK",
                      "secret": "OWN_SK"};
    const address = "OWN_ADDRESS";
    const destination = "OWN_ADDRESS";
    const functionName = "sendTransaction";

    const input = { dest: destination,
                    value: 0,
                    bounce: true,
                    flags: 130,
                    payload: ""
                  };
                  
    const abi = {
              "ABI version": 2,
              "header": [
                  "pubkey",
                  "time",
                  "expire"
              ],
              "functions": [
                  {
                      "name": "constructor",
                      "inputs": [
                          {
                              "name": "owners",
                              "type": "uint256[]"
                          },
                          {
                              "name": "reqConfirms",
                              "type": "uint8"
                          }
                      ],
                      "outputs": []
                  },
                  {
                      "name": "acceptTransfer",
                      "inputs": [
                          {
                              "name": "payload",
                              "type": "bytes"
                          }
                      ],
                      "outputs": []
                  },
                  {
                      "name": "sendTransaction",
                      "inputs": [
                          {
                              "name": "dest",
                              "type": "address"
                          },
                          {
                              "name": "value",
                              "type": "uint128"
                          },
                          {
                              "name": "bounce",
                              "type": "bool"
                          },
                          {
                              "name": "flags",
                              "type": "uint8"
                          },
                          {
                              "name": "payload",
                              "type": "cell"
                          }
                      ],
                      "outputs": []
                  },
                  {
                      "name": "submitTransaction",
                      "inputs": [
                          {
                              "name": "dest",
                              "type": "address"
                          },
                          {
                              "name": "value",
                              "type": "uint128"
                          },
                          {
                              "name": "bounce",
                              "type": "bool"
                          },
                          {
                              "name": "allBalance",
                              "type": "bool"
                          },
                          {
                              "name": "payload",
                              "type": "cell"
                          }
                      ],
                      "outputs": [
                          {
                              "name": "transId",
                              "type": "uint64"
                          }
                      ]
                  },
                  {
                      "name": "confirmTransaction",
                      "inputs": [
                          {
                              "name": "transactionId",
                              "type": "uint64"
                          }
                      ],
                      "outputs": []
                  },
                  {
                      "name": "isConfirmed",
                      "inputs": [
                          {
                              "name": "mask",
                              "type": "uint32"
                          },
                          {
                              "name": "index",
                              "type": "uint8"
                          }
                      ],
                      "outputs": [
                          {
                              "name": "confirmed",
                              "type": "bool"
                          }
                      ]
                  },
                  {
                      "name": "getParameters",
                      "inputs": [],
                      "outputs": [
                          {
                              "name": "maxQueuedTransactions",
                              "type": "uint8"
                          },
                          {
                              "name": "maxCustodianCount",
                              "type": "uint8"
                          },
                          {
                              "name": "expirationTime",
                              "type": "uint64"
                          },
                          {
                              "name": "minValue",
                              "type": "uint128"
                          },
                          {
                              "name": "requiredTxnConfirms",
                              "type": "uint8"
                          }
                      ]
                  },
                  {
                      "name": "getTransaction",
                      "inputs": [
                          {
                              "name": "transactionId",
                              "type": "uint64"
                          }
                      ],
                      "outputs": [
                          {
                              "components": [
                                  {
                                      "name": "id",
                                      "type": "uint64"
                                  },
                                  {
                                      "name": "confirmationsMask",
                                      "type": "uint32"
                                  },
                                  {
                                      "name": "signsRequired",
                                      "type": "uint8"
                                  },
                                  {
                                      "name": "signsReceived",
                                      "type": "uint8"
                                  },
                                  {
                                      "name": "creator",
                                      "type": "uint256"
                                  },
                                  {
                                      "name": "index",
                                      "type": "uint8"
                                  },
                                  {
                                      "name": "dest",
                                      "type": "address"
                                  },
                                  {
                                      "name": "value",
                                      "type": "uint128"
                                  },
                                  {
                                      "name": "sendFlags",
                                      "type": "uint16"
                                  },
                                  {
                                      "name": "payload",
                                      "type": "cell"
                                  },
                                  {
                                      "name": "bounce",
                                      "type": "bool"
                                  }
                              ],
                              "name": "trans",
                              "type": "tuple"
                          }
                      ]
                  },
                  {
                      "name": "getTransactions",
                      "inputs": [],
                      "outputs": [
                          {
                              "components": [
                                  {
                                      "name": "id",
                                      "type": "uint64"
                                  },
                                  {
                                      "name": "confirmationsMask",
                                      "type": "uint32"
                                  },
                                  {
                                      "name": "signsRequired",
                                      "type": "uint8"
                                  },
                                  {
                                      "name": "signsReceived",
                                      "type": "uint8"
                                  },
                                  {
                                      "name": "creator",
                                      "type": "uint256"
                                  },
                                  {
                                      "name": "index",
                                      "type": "uint8"
                                  },
                                  {
                                      "name": "dest",
                                      "type": "address"
                                  },
                                  {
                                      "name": "value",
                                      "type": "uint128"
                                  },
                                  {
                                      "name": "sendFlags",
                                      "type": "uint16"
                                  },
                                  {
                                      "name": "payload",
                                      "type": "cell"
                                  },
                                  {
                                      "name": "bounce",
                                      "type": "bool"
                                  }
                              ],
                              "name": "transactions",
                              "type": "tuple[]"
                          }
                      ]
                  },
                  {
                      "name": "getTransactionIds",
                      "inputs": [],
                      "outputs": [
                          {
                              "name": "ids",
                              "type": "uint64[]"
                          }
                      ]
                  },
                  {
                      "name": "getCustodians",
                      "inputs": [],
                      "outputs": [
                          {
                              "components": [
                                  {
                                      "name": "index",
                                      "type": "uint8"
                                  },
                                  {
                                      "name": "pubkey",
                                      "type": "uint256"
                                  }
                              ],
                              "name": "custodians",
                              "type": "tuple[]"
                          }
                      ]
                  }
              ],
              "data": [],
              "events": [
                  {
                      "name": "TransferAccepted",
                      "inputs": [
                          {
                              "name": "payload",
                              "type": "bytes"
                          }
                      ],
                      "outputs": []
                  }
              ]
          };
    
    const data = await instance.net.query({"query": `
      query {
       accounts(
         filter: {
           id: {eq: "${address}"}
         }
       ) {
         boc
       }
      }
      `});
    //here needs to check that address is existed
    if (data.result && data.result.data && data.result.data.accounts.length == 0) {
      throw new Error("Account is not existed");
    }
    const boc = data.result.data.accounts[0].boc;
    const encoded_message = await instance.abi.encode_message({
            address: address,
            signer: keyPair == null ? signerNone() : signerKeys(keyPair),
            abi: abiContract(abi),
            call_set: {
              function_name: functionName,
              input: input,
            },
          });
    console.log(encoded_message);
    const executor_result = await instance.tvm.run_executor({
      message: encoded_message.message,
      account: accountForExecutorAccount(boc, reproduce_bug),
      abi: abiContract(abi),
      skip_transaction_check: false,
      return_updated_account: false
    });
    console.log(executor_result);
    document.getElementById("result").innerHTML = JSON.stringify(executor_result);
  } catch (error) {
    console.log(error);
    document.getElementById("result").innerHTML = JSON.stringify(error);
  }
};

main();