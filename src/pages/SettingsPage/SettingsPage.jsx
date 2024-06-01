import React, { useState } from "react";
import "../SettingsPage/SettingsPage.scss";
import SettingsSidebar from "@/components/SettingsSidebar/SettingsSidebar";
import Sidebar from "@/components/Sidebar/Sidebar";
import ProductsManagement from "@/components/ProductsManagement/ProductsManagement";
import AddDishModal from "../../components/Modal/AddDishModal";

function SettingsPage() {
  const [isModalOpen, setIsModalOpen] = useState(true);

  return (
    <main className="mainRoot">
      <Sidebar />
      <div className="settings-page">
        <SettingsSidebar />
        <h1>Settings</h1>
        <AddDishModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
        <div className="settings-page-content">
          <ProductsManagement />
        </div>
      </div>
    </main>
  );
}

export default SettingsPage;
