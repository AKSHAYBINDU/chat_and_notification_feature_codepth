import Login from "./pages/Login";
import Home from "./pages/Home";
// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import { useContext } from "react";
import { useAuthState} from 'react-firebase-hooks/auth';
import { auth} from "./firebase"

function App() {
  // const { currentUser } = useContext(AuthContext);
  // const ProtectedRoute = ({ children }) => {
  //   if (!currentUser) {
  //     return <Navigate to="/login" />;
  //   }
  // };
  const [user] = useAuthState(auth);
  
  return (
    <div>
      {!user ? <Login/> : <Home />}
    </div>

    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/">
    //       <Route
    //         index
    //         element={
    //           <ProtectedRoute>
    //             <Home />
    //           </ProtectedRoute>
    //         }
    //       />
    //       <Route path="login" element={<Login/>}/>
    //     </Route>
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;
