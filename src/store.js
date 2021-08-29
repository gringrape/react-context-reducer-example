import { createContext, useContext, useReducer } from "react";

const initialState = {
  count: 0
};

const reducer = (state, action) =>
  ({
    plus() {
      return { count: state.count + 1 };
    },
    minus() {
      return { count: state.count - 1 };
    }
  }[action.type]());

const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => useContext(StoreContext);
