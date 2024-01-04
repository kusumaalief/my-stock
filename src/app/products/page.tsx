"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import React, { useEffect, useState } from "react";

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
import AddProduct from "@/components/product/AddProduct";
import { FileEdit, Trash2 } from "lucide-react";

type ProductDataType = {
  supplier: string;
  quantity: number;
  category: string;
  productName: string;
  unit: string;
  plu: string;
}[];

const ProductsPage = () => {
  const [data, setData] = useState<ProductDataType | null>();

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch("api/products");
      const data = await result.json();
      setData(data.data);
    };
    fetchData();
  }, []);

  console.log("data", data);

  return (
    <div>
      <Card>
        <CardHeader className="flex flex-row justify-between">
          <CardTitle>Product</CardTitle>

          <ModalDialog buttonTitle="Add Product">
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
                <TableHead className="w-[100px]">PLU</TableHead>
                <TableHead>Product</TableHead>
                <TableHead className="w-[64px]">Unit</TableHead>
                <TableHead>Cateogry</TableHead>
                <TableHead>Supplier</TableHead>
                <TableHead className="text-right">Quantity</TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data?.length !== 0 &&
                data?.map(
                  ({
                    plu,
                    productName,
                    unit,
                    category,
                    supplier,
                    quantity,
                  }) => (
                    <TableRow>
                      <TableCell className="font-medium">{plu}</TableCell>
                      <TableCell>{productName}</TableCell>
                      <TableCell>{unit}</TableCell>
                      <TableCell>{category}</TableCell>
                      <TableCell>{supplier}</TableCell>
                      <TableCell className="text-right">{quantity}</TableCell>
                      <TableCell className="flex space-x-2">
                        <Button
                          className="relative group"
                          size={"sm"}
                          variant={"success"}
                        >
                          <FileEdit className="h-4 w-4" />
                          <span className="group-hover:visible delay-700 transition-all  ease-in invisible absolute right-0 -top-5 text-zinc-500 bg-zinc-200 text-xs rounded p-1">
                            Edit
                          </span>
                        </Button>
                        <Button
                          className="relative group"
                          size={"sm"}
                          variant={"destructive"}
                        >
                          <Trash2 className="h-4 w-4" />
                          <span className="group-hover:visible delay-700 transition-all  ease-in invisible absolute right-0 -top-5 text-zinc-500 bg-zinc-200 text-xs rounded p-1">
                            Delete
                          </span>
                        </Button>
                      </TableCell>
                    </TableRow>
                  )
                )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductsPage;
