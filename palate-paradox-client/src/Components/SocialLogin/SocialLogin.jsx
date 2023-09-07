import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../Providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  // getting from which route it came to login page
  const from = location.state?.from?.pathname || "/";
  const { googleSignIn } = useContext(AuthContext);
  const handleGoogleSignIn = () => {
    googleSignIn().then((result) => {
      const loggedInUser = result.user;
      const saveUser = {
        name: loggedInUser.displayName,
        email: loggedInUser.email,
      };
      fetch("http://localhost:5000/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(saveUser),
      })
        .then((res) => res.json())
        .then(() => {
          navigate(from, { replace: true });
        });
    });
  };

  return (
    <div className="">
      <div className="divider"></div>
      <div className="flex justify-center gap-2">
        <button
          onClick={handleGoogleSignIn}
          className="btn btn-circle btn-outline text-red-600 mb-5"
        >
          <FaGoogle></FaGoogle>
        </button>
        {/* <button className="btn btn-circle btn-outline text-red-600">
 <FaGoogle></FaGoogle>
    </button> */}
      </div>
    </div>
  );
};

export default SocialLogin;
