import React from 'react';
import moment from 'moment';
import RUNNER from '../../assets/img/runner.svg';

import './styles.scss';

const JogItem = ({ date, speed, distance, time }) => {
  return (
    <div className="d-flex align-start justify-between jog">
      <img src={RUNNER} alt="runner icon" />
      <div className="d-flex info">
        <div className="date-item-wrapper">
          <label className="date">{moment(new Date(date)).format('DD.MM.YYYY')}</label>
        </div>
        <div className="info-item-wrapper">
          <label className="info-item">Speed:</label>
          <label className="info-val info-item">{speed}</label>
        </div>
        <div className="info-item-wrapper">
          <label className="info-item">Distance:</label>
          <label className="info-val info-item">{distance} km</label>
        </div>
        <div className="info-item-wrapper">
          <label className="info-item">Time:</label>
          <label className="info-val info-item">{time} min</label>
        </div>
      </div>
    </div>
  );
};

export default JogItem;
