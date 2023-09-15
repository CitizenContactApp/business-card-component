import React from 'react';
import styles from './CustomerInformation.module.scss';
import { BusinessCardCustomerData } from '../../Models';
import { getMailTo, getPhoneLabel, getWebSiteLabel } from '../../Helpers';
import { BusinessCardThemeType } from '../BusinessCard';

export interface CustomerInformationProps {
  customer: BusinessCardCustomerData;
  themeType: BusinessCardThemeType;
}

export const CustomerInformation = ({
  customer,
  themeType
}: CustomerInformationProps): React.ReactElement<CustomerInformationProps> => {
  return (
    <div
      className={`${styles.customerInformation} ${
        themeType === 'night' ? styles.isNightMode : ''
      }`}
    >
      <header>
        <h3>{customer.name}</h3>
        <p className={styles.state}> {customer.state}</p>
      </header>

      <div className={styles.body}>
        {customer.email && (
          <div className={styles.dataItem}>
            <label>E-MAIL</label>
            <a className={styles.value} href={getMailTo(customer.email)}>
              {customer.email}
            </a>
          </div>
        )}

        {customer.phoneNumber && (
          <div className={styles.dataItem}>
            <label>PHONE</label>
            <a className={styles.value} href={`tel:${customer.phoneNumber}`}>
              {getPhoneLabel(customer.phoneNumber as string)}
            </a>
          </div>
        )}

        {customer.webSite && (
          <div className={styles.dataItem}>
            <label>WEBSITE</label>
            <a
              className={styles.value}
              href={customer.webSite}
              target='_blank'
              rel='noreferrer'
            >
              {getWebSiteLabel(customer.webSite as string)}
            </a>
          </div>
        )}
      </div>
    </div>
  );
};
