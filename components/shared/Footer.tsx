import { Mail } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const emailAddress = "kreativbiro@gmail.com"; // Replace with your actual email address

  return (
    <footer className="border-t">
      <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
        <Link href="/">
          <h1>workshop hub</h1>
        </Link>
        <div className="flex gap-3">
          <Link
            href="mailto:your-email@example.com"
            className="flex items-center gap-2 hover:text-blue-500"
          >
            <Mail size={20} />
            <span>Contact</span>
          </Link>
          <p>2024 KreativBiro. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
