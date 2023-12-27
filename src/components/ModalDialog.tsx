import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import React from "react";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

type ModalDialogProps = {
  variant?: "success";
  buttonTitle: string;
  children: React.ReactNode;
};

function ModalDialog({ variant, buttonTitle, children }: ModalDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={variant}>{buttonTitle}</Button>
      </DialogTrigger>
      <DialogContent className="bg-white w-[340px] md:w-[720px]">
        <div className="relative">
          <div className="absolute left-1/2 top-1/2 -translate-y-1/2 w-[2px] h-[90%] bg-gray-300"></div>
          {children}
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default ModalDialog;
