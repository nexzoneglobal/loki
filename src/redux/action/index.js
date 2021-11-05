import axios from "axios";
import Getweb3 from '../../hooks/Getweb3';
import { getBep20Contract } from '../../utils/contractHelpers'
export const useContarctAction = () => async (dispatch) => {
  const web3 = Getweb3();
  await axios.get("https://api.leocorn.in/project/all/active")
   .then(async (res) => {
     try{
       for (let elem of res.data.msg) {
         let tokenAddress = elem.contractAddressDeployed;
         const contract = getBep20Contract(tokenAddress, web3)
          elem.t1StarTtime = await contract.methods.saleStartTimeTierOne().call();
          elem.t1EndTime = await contract.methods.saleEndTimeTierOne().call()
          elem.t2StarTtime = await contract.methods.saleStartTimeTierTwo().call();
          elem.t2EndTime = await contract.methods.saleEndTimeTierTwo().call();
          elem.t3StarTtime = await contract.methods.saleStartTimeTierThree().call();
          elem.t3EndTime = await contract.methods.saleEndTimeTierThree().call()
          elem.TotalBnbinOneTier = await contract.methods.totalBnbInTierOne().call();
          elem.TotalBnbinTwoTier = await contract.methods.totalBnbInTierTwo().call()
          elem.TotalBnbinThreeTier = await contract.methods.totalBnbInTierThree().call();
         //  elem.t4StarTtime = await contract.methods.saleStartTimeTierFour().call();
         //  elem.t4EndTime = await contract.methods.saleEndTimeTierFour().call()
       }
     }
     catch(err){
       return false;
     }
      if (res.data.status) {
        dispatch({
          type: "ACTIVEPOOLDATA",
          payload: res.data.msg,
        });
      }
    })
    .catch((err) => {
      console.log(err);
      return false;
    })
};

export const usePendingContarctAction = () => async (dispatch) => {
  await axios.get("https://api.leocorn.in/project/all/pending")
    .then(async (res) => {
      if (res.data.status) {
        dispatch({
          type: "PENDINGPOOLDATA",
          payload: res.data.msg,
        });
      }
    })
    .catch((err) => {
      console.log(err);
      return false;
    })
};

export const useClosingContarctAction = () => async (dispatch) => {
  const web3 = Getweb3();
  await axios.get("https://api.leocorn.in/project/all/finished")
    .then(async (res) => {
      try{
        for (let elem of res.data.msg) {
          let tokenAddress = elem.contractAddressDeployed;
          const contract = getBep20Contract(tokenAddress, web3)
           elem.TotalBnbinOneTier = await contract.methods.totalBnbInTierOne().call();
           elem.TotalBnbinTwoTier = await contract.methods.totalBnbInTierTwo().call()
           elem.TotalBnbinThreeTier = await contract.methods.totalBnbInTierThree().call();
        }
      }
      catch(err){
        return false;
      }
      if (res.data.status) {
        dispatch({
          type: "CLOSEDPOOLDATA",
          payload: res.data.msg,
        });
      }
    })
    .catch((err) => {
      console.log(err);
      return false;
    })
};






