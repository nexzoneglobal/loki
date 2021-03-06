import { useCallback } from 'react'
import { useWeb3React } from '@web3-react/core'
import Getweb3 from './Getweb3';
import axios from 'axios';
import { getBep20Contract,getStandardToken,getLPToken,getRewardBaby,getRewardBabybuyback } from '../utils/contractHelpers'
import Environment from '../utils/Environment';

export const PoolDataFetcher = (tokenAddress,amount) => {
    const { account } = useWeb3React();
    const web3 = Getweb3();
    const contract = getBep20Contract(tokenAddress, web3)
    const v = amount * (10 ** 18)
    const handleTransfer = useCallback(async () => { 
     const pay = contract.methods.participateAndPay().send({ from: account, value: v ,gas:'2849956'})
            .on('transactionHash', (tx) => { return tx.transactionHash })
        return pay
    }, [account, contract, amount,tokenAddress])
    return { onTransfer: handleTransfer}
}

export const ClaimTokens = (tokenAddress) => {
    const { account } = useWeb3React();
    const web3 = Getweb3();
    const contract = getBep20Contract(tokenAddress, web3)
    const ClaimToken = useCallback(async () => {
     const claimTokens = contract.methods.claimTokens().send({ from: account })
        .on('transactionHash', (tx) => { return tx.transactionHash });
        return claimTokens;
    }, [account, contract,tokenAddress])

    return {claimToken:ClaimToken}
}
export const ClaimVestedToken = (tokenAddress) => {
    const { account } = useWeb3React();
    const web3 = Getweb3();
    const contract = getBep20Contract(tokenAddress, web3)
    const ClaimVestedTokens = useCallback(async () => {
        const claimVestedTokens = contract.methods.claimVestedTokens().send({ from: account }).on('transactionHash', (tx) => { return tx.transactionHash })
        return claimVestedTokens
    }, [account, contract,tokenAddress])
    return { vestedClaim:ClaimVestedTokens}
}


export const ClaimSecondVestedTokens = (tokenAddress) => {
    const { account } = useWeb3React();
    const web3 = Getweb3();
    const contract = getBep20Contract(tokenAddress, web3)
    const claimSecondVestedTokens = useCallback(async () => {
        const claimVestedTokens = contract.methods.claimSecondVestedTokens().send({ from: account }).on('transactionHash', (tx) => { return tx.transactionHash })
        return claimVestedTokens
    }, [account, contract,tokenAddress])
    return { SecondvestedClaim:claimSecondVestedTokens}
}

export const VestedPeriod = (tokenAddress) => {
    const web3 = Getweb3();
    const contract = getBep20Contract(tokenAddress, web3)
    const vestingPeriod= useCallback(async () => {
        const vestingPeriod = contract.methods.vestingPeriod().call();      
        return vestingPeriod
    }, [contract,tokenAddress])


    return {vestingPeriod:vestingPeriod}
}



export const Finalize = () => {
    const { account } = useWeb3React();
    const web3 = Getweb3();
    const FinalizeSale = useCallback(async (idr) => {
        if(idr && idr.address && idr.id && account){
            const contract = getBep20Contract(idr.address, web3)
            try{
                const finalizeSale = await contract.methods.finalizeSale().send({ from: account.toString() });
                const {data} = await axios.post('http://137.184.238.77:4750/project/finalizeSale', { id :idr.id });
                if(data.status){
                    return true;
                }
                return false;
            }catch(error){
                console.log(error)
                return false;
            }
            }
            return false
        // return finalizeSale
    }, [account])


    return {Final:FinalizeSale}
  
}

export const FinalizeWhitelist = () => {
    const { account } = useWeb3React();
    const web3 = Getweb3();
    const FinalizeSaleWhitelist = useCallback(async (idr,addres) => {
            console.log('arr', addres)
            const contract = getBep20Contract(idr, web3)
            try{
                const finalizeSale = await contract.methods.whitelistUsers(addres).send({ from: account });
                
                return finalizeSale
            }catch(error){
                console.log(error)
                return false;
            }
          
           
    }, [account])


    return {Finalwhitelist:FinalizeSaleWhitelist}
  
}

export const Finalizebool = () => {
    const { account } = useWeb3React();
    const web3 = Getweb3();
    const FinalizeSalebool = useCallback(async (idr,addres) => {
            console.log('arr', addres)
            const contract = getBep20Contract(idr, web3)
            try{
                const finalizeSale = await contract.methods.changeWhitelistingStatus(addres).send({ from: account });
                
                return finalizeSale
            }catch(error){
                console.log(error)
                return false;
            }
          
           
    }, [account])


    return {Finalbool:FinalizeSalebool}
  
}


//addwhitelist new 


//cancel

export const Cancelize = () => {
    const { account } = useWeb3React();
    const web3 = Getweb3();
    const CancelSale = useCallback(async (idr) => {
        if(idr && idr.address && idr.id && account){
           
            const contract = getBep20Contract(idr.address, web3)
            try{
                const finalizeSale = await contract.methods.cancelSale().send({ from: account.toString() });
                const {data} = await axios.post('http://137.184.238.77:4750/project/finalizeSale', { id :idr.id });
                if(data.status){
                    return true;
                }
                return false;
            }catch(error){
                console.log(error)
                return false;
            }
            }
            return false
        // return finalizeSale
    }, [account])


    return {Cancel:CancelSale}
  
}

export const Contribute = (tokenAddress) => {
    const { account } = useWeb3React();
    const web3 = Getweb3(); 
    const contract = getBep20Contract(tokenAddress, web3)
    const getContributedForTier1 = useCallback(async () => {
        const tier1Contribute =await contract.methods.buyByUser(account).call();
        const tier2Contribute = await contract.methods.buyByUser(account).call()
        const tier3Contribute =await  contract.methods.buyByUser(account).call()
        // const tier4Contribute =await  contract.methods.buyInFourTier(account).call()
        return {tier1Contribute,tier2Contribute,tier3Contribute}
    }, [account, contract,tokenAddress])
    return {tier1Con:getContributedForTier1}
}
export const WhiteListedAllTiers = (tokenAddress) => {
    const { account } = useWeb3React();
    const web3 = Getweb3(); 
    const contract = getBep20Contract(tokenAddress, web3)
    const whiteListed = useCallback(async () => {
        const t1 =await contract.methods.isEligibleInTier1(account).call();
        const t2= await contract.methods.isEligibleInTier2(account).call();
        const t3= await contract.methods.isEligibleInTier3(account).call();
        return {t1,t2,t3}
    }, [account, contract,tokenAddress])
    return {WhiteListTiers:whiteListed}
}

//standard token



export const StandardToken = () => {
    const { account } = useWeb3React();
    const web3 = Getweb3();
    const contract = getStandardToken(Environment.standardToken, web3)
    console.log("hereeeeeeeeeeee",contract);
    const DeployStandardToken= useCallback( (args1,args2,args3,args4,args5) => {
        console.log("args",args2)
        try {
            const deployervault = contract.methods.deploy(args1,args2,args3,args4,args5).send({ from: account, value:  web3.utils.toWei(JSON.stringify((0.15)), 'ether')  })
            .on('transactionHash', (tx) => { return tx.transactionHash });
            return deployervault
        } catch (error) {
          console.log(error)  
        }
       
    }, [ account,contract ])

    return { deployStandardToken: DeployStandardToken }
}
// LP TOKEN
export const LPTokens = () => {
    const { account } = useWeb3React();
    const web3 = Getweb3();
    const contract = getLPToken(Environment.liquidityGeneratorToken, web3)
    console.log("hereeeeeeeeeeee",contract);
    const DeployLPToken= useCallback( (args1,args2,args3,args4,args5,args6,args7,args8,args9) => {
       console.log("here",args1,args2,args3,args4,args5,args6,args7,args8,args9 )
        try {
            const deployerlp = contract.methods.deploy(args1,args2,args3,args4,args5,args6,args7,args8,args9).send({ from: account, value:  web3.utils.toWei(JSON.stringify((0.15)), 'ether')  })
            .on('transactionHash', (tx) => { return tx.transactionHash });
            return deployerlp
        } catch (error) {
          console.log(error)  
        }
       
    }, [ account,contract ])

    return { deployLPToken: DeployLPToken }
}

// Reward Token

export const BabyTokens = () => {
    const { account } = useWeb3React();
    const web3 = Getweb3();
    const contract = getRewardBaby(Environment.rewardToken, web3)
    console.log("hereeeeeeeeeeee",contract);
    const DeployBabyTokens= useCallback( (args1,args2,args3,args4,args5,args6,args7) => {
       console.log("here",args1,args2,args3,args4,args5,args6,args7 )
        try {
            const deployerlp = contract.methods.deploy(args1,args2,args3,args4,args5,args6,args7).send({ from: account,gas: "8000000", value:  web3.utils.toWei(JSON.stringify((0.15)), 'ether')  })
            .on('transactionHash', (tx) => { return tx.transactionHash });
            return deployerlp
        } catch (error) {
          console.log(error)  
        }
       
    }, [ account,contract ])

    return { deployBabyTokens: DeployBabyTokens }
}
// buy back reward token

export const BabybuybackTokens = () => {
    const { account } = useWeb3React();
    const web3 = Getweb3();
    const contract = getRewardBabybuyback(Environment.buybackrewardtoken, web3)
    console.log("hereeeeeeeeeeee",contract);
    const DeployBabybuybackTokens= useCallback( (args1,args2,args3,args4,args5,args6,args7) => {
    
        try {
            const deployerlp = contract.methods.deploy(args1,args2,args3,args4,args5,args6,args7).send({ from: account, gas: "8000000" ,value:  web3.utils.toWei(JSON.stringify((0.15)), 'ether')  })
            .on('transactionHash', (tx) => { return tx.transactionHash });
            return deployerlp
        } catch (error) {
          console.log(error)  
        }
       
    }, [ account,contract ])

    return { deployBabybuybackTokens: DeployBabybuybackTokens }
}
export default PoolDataFetcher;





// export const Eligible = (tokenAddress) => {
//     const { account } = useWeb3React();
//     const web3 = Getweb3(); 
//     const contract = getBep20Contract(tokenAddress, web3)

//     const eligible = useCallback(async () => {
//         const eligiblePool = contract.methods.isEligible(account).call();
//         return eligiblePool;
//     }, [account, contract,tokenAddress])
//     return {eligible:eligible}
// }