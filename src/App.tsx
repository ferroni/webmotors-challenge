import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { SearchBox } from './components/SearchBox';
import { GlobalStyle } from "./styles/global";
import { SearchsProvider } from './hooks/useSearch';

export function App() {
  return (
    <SearchsProvider>
      <Header />
      <SearchBox />
      <Dashboard />
      <GlobalStyle />
    </SearchsProvider>
  );
}
