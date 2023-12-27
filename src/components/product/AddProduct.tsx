import React from "react";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
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
type Props = {};

const ProductFormSchema = z.object({
  productName: z.string().min(2, {
    message: "Product must be at least 2 characters.",
  }),
  unit: z.string().min(2),
  category: z.string().min(2),
  quantity: z.number(),
});

function AddProduct({}: Props) {
  const productForm = useForm<z.infer<typeof ProductFormSchema>>({
    resolver: zodResolver(ProductFormSchema),
    defaultValues: {
      productName: "",
      unit: "",
      category: "",
      quantity: 0,
    },
  });
  const onSubmit = async () => {
    console.log("SUBMIT");
  };

  return (
    <div>
      <Form {...productForm}>
        <form
          onSubmit={productForm.handleSubmit(onSubmit)}
          className="space-y-8"
        >
          <FormField
            control={productForm.control}
            name="productName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Product Name</FormLabel>
                <FormControl>
                  <Input placeholder="Product Name" />
                </FormControl>
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
                  <SelectContent>
                    <SelectItem value="m@example.com">m@example.com</SelectItem>
                    <SelectItem value="m@google.com">m@google.com</SelectItem>
                    <SelectItem value="m@support.com">m@support.com</SelectItem>
                  </SelectContent>
                </Select>
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
                  <SelectContent>
                    <SelectItem value="m@example.com">m@example.com</SelectItem>
                    <SelectItem value="m@google.com">m@google.com</SelectItem>
                    <SelectItem value="m@support.com">m@support.com</SelectItem>
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
}

export default AddProduct;
