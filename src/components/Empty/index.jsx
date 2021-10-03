import React from 'react';
import EMPTY from '../../assets/img/empty.svg';

import './styles.scss';

const Empty = () => {
  return (
    <div className="empty" data-testid="empty">
      <img src={EMPTY} alt="empty" />
      <label>Nothing is there</label>
    </div>
  );
};

export default Empty;
