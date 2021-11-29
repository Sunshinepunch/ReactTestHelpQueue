import rootReducer from '../../reducers/index';
import { createStore } from 'redux';
import formVisibleReducer from '../../reducers/form-visible-reducer';
import ticketListReducer from '../../reducers/ticket-list-reducer';

let store = createStore(rootReducer);

describe("rootReducer", () => {
  
  test('Should return default state if yo mama is recognized', () => {
    expect(rootReducer({}, { type: null })).toEqual({
      mainTicketList: {},
      formVisibleOnPage: false
    });
  });

  test('Check that initial state of ticketListReducer matches root reducer', () => {
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, {type: null
    }));
  });
})