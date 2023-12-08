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
  },
  notes: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Proin nibh nisl condimentum id venenatis a condimentum vitae. Cursus eget nunc scelerisque viverra. Gravida arcu ac tortor dignissim convallis. Magna etiam tempor orci eu lobortis elementum nibh tellus molestie. Et egestas quis ipsum suspendisse ultrices gravida dictum fusce. Aliquam sem fringilla ut morbi tincidunt augue interdum. Ligula ullamcorper malesuada proin libero. Eget arcu dictum varius duis at. Odio facilisis mauris sit amet. Blandit turpis cursus in hac habitasse platea dictumst quisque. Et malesuada fames ac turpis. Sed lectus vestibulum mattis ullamcorper velit sed ullamcorper. Malesuada nunc vel risus commodo.

  Commodo nulla facilisi nullam vehicula ipsum. Egestas fringilla phasellus faucibus scelerisque eleifend. Nisl purus in mollis nunc sed id semper risus in. Viverra maecenas accumsan lacus vel facilisis. Eu feugiat pretium nibh ipsum consequat nisl vel. Nunc non blandit massa enim. Lobortis scelerisque fermentum dui faucibus in ornare quam viverra. Tellus id interdum velit laoreet id. Elit eget gravida cum sociis natoque. Volutpat blandit aliquam etiam erat velit scelerisque in dictum. In tellus integer feugiat scelerisque varius morbi enim. Arcu cursus vitae congue mauris rhoncus aenean. Volutpat sed cras ornare arcu. Pellentesque id nibh tortor id aliquet lectus proin nibh nisl. Scelerisque fermentum dui faucibus in ornare. Egestas sed tempus urna et pharetra pharetra.
  
  Luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor purus. Libero nunc consequat interdum varius sit amet. Vitae turpis massa sed elementum tempus egestas sed. Risus commodo viverra maecenas accumsan lacus vel facilisis volutpat. Feugiat nisl pretium fusce id velit ut tortor pretium viverra. Duis at consectetur lorem donec massa. Interdum consectetur libero id faucibus nisl tincidunt eget. Enim sit amet venenatis urna cursus eget nunc. Dictum fusce ut placerat orci nulla pellentesque dignissim enim. Sed risus pretium quam vulputate dignissim suspendisse in est. Venenatis lectus magna fringilla urna porttitor.`
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
