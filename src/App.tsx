import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/GlobalStyles';
import { theme } from './styles/theme';
import { CustomCursor } from './components/CustomCursor';
import { Landing } from './components/Landing';
import { About } from './components/About';
import { Introduce } from './components/Introduce';
import { Portfolio } from './components/Portfolio';
import { Benefits } from './components/Benefits';
import { Apply } from './components/Apply';
import { PortfolioDetail } from './components/PortfolioDetail';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <CustomCursor />
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Landing />
                <About />
                <Introduce />
                <Portfolio />
                <Benefits />
                <Apply />
              </>
            }
          />
          <Route path="/portfolio/:category" element={<PortfolioDetail />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
