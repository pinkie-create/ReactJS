import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { changeShowName } from '../../store/profile/actions';

export const Profile = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state);
  const showName = () => {
    dispatch(changeShowName);
  };

  return (
    <>
      <h2> Welcome to profile </h2>
      <input type="checkbox" onClick={showName}></input>
      {data.showName && <span>{data.name}</span>}
    </>
  );
};