import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import JogItem from '../../components/JogItem';
import { attemptGetJogs } from '../../store/jogs/actions';
import ADD from '../../assets/img/add.svg';

import './styles.scss';
import { push } from 'connected-react-router';
import routes from '../../routes/routesCode';
import Spin from '../../components/Spin';
import Empty from '../../components/Empty';
import Button from '../../components/Button';

const Jogs = () => {
  const dispatch = useDispatch();
  const { filteredJogs: jogs, jogsLoading: loading } = useSelector((state) => state.jogs);

  useEffect(() => {
    dispatch(attemptGetJogs());
  }, [dispatch]);

  return (
    <div className={`jogs ${!jogs.length ? 'justify-center' : ''}`}>
      {loading ? (
        <div className="w-full d-flex align-center justify-center">
          <Spin />
        </div>
      ) : (
        <>
          {jogs.length ? (
            jogs.map((jog) => (
              <JogItem key={jog.id} date={jog.date} distance={jog.distance} time={jog.time} />
            ))
          ) : (
            <Empty />
          )}
          {jogs.length ? (
            <img
              src={ADD}
              alt="add jog"
              className="add-icon"
              onClick={() => dispatch(push(routes.addJog.path))}
            />
          ) : (
            <Button
              size="large"
              className="create-btn"
              onClick={() => {
                dispatch(push('/addJog'));
              }}>
              Create your jog first
            </Button>
          )}
        </>
      )}
    </div>
  );
};

export default Jogs;
