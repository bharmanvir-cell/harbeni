import { Hero } from '../components/Hero';
import { StatsBar } from '../components/StatsBar';
import { Services } from '../components/Services';
import { Architecture } from '../components/Architecture';
import { Marquee } from '../components/Marquee';
import { EnterpriseFeatures } from '../components/EnterpriseFeatures';
import { FAQ } from '../components/FAQ';
import { ROICalculator } from '../components/ROICalculator';
import { Comparison } from '../components/Comparison';
import { ResultsTicker } from '../components/ResultsTicker';

export const Home = () => {
  return (
    <>
      <Hero />
      <StatsBar />
      <Services />
      <ROICalculator />
      <Comparison />
      <Architecture />
      <ResultsTicker />
      <Marquee />
      <EnterpriseFeatures />
      <FAQ />
    </>
  );
};
