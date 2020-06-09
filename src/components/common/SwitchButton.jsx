import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const CheckBoxWrapper = styled.div`
  position: relative;
  margin-left: 0.5rem;
`;
const CheckBoxLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 42px;
  height: 26px;
  border-radius: 15px;
  background: ${props => props.theme.backgrounds.primary};
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 3px;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;
const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  height: 26px;
  &:checked + ${CheckBoxLabel} {
    background: ${props => props.theme.backgrounds.primary};
    &::after {
      content: "";
      background: ${props => props.theme.backgrounds.secondary};
      display: block;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      margin-left: 21px;
      transition: 0.2s;
    }
  }
`;

const SwitchButtonStyle = styled.div`
display: flex;
padding: 0 1rem;
`;

const Title = styled.label`
margin-top: 5px;
`;

const SwitchButton = ({ checked, onChange, title }) => {
    return (
        <SwitchButtonStyle>
            <Title>{title}</Title>
            <CheckBoxWrapper>
                <CheckBox
                    id="checkbox"
                    type='checkbox'
                    checked={checked}
                    onChange={() => onChange(!checked)}></CheckBox>
                <CheckBoxLabel htmlFor="checkbox" />
            </CheckBoxWrapper>
        </SwitchButtonStyle>)
}

SwitchButton.propTypes = {
    checked: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
}
export default SwitchButton;