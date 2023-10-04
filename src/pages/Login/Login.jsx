import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AtuhProvider";

const Login = () => {
  const { signInUser } = useContext(AuthContext);
  const handleLogin = (e) => {
    e.preventDefault();
    // const email = e.target.email.value;
    // const password = e.target.password.value;
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    signInUser(email, password)
      .then((res) => console.log(res.user))
      .catch((err) => console.log(err.message));

    console.log(e.currentTarget);
    console.log(form.get("email"));
  };
  return (
    <div>
      <Navbar></Navbar>
      <div className=" px-4 md:w-3/4 lg:w-1/2 mx-auto">
        <h2 className="text-4xl my-10">Please Login</h2>
        <form onSubmit={handleLogin}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
        <div className="flex justify-between py-5">
          <p>Do not have an account? </p>
          <Link to="/register" className="btn btn-sm btn-outline text-red-600">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
