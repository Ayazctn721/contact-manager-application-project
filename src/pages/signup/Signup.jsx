import { Link, useNavigate } from "react-router";
import GlassCard from "../../components/glassCard/GlassCard";
import "./Signup.css";
import { useState } from "react";
import { createNewUser } from "../../utils/api";
import { useGlobalStore } from "../../hooks/useGlobalStore";

function Signup() {
  const [userInput, setUserInput] = useState({
    full_name: "",
    email: "",
  });
  const [error, setError] = useState(false);
  const { store, dispatch } = useGlobalStore();
  const navigate = useNavigate();
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const user = {
      full_name: userInput.full_name,
      email: userInput.email,
    };

    try {
      const newUserResponse = await createNewUser(user);
      console.log("created new user", newUserResponse);

      dispatch({
        type: "SET_USER_ID",
        payload: { user_id: newUserResponse.id },
      });
      dispatch({
        type: "SET_AUTH",
        payload: { isAuthenticated: true },
      });

      navigate("/home");
    } catch (error) {
      console.error(error);
      setError(true);
    }
  };
  return (
    <div className="text-light d-flex justify-content-center align-items-center mt-5">
      <GlassCard>
        <h1 className="text-center my-4">Register Account</h1>
        <form onSubmit={handleOnSubmit}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control p-4"
              id="fillname"
              aria-describedby="full name"
              placeholder="Full Name..."
              onChange={(e) =>
                setUserInput({ ...userInput, full_name: e.target.value })
              }
            />
          </div>

          <div className="mb-3">
            <input
              type="email"
              className="form-control p-4"
              id="email"
              placeholder="Email..."
              onChange={(e) =>
                setUserInput({ ...userInput, email: e.target.value })
              }
            />
          </div>
          {error ? (
            <>
              <p className="text-center text-danger">
                Something wrong happened! Try again...
              </p>
            </>
          ) : (
            <></>
          )}
          <h6 className="text-center">Already a member?</h6>
          <div className="text-center mb-5">
            <Link className="text-decoration-none fs-5 fw-bold" to="/login">
              Login
            </Link>
          </div>

          <div className="text-center">
            <button type="submit" className="btn btn-primary mb-4">
              Sign Up
            </button>
          </div>
        </form>
      </GlassCard>
    </div>
  );
}

export default Signup;