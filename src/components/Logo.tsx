import { Radius } from "lucide-react";
import React from "react";

type Props = {};

const Logo = (props: Props) => {
  return (
    <div>
      <h3 className="logo text-white flex">
        myStock
        <Radius className="ml-1" />
      </h3>
    </div>
  );
};

export default Logo;
