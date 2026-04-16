import { HashRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { I18nProvider } from './lib/i18n';
import { ThemeProvider } from './lib/theme';
import { GlobalExplainer } from './pages/GlobalExplainer';
import { Home } from './pages/Home';
import { MalaysiaExplainer } from './pages/MalaysiaExplainer';
import { Myths } from './pages/Myths';
import { News } from './pages/News';
import { Sources } from './pages/Sources';
import { Timeline } from './pages/Timeline';

export default function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="whatthefuel-theme">
      <I18nProvider>
        <HashRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="news" element={<News />} />
              <Route path="global" element={<GlobalExplainer />} />
              <Route path="malaysia" element={<MalaysiaExplainer />} />
              <Route path="timeline" element={<Timeline />} />
              <Route path="myths" element={<Myths />} />
              <Route path="sources" element={<Sources />} />
            </Route>
          </Routes>
        </HashRouter>
      </I18nProvider>
    </ThemeProvider>
  );
}
