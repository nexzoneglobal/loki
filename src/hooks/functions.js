import { useCallback } from 'react'
import { useWeb3React } from '@web3-react/core'
import Getweb3 from './Getweb3';
import environment from '../utils/Environment';
import { getBep20ContractToken,getFactoryContract, GetDeployervault } from '../utils/contractHelpers'
import { getWeiNumber } from '../utils/formatBalance'
import Environment from '../utils/Environment';


const spender='0x68cba4E61288E7D9244739c293B9571E6A873F7c'; //static

export const useApprove = (tokenAddress, amountIn , decimals) => {
    const { account } = useWeb3React();
    const web3 = Getweb3();
    const contractToken = getBep20ContractToken(tokenAddress, web3)
    amountIn = getWeiNumber(amountIn , decimals);
    const ApproveTokens= useCallback( () => {
        const approved = contractToken.methods.approve(spender,amountIn).send({ from: account })
        .on('transactionHash', (tx) => { return tx.transactionHash });
        return approved
    }, [account,amountIn ])
    
    return { Approve: ApproveTokens }
}

export const GetUsePair = () => {
    const web3 = Getweb3();
    const { account } = useWeb3React();
    const contractToken = getFactoryContract("0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73", web3)
    const GetPair= useCallback( (tokenAddress) => {
        const pair = contractToken.methods.getPair(tokenAddress, '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c').call();
        return pair
      
    }, [account])

    return { GetPair: GetPair }
}

export const GetLockedDetails = () => {
    const web3 = Getweb3();
    const { account } = useWeb3React();
    const contractToken = GetDeployervault(Environment.vaultToken, web3)
    const getLocked= useCallback( (pair) => {
        const locked = contractToken.methods.getDetailsOfLockedTokens(account, pair).call();
        return locked
    }, [account])

    return { GetLocked: getLocked }
}

export default useApprove;