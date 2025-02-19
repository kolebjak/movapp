import { useTranslation } from 'next-i18next';
import React from 'react';
import kidsWords_CZ from '../../data/translations/cs/pro-deti.json';
import kidsWords_SK from '../../data/translations/sk/pro-deti_sk.json';
import kidsWords_PL from '../../data/translations/pl/pro-deti_pl.json';
import { Button } from '../../components/basecomponents/Button';
import { KidsTranslationsContainer } from '../../components/basecomponents/KidsTranslationContainer';
import { Phrase, TranslationJSON } from 'utils/Phrase';
import SEO from 'components/basecomponents/SEO';
import { CountryVariant, getCountryVariant } from 'utils/locales';
export { getStaticProps } from '../../utils/localization';

type KidsTranlsation = TranslationJSON & { image: string };

const KIDS_WORDS: Record<CountryVariant, KidsTranlsation[]> = {
  cs: kidsWords_CZ,
  sk: kidsWords_SK,
  pl: kidsWords_PL,
};

const KidsSection = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-gradient-to-r from-[#fdf6d2] to-[#99bde4] -mb-8 -m-2">
      <SEO
        title={t(`seo.kids_page_title.${getCountryVariant()}`)}
        description={t(`seo.kids_page_description.${getCountryVariant()}`)}
        image="https://www.movapp.cz/icons/movapp-cover-kids.jpg"
      />
      <div className="text-center sm:text-right pt-8 mr-0 sm:mr-16">
        <a href={`/kids/${getCountryVariant()}/omalovanky.pdf`} target="_blank" rel="noopener noreferrer" download>
          <Button text={t('kids_page.downloadPDF')} className="bg-primary-blue" />
        </a>
      </div>
      <div className="flex flex-wrap justify-center min-h-screen m-auto sm:py-10 px-2 sm:px-4">
        {KIDS_WORDS[getCountryVariant()].map((word, index) => {
          return <KidsTranslationsContainer key={index} image={word.image} translation={new Phrase(word)} />;
        })}
      </div>
    </div>
  );
};

export default KidsSection;
