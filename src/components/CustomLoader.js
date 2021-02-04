import React from 'react'
import { Loader } from 'rsuite';

function CustomLoader() {
    return (
        <div>
            <Loader size="lg" speed="fast" center content="loading..." vertical/>
        </div>
    )
}

export default CustomLoader;
