import { Container } from "./components/contain";
import { Navbar } from "./components/navbar/header";
import { AppRoutes } from "./routes/routes";

export const App = () => {

  return (
    <Container>
      {/* nav bar */}
      <Navbar/>

      {/* main content  */}
      <AppRoutes />

      {/* footer  */}
    </Container>
  );
};
