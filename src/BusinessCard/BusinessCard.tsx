import React, { createContext } from 'react';
import styles from './BusinessCard.module.scss';
import { BusinessCardData } from '../Models';
import { OfficerInformation } from './OfficerInformation/OfficerInformation';
import { CustomerInformation } from './CustomerInformation/CustomerInformation';
import { Avatar } from './Avatar/Avatar';

export type BusinessCardThemeType = 'day' | 'night';
export type BusinessCardMediaType = 'mobile' | 'desktop';

export interface BusinessCardProps {
  className?: string;
  data: BusinessCardData;
  mediaType?: BusinessCardMediaType;
  themeType?: BusinessCardThemeType;
}

export const BusinessCard = ({
  className = '',
  data,
  mediaType = 'mobile',
  themeType = 'day'
}: BusinessCardProps): React.ReactElement<BusinessCardProps> => {
  return (
    <div
      className={`${styles.businessCard} ${
        themeType === 'night' ? styles.isNightMode : ''
      } ${mediaType === 'desktop' ? styles.isDesktop : ''} ${className}`}
    >
      <Avatar
        officer={data.officer}
        customerName={data.customer.name}
        customerBadge={data.customer.badgeUrl}
        mediaType={mediaType}
      />

      <div className={styles.body}>
        <OfficerInformation officer={data.officer} themeType={themeType} />

        <hr className={styles.separator} />

        <CustomerInformation customer={data.customer} themeType={themeType} />
      </div>
    </div>
  );
};
