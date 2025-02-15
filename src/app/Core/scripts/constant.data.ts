import { INavbarData } from "../interfaces/navbar.interface";

export const navbarData: INavbarData[] = [
  {
    routeLink: 'Autentication',
    label: 'Autentication',
    icon: 'fa-solid fa-address-book',
    isOpen: false,
    sublevelItems: [
      {
        routeLink: 'auth/login',
        label: 'login',
        icon: 'fa-solid fa-file',
      },
      {
        routeLink: 'auth/register',
        label: 'Register',
        icon: 'fa-solid fa-folder',
      },
      {
        routeLink: 'auth/verfiyemail',
        label: 'Verify Email',
        icon: 'fa-solid fa-folder',
      },

      {
        routeLink: 'auth/verfiycode',
        label: 'Vervaction Code',
        icon: 'fa-solid fa-folder',
      },

      {
        routeLink: 'auth/logout',
        label: 'Logout',
        icon: 'fa-solid fa-folder',
      },

      {
        routeLink: 'auth/resetpasswprd',
        label: 'Reset Passwoed',
        icon: 'fa-solid fa-folder',
      },

      {
        routeLink: 'auth/createpassword',
        label: 'Create Password',
        icon: 'fa-solid fa-folder',
      },
    ],
  },

  {
    routeLink: '',
    label: 'Ecommarce',
    icon: 'fa-solid fa-bag-shopping',
    isOpen: false,
    sublevelItems: [
      {
        routeLink: 'product/creatproduct',
        label: 'Create Product',
        icon: 'fa-solid fa-file',
      },
      {
        routeLink: 'product/viewproduct',
        label: 'view Product',
        icon: 'fa-solid fa-folder',
      },
    ],
  },
  {
    routeLink: 'Dashboard',
    label: 'Dashboard',
    icon: 'fa-solid fa-gauge',
    isOpen: false,
    sublevelItems: [
      {
        routeLink: 'page1',
        label: 'Page 1',
        icon: 'fa-solid fa-file',
      },
      {
        routeLink: 'page2',
        label: 'Page 2',
        icon: 'fa-solid fa-folder',
      },
    ],
  },
  {
    routeLink: 'Dashboard',
    label: 'Dashboard',
    icon: 'fa-solid fa-gauge',
    isOpen: false,
    sublevelItems: [
      {
        routeLink: 'page1',
        label: 'Page 1',
        icon: 'fa-solid fa-file',
      },
      {
        routeLink: 'page2',
        label: 'Page 2',
        icon: 'fa-solid fa-folder',
      },
    ],
  },

  {
    routeLink: 'Dashboard',
    label: 'Dashboard',
    icon: 'fa-solid fa-gauge',
    isOpen: false,
    sublevelItems: [
      {
        routeLink: 'page1',
        label: 'Page 1',
        icon: 'fa-solid fa-file',
      },
      {
        routeLink: 'page2',
        label: 'Page 2',
        icon: 'fa-solid fa-folder',
      },
    ],
  },

  {
    routeLink: 'Dashboard',
    label: 'Dashboard',
    icon: 'fa-solid fa-gauge',
    isOpen: false,
    sublevelItems: [
      {
        routeLink: 'page1',
        label: 'Page 1',
        icon: 'fa-solid fa-file',
      },
      {
        routeLink: 'page2',
        label: 'Page 2',
        icon: 'fa-solid fa-folder',
      },
    ],
  },
];



