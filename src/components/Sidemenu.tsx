import {
  BarChartBigIcon,
  BoxIcon,
  BoxesIcon,
  LayoutDashboardIcon,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import Logo from "./Logo";

type Props = {};

const sideMenu = [
  {
    link: "/",
    title: "Dashboard",
    icon: <LayoutDashboardIcon />,
  },
  {
    link: "/sales",
    title: "Sales",
    icon: <BarChartBigIcon />,
  },
  {
    link: "/products",
    title: "Products",
    icon: <BoxIcon />,
  },
  {
    link: "/categories",
    title: "Categories",
    icon: <BoxesIcon />,
  },
];

const Sidemenu = (props: Props) => {
  return (
    <div className="sidebar">
      <Logo className="text-white" />
      <div className="flex flex-col mt-8">
        <ul className="space-y-2 text-lg ">
          {sideMenu.map(({ link, title, icon }: IFSideMenu) => (
            <li
              key={title}
              className="hover:bg-indigo-950 transition-all duration-200 ease-in-out py-2 px-4"
            >
              <Link href={link} className="flex text-zinc-100">
                {icon}
                <span className="ml-2">{title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidemenu;
