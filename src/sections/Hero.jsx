import HeroText from "../components/HeroText";
import ParallaxBackground from "../components/ParallaxBackground";
import { Particles } from "../components/ui/Particles";

const Hero = () => {
  return (
    <section className="relative flex items-start justify-center 
        md:items-start md:justify-start min-h-screen overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ParallaxBackground />
        </div>
        
        <Particles
          className="absolute inset-0 z-10"
          quantity={100}
          ease={80}
          refresh
          color="#ffffff"
        />

        <div className="relative z-20 w-full c-space">
          <HeroText />
        </div>
    </section>
  )
};

export default Hero