
import { connect } from "react-redux";
import React, { useState, useEffect } from 'react';
import Web3 from "web3";
import './index.css';
import axios from 'axios';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import { DeployContactvaultunlock } from "../../hooks/DeployContact";

const LockDetails = (props) => {
    const { deployprojectonlaunchpadvaultunlock } = DeployContactvaultunlock();
    const [inputs, setInputs] = useState({
        tokenName: '', tokenAddress: '', tokenDecimals: '', amount: '',
        lockTime: '', lockedBy: '', unlockTime: '', isLpToken: ''
    })
  

    const [day, setDay] = useState(0);
    const [hour, setHour] = useState(0);
    const [min, setMin] = useState(0);
    const [sec, setSec] = useState(0);



    const getProjectDetail = async () => {
        try {

            await axios.post("http://137.184.238.77:4750/project/editProject", { ...inputs, id, statusOfApplication: 'Approved' })
                .then((response) => {
                    console.log("response========edit>", response)
                    // getDate(response.data.msg)
                    toast.success('Project Approved Succesfully', {
                        position: "top-right",
                        autoClose: 2000,
                    });
                });

        }
        catch (err) {
            toast.error('Project Not Approved', {
                position: "bottom-center",
                autoClose: 2000,
            });
            // eslint-disable-next-line no-console
            // console.log(err);
            // alert("Invalid Address")


        }
    }
    const getProjectRejected = async () => {
        try {

            await axios.post("http://137.184.238.77:4750/project/editProject", { id, statusOfApplication: 'Rejected' })
                .then((response) => {
                    console.log("response========edit>", response)
                    // getDate(response.data.msg)
                });
        }
        catch (err) {
            // eslint-disable-next-line no-console
            // console.log(err);
            // alert("Invalid Address")


        }
    }

    const id = props.match.params.id;

    const [contractAddress, setContractAddress] = useState('');



    const [walletAddress, setWalletAddress] = useState('');



    const result = Web3.utils.isAddress(contractAddress);
    const result1 = Web3.utils.isAddress(walletAddress);
  






    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs(inputs => ({ ...inputs, [name]: value }));
    }


    const EditForm = () => {

        try {

            axios.post("http://137.184.238.77:4750/locked/getLockedByID", { id: id })
                .then((response) => {

                    setInputs(response.data.data)
                });

        }
        catch (err) {

            console.log(err);

        }


    }

    var time = new Date(inputs.unlockTime);
    function timer() {


        var now = new Date();
        var diff = time.getTime() - now.getTime()
        if (diff <= 0) {
            return;
        }
        var days = Math.floor(diff / (1000 * 60 * 60 * 24));
        var hours = Math.floor(diff / (1000 * 60 * 60));
        var mins = Math.floor(diff / (1000 * 60));
        var secs = Math.floor(diff / 1000);
        var d = days;
        var h = hours - days * 24;
        var m = mins - hours * 60;
        var s = secs - mins * 60;
        setDay(d);
        setHour(h);
        setMin(m);
        setSec(s)
    }

    useEffect(() => {
        EditForm();

    }, [id])

    setInterval(() => {
        timer()
    }, 1000);

    const unlockToken = async()=>{
      
        let locktoken = await deployprojectonlaunchpadvaultunlock(inputs.tokenAddress, inputs.amount);
        if(locktoken){
            toast.success('Unlock Successfully', {
                position: "top-center",
                autoClose: 7000,
            });
        }
    }



    return (
        <div className='landing-nft detail-project'>

            <Navbar />

            <section className="header-section submit-projectss">
                <div className="auto-container">
                    <div className="submit-project">
                        <div className="inner-submit-upper-div">
                            <h1>Lock Details</h1>
                        </div>
                        {/* <form> */}

                            <div className="row">
                                <div className="col-xl-8 col-lg-10 col-md-12">
                                    <div className="inner-submit-lower-div">
                                    <div className="main-calender">
                                        <h4>UNLOCK TIME</h4>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <div className="main-calender">
                                                        <h1>{day} <br></br><span>DAYS</span></h1>
                                                        <h1>{hour} <br></br><span>HRS</span></h1>
                                                        <h1>{min} <br></br><span>MIN</span></h1>
                                                        <h1>{sec} <br></br><span>SEC</span></h1>
                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-xl-8 col-lg-10 col-md-12">
                                    <div className="inner-submit-lower-div">
                                        <h4>Basic Details</h4>
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <label for="example">Token Address<span>*</span></label>
                                                    <input type="text"
                                                        value={inputs.tokenAddress}
                                                        name="projectName"

                                                        className="form-control" id="example" aria-describedby="text" placeholder="Enter your project name here" readOnly />

                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <label for="exampleInputsymbol">Token Name<span>*</span></label>
                                                    <input type="text"
                                                        value={inputs.tokenName}
                                                        name="symbol"

                                                        className="form-control" id="exampleInputsymbol" placeholder="Enter your project symbol i.e $BNB" readOnly />

                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <label for="exampleInputsymbol">Token Decimals<span>*</span></label>
                                                    <input type="text"
                                                        value={inputs.tokenDecimals}
                                                        name="symbol"

                                                        className="form-control" id="exampleInputsymbol" placeholder="Enter your project symbol i.e $BNB" readOnly />

                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <label for="exampleInputsymbol">Total Amount Locked<span>*</span></label>
                                                    <input type="text"
                                                        value={inputs.amount}
                                                        name="symbol"

                                                        className="form-control" id="exampleInputsymbol" placeholder="Enter your project symbol i.e $BNB" readOnly />

                                                </div>
                                            </div>






                                        </div>
                                    </div>
                                </div>
                            </div>

                            <hr className="hr-submit-form"></hr>

                            <div className="row">
                                <div className="col-xl-8 col-lg-10 col-md-12">
                                    <div className="inner-submit-lower-div">
                                        <h4>Lock records</h4>
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <label for="example">Wallet Address<span>*</span></label>
                                                    <input type="text"
                                                        value={inputs.lockedBy}
                                                        name="websiteLink"

                                                        className="form-control" id="example" aria-describedby="text" placeholder="Enter website address of your project" readOnly />

                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <label for="exampleInputsymbol">Amount<span>*</span></label>
                                                    <input type="text"
                                                        value={inputs.amount}
                                                        name="twitterLink"

                                                        className="form-control" id="exampleInputsymbol" placeholder="Enter twitter link of your project" readOnly />

                                                </div>
                                            </div>

                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <label for="example">Unlock Time<span>*</span></label>
                                                    <input type="text"
                                                        value={new Date(inputs.unlockTime)}
                                                        name="telegramlink"

                                                        className="form-control" id="example" aria-describedby="text" placeholder="Enter your project name here" readOnly />

                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <label for="exampleInputsymbol">Lock Time<span></span></label>
                                                    <input type="text"
                                                        value={new Date(inputs.lockTime)}
                                                        name="discrodLink"

                                                        className="form-control" id="exampleInputsymbol" placeholder="Enter telegram link of your project" readOnly />
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <hr className="hr-submit-form"></hr>
                            <div className="col-xl-8 col-lg-10 col-md-12">
                                <div className="inner-submit-lower-div">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="buttons-submit">

                                                <button type="submit" className="back_btn" onClick={unlockToken}>Unlock Token</button>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>





                        {/* </form> */}
                    </div>


                </div>
            </section>


            <Footer />

        </div>
    );
}
export default LockDetails;


