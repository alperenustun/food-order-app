import "../SettingsPage/SettingsPage.scss";
import SettingsSidebar from "@/components/SettingsSidebar/SettingsSidebar";
import Sidebar from "@/components/Sidebar/Sidebar";
import ProductsManagement from "@/components/ProductsManagement/ProductsManagement"

function SettingsPage() {

  return (

    <main className="mainRoot">
      <Sidebar />
      <div className="settings-page">
        <SettingsSidebar />
        <h1>Settings</h1>
        <div className="settings-page-content">
          <ProductsManagement />
        </div>
      </div>
    </main>
  );
}

export default SettingsPage;