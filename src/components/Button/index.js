import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
  width: 100%;
  height: 38px;
  font-size: 15px;
  border-radius: 3.5px;
  border-style: none;
  color: ${({ theme }) => theme.colors.contrastText};
  background-color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;
  cursor: pointer;

  &:disabled {
    background-color: ${({ theme }) => theme.colors.disabled};
    opacity: 0.8;
    cursor: no-drop;
  }
`;

Button.propTypes = {
  type: PropTypes.oneOf(['submit', 'type', 'button']).isRequired,
  children: PropTypes.node.isRequired,
};

export default Button;
