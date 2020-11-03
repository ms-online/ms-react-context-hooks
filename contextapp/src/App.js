import BookList from './conponent/BookList'
import Navbar from './conponent/Navbar'
import ThemeToggle from './conponent/ThemeToggle'
import AuthContextProvider from './contexts/AuthContext'
import ThemeContextProvider from './contexts/ThemeContext'
function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
        <Navbar />
        <BookList />
        <ThemeToggle />
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
