import React from "react";
import ReactSlider from "react-slider";
import styled from "styled-components";

const CustomSlider = styled(ReactSlider)`
    width: 100%;
    height: 25px;
`;

const StyledThumb = styled.div`
    height: 25px;
    line-height: 25px;
    width: 25px;
    text-align: center;
    background-color: #000;
    color: #fff;
    border-radius: 50%;
    cursor: grab;
`;

const Thumb = (props, state) => <StyledThumb {...props}>{state.valueNow}</StyledThumb>;

const StyledTrack = styled.div`
    top: 0;
    bottom: 0;
    background: ${props => (props.index === 2 ? '#f00' : props.index === 1 ? '#0f0' : '#ddd')};
    border-radius: 999px;
`;

const Track = (props, state) => <StyledTrack {...props} index={state.index} />;

const StyledSlider = ({value, onChangeAmount}) => {
    const handleAmountChange = (newValue)=> {
        onChangeAmount(newValue);
    }
    return ( <CustomSlider
        className="horizontal-slider"
        thumbClassName="example-thumb"
        trackClassName="example-track"
        onBeforeChange={(value, index) =>
            console.log(`onBeforeChange: ${JSON.stringify({ value, index })}`)
        }
        onAfterChange={(value, index) =>
            console.log(`onAfterChange: ${JSON.stringify({ value, index })}`)
        }
        renderThumb={Thumb}
        renderTrack={Track}
        min={1000}
        max={100000}
        step={500}
        value={value}
        onChange={handleAmountChange}
        shouldForwardProp={(prop) => !["re"].includes(prop)}
    /> );
}
 
export default StyledSlider;