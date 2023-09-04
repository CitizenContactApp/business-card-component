export interface Customer {
  name?: string;
  state?: string;
  badgeUrl?: string;
  phoneNumber?: string;
  email?: string;
  webSite?: string;
}

export interface Officer {
  name?: string;
  idNumber?: string;
  phoneNumber?: string;
  email?: string;
  avatarUrl?: string;
}

export interface DataItem {
  label: string;
  key: string;
  value?: string;
}

export interface BusinessCardData {
  officer: Officer;
  customer: Customer;
}
