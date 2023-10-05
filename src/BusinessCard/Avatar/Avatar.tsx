import React from 'react';
import styles from './Avatar.module.scss';
import { Badge } from './Badge/Badge';
import { BusinessCardOfficerData } from '../../Models';
import { SFTextShadow } from '../../Components/SFTextShadow/SFTextShadow';
import { getStringAbbreviation } from '../../Helpers';
import { BusinessCardMediaType } from '../BusinessCard';

export interface AvatarProps {
  officer: BusinessCardOfficerData;
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
  const [error, setError] = React.useState<boolean>(false);

  return (
    <div
      className={`${styles.avatar} ${
        !officer.avatarUrl || error ? styles.defaultBg : ''
      } ${mediaType === 'desktop' ? styles.isDesktop : ''}`}
    >
      {officer.avatarUrl && !error && (
        <img src={officer.avatarUrl} alt='' onError={() => setError(true)} />
      )}

      {(!officer.avatarUrl || error) && (
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
