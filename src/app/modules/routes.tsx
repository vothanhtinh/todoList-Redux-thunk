// Constant
import { ROUTER } from "constants/routers";
// Modules
import ToDay from "./Today";
import Inbox from "./Inbox";

export const routes = [
  {
    key: ROUTER.HOME.key,
    path: ROUTER.HOME.path,
    name: ROUTER.HOME.name,
    element: <ToDay />,
  },
  {
    key: ROUTER.TODAY.key,
    path: ROUTER.TODAY.path,
    name: ROUTER.TODAY.name,
    element: <ToDay />,
  },
  {
    key: ROUTER.INBOX.key,
    path: ROUTER.INBOX.path,
    name: ROUTER.INBOX.name,
    element: <Inbox />,
  },
];
