import { AppShell, AppShellMain, AppShellNavbar } from "@mantine/core";

import Header from "./dashboard/header";
import SideNav from "./dashboard/sidebar";
import Main from "./dashboard/main";

export default function Home() {
  return (
    <AppShell>
      <Header />
      <AppShellNavbar>
        <SideNav />
      </AppShellNavbar>

      <AppShellMain>
        <Main />
      </AppShellMain>
    </AppShell>
  );
}
