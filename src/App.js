import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login, Callback, Main } from "./pages";
import PodcastListContext from "./contexts/PodcastListContext";
import UserContext from "./contexts/UserContext";
import PrivateRoute from "./components/PrivateRoute";
function App() {
  return (
    <>
      <UserContext>
        <PodcastListContext>
          <BrowserRouter>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/callback" element={<Callback />} />
              <Route
                path="/main"
                element={
                  <PrivateRoute>
                    <Main />
                  </PrivateRoute>
                }
              />
              <Route
                path="*"
                element={
                  <PrivateRoute>
                    <Login />
                  </PrivateRoute>
                }
              />
            </Routes>
          </BrowserRouter>
        </PodcastListContext>
      </UserContext>
    </>
  );
}

export default App;
