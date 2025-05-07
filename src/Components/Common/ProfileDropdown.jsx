import React, { useState } from "react";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";

//import images
import { IoSettings } from "react-icons/io5";
import { PiSignOutBold } from "react-icons/pi";
import { getInitials } from "@/constants/constants";
import { useTranslation } from "react-i18next";

const ProfileDropdown = () => {
  const { i18n } = useTranslation();
  // Inside your component
  const {
    data: { name},
  } = JSON.parse(localStorage.getItem("authUser"));

  //Dropdown Toggle
  const [isProfileDropdown, setIsProfileDropdown] = useState(false);
  const toggleProfileDropdown = () => {
    setIsProfileDropdown(!isProfileDropdown);
  };
  return (
    <React.Fragment>
      <Dropdown
        isOpen={isProfileDropdown}
        toggle={toggleProfileDropdown}
        className="ms-sm-3 header-item topbar-user"
      >
        <DropdownToggle tag="button" type="button" className="btn shadow-none">
          <span className="d-flex align-items-center">
            <div className="avatar-circle">
              <span className="initials">
                {getInitials(
                  name
                 
                )}
              </span>
            </div>
            <span className="text-start ms-xl-2">
              <span className="d-none d-xl-inline-block ms-1 fw-medium user-name-text">
                {name}
              </span>
            </span>
          </span>
        </DropdownToggle>
        <DropdownMenu className="dropdown-menu-end">
          <DropdownItem href={import.meta.env.VITE_PUBLIC_URL + "/logout"}>
            <PiSignOutBold size={20} />{" "}
            <span className="align-middle" data-key="t-logout">
              Logout
            </span>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </React.Fragment>
  );
};

export default ProfileDropdown;
