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
      },
      {
        routeLink: 'auth/register',
        label: 'Register',
      },
      {
        routeLink: 'auth/verfiyemail',
        label: 'Verify Email',
      },

      {
        routeLink: 'auth/verfiycode',
        label: 'Vervaction Code',
      },

      {
        routeLink: 'auth/logout',
        label: 'Logout',
      },

      {
        routeLink: 'auth/resetpasswprd',
        label: 'Reset Passwoed',
      },

      {
        routeLink: 'auth/createpassword',
        label: 'Create Password',
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
        routeLink: 'product/AllProduct',
        label: 'All Product',
      },
      {
        routeLink: 'product/creatproduct',
        label: 'Create Product',
      },
      {
        routeLink: 'product/viewproduct',
        label: 'view Product',
      },

      {
        routeLink: 'product/shoppingcart',
        label: 'ShoppingCart',
      },

      {
        routeLink: 'product/order',
        label: 'orders',
      },

      {
        routeLink: 'product/DetailsOrder',
        label: 'Deatails Orders',
      },
    ],
  },
  {
    routeLink: 'Dashboard',
    label: 'Admin User',
    icon: 'fa-solid fa-user-pen',
    isOpen: false,
    sublevelItems: [
      {
        routeLink: 'AdminUser/allUser',
        label: 'All Users',
        icon: 'fa-solid fa-users',
      }
    ],
  },


  {
    routeLink: 'Category/category',
    label: 'category',
    icon: 'fa-solid fa-layer-group',
    isOpen: false,
    sublevelItems: [
      {
        routeLink: 'category',
        label: 'All Category',
        icon: 'fa-solid fa-file',
      }
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



