import Content from "./Content";
import Header from "./Header";
import Root from "./Root";
import Title from "./Title";

type DashBoardTotalCard = {
  value: number;
  percentage?: number;
  absolute?: number;
};

export type DashBoardCard = {
  total: DashBoardTotalCard;
  currencyCC: string | undefined;
  info?: string;
};

export const InfoCard = {
  Root: Root,
  Header: Header,
  Title: Title,
  Content: Content
};
