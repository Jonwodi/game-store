import { ReactNode } from "react";
import "../sass/LeftBlock.scss";

type Props = {
  children: ReactNode;
};
export default function LeftBlock({ children }: Props) {
  return <div className="leftBlock">{children}</div>;
}
