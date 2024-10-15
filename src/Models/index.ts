export interface BusinessCardCustomerData {
  name?: string;
  state?: string;
  badgeUrl?: string;
  phoneNumber?: string;
  email?: string;
  webSite?: string;
}

export interface BusinessCardOfficerData {
  name?: string;
  idNumber?: string;
  phoneNumber?: string;
  email?: string;
  avatarUrl?: string;
  title?: string;
}

export interface DataItem {
  label: string;
  key: string;
  value?: string;
}

export interface BusinessCardData {
  officer: BusinessCardOfficerData;
  customer: BusinessCardCustomerData;
  notes?: string;
}
