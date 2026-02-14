import Header from '@/components/layout/Header';
import TechLogoLoop from '@/components/ui/TechLogoLoop';
import Home from '@/pages/Home';
import ClickSpark from './components/react-bits/click-spark/ClickSpark';

export default function App() {
  return (
    <>
      <ClickSpark
        sparkColor="#cdd6f4"
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >
        <div className="container">
          <Header />
          <Home />
        </div>
        <TechLogoLoop />
      </ClickSpark>
    </>
  );
}
