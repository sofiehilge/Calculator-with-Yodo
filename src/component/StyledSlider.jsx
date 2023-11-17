import React from "react";
import ReactSlider from "react-slider";
import styled from "styled-components";
import numeral from "numeral";

const CustomSlider = styled(ReactSlider)`
  width: 100%;
  height: 5px;
  border: 0;
  border-radius: 100px;
  background: #f6f6f6;
  outline: none;
  left: 0px;
  margin-bottom: 10px;
`;

const StyledThumb = styled.div`
  position: absolute;
  margin: -6px 0 0 0;
  border-radius: 100px;
  background: black;
  color: #fff;
  border: 0;
  height: 20px;
  line-height: 20px;
  text-align: center;
  width: 35px;
  cursor: pointer;
  font-size: 8px;
  font-weight: 600;
  text-decoration: none;
  transition: transform 0.1s ease;
  &:hover,
  &:focus {
    transform: scale(1.1);
    outline: none;
  }
  &:first-child {
    left: 0;
  }
  &:last-child {
    transform: translateX(100%) translateX(-34px);
  }
`;

const Thumb = (props, state) => (
  <StyledThumb {...props}>{state.valueNow}</StyledThumb>
);

const StyledTrack = styled.div`
  top: 70%;
  bottom: 0;
  border-radius: 999px;
`;

const Track = (props, state) => <StyledTrack {...props} index={state.index} />;

const StyledSlider = ({ value, onChangeAmount }) => {
  const handleAmountChange = (newValue) => {
    onChangeAmount(newValue);
  };
  return (
    <div>
      <CustomSlider
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
      />
      <div className="mt-2 w-full flex justify-between text-sm text-#606778">
        <span>1.000 €</span>
        <span>100.000 €</span>
      </div>
    </div>
  );
};

export default StyledSlider;
