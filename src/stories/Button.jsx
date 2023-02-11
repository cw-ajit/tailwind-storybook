import React from "react";
import PropTypes from "prop-types";

const BUTTON_COLOR = {
  primary: {
    fill: "bg-red-500 text-white border border-red-500",
    ghost: "bg-white-500 text-red-500 border border-red-500",
    none: "text-red-500 border-transparent",
  },
};

const BUTTON_SIZE = {
  xlg: "text-2xl h-12",
  lg: "text-xl h-10",
  md: "text-lg h-8",
  sm: "text-sm h-6",
};

const getbaseClasses = (size, color, variant, roundedCorners, block) => {
  const baseClasses =
    "inline-flex items-center justify-center whitespace-nowrap no-underline font-bold";

  return `${baseClasses} ${BUTTON_SIZE[size]} ${BUTTON_COLOR[color][variant]}`;
};

const propTypes = {
  /** Tag for the Button. */
  as: PropTypes.oneOfType([
    PropTypes.elementType,
    PropTypes.oneOf(["a", "button"]),
  ]),
  /** Make button occupy width of its container. */
  block: PropTypes.bool,
  /** Custom classes for the button. */
  className: PropTypes.string,
  /** The content of the button. */
  children: PropTypes.node,
  /** Button colors */
  color: PropTypes.oneOf(["primary", "secondary", "brown", "dimGray", "blue"]),
  /** Disabled state of button. */
  disabled: PropTypes.bool,
  /** Value for data testing attribute. */
  "data-testing-id": PropTypes.string,
  /** Defines HTML button `type` attribute. */
  htmlType: PropTypes.oneOf(["button", "reset", "submit"]),
  /** Callback fired when the button is clicked. */
  onClick: PropTypes.func,
  /** Callback fired when the button is clicked in AMP. */
  on: PropTypes.string,
  /** Classes to customize horizontal padding. */
  paddingXClassName: PropTypes.string,
  /** If `true`, there will be `3px` border radius on the button. */
  roundedCorners: PropTypes.bool,
  /** The size of the button. */
  size: PropTypes.oneOf(["sm", "md", "lg", "xlg"]),
  /** Button style variant. */
  variant: PropTypes.oneOf(["fill", "ghost", "none"]),
};
const defaultProps = {
  as: "button",
  className: "",
  color: "primary",
  htmlType: "button",
  paddingXClassName: "",
  roundedCorners: true,
  size: "md",
  variant: "fill",
};

class Button extends React.PureComponent {
  render() {
    const {
      as: Tag,
      block,
      className,
      color,
      children,
      htmlType,
      "data-testing-id": testingName,
      paddingXClassName,
      roundedCorners,
      size,
      variant,
      on,
      ...otherProps
    } = this.props;

    const buttonClasses = `${getbaseClasses(
      size,
      color,
      variant,
      roundedCorners,
      block
    )} ${paddingXClassName} ${className}`;

    return (
      <Tag className={buttonClasses} {...otherProps} type={htmlType}>
        {children}
      </Tag>
    );
  }
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
