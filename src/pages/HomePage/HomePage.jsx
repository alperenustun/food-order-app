import Sidebar from "@/components/Sidebar/Sidebar";
import "./HomePage.scss";

function HomePage() {
  return (
    <div>
      <Sidebar />
      <div className="mainRoot">
        <h1>Homepage example</h1>
      </div>
    </div>
  );
}

export default HomePage;
