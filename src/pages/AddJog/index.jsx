import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../components/Button';
import Input from '../../components/Input';

import CLOSE from '../../assets/img/cancel.svg';

import './styles.scss';
import { push } from 'connected-react-router';
import routes from '../../routes/routesCode';
import { attemptAddJog } from '../../store/jogs/actions';

const AddJog = () => {
  const addJogLoading = useSelector((state) => state.jogs.addJogLoading);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    dispatch(attemptAddJog(data));
  };

  return (
    <div className="add-jog">
      <div className="jog-form-wrapper">
        <img
          src={CLOSE}
          alt="close"
          className="cursor-pointer close-icon"
          onClick={() => {
            dispatch(push(routes.jogs.path));
          }}
        />
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="d-flex justify-between align-center mb-25 relative">
            <label className="mr-16">Distance</label>
            <Input
              type="number"
              {...register('distance', { required: true })}
              id="distance"
              name="distance"
            />
            {errors?.distance?.type === 'required' && (
              <label className="error">Distance is required</label>
            )}
          </div>
          <div className="d-flex justify-between align-center mb-25 relative">
            <label className="mr-16">Time</label>
            <Input type="number" {...register('time', { required: true })} id="time" name="time" />
            {errors?.time?.type === 'required' && <label className="error">Time is required</label>}
          </div>
          <div className="d-flex justify-between align-center mb-46 relative">
            <label className="mr-16">Date</label>
            <Input type="date" {...register('date', { required: true })} id="date" name="date" />
            {errors?.date?.type === 'required' && <label className="error">Date is required</label>}
          </div>
          <Button disabled={addJogLoading} className="w-full" type="submit">
            Save
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AddJog;
