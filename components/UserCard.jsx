"use client"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from "next/link"
import { useRouter } from "next/navigation"
import UpdateUserDialog from "./ui/UpdateUserDialog"

const UserCard = ({ user }) => {

  const router = useRouter();

  const handleDeleteUser = async () => {
    console.log("Deleting user with ID:", user._id)
    const res = await fetch(`http://localhost:5000/users/${user._id}`, {
      method: "DELETE",
    })
    
    const afterDelete = await res.json();
    console.log("After delete", afterDelete)
    if (afterDelete.deletedCount > 0) {
      console.log("User deleted successfully")
    } 
    router.refresh();
  }

  return (
    <div>
      <Card className="relative mx-auto w-full max-w-sm pt-0">
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
          <Link href={`/users/${user._id}`}>
            <Button>View Details</Button>
          </Link>
          <UpdateUserDialog user = {user}></UpdateUserDialog>
          <Button
            variant="destructive"
            onClick={handleDeleteUser}
          >
            Delete
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

export default UserCard
