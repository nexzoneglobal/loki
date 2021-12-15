import React, { useState, useEffect } from 'react'
import './admin.css';
import { Link } from 'react-router-dom';
import Navbar from '../../components/navbar';
import { Finalize } from "../../hooks/PoolDataFetcher";
import axios from 'axios';
import { useWeb3React } from '@web3-react/core'

const AdminProject = () => {


    // render() {
    return (
        <div className='landing-nft projects'>

            <Navbar />


            <section className="header-section submit-projects pt-120" style={{ backgroundImage: `url(${require("../../static/images/submit-form/background-projectss.png")})` }}>
                <img src={require("../../static/images/landing-leocorn/background-main-head.png")} className="main-heads-one" alt="" />
                <div className="auto-container">
                    <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li class="nav-item">
                            <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Projects</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Trending Token</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">Add Management</a>
                        </li>
                    </ul>
                    <div class="tab-content" id="pills-tabContent">
                        <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                            <div className="submit-project">
                                <div className="inner-submit-upper-div">
                                    <div className="row  ">
                                        <div className="searchbar">
                                            <h1>Projects</h1>

                                            {/* <div className="searchContainer">
                                                <input className="searchBox" type="search"
                                                    name="search" placeholder="Search Pool" />
                                                <div className="main-search-ison">
                                                    <i class="fa fa-search " aria-hidden="true"></i>
                                                </div>
                                            </div> */}

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
                                </div>
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

                                                    <tr>
                                                        <td className=''>
                                                            <span className="main-image-dhgy"><img src={require("../../static/images/submit-form/table-icon-image-two.png")} className="main-image-dhgy mr-2" alt="" />fanadise.com

                                                            </span>


                                                        </td>
                                                        <td className='text-left-2nd'>
                                                            <a href="#">fanadise.com</a>
                                                        </td>
                                                        <td className='text-left-normal'>
                                                            <h6>John Doe</h6>
                                                            <h6><small>john.doe01@gmail.com</small></h6>
                                                        </td>
                                                        <td className='text-left-normal'>
                                                            <label class="switch" data-toggle="modal" data-target="#exampleModal">
                                                                <input type="checkbox" />
                                                                <span class="slider round"></span>
                                                            </label>

                                                            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                                <div class="modal-dialog" role="document">
                                                                    <div class="modal-content">

                                                                        <div class="modal-body">
                                                                            <div className="row ptb">
                                                                                <div className="col-sm-12">
                                                                                    <div className="inner-side-content text-center pt-40">
                                                                                        <h4>Confirmation</h4>
                                                                                        <h5>Are you shore to verify this project?</h5>
                                                                                        <ul className="list-inline pt-20">
                                                                                            <li className="list-inline-item">
                                                                                                <button type="button" class="buttion-on">Approve</button>
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
                                                                <Link className='buttion-on' to='/'>Detail</Link>
                                                                {/* <Link className='button-rig' to='/project-details'>Reject</Link> */}
                                                            </div>

                                                        </td>
                                                    </tr>

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
                        <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                            <div className="submit-project">
                                <div className="inner-submit-upper-div">
                                    <div className="row">
                                        <div className="col-sm-10 p-0">
                                            <div className="searchbar">
                                                <h1>Trending Tokens</h1>

                                                {/* <div className="searchContainer">
                                                    <input className="searchBox" type="search"
                                                        name="search" placeholder="Search Pool" />
                                                    <div className="main-search-ison">
                                                        <i class="fa fa-search " aria-hidden="true"></i>
                                                    </div>
                                                </div> */}

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
                                        <div className="col-sm-2">
                                            <button className="add-btn" data-toggle="modal" data-target="#exampleModal2">Add</button>
                                            <div class="modal fade dfhdkh" id="exampleModal2" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel2" aria-hidden="true">
                                                <div class="modal-dialog" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body dkfjdkfj">
                                                            <div className="row">
                                                                <div className="col-xl-12 col-lg-10 col-md-12">
                                                                    <div className="djhdkjfh">
                                                                        <h4>Add Trending Tokens</h4>
                                                                        <div class="row">
                                                                            <div className="col-lg-12 col-md-12 col-12 ">
                                                                                <div className="jvdkjs pt-10">
                                                                                    {/* <div class="form-group">
                                                <label for="example">Upload Logo<span>*</span></label>
                                                <div className="inner-logo-upload-main">
                                                 <div>   <label for="fileb" className="p-0"><img src={require("../../static/images/submit-form/cloud.png")} alt="" /></label>
                                                    <input className="input-fields d-none" id="fileb" type="file" />
                                                    <h4>Upload Image</h4>
                                                    </div>
                                                </div>
                                            </div> */}
                                                                                    <div class="form-group">
                                                                                        <label for="exampleInputsymbol">Upload id or passport<span>*</span></label>
                                                                                        <div className="dashed-border-new">
                                                                                            <div className="main-image-div main-bvc">
                                                                                                {/* <img src={logo ? logo : require("../../static/images/submit-form/cloud.png")} alt="" />
                                                                                                {selectedImg ? renderPhotos(selectedImg) : null} */}
                                                                                            </div>
                                                                                            <p className="text-center"><span>
                                                                                                <label for="files" className="msindh">Upload Image</label>
                                                                                                {/* <input type="file" id="files"
                                                                                                    value={logo}
                                                                                                    onChange={handleImageChange}
                                                                                                    name="avatar" className="d-none custom-file-inputt" accept="image/*" /> */}
                                                                                            </span></p>
                                                                                            {/* {Object.keys(logoError).map((key) => {
                                                            return <p className="inputErrors">{logoError[key]}</p>
                                                        })} */}
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-lg-12 mt-4">
                                                                                <div class="form-group">
                                                                                    <label for="example">Name<span>*</span></label>
                                                                                    <input type="number"
                                                                                        class="form-control" id="example" aria-describedby="text" placeholder="Enter First Name" />
                                                                                    {/* {Object.keys(minallo).map((key) => {
                                                                console.log("key", key);
                                                                return <p className="inputErrors">{minallo[key]}</p>
                                                            })} */}
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-lg-12">
                                                                                <div class="form-group">
                                                                                    <label for="example">URL<span>*</span></label>
                                                                                    <input type="number"
                                                                                        class="form-control" id="example" aria-describedby="text" placeholder="Enter Last Name" />
                                                                                    {/* {Object.keys(maxallo).map((key) => {
                                                                console.log("key", key);
                                                                return <p className="inputErrors">{maxallo[key]}</p>
                                                            })} */}
                                                                                </div>
                                                                            </div>
                                                                            <div className="buttonsff">
                                                                                <button>Save</button>
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
                                <div className="inner-lower-div">
                                    <div class="projects-table-main">
                                        <div class="table-responsive button-table">
                                            <table class="table table-clr table-striped text-center">
                                                <thead>
                                                    <tr>
                                                        <th scope="col"> THUMBNAIL </th>
                                                        {/* <th scope="col"> Finalize </th> */}
                                                        <th scope="col"> SYMBOLS </th>
                                                        <th scope="col"> PUBLISH/UNPUBLISH</th>
                                                        <th scope="col">EDIT</th>
                                                        <th scope="col">DELETE</th>

                                                    </tr>
                                                </thead>
                                                <tbody className="main-t-body-text" >

                                                    <tr>
                                                        <td className=''>
                                                            <span className="main-image-dhgy"><img src={require("../../static/images/submit-form/table-icon-image-two.png")} className="main-image-dhgy mr-2" alt="" />fanadise.com
                                                            </span>
                                                        </td>
                                                        <td className='text-left-normal'>
                                                            <h6>FAN</h6>
                                                        </td>
                                                        <td className='text-left-normal'>
                                                            <button className='publish-sdmin' data-toggle="modal" data-target="#exampleModal12">Publish</button>
                                                            <div class="modal fade" id="exampleModal12" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel12" aria-hidden="true">
                                                                <div class="modal-dialog" role="document">
                                                                    <div class="modal-content">

                                                                        <div class="modal-body">
                                                                            <div className="row ptb">
                                                                                <div className="col-sm-12">
                                                                                    <div className="inner-side-content text-center pt-40">
                                                                                        <h4>Confirmation</h4>
                                                                                        <h5>Are you shore to publish this project?</h5>
                                                                                        <ul className="list-inline pt-20">
                                                                                            <li className="list-inline-item">
                                                                                                <button type="button" class="buttion-on">Approve</button>
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
                                                                <button className='buttion-on' data-toggle="modal" data-target="#exampleModal2">Edit</button>
                                                                {/* <Link className='button-rig' to='/project-details'>Reject</Link> */}
                                                            </div>
                                                        </td>
                                                        <td className="button-detailss">
                                                            <div className="d-flex">
                                                                <button className='deleteadmin' data-toggle="modal" data-target="#exampleModal14">Delete</button>
                                                                <div class="modal fade" id="exampleModal14" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel14" aria-hidden="true">
                                                                <div class="modal-dialog" role="document">
                                                                    <div class="modal-content">

                                                                        <div class="modal-body">
                                                                            <div className="row ptb">
                                                                                <div className="col-sm-12">
                                                                                    <div className="inner-side-content text-center pt-40">
                                                                                        <h4>Confirmation</h4>
                                                                                        <h5>Are you shore to delete this project?</h5>
                                                                                        <ul className="list-inline pt-20">
                                                                                            <li className="list-inline-item">
                                                                                                <button type="button" class="buttion-on">Approve</button>
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
                                                                {/* <Link className='button-rig' to='/project-details'>Reject</Link> */}
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className=''>
                                                            <span className="main-image-dhgy"><img src={require("../../static/images/submit-form/table-icon-image-two.png")} className="main-image-dhgy mr-2" alt="" />fanadise.com
                                                            </span>
                                                        </td>
                                                        <td className='text-left-normal'>
                                                            <h6>FAN</h6>
                                                        </td>
                                                        <td className='text-left-normal'>
                                                            <button className='publish-sdmin'>Publish</button>
                                                        </td>
                                                        <td className="button-detailss">
                                                            <div className="d-flex">
                                                                <button className='buttion-on'>Edit</button>
                                                                {/* <Link className='button-rig' to='/project-details'>Reject</Link> */}
                                                            </div>
                                                        </td>
                                                        <td className="button-detailss">
                                                            <div className="d-flex">
                                                                <button className='deleteadmin'>Delete</button>
                                                                {/* <Link className='button-rig' to='/project-details'>Reject</Link> */}
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className=''>
                                                            <span className="main-image-dhgy"><img src={require("../../static/images/submit-form/table-icon-image-two.png")} className="main-image-dhgy mr-2" alt="" />fanadise.com
                                                            </span>
                                                        </td>
                                                        <td className='text-left-normal'>
                                                            <h6>FAN</h6>
                                                        </td>
                                                        <td className='text-left-normal'>
                                                            <button className='unpublish-sdmin' data-toggle="modal" data-target="#exampleModal13">UnPublished</button>
                                                            <div class="modal fade" id="exampleModal13" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel13" aria-hidden="true">
                                                                <div class="modal-dialog" role="document">
                                                                    <div class="modal-content">

                                                                        <div class="modal-body">
                                                                            <div className="row ptb">
                                                                                <div className="col-sm-12">
                                                                                    <div className="inner-side-content text-center pt-40">
                                                                                        <h4>Confirmation</h4>
                                                                                        <h5>Are you shore to Unpublish this project?</h5>
                                                                                        <ul className="list-inline pt-20">
                                                                                            <li className="list-inline-item">
                                                                                                <button type="button" class="buttion-on">Approve</button>
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
                                                                <button className='buttion-on'>Edit</button>
                                                                {/* <Link className='button-rig' to='/project-details'>Reject</Link> */}
                                                            </div>
                                                        </td>
                                                        <td className="button-detailss">
                                                            <div className="d-flex">
                                                                <button className='deleteadmin'>Delete</button>
                                                                {/* <Link className='button-rig' to='/project-details'>Reject</Link> */}
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className=''>
                                                            <span className="main-image-dhgy"><img src={require("../../static/images/submit-form/table-icon-image-two.png")} className="main-image-dhgy mr-2" alt="" />fanadise.com
                                                            </span>
                                                        </td>
                                                        <td className='text-left-normal'>
                                                            <h6>FAN</h6>
                                                        </td>
                                                        <td className='text-left-normal'>
                                                            <button className='publish-sdmin'>Publish</button>
                                                        </td>
                                                        <td className="button-detailss">
                                                            <div className="d-flex">
                                                                <button className='buttion-on'>Edit</button>
                                                                {/* <Link className='button-rig' to='/project-details'>Reject</Link> */}
                                                            </div>
                                                        </td>
                                                        <td className="button-detailss">
                                                            <div className="d-flex">
                                                                <button className='deleteadmin'>Delete</button>
                                                                {/* <Link className='button-rig' to='/project-details'>Reject</Link> */}
                                                            </div>
                                                        </td>
                                                    </tr>
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
                        <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                            <div className="submit-project">
                                <div className="inner-submit-upper-div">
                                    <div className="row  ">
                                        <div className="col-sm-10 p-0">
                                            <div className="searchbar">
                                                <h1>Add Management</h1>

                                                {/* <div className="searchContainer">
                                                    <input className="searchBox" type="search"
                                                        name="search" placeholder="Search Pool" />
                                                    <div className="main-search-ison">
                                                        <i class="fa fa-search " aria-hidden="true"></i>
                                                    </div>
                                                </div> */}

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
                                        <div className="col-sm-2">
                                            <button className="add-btn" data-toggle="modal" data-target="#exampleModal3">Add</button>
                                            <div class="modal fade dfhdkh" id="exampleModal3" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel3" aria-hidden="true">
                                                <div class="modal-dialog" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body dkfjdkfj">
                                                            <div className="row">
                                                                <div className="col-xl-12 col-lg-10 col-md-12">
                                                                    <div className="djhdkjfh">
                                                                        <h4>Add Management</h4>
                                                                        <div class="row">
                                                                            <div className="col-lg-12 col-md-12 col-12 ">
                                                                                <div className="jvdkjs pt-10">
                                                                                    {/* <div class="form-group">
                                                <label for="example">Upload Logo<span>*</span></label>
                                                <div className="inner-logo-upload-main">
                                                 <div>   <label for="fileb" className="p-0"><img src={require("../../static/images/submit-form/cloud.png")} alt="" /></label>
                                                    <input className="input-fields d-none" id="fileb" type="file" />
                                                    <h4>Upload Image</h4>
                                                    </div>
                                                </div>
                                            </div> */}
                                                                                    <div class="form-group">
                                                                                        <label for="exampleInputsymbol">Upload id or passport<span>*</span></label>
                                                                                        <div className="dashed-border-new">
                                                                                            <div className="main-image-div main-bvc">
                                                                                                {/* <img src={logo ? logo : require("../../static/images/submit-form/cloud.png")} alt="" />
                                                                                                {selectedImg ? renderPhotos(selectedImg) : null} */}
                                                                                            </div>
                                                                                            <p className="text-center"><span>
                                                                                                <label for="files" className="msindh">Upload Image</label>
                                                                                                {/* <input type="file" id="files"
                                                                                                    value={logo}
                                                                                                    onChange={handleImageChange}
                                                                                                    name="avatar" className="d-none custom-file-inputt" accept="image/*" /> */}
                                                                                            </span></p>
                                                                                            {/* {Object.keys(logoError).map((key) => {
                                                            return <p className="inputErrors">{logoError[key]}</p>
                                                        })} */}
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-lg-12 mt-4">
                                                                                <div class="form-group">
                                                                                    <label for="example">Name<span>*</span></label>
                                                                                    <input type="number"
                                                                                        class="form-control" id="example" aria-describedby="text" placeholder="Enter First Name" />
                                                                                    {/* {Object.keys(minallo).map((key) => {
                                                                console.log("key", key);
                                                                return <p className="inputErrors">{minallo[key]}</p>
                                                            })} */}
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-lg-12">
                                                                                <div class="form-group">
                                                                                    <label for="example">URL<span>*</span></label>
                                                                                    <input type="number"
                                                                                        class="form-control" id="example" aria-describedby="text" placeholder="Enter Last Name" />
                                                                                    {/* {Object.keys(maxallo).map((key) => {
                                                                console.log("key", key);
                                                                return <p className="inputErrors">{maxallo[key]}</p>
                                                            })} */}
                                                                                </div>
                                                                            </div>
                                                                            <div className="buttonsff">
                                                                                <button>Save</button>
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
                                <div className="inner-lower-div">
                                    <div class="projects-table-main">
                                        <div class="table-responsive button-table">
                                            <table class="table table-clr table-striped text-center">
                                                <thead>
                                                    <tr>
                                                        <th scope="col"> THUMBNAIL </th>
                                                        {/* <th scope="col"> Finalize </th> */}
                                                        <th scope="col"> URL </th>
                                                        <th scope="col"> DATE CREATED </th>
                                                        <th scope="col"> PUBLISH/UNPUBLISH</th>
                                                        <th scope="col">EDIT</th>
                                                        <th scope="col">DELETE</th>

                                                    </tr>
                                                </thead>
                                                <tbody className="main-t-body-text" >

                                                    <tr>
                                                        <td className=''>
                                                            <span className="main-image-dhgy"><img src={require("../../static/images/submit-form/table-icon-image-two.png")} className="main-image-dhgy mr-2" alt="" />fanadise.com
                                                            </span>
                                                        </td>
                                                        <td className='text-left-normal'>
                                                            <h6>www.kdjhfdj.com</h6>
                                                        </td>
                                                        <td className='text-left-normal'>
                                                            <h6>24 AUG,2021</h6>
                                                        </td>
                                                        <td className='text-left-normal'>
                                                            <button className='publish-sdmin'>Publish</button>
                                                        </td>
                                                        <td className="button-detailss">
                                                            <div className="d-flex">
                                                                <button className='buttion-on'>Edit</button>
                                                                {/* <Link className='button-rig' to='/project-details'>Reject</Link> */}
                                                            </div>
                                                        </td>
                                                        <td className="button-detailss">
                                                            <div className="d-flex">
                                                                <button className='deleteadmin'>Delete</button>
                                                                {/* <Link className='button-rig' to='/project-details'>Reject</Link> */}
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className=''>
                                                            <span className="main-image-dhgy"><img src={require("../../static/images/submit-form/table-icon-image-two.png")} className="main-image-dhgy mr-2" alt="" />fanadise.com
                                                            </span>
                                                        </td>
                                                        <td className='text-left-normal'>
                                                            <h6>www.kdjhfdj.com</h6>
                                                        </td>
                                                        <td className='text-left-normal'>
                                                            <h6>24 AUG,2021</h6>
                                                        </td>
                                                        <td className='text-left-normal'>
                                                            <button className='publish-sdmin'>Publish</button>
                                                        </td>
                                                        <td className="button-detailss">
                                                            <div className="d-flex">
                                                                <button className='buttion-on'>Edit</button>
                                                                {/* <Link className='button-rig' to='/project-details'>Reject</Link> */}
                                                            </div>
                                                        </td>
                                                        <td className="button-detailss">
                                                            <div className="d-flex">
                                                                <button className='deleteadmin'>Delete</button>
                                                                {/* <Link className='button-rig' to='/project-details'>Reject</Link> */}
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className=''>
                                                            <span className="main-image-dhgy"><img src={require("../../static/images/submit-form/table-icon-image-two.png")} className="main-image-dhgy mr-2" alt="" />fanadise.com
                                                            </span>
                                                        </td>
                                                        <td className='text-left-normal'>
                                                            <h6>www.kdjhfdj.com</h6>
                                                        </td>
                                                        <td className='text-left-normal'>
                                                            <h6>24 AUG,2021</h6>
                                                        </td>
                                                        <td className='text-left-normal'>
                                                            <button className='unpublish-sdmin'>Publish</button>
                                                        </td>
                                                        <td className="button-detailss">
                                                            <div className="d-flex">
                                                                <button className='buttion-on'>Edit</button>
                                                                {/* <Link className='button-rig' to='/project-details'>Reject</Link> */}
                                                            </div>
                                                        </td>
                                                        <td className="button-detailss">
                                                            <div className="d-flex">
                                                                <button className='deleteadmin'>Delete</button>
                                                                {/* <Link className='button-rig' to='/project-details'>Reject</Link> */}
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className=''>
                                                            <span className="main-image-dhgy"><img src={require("../../static/images/submit-form/table-icon-image-two.png")} className="main-image-dhgy mr-2" alt="" />fanadise.com
                                                            </span>
                                                        </td>
                                                        <td className='text-left-normal'>
                                                            <h6>www.kdjhfdj.com</h6>
                                                        </td>
                                                        <td className='text-left-normal'>
                                                            <h6>24 AUG,2021</h6>
                                                        </td>
                                                        <td className='text-left-normal'>
                                                            <button className='publish-sdmin'>Publish</button>
                                                        </td>
                                                        <td className="button-detailss">
                                                            <div className="d-flex">
                                                                <button className='buttion-on'>Edit</button>
                                                                {/* <Link className='button-rig' to='/project-details'>Reject</Link> */}
                                                            </div>
                                                        </td>
                                                        <td className="button-detailss">
                                                            <div className="d-flex">
                                                                <button className='deleteadmin'>Delete</button>
                                                                {/* <Link className='button-rig' to='/project-details'>Reject</Link> */}
                                                            </div>
                                                        </td>
                                                    </tr>
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
            </section>
        </div>
    );
}


export default AdminProject;

