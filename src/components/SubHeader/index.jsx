import React from 'react';
import DatePicker from 'react-datepicker';
import { useDispatch, useSelector } from 'react-redux';
import { setDateFrom, setDateTo } from '../../store/jogs/actions';

import 'react-datepicker/dist/react-datepicker.css';
import './styles.scss';

const SubHeader = () => {
  const { dateTo, dateFrom } = useSelector((state) => state.jogs);

  const dispatch = useDispatch();

  return (
    <div className="sub-header d-flex align-center justify-center">
      <div className="d-flex align-center">
        <div className="picker-label">Date from</div>
        <DatePicker
          className="picker"
          selected={dateFrom}
          onChange={(date) => dispatch(setDateFrom(date))}
        />

        <div className="picker-label ml-45">Date to</div>
        <DatePicker
          className="picker"
          selected={dateTo}
          onChange={(date) => dispatch(setDateTo(date))}
        />
      </div>
    </div>
  );
};

export default SubHeader;
