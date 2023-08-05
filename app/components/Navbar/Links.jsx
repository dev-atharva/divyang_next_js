import Link from "next/link";
import { usePathname } from "next/navigation";

const Links = () => {
  const pathname = usePathname();
  return (
    <div className="text-lg font-bold text-gray-600 flex flex-row items-center gap-y-3 gap-x-5">
      <Link
        href="/"
        className={`hover:underline ${pathname === "/" ? "text-blue-500" : ""}`}
      >
        Home
      </Link>
      <Link
        href="/schemes"
        className={`hover:underline ${
          pathname === "/schemes" ? "text-blue-500" : ""
        }`}
      >
        Schemes
      </Link>
      <Link
        href="/blog"
        className={`hover:underline ${
          pathname === "/blog" ? "text-blue-500" : ""
        }`}
      >
        Blogs
      </Link>
      <Link
        href="/community"
        className={`hover:underline ${
          pathname === "/community" ? "text-blue-500" : ""
        }`}
      >
        Community
      </Link>
      <Link
        href="/about"
        className={`hover:underline ${
          pathname === "/about" ? "text-blue-500" : ""
        }`}
      >
        About
      </Link>
    </div>
  );
};

export default Links;
