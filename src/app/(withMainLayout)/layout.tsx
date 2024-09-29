import { ReactNode } from "react";

import NavigationBar from "@/src/components/UI/Navbar/Navbar";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <NavigationBar />
      {children}
    </div>
  );
};

export default layout;
