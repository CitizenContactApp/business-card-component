import React from 'react';
import styles from './App.module.scss';
import { BusinessCard, BusinessCardData } from 'business-card-component';

const data: BusinessCardData = {
  officer: {
    name: 'John Williams',
    idNumber: '9956',
    phoneNumber: '3038005042',
    email: 'jwilliams@liberty-pd.com',
    avatarUrl:
      'https://raw.githubusercontent.com/CitizenContactApp/cc/2e32a9df1505ca80e46a45cfce912493cd3da7bc/assets/fake_officer.jpeg'
  },
  customer: {
    name: 'Liberty Police Department',
    state: 'Colorado',
    badgeUrl:
      'https://raw.githubusercontent.com/CitizenContactApp/cc/2e32a9df1505ca80e46a45cfce912493cd3da7bc/badges/liberty-co.png',
    phoneNumber: '3038005042',
    email: 'info@liberty-pd.com',
    webSite: 'https://liberty-pd.com'
  }
};

export const App = () => {
  const [isNightMode, setIsNightMode] = React.useState<boolean>(false);
  const [isDesktop, setIsDesktop] = React.useState<boolean>(false);

  const onChangeTheme = () => {
    setIsNightMode((mode: boolean) => !mode);
  };

  const onChangeMedia = () => {
    setIsDesktop((mode: boolean) => !mode);
  };

  return (
    <div className={styles.app}>
      <header>
        <button onClick={onChangeTheme}>Toggle Theme (Day/Night)</button>
        <button onClick={onChangeMedia}>Toggle Media (Mobile/Desktop)</button>
      </header>

      <BusinessCard
        themeType={isNightMode ? 'night' : 'day'}
        mediaType={isDesktop ? 'desktop' : 'mobile'}
        data={data}
      />
    </div>
  );
};
