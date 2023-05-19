/* eslint-disable */
import { useSelector } from "react-redux";
const Missionprofile = () => {
    const {missions} = useSelector ((state) => state.missions)
    const missionReserved = missions.filter((space1) => space1.mission)
return(
    <div>
        <h1 className="t_head">My Missions</h1>
        <table  >
            <tbody >
            {missionReserved.map(({id, name}) => (
            <tr key={id}>{name}</tr>
        ))}
         </tbody>
        </table>
    </div>
)
}
export default Missionprofile;
