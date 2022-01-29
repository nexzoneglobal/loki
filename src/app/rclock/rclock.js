import React, { useState, useEffect } from 'react'
import './rclock.css';
import { Link } from 'react-router-dom';
import Navbar from '../../components/navbar';
import { Finalize } from "../../hooks/PoolDataFetcher";
import axios from 'axios';
import { useWeb3React } from '@web3-react/core'
import { set } from 'lodash';
import { Backdrop } from '@material-ui/core';
import { CircularProgress } from '@material-ui/core';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const RcLock = () => {
    const [open, setOpen] = useState(false);
    const [data, getDate] = useState([]);
    const [allfeatured, setallfeatured] = useState([]);
    const [Approvestatus, setApprovestatus] = useState('');
    const [ApproveId, setApproveId] = useState('');
    const [publishstatus, setpublishstatus] = useState('');
    const [publishId, setpublishId] = useState('');
    const [logo, setLogo] = useState('');
    const [selectedImg, setSelectedImg] = useState([]);
    const [logo64, setLogo64] = useState('');
    const [logoUrl, setLogoUrl] = useState([]);
    const [namefeatured, setnamefeatured] = useState('');
    const [urlfeatured, seturlfeatured] = useState('');
    const [symbolfeatured, setsymbolfeatured] = useState('');
    const [deletefeature, setdeletefeature] = useState('');


    //
    const [togglers, settogglers] = useState(false);;
    //add states

    const [nameadd, setnameadd] = useState('');
    const [urladd, seturladd] = useState([]);
    const [logoadd, setLogoadd] = useState('');
    const [selectedImgadd, setSelectedImgadd] = useState([]);
    const [logo64add, setLogo64add] = useState('');
    const [logoUrladd, setLogoUrladd] = useState([]);
    const [alladdss, setalladdss] = useState([]);
    const [addstatus, setaddstatus] = useState('');
    const [addId, setaddId] = useState('');

    //new
   
    const [date, setDate] = useState('');
    const [Projectname, setProjectname] = useState('')
    const [Projecttoken, setProjecttoken] = useState('')
    const [Projectdecimal, setProjectdecimal] = useState('')
    const [Projectamount, setProjectamount] = useState('')
    const handleChangeDate = (e) => {
        // const d=new Date(e.target.value);
        // setDate(d)
        setDate(e.target.value)
    }
    useEffect(() => {
        getAlldata();
        alltrending();
        alladds();
    }, [])
    const getAlldata = async () => {
        setOpen(true)
        try {

            await axios.get("https://app.rcsale.app/project/all")
                .then((response) => {

                    if (response.data.status) {
                        getDate(response.data.msg)
                    }
                    setOpen(false)
                });

        }
        catch (err) {
            setOpen(false)
            // eslint-disable-next-line no-console
            // console.log(err);
            // alert("Invalid Address")
        }
    }

    const handleChangeEvent = async (e, id) => {
        console.log("eeeeeeeeeeeeeeeeeeeeeeeeeeee", e);
        if (e == false) {
            settogglers(true);
            // setApprovestatus('off');

            setApproveId(id);
            console.log("valssssssssss", Approvestatus)
        }
        else if (e == true) {
            setApprovestatus('on');
            settogglers(false);
            setApproveId(id);
            console.log("valssssssssss", Approvestatus)
        }
    }
    console.log("togglerrssssss", togglers);
    const handlePublish = async (de) => {

        if (de.published == false) {
            setpublishstatus(true);
            setpublishId(de.id);
        }
        else {
            setpublishstatus(false);
            setpublishId(de.id);
        }

    }

    const handleaddPublish = async (de) => {

        if (de.published == false) {
            setaddstatus(true);
            setaddId(de.id);
        }
        else {
            setaddstatus(false);
            setaddId(de.id);
        }

    }

    const AprrovePublish = async () => {
        setOpen(true)
        try {

            await axios.post("https://app.rcsale.app/featured/publishFeatured", { id: publishId, publish: publishstatus })
                .then((response) => {
                    setOpen(false)

                    alltrending();
                    window.$("#exampleModalLabel12").modal('hide');
                });

        }
        catch (err) {
            setOpen(false)
            // eslint-disable-next-line no-console
            // console.log(err);
            // alert("Invalid Address")
        }
    }

    const approveKyc = async () => {
        setOpen(true)
        try {

            await axios.post("https://app.rcsale.app/project/approveKYCStatus", { id: ApproveId, status: togglers })
                .then((response) => {
                    setOpen(false)
                    getAlldata();
                    toast.success('Updated Successfully', {
                        position: "top-center",
                        autoClose: 7000,
                    });
                    window.$("#exampleModal").modal('hide');

                });

        }
        catch (err) {
            setOpen(false)
            // eslint-disable-next-line no-console
            // console.log(err);
            // alert("Invalid Address")
        }

    }

    const handleImageChange = (e) => {

        setLogo(e.target.value);
        setSelectedImg([]);
        if (e.target.files) {
            const filesarray = Array.from(e.target.files).map((file) => URL.createObjectURL(file));

            setSelectedImg((preImage) => preImage.concat(filesarray));
            Array.from(e.target.files).map((file) => URL.createObjectURL(file))
            setLogoUrl(filesarray)
        }
        var files = e.target.files;
        var file = files[0];

        if (files && file) {
            var reader = new FileReader();

            reader.onload = _handleReaderLoaded.bind(this);

            reader.readAsBinaryString(file);
        }
    }

    const _handleReaderLoaded = (readerEvt) => {
        var binaryString = readerEvt.target.result;
        var base64textString = btoa(binaryString);
        var base64 = base64textString
        setLogo64(base64)

    }

    //use adds
    const handleImageChangeadd = (e) => {

        setLogoadd(e.target.value);
        setSelectedImgadd([]);
        if (e.target.files) {
            const filesarray = Array.from(e.target.files).map((file) => URL.createObjectURL(file));

            setSelectedImgadd((preImage) => preImage.concat(filesarray));
            Array.from(e.target.files).map((file) => URL.createObjectURL(file))
            setLogoUrladd(filesarray)
        }
        var files = e.target.files;
        var file = files[0];

        if (files && file) {
            var reader = new FileReader();

            reader.onload = _handleReaderLoadedadd.bind(this);

            reader.readAsBinaryString(file);
        }
    }

    const _handleReaderLoadedadd = (readerEvt) => {
        var binaryString = readerEvt.target.result;
        var base64textString = btoa(binaryString);
        var base64 = base64textString
        setLogo64add(base64)

    }



    const renderPhotos = (source) => {
        return source.map((photo) => {
            return <img src={photo} alt="" width="200" height="200" key={photo} />
        })
    }

    const uploadTrending = async () => {
        setOpen(true)
        try {

            await axios.post("https://app.rcsale.app/featured/addFeatured", {
                image: logo64, name: namefeatured, symbol: symbolfeatured, published: false, url: urlfeatured
            })
                .then((response) => {
                    setOpen(false)
                    // getDate(response.data.msg)
                    toast.success('Added Successfully', {
                        position: "top-center",
                        autoClose: 7000,
                    });
                    alltrending();
                    window.$("#exampleModal2").modal('hide');

                });

        }
        catch (err) {
            setOpen(false)
            // eslint-disable-next-line no-console
            // console.log(err);
            // alert("Invalid Address")
        }
    }

    const alltrending = async () => {
        try {

            await axios.get("https://app.rcsale.app/featured/getAllFeatured")
                .then((response) => {
                    if (response.status) {

                        setallfeatured(response.data.data)
                    }
                });

        }
        catch (err) {
            setOpen(false)
            // eslint-disable-next-line no-console
            // console.log(err);
            // alert("Invalid Address")
        }
    }

    const deletepublish = async (elems) => {

        setdeletefeature(elems.id)
    }

    const deleteFeatures = async () => {
        setOpen(true)
        try {

            await axios.post("https://app.rcsale.app/featured/deleteFeatured", {
                id: deletefeature
            })
                .then((response) => {
                    setOpen(false)
                    if (response.data.status) {
                        toast.success('Deleted Successfully', {
                            position: "top-center",
                            autoClose: 7000,
                        });
                        alltrending();
                    }
                });

        }
        catch (err) {
            // eslint-disable-next-line no-console
            // console.log(err);
            // alert("Invalid Address")
        }
    }

    //add flow
    const approveAdd = async () => {
        setOpen(true)
        try {

            await axios.post("https://app.rcsale.app/advertisement/addAdvertisement", {
                image: logo64add, name: nameadd, url: urladd, published: false
            })
                .then((response) => {
                    setOpen(false)
                    toast.success('Added Successfully', {
                        position: "top-center",
                        autoClose: 7000,
                    });
                    if (response.data.status) {
                        alladds();
                    }
                });

        }
        catch (err) {
            setOpen(false)
            // eslint-disable-next-line no-console
            // console.log(err);
            // alert("Invalid Address")
        }
    }
    const alladds = async () => {
        try {

            await axios.get("https://app.rcsale.app/advertisement/getAllAdvertisements")
                .then((response) => {
                    if (response.status) {

                        setalladdss(response.data.data)
                    }
                });

        }
        catch (err) {
            setOpen(false)
            // eslint-disable-next-line no-console
            // console.log(err);
            // alert("Invalid Address")
        }
    }

    const publishAdd = () => {
        setOpen(true)
        try {

            axios.post("https://app.rcsale.app/advertisement/publishAdvertisement", { id: addId, publish: addstatus })
                .then((response) => {
                    setOpen(false)
                    toast.success('Updated Successfully', {
                        position: "top-center",
                        autoClose: 7000,
                    });
                    alladds();

                    //  window.$("#exampleModal21").modal('hide');
                });

        }
        catch (err) {
            setOpen(false)
            // eslint-disable-next-line no-console
            // console.log(err);
            // alert("Invalid Address")
        }
    }


    const deleteadd = async () => {
        setOpen(true)
        try {

            await axios.post("https://app.rcsale.app/advertisement/deleteAdvertisement", {
                id: addId
            })
                .then((response) => {
                    setOpen(false)
                    if (response.data.status) {
                        // getDate(response.data.msg)
                        toast.success('Deleted Successfully', {
                            position: "top-center",
                            autoClose: 7000,
                        });
                        alladds();
                        window.$("#exampleModal23").modal('hide');
                    }
                });

        }
        catch (err) {
            setOpen(false)
            // eslint-disable-next-line no-console
            // console.log(err);
            // alert("Invalid Address")
        }
    }

    // render() {
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
                                <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Create Lock</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Tokens</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">Liquidity</a>
                            </li>
                        </ul>
                        <div class="tab-content" id="pills-tabContent">
                            <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                                <div className="submit-project">
                                    <div className="inner-submit-upper-div1">
                                        <div className="row  ">
                                            <div className="searchbar">
                                                <h1>Create your lock </h1>
                                            </div>
                                            <div class="col-lg-6 mt-4">
                                                <div class="form-group">
                                                    <label for="example">Token or LP Token address<span>*</span></label>
                                                    <input type="text"
                                                        class="form-control" id="example" aria-describedby="text" onChange={(e) => setProjecttoken(e.target.value)} placeholder="Enter Token or LP Token address" />
                                                </div>
                                            </div>
                                            <div class="col-lg-6">
                                                <div class="form-group">
                                                    <label for="example">Name<span>*</span></label>
                                                    <input type="text"
                                                        class="form-control" id="example" aria-describedby="text" onChange={(e) => setProjectname(e.target.value)} placeholder="Enter Name of Token" />
                                                </div>
                                            </div>
                                            <div class="col-lg-6">
                                                <div class="form-group">
                                                    <label for="example">Decimals<span>*</span></label>
                                                    <input type="text"
                                                        class="form-control" id="example" aria-describedby="text" onChange={(e) => setProjectdecimal(e.target.value)} placeholder="Enter Decimals of Token" />
                                                </div>
                                            </div>
                                            <div class="col-lg-6">
                                                <div class="form-group">
                                                    <label for="example">Amount<span>*</span></label>
                                                    <input type="text"
                                                        class="form-control" id="example" aria-describedby="text" onChange={(e) => setProjectamount(e.target.value)} placeholder="Enter Amount of Token" />
                                                </div>
                                            </div>
                                            <div class="col-lg-6">
                                                <div class="form-group">
                                                    <label for="example">Lock until (UTC time)<span>*</span></label>
                                                    <div class="sd-container">
                                                        <input class="sd"
                                                            type="date"
                                                            value=""
                                                            onChange={handleChangeDate}
                                                            id="party" type="datetime-local" name="partydate"  ></input>
                                                        <span class="open-button">
                                                            <button type="button">📅</button>
                                                        </span>

                                                    </div>
                                                </div>
                                            </div>
                                            <div className="buttonsff">
                                                <button  >Save</button>
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
                                                    <h1>Lock Tokens</h1>
                                                </div>
                                            </div>
                                            <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                                <li class="nav-item">
                                                    <a class="nav-link active" id="pills-mylock-tab" data-toggle="pill" href="#pills-alllock" role="tab" aria-controls="pills-alllock" aria-selected="true">All Lock</a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link" id="pills-mylock-tab" data-toggle="pill" href="#pills-mylock" role="tab" aria-controls="pills-mylock" aria-selected="false">My Lock</a>
                                                </li>

                                            </ul>

                                            <div class="tab-content" id="pills-tabContent">
                                                <div class="tab-pane fade" id="pills-alllock" role="tabpanel" aria-labelledby="pills-alllock-tab">
                                                    <div className="inner-lower-div">
                                                        <div class="projects-table-main">
                                                            <div class="table-responsive button-table">
                                                                <table class="table table-clr table-striped text-center">
                                                                    <thead>
                                                                        <tr>
                                                                            <th scope="col"> PROJECT NAME </th>
                                                                            {/* <th scope="col"> Finalize </th> */}
                                                                            <th scope="col"> WEBSITE </th>
                                                                            <th scope="col"> CONTACT PERSON</th>
                                                                            <th scope="col">VERIFY</th>
                                                                            <th scope="col"> DETAIL</th>

                                                                        </tr>
                                                                    </thead>
                                                                    <tbody className="main-t-body-text" >
                                                                        {data.map((elem, key) => {
                                                                            const { id } = elem;
                                                                            return (
                                                                                <tr index={key}>
                                                                                    <td className=''>
                                                                                        <span className="main-image-dhgy"><img src={elem.logoURL} style={{ width: 40 }} className="main-image-dhgy mr-2" alt="" />{elem.projectName}

                                                                                        </span>

                                                                                    </td>
                                                                                    <td className='text-left-2nd'>
                                                                                        <a href={elem.websiteLink} target="_blank">{elem.websiteLink} </a>
                                                                                    </td>
                                                                                    <td className='text-left-normal'>
                                                                                        <h6>{elem.contactPersonName}</h6>
                                                                                        <h6><small>{elem.contactPersonEmail}</small></h6>
                                                                                    </td>
                                                                                    <td className='text-left-normal'>
                                                                                        <label class="switch" data-toggle="modal" data-target="#exampleModal">
                                                                                            <input type="checkbox" defaultChecked={elem.kycVerified} onChange={(event) => handleChangeEvent(elem.kycVerified, id)} />
                                                                                            <span class="slider round"></span>
                                                                                        </label>

                                                                                        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModal" aria-hidden="true">
                                                                                            <div class="modal-dialog" role="document">
                                                                                                <div class="modal-content">

                                                                                                    <div class="modal-body">
                                                                                                        <div className="row ptb">
                                                                                                            <div className="col-sm-12">
                                                                                                                <div className="inner-side-content text-center pt-40">
                                                                                                                    <h4>Confirmation</h4>
                                                                                                                    <h5>Are you sure to verify this project?</h5>
                                                                                                                    <ul className="list-inline pt-20">
                                                                                                                        <li className="list-inline-item">
                                                                                                                            <button type="button" class="buttion-on" onClick={approveKyc} data-toggle="modal" data-target="#exampleModal" >Approve</button>
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
                                                                                    <td className="button-detailss">
                                                                                        <div className="d-flex">
                                                                                            <Link className='buttion-on' to={"/project-details/" + id}>Detail</Link>
                                                                                            {/* <Link className='button-rig' to='/project-details'>Reject</Link> */}
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
                                                <div class="tab-pane fade" id="pills-mylock" role="tabpanel" aria-labelledby="pills-mylock-tab">
                                                    <div className="inner-lower-div">
                                                        <div class="projects-table-main">
                                                            <div class="table-responsive button-table">
                                                                <table class="table table-clr table-striped text-center">
                                                                    <thead>
                                                                        <tr>
                                                                            <th scope="col"> PROJECT NAME </th>
                                                                            {/* <th scope="col"> Finalize </th> */}
                                                                            <th scope="col"> WEBSITE </th>
                                                                            <th scope="col"> CONTACT PERSON</th>
                                                                            <th scope="col">VERIFY</th>
                                                                            <th scope="col"> DETAIL</th>

                                                                        </tr>
                                                                    </thead>
                                                                    <tbody className="main-t-body-text" >
                                                                        {data.map((elem, key) => {
                                                                            const { id } = elem;
                                                                            return (
                                                                                <tr index={key}>
                                                                                    <td className=''>
                                                                                        <span className="main-image-dhgy"><img src={elem.logoURL} style={{ width: 40 }} className="main-image-dhgy mr-2" alt="" />{elem.projectName}

                                                                                        </span>

                                                                                    </td>
                                                                                    <td className='text-left-2nd'>
                                                                                        <a href={elem.websiteLink} target="_blank">{elem.websiteLink} </a>
                                                                                    </td>
                                                                                    <td className='text-left-normal'>
                                                                                        <h6>{elem.contactPersonName}</h6>
                                                                                        <h6><small>{elem.contactPersonEmail}</small></h6>
                                                                                    </td>
                                                                                    <td className='text-left-normal'>
                                                                                        <label class="switch" data-toggle="modal" data-target="#exampleModal">
                                                                                            <input type="checkbox" defaultChecked={elem.kycVerified} onChange={(event) => handleChangeEvent(elem.kycVerified, id)} />
                                                                                            <span class="slider round"></span>
                                                                                        </label>

                                                                                        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModal" aria-hidden="true">
                                                                                            <div class="modal-dialog" role="document">
                                                                                                <div class="modal-content">

                                                                                                    <div class="modal-body">
                                                                                                        <div className="row ptb">
                                                                                                            <div className="col-sm-12">
                                                                                                                <div className="inner-side-content text-center pt-40">
                                                                                                                    <h4>Confirmation</h4>
                                                                                                                    <h5>Are you sure to verify this project?</h5>
                                                                                                                    <ul className="list-inline pt-20">
                                                                                                                        <li className="list-inline-item">
                                                                                                                            <button type="button" class="buttion-on" onClick={approveKyc} data-toggle="modal" data-target="#exampleModal" >Approve</button>
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
                                                                                    <td className="button-detailss">
                                                                                        <div className="d-flex">
                                                                                            <Link className='buttion-on' to={"/project-details/" + id}>Detail</Link>
                                                                                            {/* <Link className='button-rig' to='/project-details'>Reject</Link> */}
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
                            <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                                <div className="submit-project">

                                    <div className="inner-lower-div">
                                        <div className="inner-submit-upper-div1">
                                            <div className="row">
                                                <div className="col-sm-10 p-0">
                                                    <div className="searchbar">
                                                        <h1>Liquidity token</h1>
                                                    </div>
                                                </div>
                                                <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                                    <li class="nav-item">
                                                        <a class="nav-link active" id="pills-alllockliquidity-tab" data-toggle="pill" href="#pills-alllockliquidity" role="tab" aria-controls="pills-alllockliquidity" aria-selected="true">All Lock</a>
                                                    </li>
                                                    <li class="nav-item">
                                                        <a class="nav-link" id="pills-mylockliquidity-tab" data-toggle="pill" href="#pills-mylockliquidity" role="tab" aria-controls="pills-mylockliquidity" aria-selected="false">My Lock</a>
                                                    </li>

                                                </ul>

                                                <div class="tab-content" id="pills-tabContent">
                                                    <div class="tab-pane fade" id="pills-alllockliquidity" role="tabpanel" aria-labelledby="pills-alllockliquidity-tab">
                                                        <div className="inner-lower-div">
                                                            <div class="projects-table-main">
                                                                <div class="table-responsive button-table">
                                                                    <table class="table table-clr table-striped text-center">
                                                                        <thead>
                                                                            <tr>
                                                                                <th scope="col"> PROJECT NAME </th>
                                                                                {/* <th scope="col"> Finalize </th> */}
                                                                                <th scope="col"> WEBSITE </th>
                                                                                <th scope="col"> CONTACT PERSON</th>
                                                                                <th scope="col">VERIFY</th>
                                                                                <th scope="col"> DETAIL</th>

                                                                            </tr>
                                                                        </thead>
                                                                        <tbody className="main-t-body-text" >
                                                                            {data.map((elem, key) => {
                                                                                const { id } = elem;
                                                                                return (
                                                                                    <tr index={key}>
                                                                                        <td className=''>
                                                                                            <span className="main-image-dhgy"><img src={elem.logoURL} style={{ width: 40 }} className="main-image-dhgy mr-2" alt="" />{elem.projectName}

                                                                                            </span>

                                                                                        </td>
                                                                                        <td className='text-left-2nd'>
                                                                                            <a href={elem.websiteLink} target="_blank">{elem.websiteLink} </a>
                                                                                        </td>
                                                                                        <td className='text-left-normal'>
                                                                                            <h6>{elem.contactPersonName}</h6>
                                                                                            <h6><small>{elem.contactPersonEmail}</small></h6>
                                                                                        </td>
                                                                                        <td className='text-left-normal'>
                                                                                            <label class="switch" data-toggle="modal" data-target="#exampleModal">
                                                                                                <input type="checkbox" defaultChecked={elem.kycVerified} onChange={(event) => handleChangeEvent(elem.kycVerified, id)} />
                                                                                                <span class="slider round"></span>
                                                                                            </label>

                                                                                            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModal" aria-hidden="true">
                                                                                                <div class="modal-dialog" role="document">
                                                                                                    <div class="modal-content">

                                                                                                        <div class="modal-body">
                                                                                                            <div className="row ptb">
                                                                                                                <div className="col-sm-12">
                                                                                                                    <div className="inner-side-content text-center pt-40">
                                                                                                                        <h4>Confirmation</h4>
                                                                                                                        <h5>Are you sure to verify this project?</h5>
                                                                                                                        <ul className="list-inline pt-20">
                                                                                                                            <li className="list-inline-item">
                                                                                                                                <button type="button" class="buttion-on" onClick={approveKyc} data-toggle="modal" data-target="#exampleModal" >Approve</button>
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
                                                                                        <td className="button-detailss">
                                                                                            <div className="d-flex">
                                                                                                <Link className='buttion-on' to={"/project-details/" + id}>Detail</Link>
                                                                                                {/* <Link className='button-rig' to='/project-details'>Reject</Link> */}
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
                                                    <div class="tab-pane fade" id="pills-mylockliquidity" role="tabpanel" aria-labelledby="pills-mylockliquidity-tab">
                                                        <div className="inner-lower-div">
                                                            <div class="projects-table-main">
                                                                <div class="table-responsive button-table">
                                                                    <table class="table table-clr table-striped text-center">
                                                                        <thead>
                                                                            <tr>
                                                                                <th scope="col"> PROJECT NAME </th>
                                                                                {/* <th scope="col"> Finalize </th> */}
                                                                                <th scope="col"> WEBSITE </th>
                                                                                <th scope="col"> CONTACT PERSON</th>
                                                                                <th scope="col">VERIFY</th>
                                                                                <th scope="col"> DETAIL</th>

                                                                            </tr>
                                                                        </thead>
                                                                        <tbody className="main-t-body-text" >
                                                                            {data.map((elem, key) => {
                                                                                const { id } = elem;
                                                                                return (
                                                                                    <tr index={key}>
                                                                                        <td className=''>
                                                                                            <span className="main-image-dhgy"><img src={elem.logoURL} style={{ width: 40 }} className="main-image-dhgy mr-2" alt="" />{elem.projectName}

                                                                                            </span>

                                                                                        </td>
                                                                                        <td className='text-left-2nd'>
                                                                                            <a href={elem.websiteLink} target="_blank">{elem.websiteLink} </a>
                                                                                        </td>
                                                                                        <td className='text-left-normal'>
                                                                                            <h6>{elem.contactPersonName}</h6>
                                                                                            <h6><small>{elem.contactPersonEmail}</small></h6>
                                                                                        </td>
                                                                                        <td className='text-left-normal'>
                                                                                            <label class="switch" data-toggle="modal" data-target="#exampleModal">
                                                                                                <input type="checkbox" defaultChecked={elem.kycVerified} onChange={(event) => handleChangeEvent(elem.kycVerified, id)} />
                                                                                                <span class="slider round"></span>
                                                                                            </label>

                                                                                            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModal" aria-hidden="true">
                                                                                                <div class="modal-dialog" role="document">
                                                                                                    <div class="modal-content">

                                                                                                        <div class="modal-body">
                                                                                                            <div className="row ptb">
                                                                                                                <div className="col-sm-12">
                                                                                                                    <div className="inner-side-content text-center pt-40">
                                                                                                                        <h4>Confirmation</h4>
                                                                                                                        <h5>Are you sure to verify this project?</h5>
                                                                                                                        <ul className="list-inline pt-20">
                                                                                                                            <li className="list-inline-item">
                                                                                                                                <button type="button" class="buttion-on" onClick={approveKyc} data-toggle="modal" data-target="#exampleModal" >Approve</button>
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
                                                                                        <td className="button-detailss">
                                                                                            <div className="d-flex">
                                                                                                <Link className='buttion-on' to={"/project-details/" + id}>Detail</Link>
                                                                                                {/* <Link className='button-rig' to='/project-details'>Reject</Link> */}
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


export default RcLock;

