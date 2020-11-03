import BookList from './conponent/BookList'
import Navbar from './conponent/Navbar'
import ThemeToggle from './conponent/ThemeToggle'
import ThemeContextProvider from './contexts/ThemeContext'
function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Navbar />
        <BookList />
        <ThemeToggle />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
