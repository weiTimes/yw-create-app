export interface IRes<T> {
  success: boolean;
  errorMessage: string;
  errorCode: string;
  data: {
    code: string;
    message: string;
    data: T;
  };
}

export interface IDepartSale {
  name: string;
  sales?: number;
  percent: number;
}

export interface ISalesTotal {
  targetPercent: number;
  sales: number;
  timePercent: number;
}

export interface IRankTeams {
  teamList: IRank[];
  achieveList: IRank[];
  specialTrainList: IRank[];
}

export interface ITopShop {
  shopName: string;
  sales: number;
  newCusSale: number;
}

export interface IRank {
  name: string;
  targetPercent: number;
  totalSale: number;
}
