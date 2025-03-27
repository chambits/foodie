import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "@/pages/HomePage";
import MainLayout from "@/MainLayout";
import RestaurantDetailsPage from "@/pages/RestaurantDetailsPage";

function App() {
  return (
    <MainLayout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/restaurant/:id" element={<RestaurantDetailsPage />} />
        </Routes>
      </BrowserRouter>
    </MainLayout>
  );
}

export default App;
