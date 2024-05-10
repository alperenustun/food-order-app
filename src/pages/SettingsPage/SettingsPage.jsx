import "../SettingsPage/SettingsPage.scss";
import Sidebar from "@/components/Sidebar/Sidebar";
import ProductsManagement from "@/components/ProductsManagement/ProductsManagement"

function SettingsPage() {

  return (
    <main className="settings-page">
      <Sidebar />
      <div className="settings-page-content">
        <ProductsManagement />
      </div>
    </main>
  );
}

export default SettingsPage;
