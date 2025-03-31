import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import * as styles from "./layout.css";

interface LinkButtonProps {
  src: string;
  alt: string;
  href: string;
  text: string;
}

export default function LinkButton({ src, alt, href, text }: LinkButtonProps) {
  const pathname = usePathname();

  return (
    <Link href={href}>
      <div className={styles.buttonWrapper}>
        <Image
          src={src}
          alt={alt}
          width={24}
          height={24}
          priority
          style={{
            filter:
              pathname === href
                ? "invert(20%) sepia(40%) saturate(300%) hue-rotate(85deg) brightness(120%) contrast(100%)"
                : "",
          }}
        />
        <span>{text}</span>
      </div>
    </Link>
  );
}
