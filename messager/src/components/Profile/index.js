import {
  useSelector,
  useDispatch
} from "react-redux";
import { logout } from "../../services/firebase";
import {
  changeShowName
} from '../../store/profile/actions';
import {
  selectName,
  selectShowName
} from "../../store/profile/selectors";

export const Profile = ({ }) => {
  const dispatch = useDispatch();
  const name = useSelector(selectName);
  const showName = useSelector(selectShowName);

  const handleChangeShowName = () => {
    dispatch(changeShowName);
  };

  const handleSighOut = async () => {
    try { await logout(); }
    catch (err) {
      console.warn(err);
    }
  };

  return (
    <>
      <h2 > Welcome to profile </h2>
      <button onClick={handleSighOut}>Sigh out</button>
      <input type="checkbox" onClick={handleChangeShowName} ></input>
      {showName && < span > {name}</span>}
    </>
  );
};