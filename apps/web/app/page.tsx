import { Button } from "@repo/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function Page(): JSX.Element {
  return (
    <main>
      <div className="bg-green-500">Web Page</div> 
      <Card className="w-80 bg-green-100" >
        <CardHeader>
          <CardTitle>24 Birthdays Today</CardTitle>
        </CardHeader>
        <CardContent>
          asdf
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </main>
  );
}
