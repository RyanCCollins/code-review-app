import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import client from './apolloClient';
import landingContainer from 'containers/LandingContainer/reducer';
import addCommentContainer from 'containers/AddCommentContainer/reducer';

const rootReducer = combineReducers({
  landingContainer,
  addCommentContainer,
  routing: routerReducer,
  form: formReducer,
  apollo: client.reducer(),
});

export default rootReducer;
