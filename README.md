![R3MITT_BLUE2](https://github.com/user-attachments/assets/9c19ca4b-8379-49e6-b8cc-366f7597bd06)

# R3mitt stablecoin template

Setup:

   ```shell
     npm install
     npm run compile
   ```

Note:
    Please setup your config variables first in hardhat.config.ts


### Deployment Steps
Note: After each steps, check the next script and adjust the variables accordingly.

### 1. deploy token + proxy
   ```shell
     npx hardhat --network holesky run scripts/1_deployProxy.ts
   ```

### 2. verify Stablecoin
   ```shell
     npx hardhat --network holesky run scripts/2_deployVerify.ts
   ```

### 3. grant minter role to  admin
   ```shell
     npx hardhat --network holesky run scripts/3_grantRole.ts
   ```

### 4. deploy & verify timelock
   ```shell
     npx hardhat --network holesky run scripts/4_deployTimelock.ts
   ```

### 5. set platform fee info
   ```shell
     npx hardhat --network holesky run scripts/5_setPlatformFeeInfo.ts
   ```


