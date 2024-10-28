export interface CompanyCode {
  companyCode: string;
  companyName: string;
  country: string;
  currency: string;
}

export interface ProductType {
  productType: string;
  productText: string;
  companyCode: string;
}

export interface ISIN {
  secClassId: string;
  productType: string;
  longName: string;
  issuer: string;
  secClassification: string;
}
