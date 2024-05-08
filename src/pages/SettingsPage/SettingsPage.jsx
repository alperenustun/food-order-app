import "../SettingsPage/SettingsPage.scss";
import SettingsSidebar from "../../components/SettingsSidebar/SettingsSidebar";
import Sidebar from "@/components/Sidebar/Sidebar";

function SettingsPage() {

  return (
    <main className="settings-page">
      <Sidebar />
      <div className="set-product-div">
        <SettingsSidebar />
      </div>
    </main>
  );
}

export default SettingsPage;
