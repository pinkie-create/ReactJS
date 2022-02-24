import {
  useSelector,
  useDispatch
} from "react-redux";
import {
  changeShowName
} from '../../store/profile/actions';
import {
  selectName,
  selectShowName
} from "../../store/profile/selectors";

export const Profile = () => {
  const dispatch = useDispatch();
  const name = useSelector(selectName);
  const showName = useSelector(selectShowName);

  const handleChangeShowName = () => {
    dispatch(changeShowName);
  };

  return (
    <>
      <h2 > Welcome to profile </h2>
      <input type="checkbox" onClick={handleChangeShowName} ></input>
      {showName && < span > {name}</span>}
    </>
  );
};