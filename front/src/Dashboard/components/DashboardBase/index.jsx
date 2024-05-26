import DashboardHeader from "../DashboardHeader"
import Container from "../../../components/Container";
import Footer from "../../../components/Footer";
import { Outlet } from "react-router-dom";

function DashboardBase() {
  return (
    <main>
      <DashboardHeader />
      <Container>
        <Outlet />
      </Container>
      <Footer />
    </main>
  );
}

export default DashboardBase
