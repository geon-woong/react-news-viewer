import { Route,Routes } from "react-router"
import NewsPage from "./pages/NewsPage"
export default function App() {
  return (
    <Routes>
      <Route index element={<NewsPage/>} />
      <Route path="/:category" element={<NewsPage/>} />
    </Routes>
  )
}