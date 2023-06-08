import { PropsWithChildren, ReactElement, useCallback, useState } from "react";
import Sidebar from "./Sidebar";
import hamburgerMenu from "assets/images/hamburger-menu.svg";
import clsx from "clsx";
import cross from "assets/images/cross.svg";

const AppContainer = ({ children }: PropsWithChildren) => {
  const [sidebarToggle, setSidebarToggle] = useState(false);
  const [hamburgerMenuOpen, setHamburgerMenu] = useState<boolean>(false);

  const toggle = useCallback(() => {
    setSidebarToggle((prev) => !prev);
  }, [setSidebarToggle]);

  return (
    <section className="bg-darkjunglegreen">
      <button
        onClick={() => setHamburgerMenu(!hamburgerMenuOpen)}
        className="md:hidden ml-5 mt-5 w-10 h-10 z-[11]"
      >
        <img src={hamburgerMenu} alt="msg" width={22} height={22} className="mx-auto" />
      </button>
      {!hamburgerMenuOpen && (
        <button
          onClick={() => setHamburgerMenu(true)}
          className="w-[40px] md:hidden z-[11] fixed right-[14px] top-[24px]"
        >
          <img src={cross} alt="cross" width={26} height={26} className="mx-auto" />
        </button>
      )}
      <div className="min-h-screen flex w-full">
        <div className={clsx({ "max-md:hidden": hamburgerMenuOpen })}>
          <Sidebar />
        </div>
        <div className="main-container">{children}</div>
      </div>
    </section>
  );
};

export default AppContainer;
