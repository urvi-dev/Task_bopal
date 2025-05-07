// Import Images
import avatar1 from "../../assets/images/users/avatar-1.jpg";
import avatar2 from "../../assets/images/users/avatar-2.jpg";
import avatar3 from "../../assets/images/users/avatar-3.jpg";
import avatar4 from "../../assets/images/users/avatar-4.jpg";
import avatar5 from "../../assets/images/users/avatar-5.jpg";
import avatar6 from "../../assets/images/users/avatar-6.jpg";
import avatar7 from "../../assets/images/users/avatar-7.jpg";
import avatar8 from "../../assets/images/users/avatar-8.jpg";
import avatar9 from "../../assets/images/users/avatar-9.jpg";
import avatar10 from "../../assets/images/users/avatar-10.jpg";

const todoTaskList = [
    {
      id: "1",
      task: "Added Select2",
      subItem: [
        {
          img: avatar1,
        },
        {
          img: avatar3,
        },
      ],
      dueDate: "54545454",
      status: "Active",
      priority: "nmajs@gmail.com",
    },
    {
      id: "2",
      task: "Additional Calendar",
      subItem: [
        {
          img: avatar5,
        },
        {
          img: avatar9,
        },
        {
          img: avatar10,
        },
      ],
      dueDate: "54455454",
      status: "Active",
       priority: "majs21@gmail.com",
    },
    {
      id: "3",
      task: "Add Dynamic Contact List",
      subItem: [
        {
          img: avatar5,
        },
        {
          img: avatar6,
        },
        {
          img: avatar7,
        },
        {
          img: avatar8,
        },
      ],
      dueDate: "45546521",
      status: "Active",
      priority: "jdfkj@gmail.com",
    },
    {
      id: "4",
      task: "Brand Logo design",
      subItem: [
        {
          img: avatar2,
        },
        {
          img: avatar10,
        },
        {
          img: avatar9,
        },
      ],
      dueDate: "87238723",
      status: "Active",
       priority: "nmajs@gmail.com",
    },
    {
      id: "5",
      task: "Change email option process",
      subItem: [
        {
          img: avatar3,
        },
        {
          img: avatar10,
        },
        {
          img: avatar9,
        },
      ],
      dueDate: "45621555",
      status: "Active",
      priority: "jdfkj@gmail.com",
    },
    {
      id: "6",
      task: "Make a creating an account profile",
      subItem: [
        {
          img: avatar3,
        },
      ],
      dueDate: "1334542",
      status: "Active",
       priority: "nmajs@gmail.com",
    },
    {
      id: "7",
      task: "Profile Page Structure",
      subItem: [
        {
          img: avatar4,
        },
        {
          img: avatar5,
        },
      ],
      dueDate: "456257617",
      status: "Active",
       priority: "hjsdu4334@gmail.com",
    },
    // {
    //   id: "8",
    //   task: "Datatable with jQuery cdn",
    //   subItem: [
    //     {
    //       img: avatar6,
    //     },
    //     {
    //       img: avatar7,
    //     },
    //     {
    //       img: avatar8,
    //     },
    //   ],
    //   dueDate: "67398499",
    //   status: "Active",
    //   priority: "jdfkj@gmail.com",
    // },
    // {
    //   id: "9",
    //   task: "Added File Manager Apps",
    //   subItem: [
    //     {
    //       img: avatar3,
    //     },
    //     {
    //       img: avatar4,
    //     },
    //     {
    //       img: avatar5,
    //     },
    //   ],
    //   dueDate: "98000939",
    //   status: "Active",
    //    priority: "nmajs@gmail.com",
    // },
    // {
    //   id: "10",
    //   task: "Added Back to Top button",
    //   subItem: [
    //     {
    //       img: avatar6,
    //     },
    //     {
    //       img: avatar7,
    //     },
    //   ],
    //   dueDate: "9090490",
    //   status: "Active",
    //   priority: "jdfkj@gmail.com",
    // },
    // {
    //   id: "11",
    //   task: "Added bdge new style - gradient",
    //   subItem: [
    //     {
    //       img: avatar3,
    //     },
    //     {
    //       img: avatar10,
    //     },
    //     {
    //       img: avatar9,
    //     },
    //   ],
    //   dueDate: "09903409",
    //   status: "Active",
    //    priority: "nmajs@gmail.com",
    // },
    // {
    //   id: "12",
    //   task: "Added new tabs styles",
    //   subItem: [
    //     {
    //       img: avatar2,
    //     },
    //   ],
    //   dueDate: "90909090",
    //   status: "Active",
    //   priority: "hjsdu4334@gmail.com",
    // },
    // {
    //   id: "13",
    //   task: "Make a creating an account profile",
    //   subItem: [
    //     {
    //       img: avatar5,
    //     },
    //     {
    //       img: avatar6,
    //     },
    //     {
    //       img: avatar7,
    //     },
    //     {
    //       img: avatar8,
    //     },
    //   ],
    //   dueDate: "0939029",
    //   status: "Active",
    //    priority: "hjsdu4334@gmail.com",
    // },
    // {
    //   id: "14",
    //   task: "Additional Mailbox",
    //   subItem: [
    //     {
    //       img: avatar5,
    //     },
    //     {
    //       img: avatar9,
    //     },
    //     {
    //       img: avatar10,
    //     },
    //   ],
    //   dueDate: "23099009",
    //   status: "Active",
    //    priority: "nmajs@gmail.com",
    // },
    // {
    //   id: "15",
    //   task: "Added Email Templates",
    //   subItem: [
    //     {
    //       img: avatar1,
    //     },
    //     {
    //       img: avatar3,
    //     },
    //   ],
    //   dueDate: "23909090",
    //   status: "Active",
    //   priority: "jdfkj@gmail.com",
    // },
  ];
  

const todoCollapse = [
    {
      id: 1,
      title: "Velzon Admin & Dashboard",
      subItem: [
        { id: 1, version: "v1.4.0", iconClass: "danger" },
        { id: 2, version: "v1.5.0", iconClass: "secondary" },
        { id: 3, version: "v1.6.0", iconClass: "info" },
        { id: 4, version: "v1.7.0", iconClass: "primary" },
        { id: 5, version: "v1.8.0", iconClass: "warning" },
      ],
    },
    {
      id: 2,
      title: "Project Management",
      subItem: [
        { id: 1, version: "v2.1.0", iconClass: "danger" },
        { id: 2, version: "v2.2.0", iconClass: "secondary" },
        { id: 3, version: "v2.3.0", iconClass: "info" },
        { id: 4, version: "v2.4.0", iconClass: "primary" },
      ],
    },
    {
      id: 3,
      title: "Skote Admin & Dashboard",
      subItem: [
        { id: 1, version: "v4.1.0", iconClass: "danger" },
        { id: 2, version: "v4.2.0", iconClass: "secondary" },
      ],
    },
    {
      id: 4,
      title: "Doot - Chat App Template",
      subItem: [
        { id: 1, version: "v1.0.0", iconClass: "danger" },
        { id: 2, version: "v1.1.0", iconClass: "secondary" },
        { id: 2, version: "v1.2.0", iconClass: "info" },
      ],
    },
  ];
export { todoTaskList, todoCollapse }