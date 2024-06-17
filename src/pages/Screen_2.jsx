import React from "react";
import { Frame } from "./Frame";
import { FrameWrapper } from "./FrameWrapper";
import { ImgIconsShare } from "./ImgIconsShare";
import "./style.css";

export const Screen = () => {
    return (
        <div className="screen">
            <div className="div">
                <img className="bikeweather-high" alt="Bikeweather high" src="bikeweather-high-resolution-logo-1.svg" />
                <Frame className="frame-823424753-instance" />
                <div className="overlap-group">
                    <Frame className="design-component-instance-node" />
                    <div className="text-wrapper-2">TrAIl_NAME</div>
                    <div className="text-wrapper-3">...</div>
                    <div className="text-wrapper-4">...</div>
                    <div className="text-wrapper-5">Distance</div>
                    <div className="text-wrapper-6">chance of mud</div>
                    <div className="text-wrapper-7">...</div>
                </div>
                <div className="overlap">
                    <Frame className="frame-2" />
                    <div className="text-wrapper-8">TrAIl_NAME</div>
                    <div className="text-wrapper-9">Distance</div>
                    <div className="text-wrapper-10">chance of mud</div>
                    <div className="text-wrapper-11">...</div>
                    <div className="text-wrapper-12">...</div>
                    <div className="text-wrapper-13">...</div>
                </div>
                <div className="overlap-2">
                    <Frame className="frame-2" />
                    <div className="text-wrapper-14">TrAIl_NAME</div>
                    <div className="text-wrapper-15">Distance</div>
                    <div className="text-wrapper-16">chance of mud</div>
                    <div className="text-wrapper-17">...</div>
                    <div className="text-wrapper-18">...</div>
                    <div className="text-wrapper-19">...</div>
                </div>
                <div className="overlap-3">
                    <Frame className="frame-3" />
                    <div className="text-wrapper-20">TrAIl_NAME</div>
                    <div className="text-wrapper-21">Distance</div>
                    <div className="text-wrapper-22">chance of mud</div>
                    <div className="text-wrapper-23">...</div>
                    <div className="text-wrapper-24">...</div>
                    <div className="text-wrapper-25">...</div>
                </div>
                <div className="overlap-4">
                    <div className="frame-823424758-wrapper">
                        <FrameWrapper />
                    </div>
                    <div className="text-wrapper-26">TrAIl_NAME</div>
                    <div className="text-wrapper-27">Distance</div>
                    <div className="text-wrapper-28">chance of mud</div>
                    <div className="text-wrapper-29">...</div>
                    <div className="text-wrapper-30">...</div>
                    <div className="text-wrapper-31">...</div>
                </div>
                <ImgIconsShare className="img-icons-share-instance" />
                <ImgIconsShare className="img-icons-share-2" />
                <div className="home-button" />
            </div>
        </div>
    );
};
