import Link from "next/link";
import { Mail, Linkedin, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-gray-400 text-center py-6 mt-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        {/* Left Section - Copyright */}
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} SpeechAI. All rights reserved.
        </p>

        {/* Center Section - Important Links */}
        <div className="flex space-x-6 text-sm">
          <Link href="/privacy-policy" className="hover:text-white transition">
            Privacy Policy
          </Link>
          <Link
            href="/terms-of-service"
            className="hover:text-white transition"
          >
            Terms of Service
          </Link>
          <Link href="/contact" className="hover:text-white transition">
            Contact
          </Link>
        </div>

        {/* Right Section - Developer Contact & Socials */}
        <div className="flex space-x-4">
          <a
            href="mailto:kurtjonathangozano@gmail.com"
            className="hover:text-white transition"
            title="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com/in/developer"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
            title="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="https://github.com/jonavoidd"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
            title="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
