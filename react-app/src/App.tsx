import Box from '@mui/material/Box'
import Header from './components/Header.tsx'
import HomePage from './pages/HomePage.tsx'

function App() {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header title="Devin AI" />
      <Box component="main" sx={{ flexGrow: 1 }}>
        <HomePage />
      </Box>
    </Box>
  )
}

export default App
