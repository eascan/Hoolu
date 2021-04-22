import Image from "next/image";
import HeaderItem from "./HeaderItem";
import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";

function Header() {
  return (
    <header className="flex flex-col sm:flex-row justify-between items-center h-auto">
      <div className="flex flex-grow justify-evenly max-w-2xl mt-7 md:mt-6">
        <HeaderItem title="HOME" Icon={HomeIcon} />
        <HeaderItem title="TRENDING" Icon={LightningBoltIcon} />
        <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon} />
        <HeaderItem title="COLLECTIONS" Icon={CollectionIcon} />
        <HeaderItem title="SEARCH" Icon={SearchIcon} />
        <HeaderItem title="ACCOUNT" Icon={UserIcon} />
      </div>
      <div className="mr-0 sm:mr-8">
        <Image
          className="object-contain"
          src="https://i.ibb.co/ZLk6BSh/Hoolu.png"
          width={80}
          height={60}
        />
      </div>
    </header>
  );
}

export default Header;
