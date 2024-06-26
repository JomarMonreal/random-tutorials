"use client"

import Image from "next/image";
import logo from "../../public/images/trt_logo_outlined.webp";
import { links } from "@/data/links";
import PartlyOrangeText from "./PartlyOrangeText";
import { Button, Tab, Tabs } from "@mui/material";
import { ReactNode, useContext, useEffect, useState } from "react";
import { PopupContext, PopupContextType } from "@/providers/PopupProvider";
import Login from "./popups/Login";
import Signup from "./popups/Signup";

export function NavBar() {
  const popup = useContext(PopupContext) as PopupContextType
  const [currentTabIndex, setCurrentTabIndex] = useState(0)
  const [navLinks, setNavLinks] = useState(links)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(()=>{
    const tempNavLinks = links.filter(link => link.visibleInNavBar)
    const endPoint = `/${window.location.href.split("/").pop()}`
    setCurrentTabIndex(tempNavLinks.findIndex(link => link.path === endPoint))
    setNavLinks(tempNavLinks)
    setIsLoading(false)
  }, [])

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setCurrentTabIndex(newValue);
  };

  const openPopup = (child: ReactNode) => {
    popup.setChild(child)
    popup.setIsOpen(true)
  }

  return (
    <nav className="nav-bar">
      <NavBarLogo/>
      <NavBarTabs/>
      <NavBarCredentialButtons/>
    </nav>
  )

  function NavBarCredentialButtons() {
    return <menu className="flex justify-evenly w-52">
      <Button
        className="text-white font-rubik"
        onClick={() => openPopup(<Signup />)}
      >
        Sign Up
      </Button>
      <Button
        variant="contained"
        className="button-secondary"
        onClick={() => openPopup(<Login />)}
      >
        Log In
      </Button>
    </menu>;
  }

  function NavBarTabs() {
    return <Tabs
      value={currentTabIndex == -1? 0: currentTabIndex}
      onChange={handleChange}
      variant="scrollable"
      TabIndicatorProps={{
        style: {
          backgroundColor: isLoading? "primary": "white"
        }
      }}
      className="hidden sm:flex"
    >
      {navLinks.map((link, index) => {
        if (link.visibleInNavBar) {
          return <Tab key={index} href={link.path} label={link.label} id={`simple-tab-${index}`} sx={{
            color: "white !important"
          }} />;
        }
      }
      )}
    </Tabs>;
  }
  
  function NavBarLogo() {
    return <div className="flex select-none">
      <Image src={logo} alt="Website logo" width={70} className="p-4" />
      <div className="flex flex-col justify-center font-rubik font-semibold">
        <div className="text-2xl"><PartlyOrangeText orangeLettersCount={1} text={"RANDOM"} delay={6000} /></div>
        <div className="text-1xl"><PartlyOrangeText orangeLettersCount={2} text={"TUTORIALS"} delay={6000} /></div>
      </div>
    </div>;
  }
}

