import Main from "./pages/Main";
import Login from "./pages/Login";
import ClubPage from "./pages/ClubPage";
import MyPage from "./pages/MyPage";
import Create from "./pages/Create";
import BookTicket from "./pages/BookTicket";
import bookmodal from "./components/BookModal";

function App() {
  return (
    <div className="App">
      <Routers>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/clubpage" element={<ClubPage />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/create" element={<Create />} />
        <Route path="/bookmodal" element={<BookModal />} />
        <Route path="/bookticket" element={<BookTicket />} />
      </Routers>
    </div>
  );
}

export default App;
