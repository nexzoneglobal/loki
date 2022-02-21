import React, { useState, useEffect } from 'react'
import './index.css';
import { Link } from 'react-router-dom';
import Navbar from '../../components/navbar';
import { Finalize,FinalizeWhitelist,Finalizebool } from "../../hooks/PoolDataFetcher";
import { Cancelize } from "../../hooks/PoolDataFetcher";
import axios from 'axios';
import { useWeb3React } from '@web3-react/core'
import { Backdrop } from '@material-ui/core';
import { CircularProgress } from '@material-ui/core';
import { toast } from 'react-toastify';
const Projects = () => {
    const { account } = useWeb3React();
    const [open, setOpen] = useState(false);
    const { Final } = Finalize();
    const { Cancel } = Cancelize();
    const {Finalwhitelist}= FinalizeWhitelist();
    const {Finalbool}= Finalizebool();
    const [searchTerm, setSearchTerm] = useState('')
    const [data, getDate] = useState([]);
    const [togglersaudit, settogglersaudit] = useState(false);
    const [ApproveIdaudit, setApproveIdaudit] = useState('');
    const [Approvestatus, setApprovestatus] = useState('');
    const [projectAddresses, setprojectAddresses] = useState('');
    
    const getAlldata = async () => {
        try {

            await axios.post("https://app.rcsale.app/project/getAllProjectsOfUser", { account: account })
                .then((response) => {

                    if (response.data.status) {
                        getDate(response.data.msg)
                    }
                });

        }
        catch (err) {
            // eslint-disable-next-line no-console
            // console.log(err);
            // alert("Invalid Address")
        }
    }


    const FinalFun = async (currentAddress) => {
        setOpen(true)
        const data = await Final(currentAddress)
        console.log("console data",data)
        if(data){
            try {
    
                await axios.post("https://app.rcsale.app/project/finalizeSale", { id: currentAddress.id })
                    .then((response) => {
                     //   setOpen(false)
                      //  getAlldata();
                        // toast.success('Updated Successfully', {
                        //     position: "top-center",
                        //     autoClose: 7000,
                        // });
                        // window.$("#exampleModal404").modal('hide');
    
                    });
    
            }
            catch (err) {
                setOpen(false)
                // eslint-disable-next-line no-console
                // console.log(err);
                // alert("Invalid Address")
            }
        }
        setOpen(false)
        toast.success('Finalization Done', {
            position: "top-center",
            autoClose: 7000,
        });
        getAlldata();

        // else {
        //     setOpen(false)
        //    // getAlldata();
        // }
    }
    const CancelFun = async (currentAddress) => {

      
        setOpen(true)
        const data = await Cancel(currentAddress)
        console.log(data)
        setOpen(false)
        if(data){
            try {
    
                await axios.post("https://app.rcsale.app/project/finalizeSale", { id: currentAddress.id })
                    .then((response) => {
                     //   setOpen(false)
                      //  getAlldata();
                        // toast.success('Updated Successfully', {
                        //     position: "top-center",
                        //     autoClose: 7000,
                        // });
                        // window.$("#exampleModal404").modal('hide');
    
                    });
    
            }
            catch (err) {
                setOpen(false)
                // eslint-disable-next-line no-console
                // console.log(err);
                // alert("Invalid Address")
            }
        }

        toast.success('Cancellation  Done', {
            position: "top-center",
            autoClose: 7000,
        });
        getAlldata();

        // else {
        //     setOpen(false)
        //    // getAlldata();
        // }
    }

    const handleChangeEventaudit = async (e, id) => {
        console.log("eeeeeeeeeeeeeeeeeeeeeeeeeeee", e);
        if (e == false) {
            settogglersaudit(true);
            // setApprovestatus('off');

            setApproveIdaudit(id);
            console.log("valssssssssss1", togglersaudit)
            console.log("valssssssssss1", ApproveIdaudit)
        }
        else if (e == true) {
            setApprovestatus('on');
            settogglersaudit(false);
            setApproveIdaudit(id);
            console.log("valssssssssss2", togglersaudit)
            console.log("valssssssssss2", ApproveIdaudit)
        }
    }

    const addWhitelist=  async (address)=>{
        console.log("adresses",projectAddresses);
        console.log("presale addrees", address);
        var str = projectAddresses;
		var result = str.split(',');
        console.log("res", result);
       
        setOpen(true)
        try{
        let data= await Finalwhitelist(address,result);
        if(data){
            setOpen(false);
            toast.success('Added Successfully', {
                position: "top-center",
                autoClose: 7000,
            });
            // window.$("#exampleModal505").modal('hide');
        }
     }
     catch(err) {
        setOpen(false)
        // eslint-disable-next-line no-console
        // console.log(err);
        // alert("Invalid Address")
    }
    }

    const approveAudit = async (addy) => {
        setOpen(true)
        console.log("presale", addy)
       let approveWhitelist= await Finalbool(addy,togglersaudit);
        if(approveWhitelist){
        try {

            await axios.post("https://app.rcsale.app/project/approveWhitelistStatus", { id: ApproveIdaudit, status: togglersaudit })
                .then((response) => {
                    setOpen(false)
                    getAlldata();
                    toast.success('Updated Successfully', {
                        position: "top-center",
                        autoClose: 7000,
                    });
                    // window.$("#exampleModal404").modal('hide');

                });

        }
        catch (err) {
            setOpen(false)
            // eslint-disable-next-line no-console
            // console.log(err);
            // alert("Invalid Address")
        }
    }

    }
    React.useEffect(() => {
        getAlldata();
    }, [])

    // render() {
    return (
        <>
            <Backdrop className="loader" sx={{ color: '#fff' }} open={open}><CircularProgress color="primary" style={{ width: "100px", height: '100px' }} /></Backdrop>
            <div className='landing-nft projects'>

                <Navbar />

                <section className="header-section submit-projects" style={{ backgroundImage: `url(${require("../../static/images/submit-form/background-projectss.png")})` }}>
                    <img src={require("../../static/images/landing-leocorn/background-main-head.png")} className="main-heads-one" alt="" />
                    <div className="auto-container">
                        <div className="submit-project">
                            <div className="inner-submit-upper-div">
                                <div className="row  ">
                                    <div className="searchbar">
                                        <h1>Projects</h1>

                                        <div className="searchContainer">
                                            <input className="searchBox" type="search"
                                                name="search" placeholder="Search Pool" onChange={(e) => setSearchTerm(e.target.value)} />
                                            <div className="main-search-ison">
                                                <i class="fa fa-search " aria-hidden="true"></i>
                                            </div>
                                        </div>

                                        {/* <div className="drop-down-single-line">
                                        <div class="dropdown show">
                                            <a class=" " href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Sort By<span><i class="fa fa-caret-down" aria-hidden="true"></i></span>
                                            </a>
                                            <div class="dropdown-menu" aria-labelledby="dropdownMenuLink" >
                                                <a class="dropdown-item" href="#">Pending</a>
                                                <a class="dropdown-item" href="#">Approved</a>
                                                <a class="dropdown-item" href="#">Rejected</a>
                                            </div>
                                        </div>
                                    </div> */}
                                        {/* <div className="buttons-filter">
                                            <button type="button">
                                                <span><i class="fa fa-filter" aria-hidden="true"></i></span> Filter
                                            </button>
                                        </div> */}
                                    </div>
                                </div>
                                <div className="row  setpad">
                                    <h2> <span className='warning'>Warning !</span> <span className='exlude'>Please exclude your Presale address from any fees and dividents !!</span>   </h2>
                                </div>
                            </div>
                            <div className="inner-lower-div">
                                <div class="projects-table-main">
                                    <div class="table-responsive button-table">
                                        <table class="table table-clr table-striped text-center">
                                            <thead>
                                                <tr>
                                                    <th scope="col"> PROJECT NAME </th>
                                                    <th scope="col"> Presale ContractAddress </th>
                                                    <th scope="col">WHITELIST</th>
                                                    <th scope="col"> ADD WhiteList Address </th>

                                                    <th scope="col">CONTRACT ADDRESS</th>
                                                    <th scope="col"> APPROVE/CANCEL POOL </th>

                                                </tr>
                                            </thead>
                                            <tbody className="main-t-body-text" >

                                                {data.filter((val) => {
                                                    if (searchTerm === "") {
                                                        return val
                                                    } else if (val.contactPersonName.toLowerCase().includes(searchTerm.toLowerCase())) {
                                                        return (
                                                            <tr >
                                                                <td className='text-left'><img className='balance-table-img' src={val.logoURL} alt="" />{val.projectName} </td>
                                                                <td className="button-details">
                                                                    {
                                                                        val.preSaleEndDateAndTime && new Date(val.preSaleEndDateAndTime) < new Date() && val.statusOfApplication === 'Approved' ? <button className='disabled1' >Finalize</button> : <button className='disabled2' >Finalize</button>
                                                                    }
                                                                </td>
                                                                <td className='text-left-normal'>{val.contactPersonName}</td>
                                                                <td className='text-left-normal'>{val.contractAddress}</td>
                                                                <td className='text-green-approved'>{val.status}</td>
                                                                <td className="button-details">
                                                                    <Link className='' to='/project-details'>{val.detail}</Link>
                                                                </td>
                                                            </tr>
                                                        )
                                                    }
                                                }).map((elem, key) => {
                                                    const { id } = elem;
                                                    return (
                                                        <tr index={key}>
                                                            <td className='text-left'><img className='balance-table-img' src={elem.logoURL} style={{ width: 40 }} alt="" /> {elem.projectName}</td>
                                                            <td className='text-left-2nd'><a>{elem.contractAddressDeployed} </a></td>
                                                            <td className='text-left-normal'>
                                                                <label class="switch" data-toggle="modal" data-target="#exampleModal404">
                                                                    <input type="checkbox" defaultChecked={elem.whitelisting} onChange={(event) => handleChangeEventaudit(elem.whitelisting, id)} />
                                                                    <span class="slider round"></span>
                                                                </label>

                                                                <div class="modal fade" id="exampleModal404" tabindex="-1" role="dialog" aria-labelledby="exampleModal404" aria-hidden="true">
                                                                    <div class="modal-dialog" role="document">
                                                                        <div class="modal-content">

                                                                            <div class="modal-body">
                                                                                <div className="row ptb">
                                                                                    <div className="col-sm-12">
                                                                                        <div className="inner-side-content text-center pt-40">
                                                                                            <h4>Confirmation</h4>
                                                                                            <h5>Are you sure to enable Whitelist?</h5>
                                                                                            <ul className="list-inline pt-20">
                                                                                                <li className="list-inline-item">
                                                                                                    <button type="button" class="buttion-on"  onClick={()=>approveAudit(elem.contractAddressDeployed)} data-toggle="modal" data-target="#exampleModal404">Approve</button>
                                                                                                </li>
                                                                                                <li className="list-inline-item">
                                                                                                    <button type="button" class="btn-common" data-dismiss="modal">Cancel</button>
                                                                                                </li>
                                                                                            </ul>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className='text-left-2nd'><button data-toggle="modal" data-target="#exampleModal505" className='btn btn-primary'>ADD LIST</button>
                                                                <div class="modal fade" id="exampleModal505" tabindex="-1" role="dialog" aria-labelledby="exampleModal505" aria-hidden="true">
                                                                    <div class="modal-dialog" role="document">
                                                                        <div class="modal-content">

                                                                            <div class="modal-body">
                                                                                <div className="row ptb">
                                                                                    <div className="col-sm-12">
                                                                                        <div className="inner-side-content text-center pt-40">
                                                                                            <h4>Confirmation</h4>
                                                                                            <h5>Please enter addresses by comma separated</h5>
                                                                                            <textarea   onChange={(e) => setprojectAddresses(e.target.value)} class="form-control" placeholder="Please enter addresses by comma separated" rows="10" id="comment"></textarea>
                                                                                            {/* onChange={(e) => setprojectDescription(e.target.value)} */}
                                                                                            <ul className="list-inline pt-20" >
                                                                                                <li className="list-inline-item">
                                                                                                    <button type="button" class="buttion-on" onClick={()=>addWhitelist(elem.contractAddressDeployed)} data-toggle="modal" data-target="#exampleModal505" >Add</button>
                                                                                                </li>
                                                                                                <li className="list-inline-item">
                                                                                                    <button type="button" class="btn-common" data-dismiss="modal">Cancel</button>
                                                                                                </li>
                                                                                            </ul>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </td>

                                                            <td className='text-left-normal'> <p>{elem.contactPersonWalletAddress == "" ? "" : `${elem.contactPersonWalletAddress.substring(0, 6)}...${elem.contactPersonWalletAddress.substring(
                                                                elem.contactPersonWalletAddress.length - 4
                                                            )}`}</p></td>
                                                            {/* <td className='text-green-approved'>{elem.status}</td> */}


                                                            {/* <td className="button-details">
                                                            <Link className='' to={'/project-details/' + id}>Detail</Link>
                                                        </td> */}
                                                            <td className="button-detailss">
                                                                <div className="">

                                                                    {/* elem.preSaleEndDateAndTime && new Date(elem.preSaleEndDateAndTime) < new Date() &&  */}
                                                                    {/* <Link className='buttion-on' >Approve</Link>  {elem.statusOfApplication}*/}
                                                                    <td id="gfngfmg" className={elem.statusOfApplication == 'Pending' ? 'text-green-pending' : elem.statusOfApplication == 'Approved' ? 'text-green-approved' : 'text-green-rejected'}>   {
                                                                        elem.statusOfApplication === 'Approved' ? <button className={elem.finalizeSaleDone === true ? 'green1' : 'disabled1'} onClick={() => FinalFun({ id: elem.id, address: elem.contractAddressDeployed })}>Finalize</button> : <button className='disabled2' >Finalize</button>
                                                                    }<button className={elem.finalizeSaleDone === true ? 'green1' : 'disabled1'} onClick={() => CancelFun({ id: elem.id, address: elem.contractAddressDeployed })}>Cancel</button>  <Link to={"/project-details/" + id} className='disabled1 ml-2 text-white' >Detail</Link></td>


                                                                </div>

                                                            </td>
                                                            {/* <td className=''>
                                                           

                                                        </td>  */}
                                                        </tr>
                                                    )
                                                })
                                                }
                                                {/* <tr>
                                                <td className=''>
                                                    <span className="main-image-dhgy"><img src={require("../../static/images/submit-form/table-icon-image-two.png")} className="main-image-dhgy mr-2" alt="" /></span>PURIFI</td>
                                                <td className='text-left-2nd'><a href="#">fanadise.com </a></td>
                                                <td className='text-left-normal'>Terrell Vargas</td>
                                                <td className='text-left-normal'>0x8E9788D2B3288016...</td>
                                                <td className="button-detailss">
                                                    <div className="d-flex">
                                                        <Link className='buttion-on' to='/project-details'>Approve</Link>
                                                        <Link className='button-rig' to='/project-details'>Reject</Link>
                                                    </div>

                                                </td>
                                            </tr> */}
                                            </tbody>
                                        </table>
                                        <div className="load-more-button">
                                            <button type="button">Load More</button>
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


export default Projects;

