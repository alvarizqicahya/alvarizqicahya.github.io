import Image from "next/image";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Link from "next/link";
import {
  faGithub,
  faInstagram,
  faLinkedinIn,
  faTelegram,
  faXTwitter
} from "@fortawesome/free-brands-svg-icons";
import {faBars, faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {metadata} from "@/app/layout";

const socialMediaLinks = [
  {
    name: "GitHub",
    url: "https://github.com/alvarizqicahya",
    icon: faGithub,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/alvarizqicahya",
    icon: faLinkedinIn,
  },
  {
    name: "Telegram",
    url: "https://t.me/alvarizqicahya",
    icon: faTelegram,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/alvarizqicahya",
    icon: faInstagram,
  },
  {
    name: "Twitter",
    url: "https://x.com/alvarizqicahya",
    icon: faXTwitter,
  },
  {
    name: "Email",
    url: "mailto:alvarizqicahya@gmail.com",
    icon: faEnvelope,
  }
]

export default function Home() {
  return (
    <div
      className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center lg:max-w-2xl">
        <Image
          className="rounded-full transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl"
          src="/assets/images/profile.png"
          alt={metadata.title}
          width={250}
          height={250}
          priority
        />
        <h1 className="text-3xl font-extrabold font-sans">{metadata.title}</h1>

        <p className="list-inside list-decimal text-sm text-center font-[family-name:var(--font-geist-mono)]">
          I am a
          <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
            Software Developer
          </code>
          specializing in web application development, with expertise in
          <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">PHP</code>,
          <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">Python</code>,
          <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">JavaScript</code>,
          and more, and can use several frameworks.</p>

        <div className="flex gap-4 items-center flex-row">
          {socialMediaLinks.map((link, index) => (
            <Link key={index} href={link.url} target="_blank"
                  className="text-neutral-600 transition-colors duration-300 hover:text-neutral-800">
              {link.icon && <FontAwesomeIcon icon={link.icon} width={24} alt={link.name}/>}
            </Link>
          ))}
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <Link href="/apps"
              className="flex items-center space-x-2 text-neutral-600 transition-colors duration-300 hover:text-neutral-800">
          <FontAwesomeIcon icon={faBars} width={12}/>
          <span>Apps</span>
        </Link>
      </footer>
    </div>
  );
}
