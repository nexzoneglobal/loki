import React from 'react';
import './index.css';
import { MDBProgress } from 'mdbreact';

const ClosedPoolCard = (props) => {

  // console.log("props in TotalBnbPerTier",props.TotalBnbPerTier);
  // console.log("props in amountAllocatedForPresale",props.amountAllocatedForPresale);
  // console.log("props in tierAllocation",props.tierAllocation);
  // const [progressValue,setProgressValue]=useState('')

  //let progressValue=(((((props.TotalBnbPerTier/( 10**18) / props.tokenPriceInBNB))/((props.amountAllocatedForPresale)*(props.tierAllocation/100)))*100).toFixed(3));
  let progressValue=(((((props.TotalBnbPerTier/( 10**18) / props.tokenPriceInBNB))/((props.amountAllocatedForPresale)))*100).toFixed(3));
  progressValue = progressValue > 100 ? 100 : progressValue;
 
  let cdate = (new Date(props?.liquidityUnlockTime)).toString();
  return (

    // <div className=" card-main">
    //   <div className="main-image">
    //     <img src={props?.logoURL} alt="" style={{ width: 60, height: 60, borderRadius: '50%' }} />
    //     <h1>{props?.projectName}</h1>
    //     { props?.kycVerified ?<button>KYC</button>:''}
    //     { props?.audit ?<button>Audit</button>:''}
    //   </div>
    //   <div className="progress-baar">
    //     <div className="percentage">
    //       <p className="one">Progress</p>
    //       <p>{progressValue}%</p>
          
    //     </div>
    //     <MDBProgress material  value={progressValue} />
    //     {/* <div className="progress">
    //       <div className="progress-bar" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
    //     </div> */}
    //     <div className='button text-center'>
    //       <button>  closed </button> <br/>
    //       <a className='datefont'> Liquidity unlockTime:   {cdate} </a>
    //     </div>
    //   </div>
    // </div>
  
    <div className="p-3 ">
        <div className="card">
            <div className="d-flex justify-content-between">
                <div className="d-flex flex-row align-items-center">
                    <div className="icon"><img src={props?.logoURL} alt="" style={{ width: 60, height: 60, borderRadius: '25%' }} />  </div>
                    <div className="ms-2 c-details">
                        <h6 className="mb-0">{props?.projectName}</h6> <span>1 days ago</span>
                    </div>
                </div>
                <div className="badge3"> <span>Closed</span> </div>
              
            </div>
            <div className="mt-5">
                <h3 className="heading">{props?.projectName}</h3>
                { props?.kycVerified ?<div className="badge"><span>KYC</span></div>:''}
        { props?.audit ?<div className="badge2"><span>Audit</span></div>:''}
                <div className="mt-5">
                  
                    <div className="progress">
                        
                    </div>
                    <div className="mt-3"> <span className="text1">Liquidity unlockTime:    <span className="text2">{cdate}</span></span> </div>
                </div>
            </div>
        </div>
    </div>

  );
}
export default ClosedPoolCard

