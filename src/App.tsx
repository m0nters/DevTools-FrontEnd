import { AuthProvider } from "./contexts/AuthContext";
import Header from "./components/layout/Header";
import AppRoutes from "./routes/index";
import Footer from "./components/layout/Footer";

const App = () => {
  return (
    <AuthProvider>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        {/* Header appears on all pages */}
        <Header />
        {/* Main content */}
        <main className="flex-grow flex justify-center pt-[74px]">
          <AppRoutes />
        </main>
        {/* Footer appears on all pages */}
        <Footer />
      </div>
    </AuthProvider>
  );
};

export default App;
