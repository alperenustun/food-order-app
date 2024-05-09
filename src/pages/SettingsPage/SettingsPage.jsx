import "../SettingsPage/SettingsPage.scss";
import SettingsSidebar from "../../components/SettingsSidebar/SettingsSidebar";
import Sidebar from "@/components/Sidebar/Sidebar";
import ProductsManagement from "@/components/ProductsManagement/ProductsManagement"

function SettingsPage() {

  return (
    <main className="settings-page">
      <Sidebar />
      <div className="set-product-div">
        <SettingsSidebar />
      </div>
      <ProductsManagement />
    </main>
  );
}

export default SettingsPage;
