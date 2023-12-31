import { login } from "@/lib/firebase/authservcies";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  let res: IFResponse = {};
  let data = await req.json();
  await login(
    data,
    ({ status, message }: { status: boolean; message: string }) => {
      if (status) {
        res = {
          data: {
            username: data.username,
            email: data.email,
          },
          status: status,
          statusCode: 200,
          message: "Login success !",
        };
      } else {
        res = {
          status: status,
          statusCode: 400,
          message: message,
        };
      }
    }
  );
  return NextResponse.json(res);
}
