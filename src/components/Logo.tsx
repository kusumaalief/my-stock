import { cn } from "@/lib/utils";
import { Radius } from "lucide-react";
import React from "react";

type Props = {
  className: string;
};

const Logo = ({ className }: Props) => {
  return (
    <div>
      <h3 className={cn("logo flex", className)}>
        myStock
        <Radius className="ml-1" />
      </h3>
    </div>
  );
};

export default Logo;
