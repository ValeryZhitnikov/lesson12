import { CHANGE_SEARCH_FIELD, SEARCH_SKILLS_REQUEST,
  SEARCH_SKILLS_FAILURE, SEARCH_SKILLS_SUCCES, CLEAR_SEARCH_FIELD } from "../actions/actionTypes";

const initialState = { items: [], loading: false, error: null, search: '' };

export default function skillsReducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH_SKILLS_REQUEST:
      return { ...state, items: [], loading: true, error: null }
    case SEARCH_SKILLS_FAILURE:
      const { error } = action.payload;
      return { ...state, items: [], loading: true, error }
    case SEARCH_SKILLS_SUCCES:
      const { items } = action.payload;
      return { ...state, items, loading: false, error: null }
    case CHANGE_SEARCH_FIELD:
      const { search } = action.payload;
        return { ...state, search };
    case CLEAR_SEARCH_FIELD:
      return { ...state, items: [], loading: false, error: null, search: '' }
      default:
      return state;
  }
}