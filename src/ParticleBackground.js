import React from "react";
import Particles from "react-particles-js";
import particlesConfig from "./config/particle-config";



export default function ParticleBackground() {


    return (

        <Particles style={{ width: "100%", height: "100%" }} params={particlesConfig} height={window.outerHeight} >
        </Particles>

    );
}