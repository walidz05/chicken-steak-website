import { Link } from "react-router-dom";
import { memo } from "react";

const Button = ({ children, className = "", to, ...props }) => {
  if (to) return <Link to={to} className={`btn ${className}`} {...props}>{children}</Link>;
  return (
    <button className={`btn ${className}`} {...props}>
      {children}
    </button>
  );
};
export default memo(Button);
