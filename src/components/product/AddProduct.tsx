import React from "react";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { toast } from "@/components/ui/use-toast";

type Props = {};

const ProductFormSchema = z.object({
  plu: z.string().length(6),
  productName: z.string().min(2, {
    message: "Product must be at least 2 characters.",
  }),
  unit: z.string(),
  category: z.string(),
  supplier: z.string(),
  quantity: z.coerce.number(),
});

function AddProduct({}: Props) {
  const productForm = useForm<z.infer<typeof ProductFormSchema>>({
    resolver: zodResolver(ProductFormSchema),
    defaultValues: {
      plu: "",
      productName: "",
      unit: "box",
      category: "food",
      supplier: "",
      quantity: 0,
    },
  });

  const onSubmit = async (values: z.infer<typeof ProductFormSchema>) => {
    let data: any = {};
    const res = await fetch("api/products", {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(values),
    });

    data = await res.json();
    console.log(data);

    if (data.statusCode == 200) {
      toast({
        variant: "success",
        title: "Success",
        description: "Data is submitted",
      });
      productForm.reset();
    } else {
      toast({
        variant: "destructive",
        title: "Failed to submit data !",
        description: data.message,
      });
    }
  };

  return (
    <div>
      <Form {...productForm}>
        <form
          onSubmit={productForm.handleSubmit(onSubmit)}
          className="grid grid-cols-2 gap-y-4 gap-x-12"
        >
          <FormField
            control={productForm.control}
            name="plu"
            render={({ field }) => (
              <FormItem>
                <FormLabel>PLU</FormLabel>
                <FormControl>
                  <Input placeholder="Product PLU" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={productForm.control}
            name="productName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Product Name</FormLabel>
                <FormControl>
                  <Input placeholder="Product Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={productForm.control}
            name="unit"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Unit</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select the appropriate unit" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent {...field}>
                    <SelectItem value="box">box</SelectItem>
                    <SelectItem value="piece">piece</SelectItem>
                    <SelectItem value="kilogram">kilogram</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={productForm.control}
            name="supplier"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Supplier</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select the appropriate supplier" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent {...field}>
                    <SelectItem value="m@example.com">PT.Wingsfood</SelectItem>
                    <SelectItem value="m@google.com">PT.Mayora</SelectItem>
                    <SelectItem value="m@support.com">PT.Unilever</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={productForm.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Category</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select the appropriate category" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent {...field}>
                    <SelectItem value="m@example.com">Food</SelectItem>
                    <SelectItem value="m@google.com">Non Food</SelectItem>
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />
          <FormField
            control={productForm.control}
            name="quantity"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Quantity</FormLabel>
                <FormControl>
                  <Input placeholder="Quantity" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="col-span-2 w-fit ml-auto">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
}

export default AddProduct;
