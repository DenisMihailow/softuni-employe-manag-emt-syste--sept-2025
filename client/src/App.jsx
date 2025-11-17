import { useState } from "react"
import Footer from "./components/Footer.jsx"
import Header from "./components/Header.jsx"
import Pagination from "./components/Pagination.jsx"
import Search from "./components/Search.jsx"
import UserList from "./components/UserList.jsx"
import CreateUserModal from "./components/CreateUserModal.jsx"

function App() {

  const [showCreatedUser, setShowCreatedUser] = useState(false);

  const addUserClickHandler = () => {
    setShowCreatedUser(true);
  };

    const closeUserModalHandler = () => {
      setShowCreatedUser(false)
    };

  return (
    <div>
      <Header />

      <main className="main">
        <section className="card users-container">
          <Search />
          <UserList />


          <button className="btn-add btn" onClick={addUserClickHandler}> Add new user</button>

          <Pagination />
        </section>
        {showCreatedUser && <CreateUserModal onClose={closeUserModalHandler}/>}
      </main>
      <Footer />
    </div>
  )
}

export default App
