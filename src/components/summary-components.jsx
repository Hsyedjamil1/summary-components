import React from "react";
import reaction from "./images/icon-reaction.svg";
import memory from "./images/icon-memory.svg";
import verbal from "./images/icon-verbal.svg";
import visual from "./images/icon-visual.svg";

function Summary() {

    return (
    <div className="container-fluid d-flex align-items-center justify-content-center">
        <div className="row">
            <div className="card text-center gradient " style={{ zIndex: `{0.5}` }} >
                <div className="card-body text-white">
                    <h3 className="card-title mt-2 result">Your Result</h3>
                        <div className="circle mt-4 d-flex align-items-center justify-content-center flex-column">
                            <h1 className="largertext">76</h1>
                            <h6 className="slate">of 100</h6>
                        </div>
                            <h2 className="great">Great</h2>
                        <p className="card-text result_p">Your performance exceed 65% of the people conducting the test here!</p>
                </div>
            </div>

                <div className="card bgcolor" style={{ width: `${18}rem` }} >
                <div className="card-body">
                    <h5 className="card-title mt-2 mb-3">Summary</h5>
                        <div class="summary__item1 mb-3 d-flex align-items-center justify-content-center flex-row">
                            <img class="summary__item__icon" src={reaction} alt="" />
                                    <p class="summary__item__title reaction flex-fill" >Reaction</p>
                                        <p class="summary__item__wrapper align-items-end">
                                    <span class="summary__item__score">80</span>
                            <span class="summary__item__max" > / 100</span></p>
                        </div>

                        <div class="summary__item2 mb-3 d-flex align-items-center justify-content-center flex-row">
                            <img class="summary__item__icon" src={memory} alt="" />
                                    <p class="summary__item__title memory flex-fill" >Memory</p>
                                        <p class="summary__item__wrapper align-items-end">
                                    <span class="summary__item__score">92</span>
                            <span class="summary__item__max"> / 100</span></p>
                        </div>

                        <div class="summary__item3 mb-3 d-flex align-items-center justify-content-center flex-row">
                            <img class="summary__item__icon" src={verbal} alt="" />
                                    <p class="summary__item__title verbel flex-fill" >Verbal</p>
                                        <p class="summary__item__wrapper align-items-end">
                                    <span class="summary__item__score">61</span>
                            <span class="summary__item__max"> / 100</span></p>
                        </div>

                        <div class="summary__item4 mb-3 d-flex align-items-center justify-content-center flex-row">
                            <img class="summary__item__icon" src={visual} alt="" />
                                    <p class="summary__item__title visual flex-fill" >Visual</p>
                                        <p class="summary__item__wrapper align-items-end">
                                    <span class="summary__item__score">72</span>
                            <span class="summary__item__max"> / 100</span></p>
                        </div>

                        <div class="d-grid gap-2">
                            <button class="btn summary__btn" type="button">Continue</button>
                        </div>
                </div>
            </div>

        </div>
    </div>
        


  );
};

export default Summary;