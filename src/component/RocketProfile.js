import React from 'react';
import { useSelector } from 'react-redux';

const UpdateRocket = () => {
  const rockets = useSelector((state) => state.rocketReducer.rockets);
  const reservedRockets = rockets.filter((item) => item.reserved === true);
  return (
    <div>
      <h1 className="t_head">
        My Rockets
      </h1>
      <table className="table">
        <tbody className="t_body">
          {reservedRockets.map((item) => (
            <tr className="t_tr_d" key={item.id}>{item.name}</tr>
          ))}
        </tbody>
      </table>
    </div>

  );
};
export default UpdateRocket;
