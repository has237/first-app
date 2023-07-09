
const initialState = {
    budgetEntryList: [],
  };
  
  export const budgetReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_BUDGET_ENTRY':
        return {
          ...state,
          budgetEntryList: [...state.budgetEntryList, action.payload],
        };
      default:
        return state;
    }
  };
  