import Link from "next/link";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import {globalMetadata} from "@/app/metadata";

const appLinks = [
  {
    'name': 'Coming soon',
    'url': '#',
    'icon': '',
    'className': '',
  },
  {
    'name': 'Coming soon',
    'url': '#',
    'icon': '',
    'className': 'pointer-events-none opacity-50',
  },
  {
    'name': 'Coming soon',
    'url': '#',
    'icon': '',
    'className': 'pointer-events-none opacity-50',
  },
  {
    'name': 'Coming soon',
    'url': '#',
    'icon': '',
    'className': 'pointer-events-none opacity-50',
  },
]

export const metadata = {
  ...globalMetadata,
  title: "Apps",
  description: "Explore various applications developed by Alvarizqi Cahya Saputra."
}

export default function AppsPage() {
  return (
    <>
      <div
        className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center">
          <div className="flex gap-4 items-center flex-col sm:flex-row">
            {appLinks.map((link, index) => (
              <Link key={index} href={link.url}
                    className={`rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors duration-300 flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44 ${link.className}`}>
                {link.icon && <FontAwesomeIcon icon={link.icon} width={12} alt={link.name}/>}
                {link.name}
              </Link>
            ))}
          </div>
        </main>
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
          <Link href="/"
                className="flex items-center space-x-2 text-neutral-600 transition-colors duration-300 hover:text-neutral-800">
            <FontAwesomeIcon icon={faArrowLeft} width={12}/>
            <span>Go Back</span>
          </Link>
        </footer>
      </div>
    </>
  );
}