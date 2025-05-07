import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoSpeedometer } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { TbCategory } from "react-icons/tb";
import {
  AiFillProduct,
  AiOutlineBlock,
  AiTwotoneDashboard,
} from "react-icons/ai";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { SiPrivateinternetaccess } from "react-icons/si";
import { FiUsers } from "react-icons/fi";
import { getFeaturePermissions } from "@/helpers/user-permission";
import { HiViewGridAdd } from "react-icons/hi";
const Navdata = () => {
  const history = useNavigate();
  const [isDashboard, setIsDashboard] = useState(false);
  const [isUsers, setIsUsers] = useState(false);
  const [iscurrentState, setIscurrentState] = useState("Dashboard");

  //Permissions

  const usersPermission = getFeaturePermissions("users");


  //compition


  function updateIconSidebar(e) {
    if (e && e.target && e.target.getAttribute("subitems")) {
      const ul = document.getElementById("two-column-menu");
      const iconItems = ul.querySelectorAll(".nav-icon.active");
      let activeIconItems = [...iconItems];
      activeIconItems.forEach((item) => {
        item.classList.remove("active");
        var id = item.getAttribute("subitems");
        if (document.getElementById(id))
          document.getElementById(id).classList.remove("show");
      });
    }
  }

  useEffect(() => {
    document.body.classList.remove("twocolumn-panel");

    if (iscurrentState !== "Dashboard") {
      setIsDashboard(false);
    }
  
    if (iscurrentState !== "Users") {
      setIsUsers(false);
    }
  }, [
    history,
    iscurrentState,
    isDashboard,
    isUsers,
  ]);

  const menuItems = [
    {
      label: "Menu",
      isHeader: true,
      permissions: true,
    },
    {
      id: "dashboard",
      label: "Dashboards",
      link: "/dashboard",
      permissions: true,
      stateVariables: isDashboard,
      icon: <AiTwotoneDashboard />,
      click: function (e) {
        e.preventDefault();
        setIsDashboard(!isDashboard);
        setIscurrentState("Dashboard");
        updateIconSidebar(e);
      },
    },
   
    {
      label: "Users",
      isHeader: true,
      permissions: usersPermission.read,
    },
   
    {
      id: "users",
      label: "Users",
      link: "/users",
      stateVariables: isUsers,
      icon: <FiUsers />,
      permissions: usersPermission.read,
      click: function (e) {
        e.preventDefault();
        setIsUsers(!isUsers);
        setIscurrentState("Users");
        updateIconSidebar(e);
      },
    },
  ];

  const filteredMenuItems = menuItems.filter(({ permissions }) => {
    return permissions === true;
  });
  return <React.Fragment>{filteredMenuItems}</React.Fragment>;
};

export default Navdata;
