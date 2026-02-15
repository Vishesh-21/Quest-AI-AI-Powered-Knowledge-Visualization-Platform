import { useEffect } from "react";
import { Container } from "./components/contain";
import { Footer } from "./components/footer/footer";
import { Navbar } from "./components/navbar/header";
import { AppRoutes } from "./routes/routes";
import { getCurrentUser } from "./services/apis";
import { toast } from "sonner";

export const App = () => {
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const data = await getCurrentUser();
        console.log(data);
      } catch (error: any) {
        toast.error(error.message);
      }
    };

    fetchUser();
  }, []);

  return (
    <Container>
      {/* nav bar */}
      <Navbar />

      {/* main content  */}
      <AppRoutes />

      {/* footer  */}
      <Footer />
    </Container>
  );
};
