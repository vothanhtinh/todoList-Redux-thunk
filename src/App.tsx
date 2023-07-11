// Libaries
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";

// Components
import { Header } from "./app/components/organisms/Header";
import { SideBar } from "./app/components/organisms/SideBar";
import { Main } from "./app/components/organisms/Main";

// Context
import { HeaderProvider } from "context/HeaderContext";

// Modules
import { Root } from "app/modules";
import { Provider } from "react-redux";

// Store
import { store } from "store/configStore";

function App() {
  return (
    <Provider store={store}>
      <HeaderProvider>
        <Router>
          <Header />
          <SideBar />
          <Main>
            <Root />
          </Main>
        </Router>
      </HeaderProvider>
    </Provider>
  );
}

export default App;
