import { signUp } from "@/lib/firebase/service";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  let res: IFResponse = {};
  let data = await req.json();
  await signUp(data, ({ status }: { status: boolean }) => {
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
