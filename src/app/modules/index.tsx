import { routes } from "./routes";
import { Route, Routes } from "react-router-dom";

export const Root = () => {
  return (
    <Routes>
      {routes?.map((route) => (
        <Route key={route?.key} path={route?.path} element={route?.element} />
      ))}
    </Routes>
  );
};
