import CTAButton from './components/CTAButton';
import LMSPage from './components/LMSPage';
import About from './components/about/About';
import Features from './components/layout/Features';
import FrequentlyAskedQuestions from './components/layout/FrequentlyAskedQuestions';
import Home from './components/layout/Home';
import RegisterCTA from './components/layout/RegisterCTA';
import Testimonials from './components/layout/Testemonials';
import './index.css';

function App() {
  return (
    <div className="">
      <Home />

      {/* <About /> */}
      <Features />
      <div className='bg-gradient-to-b from-green-950 to-black p-3' >
        <Testimonials />
      </div>
      <FrequentlyAskedQuestions />
      <RegisterCTA />
      <LMSPage />
    </div>
  );
}

export default App;
