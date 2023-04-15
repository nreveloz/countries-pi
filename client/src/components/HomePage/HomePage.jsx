import React from "react";
import Nav from "../Nav/Nav";
import Country from "../Countries/Country";

function HomePage() {




    return(
        <div>
            <div>
              <Nav/>
            </div>
            <div>
                <h2>PAÍSES:</h2>
                <Country/>
            </div>

        </div>
    )
};

export default HomePage;