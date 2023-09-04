import React from 'react';
import styles from './Avatar.module.scss';
import { Badge } from './Badge/Badge';
import { Officer } from '../../Models';
import { SFTextShadow } from '../../Components/SFTextShadow/SFTextShadow';
import { getStringAbbreviation } from '../../Helpers';
import { BusinessCardMediaType } from '../BusinessCard';

export interface AvatarProps {
  officer: Officer;
  customerName?: string;
  customerBadge?: string;
  mediaType: BusinessCardMediaType;
}

export const Avatar = ({
  officer,
  customerName,
  customerBadge,
  mediaType
}: AvatarProps): React.ReactElement<AvatarProps> => {
  return (
    <div
      className={`${styles.avatar} ${
        !officer.avatarUrl ? styles.defaultBg : ''
      } ${mediaType === 'desktop' ? styles.isDesktop : ''}`}
    >
      {officer.avatarUrl && <img src={officer.avatarUrl} alt='' />}

      {!officer.avatarUrl && (
        <div className={styles.nameAbbrev}>
          <SFTextShadow
            text={getStringAbbreviation(officer.name as string)}
            color='#003DCC'
            size={300}
            opacity={0.2}
            type='default'
          ></SFTextShadow>
        </div>
      )}

      <Badge customerName={customerName} customerBadge={customerBadge} />
    </div>
  );
};
