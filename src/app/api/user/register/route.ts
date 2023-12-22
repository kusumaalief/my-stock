import type { NextApiRequest, NextApiResponse } from "next";

import { signUp } from "@/lib/firebase/service";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ register: "world" });
}

export async function POST(req: Request) {
  let res: any = {};
  req.json().then((data) => {
    signUp(data, (status: boolean) => {
      if (status) {
        res = {
          status: true,
          statusCode: 200,
          message: "success",
        };
      } else {
        res = {
          status: false,
          statusCode: 400,
          message: "failed",
        };
      }
    });
  });
  return NextResponse.json({ res: res });
}
