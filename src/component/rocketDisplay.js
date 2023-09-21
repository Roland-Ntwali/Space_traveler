import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { rocketsReserve } from '../Redux/Rocket/rocketSlice';

const RocketsDisplay = (props) => {
  const { rocketDetails } = props;
  const {
    id, name, description, image, reserved,
  } = rocketDetails;
  const dispatch = useDispatch();

  const ReserveBtn = () => {
    dispatch(rocketsReserve(id));
  };

  return (
    <div className="rocket_details">
      <img src={image} alt={image} className="rocket_image" />
      <div>
        <h1 className="rocket_name">{name}</h1>
        <p className="rocket_description">
          {reserved && <span>Reserved</span>}
          {' '}
          {description}
        </p>
        <button type="button" onClick={ReserveBtn}>
          {reserved && <span>Cancel Reservation</span>}
          {!reserved && <span>Reserve</span>}
        </button>
      </div>
    </div>
  );
};

RocketsDisplay.propTypes = {
  rocketDetails: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    reserved: PropTypes.bool.isRequired,
  }).isRequired,
};

export default RocketsDisplay;
