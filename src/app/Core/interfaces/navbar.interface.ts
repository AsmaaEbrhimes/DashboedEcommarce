export interface INavbarData {
  routeLink: string;
  label: string;
  icon?: string;
  sublevelItems?: {
    routeLink: string;
    label: string;
    icon?: string;
  }[];
  isOpen?: boolean;
}

