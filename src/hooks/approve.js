import { useCallback } from 'react'
import { useWeb3React } from '@web3-react/core'
import environment from '../utils/Environment';
import { GetTokenContract } from '../utils/contractHelpers'
import Getweb3  from './Getweb3';

export const ApproveContract = (tokenAddress) => {
    const { account } = useWeb3React();
    const web3 = Getweb3();
    const contract = GetTokenContract(tokenAddress, web3)
    
    const Approvetoken= useCallback( (address, totaltoken) => {
        
        const deployer = contract.methods.approve(address,totaltoken).send({ from: account })
        .on('transactionHash', (tx) => { return tx.transactionHash });
        return deployer
    }, [ account,contract ])

    return { Approvetoken: Approvetoken }
}

export const BalanceOfContract = (tokenAddress) => {
    const { account } = useWeb3React();
    const web3 = Getweb3();
    const contract = GetTokenContract(tokenAddress, web3)
    console.log("hereeeeeeeeeeee",contract);
    const BalanceOfToken= useCallback( () => {
        
        const balanceOf = contract.methods.balanceOf(account).call()
        return balanceOf
    }, [ account,contract ])

    return { BalanceOfToken: BalanceOfToken }
}


export const BalanceOfDiscountToken = (tokenAddress) => {
    const { account } = useWeb3React();
    const web3 = Getweb3();
    const contract = GetTokenContract(tokenAddress, web3)
    console.log("hereeeeeeeeeeee",contract);
    const BalanceOfTokenDiscount= useCallback( async() => {
        
        const balanceOf = await contract.methods.balanceOf(account).call()
        return balanceOf
    }, [ account,contract ])

    return { BalanceOfTokenDiscount: BalanceOfTokenDiscount }
}

export default ApproveContract;