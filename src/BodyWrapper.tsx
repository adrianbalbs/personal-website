import { ReactNode } from "react";

function BodyWrapper({ children }: { children: ReactNode }) {
  return <div className="max-w-[1280px] p-[2rem] text-center m-auto">{children}</div>;
}

export default BodyWrapper;
