import React from 'react';
import styles from './Badge.module.scss';
import { getStringAbbreviation } from '../../../Helpers';

export interface BadgeProps {
  customerName?: string;
  customerBadge?: string;
}

export const Badge = ({
  customerName,
  customerBadge
}: BadgeProps): React.ReactElement<BadgeProps> => {
  return (
    <div className={styles.badge}>
      {customerBadge && <img src={customerBadge} alt='' />}

      {!customerBadge && (
        <label className={styles.nameAbbrev}>
          {getStringAbbreviation(customerName as string)}
        </label>
      )}
    </div>
  );
};
