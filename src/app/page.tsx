import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Logo from "@/components/Logo";
import Sidemenu from "@/components/Sidemenu";
import { DashboardData } from "@/lib/data";
import { DollarSignIcon } from "lucide-react";

const backgroundColor = ["bg-green-300", "bg-blue-300", "bg-yellow-300"];
const textColor = ["text-green-500", "text-blue-500", "text-yellow-500"];

export default function Home() {
  return (
    <main className="flex h-screen min-h-screen justify-between">
      <div className="sidebar">
        <Logo />
        <Sidemenu />
      </div>
      <div className="flex-1 h-full p-6">
        <h2 className="mb-6">Dashboard</h2>
        <div className="flex flex-col gap-6">
          <div className="grid grid-cols-3 gap-6">
            {DashboardData.map(
              ({ title, value, lastUpdated }: IFDashboardData, i) => (
                <Card key={i}>
                  <CardHeader className={`text-zinc-900 ${backgroundColor[i]}`}>
                    <CardTitle>{title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center mt-6">
                    <h2 className={textColor[i]}>{value}</h2>
                  </CardContent>
                  <CardFooter>
                    <p className="text-zinc-400 ml-auto">{lastUpdated}</p>
                  </CardFooter>
                </Card>
              )
            )}
          </div>

          <div className="grid grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Recent Product</CardTitle>
              </CardHeader>
              <CardContent className="text-center mt-6"></CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}
