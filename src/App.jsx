import { Routes, Route } from "react-router-dom";
import { NavBar } from "./layout";
import * as Pages from "./pages";
import "./App.css";
import { UsernameProvider } from "./contexts";

function App() {
  return (
    <>
      <UsernameProvider>
        <Routes>
          <Route path="/" element={<NavBar />}>
            <Route index element={<Pages.Home />} />
            <Route path="/albums" element={<Pages.Albums />} />
            <Route path="/login" element={<Pages.Login />} />
            <Route path="/signup" element={<Pages.Signup />} />
            
            <Route path="*" element={<Pages.NotFound />} />
          </Route>
        </Routes>
      </UsernameProvider>
    </>
  );
}

export default App;
