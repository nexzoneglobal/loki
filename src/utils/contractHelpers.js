import web3NoAccount from './web3'
import yfEthAbi from './yfethAbi.json';
import bep20 from './bep20.json';
import launchpadDeployerABI from './launchpadDeployerABI.json' 
import vaultToken from './vaultToken.json' 
import IERC20 from './IERC20.json'
import Factory from './uniswapfactory.json'
import Standard from './standard.json'
import Lptoken from './lptokenj.json'
import BabyToken from './babytoken.json'
import buybackToken from './buybackreward.json'
const getContract = (abi, address, web3) => {
    const _web3 = web3 ?? web3NoAccount;
 

        return new _web3.eth.Contract(abi, address)
   
}

export const getBep20Contract = (address, web3) => {
    return getContract(yfEthAbi, address, web3)
}


export const getBep20ContractToken = (address, web3) => {
    return getContract(bep20, address, web3)
}
export const GetDeployerAddress = (address, web3) => {
    return getContract(launchpadDeployerABI, address, web3)
}

export const GetDeployervault = (address, web3) => {
    return getContract(vaultToken, address, web3)
}
export const GetTokenContract = (address, web3) => {
    return getContract(IERC20, address, web3)
}
export const getFactoryContract = (address, web3) => {
    return getContract(Factory, address, web3)
}

export const getStandardToken = (address, web3) => {
    return getContract(Standard, address, web3)
}


export const getLPToken = (address, web3) => {
    return getContract(Lptoken, address, web3)
}

export const getRewardBaby = (address, web3) => {
    return getContract(BabyToken, address, web3)
}

export const getRewardBabybuyback = (address, web3) => {
    return getContract(buybackToken, address, web3)
}