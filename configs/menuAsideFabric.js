import {
  mdiAccountCircle,
  mdiMonitor,
  mdiHelpCircle,
  mdiLock,
  mdiSquareEditOutline,
  mdiTable,
  mdiMenuOpen,
  mdiTelevisionGuide,
  mdiBarcode,
  mdiPalette,
  mdiCardAccountDetailsOutline,
  mdiOpenInNew,
  mdiFormDropdown,
  mdiBallot,
  mdiViewQuilt,
  mdiMessage,
  mdiFastForwardOutline,
  mdiBook,
} from "@mdi/js";

export default [
  {
    to: "",
    icon: mdiMonitor,
    label: "Home",
  },
  {
    to: "",
    label: "UI Base",
    icon: mdiTelevisionGuide,
  },
  {
    to: "",
    label: "Tables & Lists",
    icon: mdiTable,
    updateMark: "warning",
  },

  {
    to: "",
    label: "Forms Advanced",
    icon: mdiBallot,
  },

  {
    to: "",
    label: "UI Advanced",
    icon: mdiViewQuilt,
  },
  {
    to: "",
    label: "Stylize",
    icon: mdiPalette,
  },
  {
    to: "",
    label: "Pricing layout",
    icon: mdiBarcode,
  },
  {
    label: "",
    icon: mdiFormDropdown,
    menu: [
      {
        label: "Dropdown item Uno",
      },
      {
        label: "Dropdown item Dos",
      },
    ],
  },
  {
    to: "",
    label: "Profile",
    icon: mdiAccountCircle,
  },
  {
    to: "",
    label: "Login",
    icon: mdiLock,
  },
  {
    to: "",
    label: "Register",
    icon: mdiSquareEditOutline,
  },
  {
    // Key should be unique for each submenus object
    // It is required for open/close logic
    key: "submenus-1",
    label: "Sub",
    icon: mdiMenuOpen,
    menuSecondary: [
      {
        to: "",
        label: "Sample RouterLink",
        icon: mdiCardAccountDetailsOutline,
      },
      {
        label: "External link",
        href: "",
        icon: mdiOpenInNew,
        target: "_blank",
      },
      {
        label: "Dropdown",
        icon: mdiFormDropdown,
        menu: [
          {
            label: "Dropdown item One",
          },
          {
            label: "Dropdown item Two",
          },
        ],
      },
      {
        to: "",
        label: "Whiteboard",
        icon: mdiOpenInNew,
      },
    ],
  },
  {
    to: "",
    label: "Messages",
    icon: mdiMessage,
  },
  {
    to: "",
    label: "Authenticator",
    icon: mdiHelpCircle,
  },
  {
    to: "",
    label: "AdminTasks",
    icon: mdiFastForwardOutline,
  },
  {
    to: "",
    label: "Syllabus",
    icon: mdiBook,
  },
  {
    to: "",
    label: "PE Tasks",
    icon: mdiHelpCircle,
  },
  {
    href: "",
    label: "About",
    icon: mdiHelpCircle,
  },
];
