import React from 'react';

import './styles.scss';

const Button = ({ className, size, ...res }) => {
  const sizeClass = size === 'large' ? 'btn-large' : 'btn';

  return <button className={`button ${sizeClass} ${className || ''}`} {...res} />;
};

export default Button;
