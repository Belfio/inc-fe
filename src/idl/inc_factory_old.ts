/**
 * Program IDL in camelCase format in order to be used in JS/TS.
 *
 * Note that this is only a type helper and is not the actual IDL. The original
 * IDL can be found at `target/idl/inc_factory.json`.
 */
export type IncFactory = {
  "address": "7kmLroKer2JooHLqQi8ugBRHhVVTudxUm1JsAa9gpyhK",
  "metadata": {
    "name": "incFactory",
    "version": "0.1.0",
    "spec": "0.1.0",
    "description": "Created with Anchor"
  },
  "instructions": [
    {
      "name": "createCompany",
      "discriminator": [
        36,
        192,
        217,
        147,
        233,
        129,
        198,
        18
      ],
      "accounts": [
        {
          "name": "companyRegistry",
          "writable": true
        },
        {
          "name": "newCompany",
          "writable": true
        },
        {
          "name": "user",
          "writable": true,
          "signer": true
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "companyName",
          "type": "string"
        },
        {
          "name": "jurisdiction",
          "type": "string"
        },
        {
          "name": "shareholders",
          "type": {
            "vec": "pubkey"
          }
        },
        {
          "name": "shareAmounts",
          "type": {
            "vec": "u64"
          }
        },
        {
          "name": "voters",
          "type": {
            "vec": "pubkey"
          }
        },
        {
          "name": "voteAmounts",
          "type": {
            "vec": "u64"
          }
        }
      ]
    },
    {
      "name": "getCompanyByName",
      "discriminator": [
        197,
        60,
        118,
        177,
        172,
        48,
        68,
        194
      ],
      "accounts": [
        {
          "name": "companyRegistry"
        },
        {
          "name": "companyAccount"
        }
      ],
      "args": [],
      "returns": "pubkey"
    },
    {
      "name": "getCompanyList",
      "discriminator": [
        51,
        248,
        58,
        75,
        239,
        203,
        29,
        217
      ],
      "accounts": [
        {
          "name": "companyRegistry"
        }
      ],
      "args": [],
      "returns": {
        "vec": "pubkey"
      }
    },
    {
      "name": "initializeRegistry",
      "discriminator": [
        189,
        181,
        20,
        17,
        174,
        57,
        249,
        59
      ],
      "accounts": [
        {
          "name": "companyRegistry",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  99,
                  111,
                  109,
                  112,
                  97,
                  110,
                  121,
                  95,
                  114,
                  101,
                  103,
                  105,
                  115,
                  116,
                  114,
                  121
                ]
              }
            ]
          }
        },
        {
          "name": "user",
          "writable": true,
          "signer": true
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": []
    }
  ],
  "accounts": [
    {
      "name": "company",
      "discriminator": [
        32,
        212,
        52,
        137,
        90,
        7,
        206,
        183
      ]
    },
    {
      "name": "companyRegistry",
      "discriminator": [
        27,
        30,
        241,
        213,
        171,
        175,
        54,
        176
      ]
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "nameAlreadyTaken",
      "msg": "Company name already taken"
    },
    {
      "code": 6001,
      "name": "invalidName",
      "msg": "Invalid company name"
    },
    {
      "code": 6002,
      "name": "companyNotFound",
      "msg": "Company not found"
    },
    {
      "code": 6003,
      "name": "registryAlreadyExists",
      "msg": "Registry already exists"
    }
  ],
  "types": [
    {
      "name": "company",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "companyName",
            "type": "string"
          },
          {
            "name": "jurisdiction",
            "type": "string"
          },
          {
            "name": "shareholders",
            "type": {
              "vec": "pubkey"
            }
          },
          {
            "name": "shareAmounts",
            "type": {
              "vec": "u64"
            }
          },
          {
            "name": "voters",
            "type": {
              "vec": "pubkey"
            }
          },
          {
            "name": "voteAmounts",
            "type": {
              "vec": "u64"
            }
          }
        ]
      }
    },
    {
      "name": "companyRegistry",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "companies",
            "type": {
              "vec": "pubkey"
            }
          }
        ]
      }
    }
  ]
};
