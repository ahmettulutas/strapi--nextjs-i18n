import Link from "next/link";
import Image from "next/image";

export function Logo(props: {
  src: string;
  children?: React.ReactNode;
  width: number;
  height: number;
}) {
  const { children, ...rest } = props;
  return (
    <Link
      href="/"
      aria-label="Back to homepage"
      className="flex items-center p-2"
    >
      {rest.src ? <Image {...rest} alt="logo" /> : null}
      <div className="ml-2">{children}</div>
    </Link>
  );
}
