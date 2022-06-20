import PropTypes from 'prop-types';
import * as S from './Button.styles';

const Button = ({ type, color, handleClick, children, disabled }) => {
  return (
    <S.StyledButton color={color} type={type} onClick={handleClick} disabled={disabled}>
      {children}
    </S.StyledButton>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  color: PropTypes.string,
  handleClick: PropTypes.func,
  children: PropTypes.string.isRequired
};

export default Button;
