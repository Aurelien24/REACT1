import { createReducer } from '@reduxjs/toolkit';
import { addTatoo } from '../action/index.js';
import { getTatoo } from '../action/index.js';
import { deleteTatoo } from '../action/index.js'
import initialData from '../initialData.js';

const initialState = { tatoos: [] };

// trois route : ajouter un tatoo, récupérer et supprimé. Un bug semble subsister. (Voir AfficherTatoo et AjoutTatoo)
const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addTatoo, (state, action) => {
      state.tatoos.push(action.payload);
    })
    .addCase(getTatoo, (state) => {console.log("getTatoo")
        state.tatoos = initialData;
    })
    .addCase(deleteTatoo, (state, action) => {
      state.tatoos = state.tatoos.filter((tatoo) => tatoo.id !== action.payload.id);
    });
});

export default reducer;