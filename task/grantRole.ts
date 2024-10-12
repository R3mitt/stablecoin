import { task, types } from "hardhat/config";

const defaultAdminRole      = '0x0000000000000000000000000000000000000000000000000000000000000000';
const minterRole            = '0x9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6';
const pauserRole            = '0x65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a';
const upgraderRole          = '0x189ab7a9244df0848122154315af71fe140f3db0fe014031783b0946b8c9d2e3';
const blacklisterRole       = '0x22435ed027edf5f902dc0093fbc24cdb50c05b5fd5f311b78c67c1cbaff60e13';
const platformFeeSetterRole = '0x7d28345016e40b9520146b9d6ff7670862c7a8b51d01742b8f72f0d9047dd73f';

const enum roles {
    defaultAdmin      = 'defaultAdmin',
    minter            = 'minter',
    pauser            = 'pauser',
    upgrader          = 'upgrader',
    blacklister       = 'blacklister',
    platformFeeSetter = 'platformFeeSetter',
}

task("grantRole", "grant role for token contract")
    .addParam("role", "role type", "", types.string)
    .addParam("address", "role address", "", types.string)
    .setAction(async (params, { ethers }) => {
        let role: string = '';

        if ( params.role == roles.defaultAdmin ) {
            role = defaultAdminRole;

        } else if ( params.role == roles.minter ) {
            role = minterRole;

        } else if ( params.role == roles.pauser ) {
            role = pauserRole;

        } else if ( params.role == roles.upgrader ) {
            role = upgraderRole;

        } else if ( params.role == roles.blacklister ) {
            role = blacklisterRole;

        } else if ( params.role == roles.platformFeeSetter ) {
            role = platformFeeSetterRole;
        } 

        if ( !role ) {
            console.log(' - Invalid role.');
            return;
        }

        const Stablecoin = await ethers.getContractFactory('Stablecoin');
        const proxyAddress = ""; // your deployed proxy address
        const sc = Stablecoin.attach(proxyAddress);
        
        console.log(' - Grant role '+params.role+' to: '+params.address+' ... ');
        const grantRole = await sc.grantRole(role, params.address);
        await grantRole.wait();

        console.log(' - Done. ');
    });


