import "../SettingsPage/SettingsPage.scss";
import SettingsSidebar from "@/components/SettingsSidebar/SettingsSidebar";
import Sidebar from "@/components/Sidebar/Sidebar";

function SettingsPage() {

  return (
    <main className="mainRoot">
      <Sidebar />
      <SettingsSidebar />
    </main>
  );
}

export default SettingsPage;
