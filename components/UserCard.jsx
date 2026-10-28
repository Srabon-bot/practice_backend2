
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const UserCard = ({user}) => {
  return (
    <div>
      <Card className="relative mx-auto w-full max-w-sm pt-0">
        <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
        <CardHeader>
          <CardAction>
            <h2>No action</h2>
          </CardAction>
          <CardTitle>
            Name: {user.name} <br />
          </CardTitle>
          <CardDescription>
           Email: {user.email} <br />
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <Button className="w-full">View Event</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

export default UserCard
