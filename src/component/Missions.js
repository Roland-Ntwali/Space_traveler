import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMission, spacejet } from '../Redux/Mission/missionSlice';
/* eslint-disable */
const Missions = () => {
  const dispatch = useDispatch();
  const { missions, loading } = useSelector((state) => state.missions);
  useEffect(() => {
    dispatch(fetchMission());
  }, [loading, dispatch]);

  if (loading) {
    return <h1> Loading...</h1>;
  }

  const jetclick = (id) => {
    dispatch(spacejet(id));
  };
  return (
    <table className="mission_table">
      <tr id="mission_tr_h">
        <td>Mission</td>
        <td>Description</td>
        <td>Status</td>
        <td></td>
      </tr>
      {missions.map(({ id, name, description, mission }) => (
        <tr key={id} className="mission_tr">
          <td>{name}</td>
          <td>{description}</td>
          <td>
            <button type="button" className='not_member'>
              {mission ? "Active Member" : "NOT A MEMBER"}
            </button>
          </td>
          <td>
            <button
              onClick={() => {
                jetclick(id);
              }}
              type="button" className="join_btn"
            >
              {mission ? "Leave Mission" : "Join Mision"}
            </button>
          </td>
        </tr>
      ))}
    </table>
  );
};
export default Missions;
