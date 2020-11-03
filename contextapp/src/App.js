import BookList from './conponent/BookList'
import Navbar from './conponent/Navbar'
import ThemeContextProvider from './contexts/ThemeContext'
function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Navbar />
        <BookList />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
