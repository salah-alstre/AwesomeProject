import React, { useState } from "react";
import SalahAppContext from './SalahAppContext'
const SalahAppProvider = (props) => {

    const [scree1_c, setScreen1_c] = useState(0)
    const [scree2_c, setScreen2_c] = useState(0)

    const providerValue = {
        scree1_c,
        setScreen1_c,
        scree2_c,
        setScreen2_c
    }

    return (
        <SalahAppContext.Provider value={providerValue}>
            {props.children}
        </SalahAppContext.Provider>
    )

}

export default SalahAppProvider;