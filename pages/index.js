import Layout from '../components/Layout';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import DiseasesSection from '../components/DiseasesSection';
import FactorsSection from '../components/FactorsSection';
import PotabilityForm from '../components/PotabilityForm';
import ArticlesSection from '../components/ArticleSection';

const HomePage = () => {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <ArticlesSection/>
      <DiseasesSection />
      <FactorsSection />
      <PotabilityForm />
    </Layout>
  );
};

export default HomePage;
