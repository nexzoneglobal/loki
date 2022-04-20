import React from 'react';
import './index.css';
import { MDBProgress } from 'mdbreact';
import autoMergeLevel1 from 'redux-persist/es/stateReconciler/autoMergeLevel1';

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

    // <div classNameName=" card-main">
    //   <div classNameName="main-image">
    //     <img src={props?.logoURL} alt="" style={{ width: 60, height: 60, borderRadius: '50%' }} />
    //     <h1>{props?.projectName}</h1>
    //     { props?.kycVerified ?<button>KYC</button>:''}
    //     { props?.audit ?<button>Audit</button>:''}
    //   </div>
    //   <div classNameName="progress-baar">
    //     <div classNameName="percentage">
    //       <p classNameName="one">Progress</p>
    //       <p>{progressValue}%</p>
          
    //     </div>
    //     <MDBProgress material  value={progressValue} />
    //     {/* <div className="progress">
    //       <div classNameName="progress-bar" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
    //     </div> */}
    //     <div classNameName='button text-center'>
    //       <button>  closed </button> <br/>
    //       <a classNameName='datefont'> Liquidity unlockTime:   {cdate} </a>
    //     </div>
    //   </div>
    // </div>

  <div className= "proj-card-cont">
    <div className="card p-3 mb-2">
        <div className="d-flex justify-content-between">
            <div className="d-flex flex-row align-items-center">
                <div className="icon"> <img src={props?.logoURL} alt="" style={{ width: 80, height:80, borderRadius: '50%' }} /></div>
              
            </div>
            <div className="badge">
              {props?.kycVerified ?<span className="card-kyc"><i class="p-1 fa fa-check" aria-hidden="true"></i><strong>KYC</strong></span>:''}
              {props?.audit ?<span className="card-audit"><i class="p-1 fa fa-lock" aria-hidden="true"></i><strong>Audit</strong></span>:''} 
               <span className="card-closed"><i class="p-1 fa fa-circle" aria-hidden="true"></i>Closed</span> </div>
        </div>
        <div className="mt-4">
            <h2 className="heading">{props?.projectName}</h2>
            <p>{props?.description}</p>
            <div className="mt-4">
                <div className="progress">
                    {/* <div className="progress-bar" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div> */}
                </div>
                <div className="mt-3"> <span className="text1">Liquidity unlockTime:    <span className="text2">{cdate}</span></span> </div>
            </div>
        </div>
    </div>
  </div>
  );
}
export default ClosedPoolCard

