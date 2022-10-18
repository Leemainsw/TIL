import React from "react";
import styled, { css } from "styled-components";
import { useSelector } from "../../store";
import palette from "../../styles/palette";

const Container = styled.div<{ isValid: boolean, validateMode: boolean }>`
  width: 100%;
  height: 46px;

  select {
    width: 100%;
    height: 100%;
    background-color: white;
    border: 1px solid ${palette.gray_eb};
    padding: 0 11px;
    border-radius: 4px;
    outline: none;
    -webkit-appearance: none;
    background-image: url("/static/svg/common/selector/selector_down_arrow.svg");
    background-repeat: no-repeat;
    background-position: right 11px center;
    font-size: 16px;

    &:focus {
        border-color: ${palette.dark_cyan};
    }
  }

  ${
    ({ isValid, validateMode }) => validateMode && css`
      select {
        border-color: ${isValid ? palette.dark_cyan : palette.tawny} !important;
        background-color: ${isValid ? "white" : palette.snow};
      }
  `}  
`;

interface IProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: string[];
  // eslint-disable-next-line react/require-default-props
  disabledOptions?: string[];
  // eslint-disable-next-line react/require-default-props
  value?: string;
  // eslint-disable-next-line react/require-default-props
  isValid?: boolean;
}

const Selector: React.FC<IProps> = ({ options = [], disabledOptions = [], isValid, ...props }) => {
  const validateMode = useSelector((state) => state.common.validateMode);
    return (
      <Container isValid={!!isValid} validateMode={validateMode}>
        <select {...props}>
          {disabledOptions.map((option, index) => (
            <option key={index} value={option} disabled>
              {option}
            </option>
            ))}
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
            ))}
        </select>
      </Container>
    );
};

export default Selector;
