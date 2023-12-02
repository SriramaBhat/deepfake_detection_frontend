import { Route, Routes } from "react-router-dom";
import Navigation from "./components/navigation/navigation";
import Home from "./components/Home/home.component";
import Login from "./components/Login/Login.jsx"
import SignUp from "./components/signup/signup.jsx";
// import { UserContext } from "./context/user.context";
// import { useContext } from "react";

function App() {
  // const { currentUser } = useContext(UserContext);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        {/* <Route path="login" element={<LoginForm />} />
        <Route path="signup" element={<SignUpForm />} />
        {currentUser ? (
          <>
            <Route path="dna-to-aa" element={<DNAToAA />} />
            <Route path="aa-struct-pred" element={<AAStructPred />} />
            <Route
              path="aa-struct"
              element={<StructDisplay />}
            />
          </>
        ) : (
          <>
            <Route path="dna-to-aa" element={<NotAuthorized />} />
            <Route path="aa-struct-pred" element={<NotAuthorized />} />
            <Route path="aa-struct" element={<NotAuthorized />} />
          </>
        )} */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Route>
    </Routes>
  );
}

export default App;
