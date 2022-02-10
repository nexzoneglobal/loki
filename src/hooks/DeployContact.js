import { useCallback } from 'react'
import { useWeb3React } from '@web3-react/core'
import environment from '../utils/Environment';
import { GetDeployerAddress,GetDeployervault } from '../utils/contractHelpers'
import Getweb3  from './Getweb3';

export const DeployContact = () => {
    const { account } = useWeb3React();
    const web3 = Getweb3();
    const contract = GetDeployerAddress(environment.DeployerAddress, web3)
    console.log("hereeeeeeeeeeee",contract);
    const DeployProjectOnLaunchpad= useCallback( (arg, vals) => {
        
        const deployer = contract.methods.deployProjectOnLaunchpad(arg).send({ from: account, value:  web3.utils.toWei(JSON.stringify((vals)), 'ether') })
        .on('transactionHash', (tx) => { return tx.transactionHash });
        return deployer
    }, [ account,contract ])

    return { deployprojectonlaunchpad: DeployProjectOnLaunchpad }
}

export const DeployContactvault = () => {
    const { account } = useWeb3React();
    const web3 = Getweb3();
    const contract = GetDeployervault(environment.vaultToken, web3)
    console.log("hereeeeeeeeeeee",contract);
    const DeployProjectOnLaunchpadvault= useCallback( (args1,args2,args3) => {
        console.log("args",args2)
        const deployervault = contract.methods.lockAndDeposit(args1,args2,args3).send({ from: account })
        .on('transactionHash', (tx) => { return tx.transactionHash });
        return deployervault
    }, [ account,contract ])

    return { deployprojectonlaunchpadvault: DeployProjectOnLaunchpadvault }
}

export const DeployContactvaultunlock = () => {
    const { account } = useWeb3React();
    const web3 = Getweb3();
    const contract = GetDeployervault(environment.vaultToken, web3)
 
    const DeployProjectOnLaunchpadvaultunlock= useCallback( (args1,args2) => {
        console.log("args",args2)
        const deployervault = contract.methods.unlockAndWithdraw(args1,web3.utils.toWei(JSON.stringify((args2)), 'ether')).send({ from: account })
        .on('transactionHash', (tx) => { return tx.transactionHash });
        return deployervault
    }, [ account,contract ])

    return { deployprojectonlaunchpadvaultunlock: DeployProjectOnLaunchpadvaultunlock }
}



export default DeployContact;