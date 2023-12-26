interface IFSideMenu {
  link: string;
  title: string;
  icon: React.ReactNode;
}

interface IFDashboardData {
  title: string;
  value: string;
  lastUpdated: string;
}

interface IFUserData {
  username: string;
  email: string;
  password: string;
}

interface IFResponse {
  data?: { username: string; email: string };
  status?: boolean;
  statusCode?: number;
  message?: string;
}
