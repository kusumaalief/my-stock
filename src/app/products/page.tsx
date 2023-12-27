"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Button } from "@/components/ui/button";
import ModalDrawer from "@/components/ModalDialog";
import ModalDialog from "@/components/ModalDialog";
import {
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import AddProduct from "@/components/product/AddProduct";

type Props = {};

const ProductsPage = (props: Props) => {
  const [toggleModal, setToggleModal] = useState<boolean>(false);
  const onSubmit = async () => {
    console.log("SUBMIT");
  };

  // const showDialogModal = () => {
  //   setShowModal(!showModal)
  // };

  return (
    <div>
      <Card>
        <CardHeader className="flex flex-row justify-between">
          <CardTitle>Product</CardTitle>

          <ModalDialog title="Add Product">
            <DialogHeader>
              <DialogTitle>New Product</DialogTitle>
            </DialogHeader>

            <AddProduct />
          </ModalDialog>
        </CardHeader>
        <CardContent className="mt-6">
          <Table>
            <TableCaption>A list of current products.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Invoice</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Method</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">INV001</TableCell>
                <TableCell>Paid</TableCell>
                <TableCell>Credit Card</TableCell>
                <TableCell className="text-right">$250.00</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductsPage;
