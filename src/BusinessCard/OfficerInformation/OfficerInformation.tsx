import React from 'react';
import styles from './OfficerInformation.module.scss';
import { BusinessCardOfficerData } from '../../Models';
import { getMailTo, getPhoneLabel } from '../../Helpers';
import { BusinessCardThemeType } from '../BusinessCard';

export interface OfficerInformationProps {
  officer: BusinessCardOfficerData;
  themeType: BusinessCardThemeType;
}

export const OfficerInformation = ({
  officer,
  themeType
}: OfficerInformationProps): React.ReactElement<OfficerInformationProps> => {
  return (
    <div
      className={`${styles.officerInformation} ${
        themeType === 'night' ? styles.isNightMode : ''
      }`}
    >
      <header>
        {officer.title && <span className={styles.title}>{officer.title}</span>}
        <h2>{officer.name}</h2>
        <p className={styles.idNumber}>ID NUMBER {officer.idNumber}</p>
      </header>

      <div className={styles.body}>
        {officer.email && (
          <div className={styles.dataItem}>
            <label>E-MAIL</label>
            <a className={styles.value} href={getMailTo(officer.email)}>
              {officer.email}
            </a>
          </div>
        )}

        {officer.phoneNumber && (
          <div className={styles.dataItem}>
            <label>PHONE</label>
            <a className={styles.value} href={`tel:${officer.phoneNumber}`}>
              {getPhoneLabel(officer.phoneNumber as string)}
            </a>
          </div>
        )}
      </div>
    </div>
  );
};
