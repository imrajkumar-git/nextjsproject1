import React, { useEffect } from "react";
import NextLink from "next/link";
import { linkDetails } from "./__linkDetails";
import { HStack } from "@chakra-ui/react";

const NavItems = () => {
  useEffect(() => {
    const navbar = document.getElementById("navbar");
    const links = Array.from(document.querySelectorAll<HTMLAnchorElement>("#navLinks a"));
    const pill = document.getElementById("pill");
    const mobilePanel = document.getElementById("mobilePanel");
    const menuBtn = document.getElementById("menuBtn");

    const movePill = (el: HTMLElement | null) => {
      if (!pill || !el) return;
      pill.style.left = `${el.offsetLeft}px`;
      pill.style.width = `${el.offsetWidth}px`;
    };

    const handleScroll = () => {
      navbar?.classList.toggle("scrolled", window.scrollY > 40);
    };

    const handleLoad = () => movePill(document.querySelector("#navLinks a.active"));

    const handleMenuClick = () => {
      mobilePanel?.classList.toggle("open");
    };

    const clickHandlers: Array<() => void> = [];
    const mouseEnterHandlers: Array<() => void> = [];
    const mouseLeaveHandlers: Array<() => void> = [];

    links.forEach((link) => {
      const handleClick = (e: MouseEvent) => {
        e.preventDefault();
        links.forEach((l) => l.classList.remove("active"));
        link.classList.add("active");
        movePill(link);
        const href = link.getAttribute("href");
        if (href) window.location.href = href;
      };

      const handleMouseEnter = () => movePill(link);
      const handleMouseLeave = () => movePill(document.querySelector("#navLinks a.active"));

      link.addEventListener("click", handleClick);
      link.addEventListener("mouseenter", handleMouseEnter);
      link.addEventListener("mouseleave", handleMouseLeave);

      clickHandlers.push(() => link.removeEventListener("click", handleClick));
      mouseEnterHandlers.push(() => link.removeEventListener("mouseenter", handleMouseEnter));
      mouseLeaveHandlers.push(() => link.removeEventListener("mouseleave", handleMouseLeave));
    });

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("load", handleLoad);
    menuBtn?.addEventListener("click", handleMenuClick);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("load", handleLoad);
      menuBtn?.removeEventListener("click", handleMenuClick);
      clickHandlers.forEach((remove) => remove());
      mouseEnterHandlers.forEach((remove) => remove());
      mouseLeaveHandlers.forEach((remove) => remove());
    };
  }, []);

  return (
    <React.Fragment>
      <HStack display={{ md: "flex", sm: "none", xs: "none" }} flexDir={"row"}>
        <div className="navbar-wrap">
          <nav className="navbar" id="navbar">
            {/* <div className="brand">
              <span className="brand-mark"></span>
              Alex&nbsp;Rivera
            </div> */}

            <span className="brand-mark"></span>
            <div className="nav-links-wrapper">
              <div className="pill" id="pill"></div>
              <ul className="nav-links" id="navLinks">
                {linkDetails.map((item, index) => (
                  <li key={index}>
                    <NextLink href={item.link} >
                      {item.name}
                    </NextLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* <button className="cta">Resume</button>

            <button className="menu-btn" id="menuBtn" aria-label="Open menu">
              <svg viewBox="0 0 24 24" fill="none">
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="17" x2="20" y2="17" />
              </svg>
            </button> */}
          </nav>
        </div>
      </HStack>
    </React.Fragment>
  );
};

export default NavItems;
