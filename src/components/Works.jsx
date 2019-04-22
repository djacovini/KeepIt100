import React from "react";
import Iframe from "react-iframe";


    function iframe({children}){
        return(
            <div>
                    <div>
                        <p>Color Codes:</p> 
                        <p className="text-success">Green: First Tier 80-100</p>
                        <p className="text-primary">Blue: Second Tier 60-79.9</p>
                        <p className="text-orange">Orange: Third Tier 40-59.9</p>
                        <p className="text-warning">Yellow: Fourth Tier 20-39.9</p>
                        <p className="text-danger">Red: Bottom Tier 0-19</p>
                    </div>

                <Iframe url="https://www.google.com/maps/d/u/0/embed?mid=1LAvNUDdCf-hMVCYIKfhqliPEjO1GTqza&ll=39.9526, -75.1652" 
                width="1920px"
                height="700px"
                id="myId"
                className=""
                // display="initial"

                // position="relative"
                />

            </div>
        )   
    }

export default iframe;