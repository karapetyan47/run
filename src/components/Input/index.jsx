import React, { forwardRef } from 'react';

import './styles.scss';

const Input = forwardRef(({ className, ...res }, ref) => {
  return <input ref={ref} className={`input ${className || ''}`} {...res} />;
});

export default Input;
