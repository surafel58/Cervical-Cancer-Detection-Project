import React from 'react';
import { Puff } from 'react-loader-spinner';
import './LoadingIcon.css';

const LoadingIcon = ({ height, width, radius, color, visible, wrapperClass }) => {

    return (
            <Puff
                height={height}
                width={width}
                radius={radius}
                color={color}
                ariaLabel="puff-loading"
                wrapperStyle=""
                wrapperClass={"loading-container"}
                visible={visible}
        />
    )
}

export default LoadingIcon;