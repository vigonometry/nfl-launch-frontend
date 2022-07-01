import LaunchHeader from "./components/navigation/LaunchHeader";
import { AppShell } from "@mantine/core";
import { HomePage } from "./views/HomePage/HomePage";
import { AboutPage } from "./views/AboutPage/AboutPage";
import { Route, Routes } from "react-router-dom";
import { EventsPage } from "./views/EventsPage/EventsPage";
import { ErrorPage } from "./views/ErrorPage/ErrorPage";


function App() {
  return (
    <AppShell header={LaunchHeader()} padding={0}>
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/events" element={<EventsPage />} />
      <Route path="/projects" element={<ErrorPage />} />
      <Route path="/partners" element={<ErrorPage />} />
      <Route path="/donate" element={<ErrorPage />} />
      </Routes>
    </AppShell>
  );
}

export default App;
