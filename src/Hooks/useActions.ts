import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import ActionCreators from '../Store/actionCreators';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(ActionCreators, dispatch);
};

export default useActions;
