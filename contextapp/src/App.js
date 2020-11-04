import BookList from './conponent/BookList'
import Navbar from './conponent/Navbar'
import ThemeToggle from './conponent/ThemeToggle'
import AuthContextProvider from './contexts/AuthContext'
import BookContextProvider from './contexts/BookContext'
import ThemeContextProvider from './contexts/ThemeContext'
function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar />
          <BookContextProvider>
            <BookList />
          </BookContextProvider>
        <ThemeToggle />
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
