import CTAButton from './components/CTAButton';
import About from './components/about/About';
import Features from './components/layout/Features';
import Home from './components/layout/Home';
import Testimonials from './components/layout/Testemonials';
import './index.css';

function App() {
  return (
    <div className="">
      <Home />
      {/* <About /> */}
      <Features />
      <div className='bg-gradient-to-b from-green-950 to-black p-3'>
        <Testimonials />
      </div>
    </div>
  );
}

export default App;
