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
  const [error, setError] = React.useState<boolean>(false);

  return (
    <div className={styles.badge}>
      {customerBadge && !error && (
        <img src={customerBadge} alt='' onError={() => setError(true)} />
      )}

      {(!customerBadge || error) && (
        <label className={styles.nameAbbrev}>
          {getStringAbbreviation(customerName as string)}
        </label>
      )}
    </div>
  );
};
