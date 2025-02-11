export interface ListingAddress {
  formattedAddress: string;
}

export interface ListingUserData {
  linkToPhotos?: string | null;
}

export enum ListingZillowDataHomeStatus {
  other = 'OTHER',
  forSale = 'FOR_SALE',
  forRent = 'FOR_RENT',
}

export interface ListingZillowData {
  homeStatus: ListingZillowDataHomeStatus | string;
  dateSold?: number | null | undefined;
}

export interface Listing {
  _id: string;
  address: ListingAddress;
  userData: ListingUserData;
  zillowData?: ListingZillowData;
}
