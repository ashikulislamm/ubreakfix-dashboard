import { useState } from "react";
import { Sidebar } from "./components/layout/Sidebar";
import { Header } from "./components/layout/Header";
import { DashboardOverview } from "./pages/DashboardOverview";
import { CallLogsPage } from "./pages/CallLogsPage";
import { AppointmentsPage } from "./pages/AppointmentsPage";
import { SettingsPage } from "./pages/SettingsPage";

const pageConfig = {
  dashboard: { title: "Dashboard Overview", component: DashboardOverview },
  "call-logs": { title: "Call Logs & History", component: CallLogsPage },
  appointments: { title: "Appointments", component: AppointmentsPage },
  settings: { title: "Settings", component: SettingsPage },
};

function App() {
  const [currentPage, setCurrentPage] = useState("dashboard");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const CurrentPageComponent =
    pageConfig[currentPage as keyof typeof pageConfig].component;
  const currentTitle = pageConfig[currentPage as keyof typeof pageConfig].title;

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="flex h-screen bg-[#0A1628] overflow-hidden">
      <Sidebar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        isMobileMenuOpen={isMobileMenuOpen}
        onCloseMobileMenu={() => setIsMobileMenuOpen(false)}
      />

      <div className="flex-1 flex flex-col overflow-hidden">
        <Header
          title={currentTitle}
          onMenuClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        />

        <main className="flex-1 overflow-y-auto">
          <CurrentPageComponent />
        </main>
      </div>
    </div>
  );
}

export default App;
