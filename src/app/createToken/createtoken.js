import React, { useState, useEffect } from 'react'
import './createtoken.css';
import { Link } from 'react-router-dom';
import Navbar from '../../components/navbar';
import { Finalize } from "../../hooks/PoolDataFetcher";
import axios from 'axios';
import { useWeb3React } from '@web3-react/core'
import Web3 from "web3";
import { set } from 'lodash';
import { Backdrop } from '@material-ui/core';
import { CircularProgress } from '@material-ui/core';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ApproveContract from '../../hooks/approve'
import Environment from '../../utils/Environment';
import DeployContact, { DeployContactvault } from '../../hooks/DeployContact'
import BigNumber from 'bignumber.js';
const Createtoken = () => {
    const { account } = useWeb3React();
    const [open, setOpen] = useState(false);
    const [data, getDate] = useState([]);



    //new
    const { deployprojectonlaunchpadvault } = DeployContactvault();
    const [Projectname, setProjectname] = useState('')
    const [isLpTokens, setisLpToken] = useState('StandardToken')
    const [Projecttoken, setProjectsymbol] = useState('')
    const [Projectdecimal, setProjectdecimal] = useState('')
    const [Projectamount, setProjectamount] = useState('')
    const { Approvetoken } = ApproveContract(Projecttoken);
    const [pancakeToken, setpancakeToken] = useState('')
    
    const submittoken = async () => {
      

        setOpen(true)
        try {
            const totalTokens = new BigNumber(Projectamount).multipliedBy(new BigNumber(10).pow(Projectdecimal));
           // const epochTime = new Date(date).getTime() / 1000.0;
            // const Arguments = ({
            //     _tokenAddress: Projecttoken,
            //     amountToLock: totalTokens,
            //     _unlockTime: epochTime,



            // })
         //   let approve = await Approvetoken(Environment.vaultToken, totalTokens);
            // if (approve) {

            //     let locktoken = await deployprojectonlaunchpadvault(Arguments._tokenAddress, Arguments.amountToLock, Arguments._unlockTime);
            //     if (locktoken) {
            //         await axios.post("https://app.rcsale.app/locked/lock", {
            //             tokenName: Projectname, tokenAddress: Projecttoken, tokenDecimals: Projectdecimal, account: account, unlockTime: date, amount: Projectamount, isLpToken: isLpTokens

            //         })
            //             .then((response) => {

            //                 if (response.data.status) {
            //                     getDate(response.data.msg);
            //                     toast.success('Lock Successfully', {
            //                         position: "top-center",
            //                         autoClose: 7000,
            //                     });

            //                 }
            //                 setOpen(false)
            //             });

            //     }
            // }
        }
        catch (err) {
            setOpen(false)

        }
    }










    return (
        <>
            <Backdrop className="loader" xs={{ color: '#fff' }} open={open}><CircularProgress color="primary" style={{ width: "100px", height: '100px' }} /></Backdrop>

            <div className='landing-nft projects'>

                <Navbar />


                <section className="header-section submit-projects pt-120" style={{ backgroundImage: `url(${require("../../static/images/submit-form/background-projectss.png")})` }}>
                    <img src={require("../../static/images/landing-leocorn/background-main-head.png")} className="main-heads-one" alt="" />
                    <div className="auto-container">
                        <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                            <li class="nav-item">
                                <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Create Token</a>
                            </li>

                        </ul>
                        <div class="tab-content" id="pills-tabContent">
                            <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                                <div className="submit-project">
                                    <div className="inner-submit-upper-div1">
                                        <div className="row  ">
                                            <div className="searchbar">
                                                <h1>Create your token </h1>
                                                <p>* Required</p>
                                                {/* <p className='valide'>* To make sure there will be no issues during the transaction, please exclude all reward and tax fee from this contract "0xf89936E90d08C13E84d0832246B09BbeeCee5d92" </p> */}

                                            </div>
                                            <div class="col-lg-6 ">

                                            </div>
                                            {/* <div class="col-lg-6 ">

                                            </div> */}
                                            <div class="col-lg-6">
                                                <div class="form-group">
                                                    <label for="example">Token Type<span>*</span></label>
                                                    <select class='form-control2' onChange={(e) => setisLpToken(e.target.value)}>
                                                        <option value="StandardToken">Standard Token</option>
                                                        <option value="LiquidityGeneratorToken">Liquidity Generator Token</option>
                                                        {/* <option value="BabyToken">Reward Token</option>
                                                        <option value="BuyBackLiquidityToken">BuyBack Reward Liquidity Token</option> */}
                                                    </select>

                                                </div>
                                            </div>
                                            <div class="col-lg-6">
                                                <div class="form-group">
                                                    <label for="example">Name<span>*</span></label>
                                                    <input type="text"
                                                        class="form-control" id="example" aria-describedby="text" onChange={(e) => setProjectname(e.target.value)} placeholder="Enter Token Name" />
                                                </div>
                                            </div>
                                            <div class="col-lg-6">
                                                <div class="form-group">
                                                    <label for="example">Symbol<span>*</span></label>
                                                    <input type="text"
                                                        class="form-control" id="example" aria-describedby="text" onChange={(e) => setProjectsymbol(e.target.value)} placeholder="Enter Symbol of Token" />
                                                </div>
                                            </div>
                                            <div class="col-lg-6">
                                            {isLpTokens == "StandardToken"  ?
                                                <div class="form-group">
                                                    <label for="example">Decimals<span>*</span></label>
                                                    <input type="text"
                                                        class="form-control" id="example" aria-describedby="text" onChange={(e) => setProjectdecimal(e.target.value)} placeholder="Enter Decimals of Token" />
                                                </div>: ''}
                                            </div>
                                            <div class="col-lg-6">
                                                <div class="form-group">
                                                    <label for="example">Total supply<span>*</span></label>
                                                    <input type="text"
                                                        class="form-control" id="example" aria-describedby="text" onChange={(e) => setProjectamount(e.target.value)} placeholder="Enter supply of Token" />
                                                </div>
                                            </div>


                                            {/*Liquidity Generation Token  */}
                                            {isLpTokens == "LiquidityGeneratorToken" || isLpTokens == "BabyToken" || isLpTokens == "BuyBackLiquidityToken" ? <div class="col-lg-12">
                                                <div class="form-group">
                                                    <label for="example">Router<span>*</span></label>
                                                    <select class='form-control2' onChange={(e) => setpancakeToken(e.target.value)}>
                                                        <option value="0x75966f3A20966D4dEF259c96Ed0fcfAD309A429F">PancakeSwap</option>

                                                    </select>

                                                </div>
                                            </div>
                                                : ''}

                                            {isLpTokens == "LiquidityGeneratorToken" ?     <div className='row'>
                                                <div class="col-lg-6">
                                                    <div class="form-group">
                                                        <label for="example">Transaction fee to generate yield (%)<span>*</span></label>
                                                        <input type="text"
                                                            class="form-control" id="example" aria-describedby="text" onChange={(e) => setProjectname(e.target.value)} placeholder="Ex. 1" />
                                                    </div>
                                                </div>
                                                <div class="col-lg-6">
                                                    <div class="form-group">
                                                        <label for="example">Transaction fee to generate liquidity (%)<span>*</span></label>
                                                        <input type="text"
                                                            class="form-control" id="example" aria-describedby="text" onChange={(e) => setProjectname(e.target.value)} placeholder="Ex. 1 " />
                                                    </div>
                                                </div>
                                                <div class="col-lg-6">
                                                    <div class="form-group">
                                                        <label for="example">Charity/Marketing address<span>*</span></label>
                                                        <input type="text"
                                                            class="form-control" id="example" aria-describedby="text" onChange={(e) => setProjectname(e.target.value)} placeholder="Ex. 0x" />
                                                    </div>
                                                </div>
                                                <div class="col-lg-6">
                                                    <div class="form-group">
                                                        <label for="example">Charity/Marketing percent (%)<span>*</span></label>
                                                        <input type="text"
                                                            class="form-control" id="example" aria-describedby="text" onChange={(e) => setProjectname(e.target.value)} placeholder="0-25" />
                                                    </div>
                                                </div>
                                                </div>:''}
                                                {/*  */}

                                                {/* Baby Token */}
                                              {isLpTokens == "BabyToken"  ?       <div className='row'>

                                               
                                                <div class="col-lg-6">
                                                    <div class="form-group">
                                                        <label for="example">Reward token<span>*</span></label>
                                                        <input type="text"
                                                            class="form-control" id="example" aria-describedby="text" onChange={(e) => setProjectname(e.target.value)} placeholder="Enter Symbol of Token" />
                                                    </div>
                                                </div>
                                                <div class="col-lg-6">
                                                    <div class="form-group">
                                                        <label for="example">Minimum token balance for dividends<span>*</span></label>
                                                        <input type="text"
                                                            class="form-control" id="example" aria-describedby="text" onChange={(e) => setProjectname(e.target.value)} placeholder="Enter Symbol of Token" />
                                                    </div>
                                                </div>
                                                <div class="col-lg-6">
                                                    <div class="form-group">
                                                        <label for="example">Token reward fee (%)<span>*</span></label>
                                                        <input type="text"
                                                            class="form-control" id="example" aria-describedby="text" onChange={(e) => setProjectname(e.target.value)} placeholder="Enter Symbol of Token" />
                                                    </div>
                                                </div>
                                                <div class="col-lg-6">
                                                    <div class="form-group">
                                                        <label for="example">Auto add liquidity (%)<span>*</span></label>
                                                        <input type="text"
                                                            class="form-control" id="example" aria-describedby="text" onChange={(e) => setProjectname(e.target.value)} placeholder="Enter Symbol of Token" />
                                                    </div>
                                                </div> <div class="col-lg-6">
                                                    <div class="form-group">
                                                        <label for="example">Marketing fee (%)<span>*</span></label>
                                                        <input type="text"
                                                            class="form-control" id="example" aria-describedby="text" onChange={(e) => setProjectname(e.target.value)} placeholder="Enter Symbol of Token" />
                                                    </div>
                                                </div>
                                                <div class="col-lg-6">
                                                    <div class="form-group">
                                                        <label for="example">Marketing wallet<span>*</span></label>
                                                        <input type="text"
                                                            class="form-control" id="example" aria-describedby="text" onChange={(e) => setProjectname(e.target.value)} placeholder="Enter Symbol of Token" />
                                                    </div>
                                                </div>
                                                </div>:""}
                                                {/*  */}

                                                {/* Baby buyback Token */}
                                               {isLpTokens == "BuyBackLiquidityToken" ? <div className='row'>
                                                <div class="col-lg-6">
                                                    <div class="form-group">
                                                        <label for="example">Reward token<span>*</span></label>
                                                        <input type="text"
                                                            class="form-control" id="example" aria-describedby="text" onChange={(e) => setProjectname(e.target.value)} placeholder="Enter Symbol of Token" />
                                                    </div>
                                                </div>
                                                <div class="col-lg-6">
                                                    <div class="form-group">
                                                        <label for="example">Liquidity Fee (%)<span>*</span></label>
                                                        <input type="text"
                                                            class="form-control" id="example" aria-describedby="text" onChange={(e) => setProjectname(e.target.value)} placeholder="Enter Symbol of Token" />
                                                    </div>
                                                </div>
                                                <div class="col-lg-6">
                                                    <div class="form-group">
                                                        <label for="example">Buyback Fee (%)<span>*</span></label>
                                                        <input type="text"
                                                            class="form-control" id="example" aria-describedby="text" onChange={(e) => setProjectname(e.target.value)} placeholder="Enter Symbol of Token" />
                                                    </div>
                                                </div>

                                                <div class="col-lg-6">
                                                    <div class="form-group">
                                                        <label for="example">Reflection Fee (%)<span>*</span></label>
                                                        <input type="text"
                                                            class="form-control" id="example" aria-describedby="text" onChange={(e) => setProjectname(e.target.value)} placeholder="Enter Symbol of Token" />
                                                    </div>
                                                </div>
                                                <div class="col-lg-6">
                                                    <div class="form-group">
                                                        <label for="example">Marketing wallet<span>*</span></label>
                                                        <input type="text"
                                                            class="form-control" id="example" aria-describedby="text" onChange={(e) => setProjectname(e.target.value)} placeholder="Enter Symbol of Token" />
                                                    </div>
                                                </div>
                                                </div> :""}
                                                {/*  */}
                                                <div className="buttonsff">
                                                    <button type='submit' onClick={submittoken}  >Create Token</button>
                                                </div>
                                            </div>
                                        </div>


                                    </div>
                                </div>

                            </div>

                        </div>
                </section>
            </div>
        </>
    );

}


export default Createtoken;

