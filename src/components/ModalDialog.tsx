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
  title: string;
  children: React.ReactNode;
};

function ModalDialog({ variant, title, children }: ModalDialogProps) {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant={variant}>{title}</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] bg-white">
          {children}
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default ModalDialog;
