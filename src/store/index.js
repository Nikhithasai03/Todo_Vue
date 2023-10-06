import { createStore } from 'vuex'; // Import createStore from Vuex 4

import todos from './modules/todos';

export default createStore({
  modules: {
    todos,
  },
});
