import React, { useState, useCallback } from 'react';
import './index.css';
import { Link } from 'react-router-dom';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
// import PoolData from './PoolData';
import PoolCard from './PoolCard';
import ComingPoolCard from './ComingPoolCard';
import ClosedPoolCard from './ClosedPoolCard';
import { useSelector } from "react-redux";
// import { Eligible } from '../../hooks/PoolDataFetcher'
const Landing = () => {
  const store = useSelector((state) => state.PoolActiveReducer.AllActivePoolData);
  const pesndingstore=useSelector((state)=>state.PoolActiveReducer.PendingData)
  const closestore=useSelector((state)=>state.PoolActiveReducer.ClosedData)

  // const { eligible } = Eligible(tokenAddress);

  // const EligiblePool = useCallback(async (e) => {
  //   if(account){
  //     const pool = await eligible();
  //     // console.log("activePool",pool)
  //     if(activePool[0]){
  //     display = activePool.map((elem, index) => {
  //       const { id } = elem
  //       const t1 = 1; const t2 = 2; const t3 = 3; const t4 = 4;
  //       let tier3Date = new Date(elem.preSaleStartDateAndTime);
  //       tier3Date.setHours(new Date(elem.preSaleStartDateAndTime).getHours() + 24)
  //       tier3Date.setMinutes(new Date(elem.preSaleStartDateAndTime).getMinutes() + 10)
  //       if(pool==1){
  //         return(
  //         <div className="row main-pool-featured">
  //            <div className="col-xl-3 col-lg-4 col-md-6 col-12" key={index}>
  //             <Link to={'/pools/' + id + '/' + t1} id={1}>
  //               <PoolCard {...elem} tier={1} allcation={elem.tier1Allocation} max={elem.tier1MaxAmountPerUserInBNB}
  //                 min={elem.tier1MinAmountPerUserInBNB}
  //                 preSaleStartDateAndTime={new Date(elem.preSaleStartDateAndTime).setHours(new Date(elem.preSaleStartDateAndTime).getHours() + 8)} />
  //             </Link>             
  //           </div>
  //         </div>
  //         )
  //       }
  //       else if(pool==2){
  //         return(
  //         <div className="row main-pool-featured">
  //         <div className="col-xl-3 col-lg-4 col-md-6 col-12" key={index}>
  //         <Link to={'/pools/' + id + '/' + t2}>
  //           <PoolCard tier={2} {...elem} allcation={elem.tier2Allocation} max={elem.tier2MaxAmountPerUserInBNB}
  //             min={elem.tier3MinAmountPerUserInBNB}
  //             preSaleStartDateAndTime={new Date(elem.preSaleStartDateAndTime).setHours(new Date(elem.preSaleStartDateAndTime).getHours() + 22)} />
  //         </Link>
  //       </div>
  //       </div>
  //         )
  //       }
  //       else if(pool==3){
  //         return(
  //         <div className="row main-pool-featured">
  //            <div className="col-xl-3 col-lg-4 col-md-6 col-12" key={index}>
  //             <Link to={'/pools/' + id + '/' + t3}>
  //               <PoolCard tier={3} {...elem} allcation={elem.tier3Allocation} max={elem.tier3MaxAmountPerUserInBNB}
  //                 min={elem.tier3MinAmountPerUserInBNB}
  //                 preSaleStartDateAndTime={tier3Date} />
  //             </Link>
  //           </div>
  //           </div>
  //         )
  //       }
  //       else if(pool==4){
  //         return(
  //         <div className="row main-pool-featured">
  //            <div className="col-xl-3 col-lg-4 col-md-6 col-12" key={index}>
  //             <Link to={'/pools/' + id + '/' + t4}>
  //               <PoolCard tier={4} {...elem} allcation={elem.tier4Allocation} max={elem.tier4MaxAmountPerUserInBNB}
  //                 min={elem.tier4MinAmountPerUserInBNB}
  //                 preSaleStartDateAndTime={elem.preSaleEndDateAndTime} />
  //             </Link>
  //           </div>
  //           </div>
  //         )
  //       }
  //       else{
  //         return 0
  //       }
       
  //     })
  //   }
  //   }
    

  // }, [eligible])


  
   const display = store.map((elem, ind) => {
    const { id ,t1StarTtime,t1EndTime,t2StarTtime,t2EndTime,t3StarTtime,t3EndTime} = elem
    const startTimeTier1=parseInt(t1StarTtime)
    const endTimeTier1=parseInt(t1EndTime)
    const startTimeTier2=parseInt(t2StarTtime)
    const endTimeTier2=parseInt(t2EndTime)
    const startTimeTier3=parseInt(t3StarTtime)
    const endTimeTier3=parseInt(t3EndTime)
    // const startTimeTier4=t4StarTtime*1000;
    // const endTimeTier4=t4EndTime*1000; 
    // t4StarTtime,t4EndTime
    
    const now = Math.floor(Date.now() / 1000)

    const t1 = 1; const t2 = 2; const t3 = 3;
    let tier3Date = new Date(elem.preSaleStartDateAndTime);
    tier3Date.setHours(new Date(elem.preSaleStartDateAndTime).getHours() + 24)
    tier3Date.setMinutes(new Date(elem.preSaleStartDateAndTime).getMinutes() + 10)
    // let tier4Date = new Date(elem.preSaleStartDateAndTime);
    // tier4Date.setHours(new Date(elem.preSaleStartDateAndTime).getHours() + 15)
    // tier4Date.setMinutes(new Date(elem.preSaleStartDateAndTime).getMinutes() + 20)
    // tier4Date.setDate(new Date(elem.preSaleStartDateAndTime).getDate() + 1);
    return (
      <div className="row main-pool-featured">
        <div className="col-xl-4 col-lg-4 col-md-6 col-12" key={ind}>
        <div className={now > startTimeTier1  && now<endTimeTier1 ? "card-main" : "card-main_1"}>
          
          <Link to={'/pools/' + id + '/' + t1} id={1} >
            <PoolCard {...elem} tier={1} allcation={elem.tier1Allocation} max={elem.tier1MaxAmountPerUserInBNB}
              startTime={startTimeTier1}  endTime={endTimeTier1} 
              min={elem.tier1MinAmountPerUserInBNB}
              preSaleStartDateAndTime={new Date(elem.preSaleStartDateAndTime).setHours(new Date(elem.preSaleStartDateAndTime).getHours() + 8)} />
          </Link>
        </div>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-6 col-12" key={ind}>
        <div className={now>startTimeTier2  && now<endTimeTier2 ? "card-main" : "card-main_1"}>
          <Link to={'/pools/' + id + '/' + t2}>
            <PoolCard tier={2} {...elem} allcation={elem.tier2Allocation} max={elem.tier2MaxAmountPerUserInBNB}
              min={elem.tier3MinAmountPerUserInBNB}
              startTime={startTimeTier2}  endTime={endTimeTier2} 
              preSaleStartDateAndTime={new Date(elem.preSaleStartDateAndTime).setHours(new Date(elem.preSaleStartDateAndTime).getHours() + 23)} />
          </Link>
        </div>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-6 col-12" key={ind}>
        <div className={now >startTimeTier3  &&  now<endTimeTier3 ? "card-main" : "card-main_1"}>
          <Link to={'/pools/' + id + '/' + t3}>
            <PoolCard tier={3} {...elem} allcation={elem.tier3Allocation} max={elem.tier3MaxAmountPerUserInBNB}
              min={elem.tier3MinAmountPerUserInBNB}
              startTime={startTimeTier3}  endTime={endTimeTier3} 
              preSaleStartDateAndTime={tier3Date} />
          </Link>
        </div>
        </div>
        {/* <div className="col-xl-3 col-lg-4 col-md-6 col-12" key={index}>
        <div className={now>startTimeTier4  && now<endTimeTier4 ? "card-main" : "card-main_1"}>
          <Link to={'/pools/' + id + '/' + t4} >
            <PoolCard tier={4} {...elem} allcation={elem.tier4Allocation} max={elem.tier4MaxAmountPerUserInBNB}
              min={elem.tier4MinAmountPerUserInBNB}
              startTime={startTimeTier4}  endTime={endTimeTier4} 
              preSaleStartDateAndTime={elem.preSaleEndDateAndTime} />
          </Link>
        </div>
        </div> */}
      </div>
    )
  })
  
  return (
    <div className='landing-nft'>
      <Navbar />
      <section className="header-section" style={{ backgroundImage: `url(${require("../../static/images/landing-leocorn/background-main.png")})` }}>
        <img src={require("../../static/images/landing-leocorn/background-main-head.png")} className="main-heads-one" alt="" />
        <div className="auto-container">
          <div className="main-head">
            <h1>RC LAUNCHPAD Pools</h1>
            <p>RC LAUNCHPAD is a blockchain platform designed to provide an easy to use launchpad that aims to help new quality blockchain projects to raise capital and easily distribute their tokens at the same time. RC LAUNCHPAD currently operates on the Binance Smart Chain and helps launch the new IDO coins via a Decentralized liquidity Exchange(DEX) such as PancakeSwap.</p>
            <button>
              <a href="https://pancakeswap.finance/swap#/swap?outputCurrency=0xe39e2861AE9a45FA321c1B0155D2f99196b2A992" target="_blank">
                <img src={require("../../static/images/landing-leocorn/button-mamin-head.png")} alt="" />Buy on PancakeSwap
              </a>
            </button>
          </div>
        </div>
      </section>
      <section className="featured-pool">
        <div className="auto-container">
          <div className="row  ">
            <div className="searchbar">
              {/* <h1>Active Pools</h1> */}
              {/* <div className="main-slider " onClick={EligiblePool}>
                <label class="switch">
                  <input type="checkbox" />
                  <span class="slider round"></span>
                </label>
                <p>Show Eligible Pools only</p>
              </div> */}
            </div>
          </div>
          {display}
        </div>
      </section>
      {/* <section className="featured-pool-coming-soon">
        <div className="auto-container">
          <h1>Pools Coming Soon</h1>
          {pesndingstore.map((elem, index) => {
            let tier3Date = new Date(elem.preSaleStartDateAndTime);
            tier3Date.setHours(new Date(elem.preSaleStartDateAndTime).getHours() + 23)
            tier3Date.setMinutes(new Date(elem.preSaleStartDateAndTime).getMinutes() + 10)

            let tier2Date = new Date(elem.preSaleStartDateAndTime);
            tier2Date.setHours(new Date(elem.preSaleStartDateAndTime).getHours() + 20);
            return (
              <div className="row main-pool-featured">
                <div className="col-xl-4 col-lg-4 col-md-6 col-12" key={index}>
                  <ComingPoolCard {...elem} tier={1} allcation={elem.tier1Allocation} max={elem.tier1MaxAmountPerUserInBNB}
                    min={elem.tier1MinAmountPerUserInBNB}
                    preSaleStartDateAndTime={new Date(elem.preSaleStartDateAndTime)}
                  />
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 col-12" key={index} >
                  <ComingPoolCard tier={2} {...elem} allcation={elem.tier2Allocation} max={elem.tier2MaxAmountPerUserInBNB}
                    min={elem.tier2MinAmountPerUserInBNB}
                    preSaleStartDateAndTime={tier2Date} />
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 col-12" key={index}>
                  <ComingPoolCard tier={3} {...elem} allcation={elem.tier3Allocation} max={elem.tier3MaxAmountPerUserInBNB}
                    min={elem.tier3MinAmountPerUserInBNB}
                    preSaleStartDateAndTime={tier3Date} />
                </div>
            
              </div>
            )
          })}
        </div>
      </section> */}
      <section className="featured-pool-closed">
        <div className="auto-container">
          <h1>Pools Coming Soon</h1>
          {closestore.map((elem, closeindex) => {
            const { id, TotalBnbinOneTier,TotalBnbinTwoTier,TotalBnbinThreeTier} = elem
            const t1 = 1; const t2 = 2; const t3 = 3; const t4 = 4;
            return (
              <div className="row main-pool-featured">
                <div className="col-xl-4 col-lg-4 col-md-6 col-12" key={closeindex}>
                  <Link to={'/closepool/' + id + '/' + t1}>
                    <ClosedPoolCard {...elem} tier={1} TotalBnbPerTier={TotalBnbinOneTier} tierAllocation={elem.tier1Allocation}/>
                  </Link>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 col-12" key={closeindex}>
                  <Link to={'/closepool/' + id + '/' + t2}>
                    <ClosedPoolCard tier={2} {...elem} TotalBnbPerTier={TotalBnbinTwoTier}  tierAllocation={elem.tier2Allocation} />
                  </Link>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 col-12" key={closeindex}>
                  <Link to={'/closepool/' + id + '/' + t3}>
                    <ClosedPoolCard tier={3} {...elem} TotalBnbPerTier={TotalBnbinThreeTier} tierAllocation={elem.tier3Allocation} />
                  </Link>
                </div>
                {/* <div className="col-xl-3 col-lg-4 col-md-6 col-12" key={closeindex}>
                  <Link to={'/closepool/' + id + '/' + t4}>
                    <ClosedPoolCard tier={4} {...elem} />
                  </Link>
                </div> */}
              </div>
            )
          })}
        </div>
      </section>
      <Footer />
    </div>
  );
}
export default Landing