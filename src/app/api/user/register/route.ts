import type { NextApiRequest, NextApiResponse } from "next";

import { signUp } from "@/lib/firebase/service";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    status: true,
    statusCode: 200,
    message: "success",
  });
}

export async function POST(req: Request) {
  let res: any = {};
  let data = await req.json();
  await signUp(data, (status: boolean) => {
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
