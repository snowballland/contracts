# SnowballLand Contracts

## Deployment

Verify that `config.js` has the correct information

Fill in the private key in hardhat.config.js

## Initialization

1. Update `devAddr` and `minter` in `config.js`

2. Deploy snowballLandToken and snowballLandFarm

```
yarn deploy:snow:mainnet
```

3. Update `sbtAddress` and `snowballLandFarmAddress` in `config.js` with the addresses derived in previous step. 
4. Update other strategy-specific variables in `config.js`.

If this is the first strategy, you might be looking at using SBT-BNB LP token. If that's the case, you might need to create the LP token pair at the relative AMM to get the `wantAddress` of the config.

5. Deploy strategy

Note that different farms requires different strategies.

```
yarn deploy:strategySbt:mainnet
```
