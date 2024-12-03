import { Link } from "react-router-dom";
import "./App.scss";

const App = () => {
  return (
    <div className="content">
      <h1 className="text-primary p-4">Rsbuild with React</h1>
      <p>Start building amazing things with Rsbuild.</p>
      <Link to="/admin/Dashboard">Dashboard</Link>
    </div>
  );
};

export default App;
