import { useEffect, useState } from "react"
import Footer from "./components/Footer.jsx"
import Header from "./components/Header.jsx"
import Pagination from "./components/Pagination.jsx"
import Search from "./components/Search.jsx"
import UserList from "./components/UserList.jsx"
import CreateUserModal from "./components/CreateUserModal.jsx"

//в   server/data/user.json //тук може като върне резултата от postman да се сложи тук резултата да може след рестарт на server да има дадения резултат пак
function App() {
 const [users, setUsers] = useState([]);

  useEffect(() => {
        fetch('http://localhost:3030/jsonstore/users')
        .then(response => response.json())
        .then(result => {
          setUsers(Object.values(result));          
        })
        .catch((err)=> alert(err.message));
  },[]);

  const [showCreatedUser, setShowCreatedUser] = useState(false);

  const addUserClickHandler = () => {
    setShowCreatedUser(true);
  };

    const closeUserModalHandler = () => {
      setShowCreatedUser(false)
    };

    const addUserSubmitHandler = (event) => {
        event.preventDefault();
        const formDate = new FormData(event.target);
        // const userData = Object.fromEntries(formDate);
        const {country,city,street,streetNumber, ...userData} = Object.fromEntries(formDate);
        userData.address = {
          country,
          city,
          street,
          streetNumber,
        };

        userData.createdAt = new Date().toISOString();
        userData.createdAt = new Date().toISOString();

        fetch('http://localhost:3030/jsonstore/users',{
          method:'POST',
          headers:{
            'content-type':'application/json',
          },
          body: JSON.stringify(userData)
        })
        .then(response => response.json())
        .then(result => {
          console.log(result);
          
        })
    }

  return (
    <div>
      <Header />

      <main className="main">
        <section className="card users-container">
          <Search />
          <UserList users={users}/>


          <button className="btn-add btn" onClick={addUserClickHandler}> Add new user</button>

          <Pagination />
        </section>
        {showCreatedUser && <CreateUserModal 
        onClose={closeUserModalHandler}
        onSubmit={addUserSubmitHandler}

        />
        }
      </main>
      <Footer />
    </div>
  )
}

export default App
