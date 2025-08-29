import Link from "next/link";

const navLinks = [
    {
        title: "Home",
        path: "/",
        children: [
            { title: "Current Status", path: "/#status" },
            { title: "About Me", path: "/#about" },
        ],
    },
    {
        title: "More About Me",
        path: "/moreabout",
    },
    {
        title: "Experience",
        path: "/experience",
    },
    {
        title: "Projects",
        path: "/projects",
    },
    {
        title: "Contact",
        path: "/contact",
    },
]

const Footer = () => (
  <footer className="bg-gradient-to-r bg-transparent text-black py-8 px-4">
    <div className="flex flex-col items-center">
      <nav className="flex mb-6">
            <ul className="flex p-4 md:p-0 md:flex-row text-xl font-bold md:space-x-30 space-x-10">
                {navLinks.map((link) => (
                    <li key={link.title} className="relative group">
                        <Link href={link.path} className="underline-offset-4 hover:underline">
                            {link.title}
                        </Link>
                    </li>
                ))}
            </ul>
      </nav>
      <div className="border-t border-black w-full mt-4 pt-4 text-center text-sm">
        &copy; Zhenqi Zhang {new Date().getFullYear()}
      </div>
    </div>
  </footer>
);

export default Footer;