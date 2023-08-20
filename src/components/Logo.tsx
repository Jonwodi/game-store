import "../sass/Logo.scss";

type Props = {
  src: string;
  alt: string;
  className: string;
};
export default function Logo({ src, alt, className }: Props) {
  return <img src={src} alt={alt} className={className} />;
}
