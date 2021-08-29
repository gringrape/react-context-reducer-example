import { StoreProvider } from "./store";

import Counter from "./Counter";

import "./styles.css";

export default function App() {
  return (
    <StoreProvider>
      <div className="App">
        <Counter />
      </div>
    </StoreProvider>
  );
}
