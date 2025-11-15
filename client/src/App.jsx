import Footer from "./components/Footer.jsx"
import Header from "./components/Header.jsx"
import Pagination from "./components/Pagination.jsx"
import Search from "./components/Search.jsx"
import UserList from "./components/UserList.jsx"

function App() {

  return (
    <div>
      <Header />

      <main className="main">
        <section className="card users-container"></section>
        <Search />
        <UserList />
        

        <Pagination />
      </main>
      <Footer />
    </div>
  )
}

export default App
