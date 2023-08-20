import "../sass/Hero.scss";

type Props = {
  className: string;
};
export default function Hero({ className }: Props) {
  return <div className={className}></div>;
}
