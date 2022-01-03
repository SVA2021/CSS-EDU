// import classNames from 'classnames';
import React from 'react';

import styles from './Button.module.scss';

// type TButtonProps = {
//   className?: string;
//   onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
//   withOffset?: boolean;
//   /* navigation: moves out of the page, menu: navigate on the page */
//   type?: 'navigation' | 'menu';
// };

const Button = ({ children, ...props }) => (
  <button 
    {...props}
  >
    {children}
  </button>
);

export default Button;