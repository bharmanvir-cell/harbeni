import { Hero } from '../components/Hero';
import { StatsBar } from '../components/StatsBar';
import { Services } from '../components/Services';
import { Architecture } from '../components/Architecture';
import { Marquee } from '../components/Marquee';
import { EnterpriseFeatures } from '../components/EnterpriseFeatures';
import { FAQ } from '../components/FAQ';

export const Home = () => {
  return (
    <>
      <Hero />
      <StatsBar />
      <Services />
      <Architecture />
      <Marquee />
      <EnterpriseFeatures />
      <FAQ />
    </>
  );
};
