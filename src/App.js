import React from 'react';
import InsurancePage from './components/InsurancePage';
import InsuranceOptions from './components/InsuranceOptions';
import FooterPromotions from './components/FooterPromotions';
import InfoSection from './components/InfoSection';
import PopularCalculators from './components/PopularCalculators';
import PBAdvantage from './components/PBAdvantage';
import GroupBrands from './components/GroupBrands';
import Footer from './components/Footer';
import ImageCarousel from './components/ImageCarousel';


function App() {
  return (
    <div className="App">
      <InsurancePage />
      <InsuranceOptions/>
      <FooterPromotions/>
      <InfoSection/>
      <ImageCarousel/>
      <PopularCalculators/>
      <PBAdvantage/>
      <GroupBrands/>
      <Footer/>
    </div>
  );
}

export default App;
