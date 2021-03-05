import PropTypes from "prop-types";

const Button = ({color, text, onClick})=>{

  return(

    <button
    style={{background: color}}
    onClick={onClick}
    type="button">
    {text}
    </button>

  )
}

Button.defaultProps = {
  color: "blue"
}

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  buttonClick: PropTypes.func,
}

export default Button
