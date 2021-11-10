import React, { useState, useCallback } from 'react';
import './index.css';
import { Link } from 'react-router-dom';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
// import PoolData from './PoolData';
import OwlCarousel from 'react-owl-carousel';

import PoolCard from './PoolCard';
import ComingPoolCard from './ComingPoolCard';
import ClosedPoolCard from './ClosedPoolCard';
import { useSelector } from "react-redux";
// import { Eligible } from '../../hooks/PoolDataFetcher'
const Landing = () => {
  const store = useSelector((state) => state.PoolActiveReducer.AllActivePoolData);
  const pesndingstore = useSelector((state) => state.PoolActiveReducer.PendingData)
  const closestore = useSelector((state) => state.PoolActiveReducer.ClosedData)
  const owl_option = {
    nav: false,
    dots: false,
    dotsEach: false,
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    // navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"],
    responsive: {
      0: {
        items: 2,
        stagePadding: -100,
        margin: 10,
      },
      400: {
        items: 2,
        stagePadding: -100,
        margin: 15,
      },
      600: {
        items: 2,
        stagePadding: -100,
        margin: 10,
      },
      700: {
        items: 3,
        stagePadding: -100,
        margin: 10,

      },
      1000: {
        items: 4,
        stagePadding: -100,
        margin: 10,

      },
      1200: {
        items: 4,
        stagePadding: 60,
        margin: 10,

      },
      1600: {
        items: 5,
        stagePadding: 60,
        margin: 10,

      },
    },
  };
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
    const { id, t1StarTtime, t1EndTime, t2StarTtime, t2EndTime, t3StarTtime, t3EndTime } = elem
    const startTimeTier1 = parseInt(t1StarTtime)
    const endTimeTier1 = parseInt(t1EndTime)
    const startTimeTier2 = parseInt(t2StarTtime)
    const endTimeTier2 = parseInt(t2EndTime)
    const startTimeTier3 = parseInt(t3StarTtime)
    const endTimeTier3 = parseInt(t3EndTime)
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
          <div className={now > startTimeTier1 && now < endTimeTier1 ? "card-main" : "card-main_1"}>

            <Link to={'/pools/' + id + '/' + t1} id={1} >
              <PoolCard {...elem} tier={1} allcation={elem.tier1Allocation} max={elem.tier1MaxAmountPerUserInBNB}
                startTime={startTimeTier1} endTime={endTimeTier1}
                min={elem.tier1MinAmountPerUserInBNB}
                preSaleStartDateAndTime={new Date(elem.preSaleStartDateAndTime).setHours(new Date(elem.preSaleStartDateAndTime).getHours() + 8)} />
            </Link>
          </div>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-6 col-12" key={ind}>
          <div className={now > startTimeTier2 && now < endTimeTier2 ? "card-main" : "card-main_1"}>
            <Link to={'/pools/' + id + '/' + t2}>
              <PoolCard tier={2} {...elem} allcation={elem.tier2Allocation} max={elem.tier2MaxAmountPerUserInBNB}
                min={elem.tier3MinAmountPerUserInBNB}
                startTime={startTimeTier2} endTime={endTimeTier2}
                preSaleStartDateAndTime={new Date(elem.preSaleStartDateAndTime).setHours(new Date(elem.preSaleStartDateAndTime).getHours() + 23)} />
            </Link>
          </div>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-6 col-12" key={ind}>
          <div className={now > startTimeTier3 && now < endTimeTier3 ? "card-main" : "card-main_1"}>
            <Link to={'/pools/' + id + '/' + t3}>
              <PoolCard tier={3} {...elem} allcation={elem.tier3Allocation} max={elem.tier3MaxAmountPerUserInBNB}
                min={elem.tier3MinAmountPerUserInBNB}
                startTime={startTimeTier3} endTime={endTimeTier3}
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
              <a>
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
      <div className="banner-mju">
        <div className="container">
          <div className="row">
            <div className="col-md-9 m-auto">
            <div className="inner-banners-x">
              <div className="imgds">
              <img src={require("../../static/images/landing-leocorn/ing12.png")} alt="" className="img-fluid main-imgd" />
              </div>
              <div className="textsd">
                <h4 className="dfgh">MISSED DOGE? BUY <span>FLOKI</span></h4>
              </div>
              <div className="imgds">
              <img src={require("../../static/images/landing-leocorn/ing12.png")} alt="" className="img-fluid main-imgd" />
              </div>
          </div>
     
            </div>
          </div>
        </div>
         
      </div>
      <section className="featured-pool-closed">
        <div className="auto-container">
          <h1>Top Trending Token</h1>
        </div>
        <div className="first-second">

          <OwlCarousel className="slider-items owl-carousel ltf-owl" autoplaySpeed={3000}  {...owl_option}>
            <Link to="sellerleaderboard">
              <div className="item mt-2">
                <div className="main-card text-center">
                  <div className="iconxerc">
                    <img src={require("../../static/images/landing-leocorn/img12.png")} alt="" className="img-fluid main-imgd" />
                  </div>
                  <div className="text-down ml-4">
                    <h4>
                      ShibX <br></br>
                      <span>ShibX
                      </span>
                    </h4>
                    <h6>64.48%</h6>
                    <p></p>
                  </div>

                </div>
              </div>
            </Link>
            <Link to="sellerleaderboard">
              <div className="item mt-2">
                <div className="main-card text-center">
                  <div className="iconxerc">
                    <img src={require("../../static/images/landing-leocorn/img14.png")} alt="" className="img-fluid main-imgd" />
                  </div>
                  <div className="text-down ml-4">
                    <h4>
                      CumStar <br></br>
                      <span>CumStar
                      </span>
                    </h4>
                    <h6>64.48%</h6>
                    <p></p>
                  </div>

                </div>
              </div>
            </Link>
            <Link to="sellerleaderboard">
              <div className="item mt-2">
                <div className="main-card text-center">
                  <div className="iconxerc">
                    <img src={require("../../static/images/landing-leocorn/img15.png")} alt="" className="img-fluid main-imgd" />
                  </div>
                  <div className="text-down ml-4">
                    <h4>
                      FREEMOON
                      <br></br>
                      <span>FREEMOON

                      </span>
                    </h4>
                    <h6>64.48%</h6>
                    <p></p>
                  </div>

                </div>
              </div>
            </Link>
            <Link to="sellerleaderboard">
              <div className="item mt-2">
                <div className="main-card text-center">
                  <div className="iconxerc">
                    <img src={require("../../static/images/landing-leocorn/img12.png")} alt="" className="img-fluid main-imgd" />
                  </div>
                  <div className="text-down ml-4">
                    <h4>
                      MarsRise<br></br>
                      <span>MarsRise
                      </span>
                    </h4>
                    <h6>64.48%</h6>
                    <p></p>
                  </div>

                </div>
              </div>
            </Link>
            <Link to="sellerleaderboard">
              <div className="item mt-2">
                <div className="main-card text-center">
                  <div className="iconxerc">
                    <img src={require("../../static/images/landing-leocorn/img14.png")} alt="" className="img-fluid main-imgd" />
                  </div>
                  <div className="text-down ml-4">
                    <h4>
                      CumStar <br></br>
                      <span>CumStar
                      </span>
                    </h4>
                    <h6>64.48%</h6>
                    <p></p>
                  </div>

                </div>
              </div>
            </Link>
          </OwlCarousel>


        </div>
      </section>
      <section className="featured-pool-closed">
        <div className="auto-container">
          <h1>Pools Coming Soon</h1>
          {closestore.map((elem, closeindex) => {
            const { id, TotalBnbinOneTier, TotalBnbinTwoTier, TotalBnbinThreeTier } = elem
            const t1 = 1; const t2 = 2; const t3 = 3; const t4 = 4;
            return (
              <div className="row main-pool-featured">
                <div className="col-xl-4 col-lg-4 col-md-6 col-12" key={closeindex}>
                  <Link to={'/closepool/' + id + '/' + t1}>
                    <ClosedPoolCard {...elem} tier={1} TotalBnbPerTier={TotalBnbinOneTier} tierAllocation={elem.tier1Allocation} />
                  </Link>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 col-12" key={closeindex}>
                  <Link to={'/closepool/' + id + '/' + t2}>
                    <ClosedPoolCard tier={2} {...elem} TotalBnbPerTier={TotalBnbinTwoTier} tierAllocation={elem.tier2Allocation} />
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