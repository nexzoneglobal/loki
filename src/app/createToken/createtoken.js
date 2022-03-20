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
import { StandardToken } from '../../hooks/PoolDataFetcher';
import { LPTokens } from '../../hooks/PoolDataFetcher';
import { BabyTokens } from '../../hooks/PoolDataFetcher';
import { BabybuybackTokens } from '../../hooks/PoolDataFetcher';


import BigNumber from 'bignumber.js';
const Createtoken = () => {
    const { account } = useWeb3React();
    const [open, setOpen] = useState(false);
    const [data, getDate] = useState([]);



    //new
    const { deployStandardToken } = StandardToken();
    const { deployLPToken } = LPTokens();
    const { deployBabyTokens } = BabyTokens();
    const { deployBabybuybackTokens } = BabybuybackTokens();
    const [Projectname, setProjectname] = useState('')
    const [isLpTokens, setisLpToken] = useState('StandardToken')
    const [Projecttokensymbol, setProjectsymbol] = useState('')
    const [Projectdecimal, setProjectdecimal] = useState('')
    const [Projectamount, setProjectamount] = useState('')
    const [pancakeToken, setpancakeToken] = useState('0x10ED43C718714eb63d5aA57B78B54704E256024E')

    //liquidity Generator

    const [Transactionfee, setTransactionfee] = useState('')
    const [generateliquidity, setgenerateliquidity] = useState('')
    const [Marketingaddress, setMarketingaddress] = useState('')
    const [Marketingpercent, setMarketingpercent] = useState('')

    // Baby/ Reward Token

    const [RewardToken, setRewardToken] = useState('')
    const [balancefordividends, setbalancefordividends] = useState('')
    const [Tokenrewardfee, setTokenrewardfee] = useState('')
    const [Autoaddliquidity, setAutoaddliquidity] = useState('')
    const [Marketingfee, setMarketingfee] = useState('')
    const [Marketingwallet, setMarketingwallet] = useState('')

    //buyback baby token

    const [RewardbackToken, setRewardBackToken] = useState('')
    const [Autoaddliquidityback, setAutoaddliquidityback] = useState('')
    const [BuybackFee, setBuybackFee] = useState('')
    const [ReflectionFee, setReflectionFee] = useState('')
    const [MarketingFeeback, setMarketingFeeback] = useState('')


    const submittoken = async () => {


        setOpen(true)
        try {
            const totalTokens = new BigNumber(Projectamount).multipliedBy(new BigNumber(10).pow(Projectdecimal));
            const totalTokenslp = new BigNumber(Projectamount).multipliedBy(new BigNumber(10).pow(9));
            const totalTokenRT = new BigNumber(Projectamount).multipliedBy(new BigNumber(10).pow(18));
            //standard

            if (isLpTokens == "StandardToken") {
                const Arguments = ({

                    name_: Projectname,
                    symbol_: Projecttokensymbol,
                    decimals_: Projectdecimal,
                    totalSupply_: totalTokens,
                    owner: account
                })
                let approve = await deployStandardToken(Arguments.name_, Arguments.symbol_, Arguments.decimals_, Arguments.totalSupply_, Arguments.owner);
                var contractofAddress = approve.events[0].address;
                console.log("approve", contractofAddress)
                let argus2 = [Arguments.name_, Arguments.symbol_, Arguments.decimals_, Arguments.totalSupply_.toString(), Arguments.owner]
                await axios.post("https://app.rcsale.app/token/token/verifyStandardToken", {
                    contractAddress: contractofAddress, arguments: argus2

                })
                    .then((response) => {

                        if (response.data.status) {
                            // getDate(response.data.msg);
                            toast.success('create Successfully', {
                                position: "top-center",
                                autoClose: 7000,
                            });

                        }
                        setOpen(false)
                    });
            }//liquidity Generator
            else if (isLpTokens == "LiquidityGeneratorToken") {
                const lpg = ({
                    name_: Projectname,
                    symbol_: Projecttokensymbol,
                    totalSupply_: totalTokenslp,
                    router_: pancakeToken,
                    charityAddress_: Marketingaddress,
                    taxFeeBps_: Transactionfee,
                    liquidityFeeBps_: generateliquidity,
                    charityFeeBps_: Marketingpercent,
                    _owner: account,


                })
                let deployLPTokens = await deployLPToken(lpg.name_, lpg.symbol_, lpg.totalSupply_, lpg.router_, lpg.charityAddress_, lpg.taxFeeBps_, lpg.liquidityFeeBps_, lpg.charityFeeBps_, lpg._owner)
                console.log("here", deployLPTokens);
                var contractofAddress = deployLPTokens.events[1].address;

                var lpg2 = [lpg.name_, lpg.symbol_, lpg.totalSupply_.toNumber().toString(), lpg.router_, lpg.charityAddress_, lpg.taxFeeBps_, lpg.liquidityFeeBps_, lpg.charityFeeBps_, lpg._owner]
                await axios.post("https://app.rcsale.app/token/verifyLiquidityGeneratorToken", {
                    contractAddress: contractofAddress, arguments: lpg2


                })
                    .then((response) => {

                        if (response.data.status) {
                            // getDate(response.data.msg);
                            toast.success('create Successfully', {
                                position: "top-center",
                                autoClose: 7000,
                            });

                        }
                        setOpen(false)
                    });
            }
            //Reward Token
            else if (isLpTokens == "BabyToken") {
                var addess = [];
                var feesetter = [];
                addess.push(RewardToken);
                addess.push(pancakeToken);

                addess.push(Marketingwallet);
                addess.push('0x6e82F9e118E90954Cd39E003e1678163a76b0E66')

                feesetter.push(Tokenrewardfee);
                feesetter.push(Autoaddliquidity);
                feesetter.push(Marketingfee);
                const RT = ({
                    name_: Projectname,
                    symbol_: Projecttokensymbol,
                    totalSupply_: totalTokenRT,
                    addrs: addess,
                    feeSettings: feesetter,
                    minimumTokenBalanceForDividends_: balancefordividends,
                    _owner: account

                })
                let deployBaby = await deployBabyTokens(RT.name_, RT.symbol_, RT.totalSupply_, RT.addrs, RT.feeSettings, RT.minimumTokenBalanceForDividends_, RT._owner)
                console.log('here2', deployBaby)
                var contractofAddress = deployBaby.events[2].address;
                var RT2 = [RT.name_, RT.symbol_, RT.totalSupply_.toString(), RT.addrs, RT.feeSettings, RT.minimumTokenBalanceForDividends_, RT._owner]
                await axios.post("https://app.rcsale.app/token/verifyBabyToken", {
                    contractAddress: contractofAddress, arguments: RT2, libraryAddress: '0xa39901BC0178D172B1bbEA1011dB51fc95519546'
                })
                    .then((response) => {

                        if (response.data.status) {
                            // getDate(response.data.msg);
                            toast.success('create Successfully', {
                                position: "top-center",
                                autoClose: 7000,
                            });

                        }
                        setOpen(false)
                    });
            }
            //buy back reward token
            else if (isLpTokens == "BuyBackLiquidityToken") {
                var feestting = [];
                feestting.push(Autoaddliquidityback * 100);
                feestting.push(BuybackFee * 100);
                feestting.push(ReflectionFee * 100);
                feestting.push(MarketingFeeback * 100);
                feestting.push('10000');
                const bbrt = ({
                    name_: Projectname,
                    symbol_: Projecttokensymbol,
                    totalSupply_: totalTokenslp,
                    rewardToken_: RewardbackToken,
                    router_: pancakeToken,
                    feeSettings_: feestting,
                    _owner: account
                })

                let buybackdeploy = await deployBabybuybackTokens(bbrt.name_, bbrt.symbol_, bbrt.totalSupply_, bbrt.rewardToken_, bbrt.router_, bbrt.feeSettings_, bbrt._owner)
                console.log("here", buybackdeploy);
                var contractofAddress = buybackdeploy.events[1].address;
                var bbrt2 = [bbrt.name_, bbrt.symbol_, bbrt.totalSupply_.toString(), bbrt.rewardToken_, bbrt.router_, bbrt.feeSettings_, bbrt._owner]
                await axios.post("https://app.rcsale.app/token/verifyBuyBackBabyToken", {
                    contractAddress: contractofAddress, arguments: bbrt2
                })
                    .then((response) => {

                        if (response.data.status) {
                            // getDate(response.data.msg);
                            toast.success('create Successfully', {
                                position: "top-center",
                                autoClose: 7000,
                            });

                        }
                        setOpen(false)
                    });
            }
            setOpen(false)

            await axios.post("https://app.rcsale.app/token/addToken", {
                name: Projectname, symbol: Projecttokensymbol, decimals: Projectdecimal, totalSupply: Projectamount, contractAddress: contractofAddress, tokenOwner: account, tokenType: isLpTokens

            })
                .then((response) => {

                    if (response.data.status) {
                        // getDate(response.data.msg);
                        toast.success('create Successfully', {
                            position: "top-center",
                            autoClose: 7000,
                        });

                    }
                    setOpen(false)
                });

        }
        catch (err) {
            setOpen(false)

        }
    }


    const userToken= async ()=>{

        await axios.post("https://app.rcsale.app/token/getTokensOfUser", {
           account:account

        })
            .then((response) => {

                if (response.data.status) {
                    getDate(response.data.data);
                    
                }
                setOpen(false)
            });

    }


    useEffect(() => {
        userToken(); 
    }, [])
console.log("here ", data)



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

                            <li class="nav-item">
                                <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">My Tokens</a>
                            </li>
                        </ul>
                        <div class="tab-content" id="pills-tabContent">
                            <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                                <div className="submit-project">
                                    <div className="inner-submit-upper-div1">
                                        <div className="row  ">
                                            <div className="searchbar">
                                                <h1>Create your token </h1>
                                                {/* <p>* Required</p> */}
                                                <p>* Fee: 0.15 BNB</p>
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
                                                        <option value="BabyToken">Reward Token</option>
                                                        <option value="BuyBackLiquidityToken">BuyBack Reward Liquidity Token</option>
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
                                                {isLpTokens == "StandardToken" ?
                                                    <div class="form-group">
                                                        <label for="example">Decimals<span>*</span></label>
                                                        <input type="text"
                                                            class="form-control" id="example" aria-describedby="text" onChange={(e) => setProjectdecimal(e.target.value)} placeholder="Enter Decimals of Token" />
                                                    </div> : ''}
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
                                                        <option value="0x10ED43C718714eb63d5aA57B78B54704E256024E">PancakeSwap</option>

                                                    </select>

                                                </div>
                                            </div>
                                                : ''}

                                            {isLpTokens == "LiquidityGeneratorToken" ? <div className='row'>
                                                <div class="col-lg-6">
                                                    <div class="form-group">
                                                        <label for="example">Transaction fee to generate yield (%)<span>*</span></label>
                                                        <input type="text"
                                                            class="form-control" id="example" aria-describedby="text" onChange={(e) => setTransactionfee(e.target.value)} placeholder="Ex. 1" />
                                                    </div>
                                                </div>
                                                <div class="col-lg-6">
                                                    <div class="form-group">
                                                        <label for="example">Transaction fee to generate liquidity (%)<span>*</span></label>
                                                        <input type="text"
                                                            class="form-control" id="example" aria-describedby="text" onChange={(e) => setgenerateliquidity(e.target.value)} placeholder="Ex. 1 " />
                                                    </div>
                                                </div>
                                                <div class="col-lg-6">
                                                    <div class="form-group">
                                                        <label for="example">Charity/Marketing address<span>*</span></label>
                                                        <input type="text"
                                                            class="form-control" id="example" aria-describedby="text" onChange={(e) => setMarketingaddress(e.target.value)} placeholder="Ex. 0x" />
                                                    </div>
                                                </div>
                                                <div class="col-lg-6">
                                                    <div class="form-group">
                                                        <label for="example">Charity/Marketing percent (%)<span>*</span></label>
                                                        <input type="text"
                                                            class="form-control" id="example" aria-describedby="text" onChange={(e) => setMarketingpercent(e.target.value)} placeholder="0-25" />
                                                    </div>
                                                </div>
                                            </div> : ''}
                                            {/*  */}

                                            {/* Baby Token */}
                                            {isLpTokens == "BabyToken" ? <div className='row'>


                                                <div class="col-lg-6">
                                                    <div class="form-group">
                                                        <label for="example">Reward token<span>*</span></label>
                                                        <input type="text"
                                                            class="form-control" id="example" aria-describedby="text" onChange={(e) => setRewardToken(e.target.value)} placeholder="Ex: 0x..." />
                                                    </div>
                                                </div>
                                                <div class="col-lg-6">
                                                    <div class="form-group">
                                                        <label for="example">Minimum token balance for dividends<span>*</span></label>
                                                        <input type="text"
                                                            class="form-control" id="example" aria-describedby="text" onChange={(e) => setbalancefordividends(e.target.value)} placeholder="Ex: 1000000000" />
                                                    </div>
                                                </div>
                                                <div class="col-lg-6">
                                                    <div class="form-group">
                                                        <label for="example">Token reward fee (%)<span>*</span></label>
                                                        <input type="text"
                                                            class="form-control" id="example" aria-describedby="text" onChange={(e) => setTokenrewardfee(e.target.value)} placeholder="0-100" />
                                                    </div>
                                                </div>
                                                <div class="col-lg-6">
                                                    <div class="form-group">
                                                        <label for="example">Auto add liquidity (%)<span>*</span></label>
                                                        <input type="text"
                                                            class="form-control" id="example" aria-describedby="text" onChange={(e) => setAutoaddliquidity(e.target.value)} placeholder="0-100" />
                                                    </div>
                                                </div> <div class="col-lg-6">
                                                    <div class="form-group">
                                                        <label for="example">Marketing fee (%)<span>*</span></label>
                                                        <input type="text"
                                                            class="form-control" id="example" aria-describedby="text" onChange={(e) => setMarketingfee(e.target.value)} placeholder="0-100" />
                                                    </div>
                                                </div>
                                                <div class="col-lg-6">
                                                    <div class="form-group">
                                                        <label for="example">Marketing wallet<span>*</span></label>
                                                        <input type="text"
                                                            class="form-control" id="example" aria-describedby="text" onChange={(e) => setMarketingwallet(e.target.value)} placeholder="Ex: 0x" />
                                                    </div>
                                                </div>
                                            </div> : ""}
                                            {/*  */}

                                            {/* Baby buyback Token */}
                                            {isLpTokens == "BuyBackLiquidityToken" ? <div className='row'>
                                                <div class="col-lg-6">
                                                    <div class="form-group">
                                                        <label for="example">Reward token<span>*</span></label>
                                                        <input type="text"
                                                            class="form-control" id="example" aria-describedby="text" onChange={(e) => setRewardBackToken(e.target.value)} placeholder="Ex: 0x.." />
                                                    </div>
                                                </div>
                                                <div class="col-lg-6">
                                                    <div class="form-group">
                                                        <label for="example">Liquidity Fee (%)<span>*</span></label>
                                                        <input type="text"
                                                            class="form-control" id="example" aria-describedby="text" onChange={(e) => setAutoaddliquidityback(e.target.value)} placeholder="Ex: 0-100" />
                                                    </div>
                                                </div>
                                                <div class="col-lg-6">
                                                    <div class="form-group">
                                                        <label for="example">Buyback Fee (%)<span>*</span></label>
                                                        <input type="text"
                                                            class="form-control" id="example" aria-describedby="text" onChange={(e) => setBuybackFee(e.target.value)} placeholder="Ex: 0-100" />
                                                    </div>
                                                </div>

                                                <div class="col-lg-6">
                                                    <div class="form-group">
                                                        <label for="example">Reflection Fee (%)<span>*</span></label>
                                                        <input type="text"
                                                            class="form-control" id="example" aria-describedby="text" onChange={(e) => setReflectionFee(e.target.value)} placeholder="Ex: 0-100" />
                                                    </div>
                                                </div>
                                                <div class="col-lg-6">
                                                    <div class="form-group">
                                                        <label for="example">Marketing Fee(%)<span>*</span></label>
                                                        <input type="text"
                                                            class="form-control" id="example" aria-describedby="text" onChange={(e) => setMarketingFeeback(e.target.value)} placeholder="Ex: 0-100" />
                                                    </div>
                                                </div>
                                            </div> : ""}
                                            {/*  */}
                                            <div className="buttonsff">
                                                <button type='submit' onClick={submittoken}  >Create Token</button>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>

                            <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                                <div className="submit-project">
                                    <div className="inner-submit-upper-div1">
                                        <div className="row">
                                            <div className="col-sm-12 p-0">
                                                <div className="searchbar">
                                                    <h1>My Tokens</h1>
                                                    {/* <div className="searchContainer">
                                                        <input className="searchBox" type="search"
                                                            name="search" placeholder="Search lock tokens"  />
                                                        <div className="main-search-ison">
                                                            <i class="fa fa-search " aria-hidden="true"></i>
                                                        </div>
                                                    </div> */}
                                                </div>
                                            </div>
                                       
                                            <div className='col-12'>
                                                <div class="tab-content" id="pills-tabContent">
                                                    <div class="tab-pane fade show active" id="pills-alllock" role="tabpanel" aria-labelledby="pills-alllock-tab">
                                                        <div className="inner-lower-div">
                                                            <div class="projects-table-main">
                                                                <div class="table-responsive button-table">
                                                                    <table class="table table-clr table-striped text-center">
                                                                        <thead>
                                                                            <tr>
                                                                                <th scope="col"> Token Name</th>

                                                                                <th scope="col"> Contract Address </th>

                                                                                <th scope="col"> Total Supply </th>

                                                                                <th scope='col'>View</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody className="main-t-body-text" >
                                                                            {data?.map((elem, key) => {
                                                                                const { id } = elem;
                                                                                return (
                                                                                    <tr index={key}>
                                                                                        <td className=''>
                                                                                          
                                                                                            <h6>{elem?.name}</h6>
                                                                                            <h6>{elem?.symbol}</h6>
                                                                                        </td>

                                                                                        <td className='text-left-normal'>
                                                                                            <h6>{elem?.contractAddress}</h6>
                                                                                           
                                                                                        </td>

                                                                                        <td className='text-left-normal'>
                                                                                            <h6>{elem?.totalSupply}</h6>
                                                                                           
                                                                                        </td>
                                                                                        <td className="button-detailss">
                                                                                            <div className="d-flex">
                                                                                                {/* <Link className='buttion-on' to={"/lock-details/" + id}>Detail</Link> */}
                                                                                                <a className='buttion-on' href={`https://testnet.bscscan.com/token/${elem?.contractAddress}`
                                                                                                } target="_blank">Detail</a>
                                                                                            </div>

                                                                                        </td>
                                                                                    </tr>
                                                                                )
                                                                            })
                                                                            }
                                                                        </tbody>
                                                                    </table>
                                                                    <div className="load-more-button">
                                                                        <button typr="button">Load More</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                   
                                                </div>
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

