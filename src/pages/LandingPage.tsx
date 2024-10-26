import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div>
      <h1 className="text-3xl underline">Landing Page</h1>
      <Link to="/about">About</Link>
    </div>
  );
}

export default LandingPage;
