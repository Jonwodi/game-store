import { ReactNode } from "react";
import "../sass/Store.scss";

type Props = {
  children: ReactNode;
};
export default function Store({ children }: Props) {
  return <div className="store">{children}</div>;
}
