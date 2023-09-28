import React from 'react';

function App() {

  const users = [
    { 
      id: 1, 
      name: "Mate", 
      lastName: "Kvesieishvili", 
      age: 15,
      isLoggedIn: true,
    },
    { 
      id: 2, 
      name: "Goga", 
      lastName: "Qatamadze", 
      age: 16,
      isLoggedIn: true, 
    },
    { 
      id: 3, 
      name: "Ani", 
      lastName: "Kenchadze", 
      age: 24,
      isLoggedIn: false,
    },
    { 
      id: 4, 
      name: "Jack", 
      lastName: "Brown", 
      age: 30,
      isLoggedIn: true,
    },
  ];

  function Navbar(){
    return (
      <header className='header'>
        <h2>Navbar</h2>
      </header>
    );
  };

  function Footer() {
    return (
      <footer className='footer'>
        <h2>Footer</h2>
      </footer>
    );
}

function Wrapper({ children, additionalContent }) {
  return (
    <div>
      <Navbar />
      <main>
        {additionalContent.map((name, index) => (
          <div key={index}>{name}</div>
        ))}
      </main>
      <Footer />
    </div>
  );
}

const content = users.length > 0 ? (
  users.map((user) => {
    return (
      <User
        key={user.id}
        name={user.name}
        isLoggedIn={user.isLoggedIn} 
      />
    );
  })
) : (
  <h1>no users in the system</h1>
)

  return (
    <>
      <div>
      <Wrapper additionalContent={content}>
        <h1>Main Content</h1>
        <p>This is the content between Navbar and Footer.</p>
      </Wrapper>
    </div>
    </>
  );
}

const User = ({ name, isLoggedIn }) => {
  return (
    <div>
      <h1>{name}</h1>
      {isLoggedIn ? null : <h2>You are not authorized to see this user.</h2>}
    </div>
  );
}

export default App;