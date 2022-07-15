export type Item = {
  id: string;
  title: string;
  image: URL | any;
  subtitle: string;
  brand: string;
  reviews: ReviewData[];
  retailer: string;
  details: [string];
  tags: [string];
  sales: SalesData[];
};

export type ReviewData = {
  customer: string;
  review: string;
  score: number;
};

export type SalesData = {
  weekEnding: string;
  retailSales: number;
  wholesaleSales: number;
  unitsSold: number;
  retailerMargin: number;
};
