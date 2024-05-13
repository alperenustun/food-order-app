import "../SettingsPage/SettingsPage.scss";
import Sidebar from "@/components/Sidebar/Sidebar";
import ProductsManagement from "@/components/ProductsManagement/ProductsManagement"


function SettingsPage() {

  return (
    <div>
      <Sidebar />
      <div className="settings-page">
        <h1>Settings</h1>
        <div className="settings-page-content">
          <ProductsManagement />
        </div>
      </div>
    </div>
  );
}


export default SettingsPage;

