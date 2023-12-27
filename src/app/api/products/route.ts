import { addProduct, getProducts } from "@/lib/firebase/productservices";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  let res: IFResponse = {};
  let data = await req.json();
  await addProduct(data, ({ status }: { status: boolean }) => {
    if (status) {
      res = {
        status: status,
        statusCode: 200,
        message: "success",
      };
    } else {
      res = {
        status: status,
        statusCode: 400,
        message: "failed",
      };
    }
  });
  return NextResponse.json(res);
}

export async function GET() {
  let res: IFResponse = {};
  await getProducts(({ status, data }: { status: boolean; data: {} }) => {
    if (status) {
      res = { status: status, statusCode: 200, data: data };
    } else {
      res = { status: status, statusCode: 400, data: data };
    }
  });
  return NextResponse.json(res);
}
