import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import AccountMenu from "../components/MenuBar";
import DialogSelect from "../components/MainPage";

const StyledMeasuements = styled.section`
  width: ${(props) => (props.width ? props.width : "15rem")};
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "#D29CFF"};
  min-height: ${(props) => (props.height ? props.height : "5rem")};

  color: white;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #2f3843;
`;
function Measurmets(props) {
  return (
    <div>
      {" "}
      <AccountMenu />
      <DialogSelect />
    </div>
  );
}

Measurmets.propTypes = {
  text: PropTypes.string,
  variant: PropTypes.string,
  icon: React.Fragment,
  size: PropTypes.string,
};

export default Measurmets;
