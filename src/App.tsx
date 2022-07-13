import NFLHeader from "./components/navigation/NFLHeader";
import { AppShell } from "@mantine/core";
import { HomePage } from "./views/HomePage/HomePage";
import { AboutPage } from "./views/AboutPage/AboutPage";
import { Route, Routes } from "react-router-dom";
import { EventsPage } from "./views/EventsPage/EventsPage";
import { ErrorPage } from "./views/ErrorPage/ErrorPage";
import { PartnersPage } from "./views/PartnersPage/PartnersPage";
import { MailOpened } from "tabler-icons-react";
import { useState } from "react";
import NavMenuMobile from "./components/navigation/NavMenuMobile";


function App() {
  const [opened, setOpened] = useState(false)
  const toggle = () => setOpened(!opened)

  return (
    <AppShell header={<NFLHeader opened={opened} toggle={toggle} />} navbar={<NavMenuMobile hide={!opened} />} padding={0}>
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/events" element={<EventsPage />} />
      <Route path="/projects" element={<ErrorPage />} />
      <Route path="/partners" element={<PartnersPage />} />
      <Route path="/donate" element={<ErrorPage />} />
      </Routes>
    </AppShell>
  );
}

export default App;
