import React, { Fragment } from "react";
import Explore from '../../assets/explore_poem.png'
import Card1 from '../../assets/card1.png'
import Card2 from '../../assets/card2.png'
import Card3 from '../../assets/card3.png'
import Card4 from '../../assets/card4.png'
import Card5 from '../../assets/card5.png'
import Card6 from '../../assets/card6.png'
import Card7 from '../../assets/card7.png'
import Card8 from '../../assets/card8.png'

const TopPoems = ()=>{
    return (
        <Fragment>
            <div className="my-5">
                <div className="container row w-100 pb-5">
                    <div className="col-md-5">
                        <p className="fs-4 fw-less-bold pt-md-5 pt-3">
                            Explore Newest Poems
                        </p>
                        <p className="fs-5 fw-light">
                            Newest poems available for you. Get ready to get the best
                        </p>
                        <button className="btn btn-next py-2 px-5">
                            Explore Now
                        </button>
                    </div>
                    <div className="col-md-7 d-md-block d-none">
                        <img src={Explore} className="img-fluid" />
                    </div>
                </div>
                <div className="d-flex justify-content-between">
                    <p className="fs-4 fw-bold">
                        Top Poems
                    </p>
                    {/* <div></div> */}
                </div>
                {/* Top Poems */}
                <div className="row w-100">
                    <div className="col-md-3">
                        <div className="card border-0">
                            <img src={Card1} className="card-img-top img-fluid" />
                            <div className="card-body">
                                <p className="card-title fs-5 fw-less-bold">
                                    The distant shore
                                </p>
                                <div className="card-text">
                                    <p className="">
                                        Shane .O. Peter
                                    </p>
                                    <p className="">
                                        <i className="fa fa-star text-warning pe-2"></i>
                                        <i className="fa fa-star text-warning pe-2"></i>
                                        <i className="fa fa-star text-warning pe-2"></i>
                                        <i className="fa fa-star text-warning pe-2"></i>
                                        <i className="fa fa-star text-warning pe-2"></i> 2.3k
                                    </p>
                                    <p>
                                        $300.40
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card border-0">
                            <img src={Card2} className="card-img-top img-fluid" />
                            <div className="card-body">
                                <p className="card-title fs-5 fw-less-bold">
                                    The weight of word
                                </p>
                                <div className="card-text">
                                    <p className="">
                                        Mickeal Kell
                                    </p>
                                    <p className="">
                                        <i className="fa fa-star text-warning pe-2"></i>
                                        <i className="fa fa-star text-warning pe-2"></i>
                                        <i className="fa fa-star text-warning pe-2"></i>
                                        <i className="fa fa-star text-warning pe-2"></i>
                                        <i className="fa fa-star text-warning pe-2"></i> 2.3k
                                    </p>
                                    <p>
                                        $300.40
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card border-0">
                            <img src={Card3} className="card-img-top img-fluid" />
                            <div className="card-body">
                                <p className="card-title fs-5 fw-less-bold">
                                    The whispering wind
                                </p>
                                <div className="card-text">
                                    <p className="">
                                        Loreine Snell
                                    </p>
                                    <p className="">
                                        <i className="fa fa-star text-warning pe-2"></i>
                                        <i className="fa fa-star text-warning pe-2"></i>
                                        <i className="fa fa-star text-warning pe-2"></i>
                                        <i className="fa fa-star text-warning pe-2"></i>
                                        <i className="fa fa-star text-warning pe-2"></i> 2.3k
                                    </p>
                                    <p>
                                        $300.40
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card border-0">
                            <img src={Card4} className="card-img-top img-fluid" />
                            <div className="card-body">
                                <p className="card-title fs-5 fw-less-bold">
                                    The lonely man
                                </p>
                                <div className="card-text">
                                    <p className="">
                                        Adaobi Amanda
                                    </p>
                                    <p className="">
                                        <i className="fa fa-star text-warning pe-2"></i>
                                        <i className="fa fa-star text-warning pe-2"></i>
                                        <i className="fa fa-star text-warning pe-2"></i>
                                        <i className="fa fa-star text-warning pe-2"></i>
                                        <i className="fa fa-star text-warning pe-2"></i> 2.3k
                                    </p>
                                    <p>
                                        $300.40
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*  */}
                <div className="row w-100">
                    <div className="col-md-3">
                        <div className="card border-0">
                            <img src={Card5} className="card-img-top img-fluid" />
                            <div className="card-body">
                                <p className="card-title fs-5 fw-less-bold">
                                    The distant shore
                                </p>
                                <div className="card-text">
                                    <p className="">
                                        Shane .O. Peter
                                    </p>
                                    <p className="">
                                        <i className="fa fa-star text-warning pe-2"></i>
                                        <i className="fa fa-star text-warning pe-2"></i>
                                        <i className="fa fa-star text-warning pe-2"></i>
                                        <i className="fa fa-star text-warning pe-2"></i>
                                        <i className="fa fa-star text-warning pe-2"></i> 2.3k
                                    </p>
                                    <p>
                                        $300.40
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card border-0">
                            <img src={Card6} className="card-img-top img-fluid" />
                            <div className="card-body">
                                <p className="card-title fs-5 fw-less-bold">
                                    The weight of word
                                </p>
                                <div className="card-text">
                                    <p className="">
                                        Mickeal Kell
                                    </p>
                                    <p className="">
                                        <i className="fa fa-star text-warning pe-2"></i>
                                        <i className="fa fa-star text-warning pe-2"></i>
                                        <i className="fa fa-star text-warning pe-2"></i>
                                        <i className="fa fa-star text-warning pe-2"></i>
                                        <i className="fa fa-star text-warning pe-2"></i> 2.3k
                                    </p>
                                    <p>
                                        $300.40
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card border-0">
                            <img src={Card7} className="card-img-top img-fluid" />
                            <div className="card-body">
                                <p className="card-title fs-5 fw-less-bold">
                                    The whispering wind
                                </p>
                                <div className="card-text">
                                    <p className="">
                                        Loreine Snell
                                    </p>
                                    <p className="">
                                        <i className="fa fa-star text-warning pe-2"></i>
                                        <i className="fa fa-star text-warning pe-2"></i>
                                        <i className="fa fa-star text-warning pe-2"></i>
                                        <i className="fa fa-star text-warning pe-2"></i>
                                        <i className="fa fa-star text-warning pe-2"></i> 2.3k
                                    </p>
                                    <p>
                                        $300.40
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card border-0">
                            <img src={Card8} className="card-img-top img-fluid" />
                            <div className="card-body">
                                <p className="card-title fs-5 fw-less-bold">
                                    The lonely man
                                </p>
                                <div className="card-text">
                                    <p className="">
                                        Adaobi Amanda
                                    </p>
                                    <p className="">
                                        <i className="fa fa-star text-warning pe-2"></i>
                                        <i className="fa fa-star text-warning pe-2"></i>
                                        <i className="fa fa-star text-warning pe-2"></i>
                                        <i className="fa fa-star text-warning pe-2"></i>
                                        <i className="fa fa-star text-warning pe-2"></i> 2.3k
                                    </p>
                                    <p>
                                        $300.40
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default TopPoems