import { useEffect } from "react";
import { Container } from "./components/contain";
import { Footer } from "./components/footer/footer";
import { Navbar } from "./components/navbar/header";
import { AppRoutes } from "./routes/routes";
import { getCurrentUser } from "./services/apis";
import { toast } from "sonner";
import { useAppDispatch } from "./redux/hook";

export const App = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const fetchUser = async () => {
      try {
        await getCurrentUser(dispatch);
      } catch (error: any) {
        toast.error(error.message);
      }
    };

    fetchUser();
  }, [dispatch]);

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
