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
import { useEffect } from 'react';

export const Home = () => {
  useEffect(() => {
    document.title = 'Harbeni — 2030s Digital Intelligence Agency';

    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute('content', 'Harbeni builds autonomous digital empires. AI-first interfaces, intelligent systems, and futuristic experiences that anticipate the future.');
    }
  }, []);

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
