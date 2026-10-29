import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Field, FieldGroup } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useRouter } from "next/navigation"

const UpdateUserDialog = ({ user }) => {
  const router = useRouter()
  const handleEdit = async (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)
    const updatedUser = Object.fromEntries(formData.entries())

    const res = await fetch(`http://localhost:5000/users/${user._id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedUser),
    })

    const afterUpdate = await res.json()
    console.log("After update", afterUpdate)
    if (afterUpdate.modifiedCount > 0) {
      alert("User updated successfully")
      router.refresh()
    }
  }

  return (
    <Dialog>
      <DialogTrigger
        render={
          <Button className="mx-3" variant="outline">
            Edit
          </Button>
        }
      />
      <DialogContent className="sm:max-w-sm">
        <form onSubmit={handleEdit}>
          <DialogHeader>
            <DialogTitle>Edit User</DialogTitle>
            <DialogDescription>
              Make changes to your DB users here. Click save when you&apos;re
              done.
            </DialogDescription>
          </DialogHeader>
          <FieldGroup>
            <Field>
              <Label htmlFor="name-1">User name</Label>
              <Input id="name-1" name="name" defaultValue={user.name} />
            </Field>
            <Field>
              <Label htmlFor="username-1">Email</Label>
              <Input
                id="username-1"
                name="email"
                type="email"
                defaultValue={user.email}
              />
            </Field>
          </FieldGroup>
          <DialogFooter>
            <DialogClose render={<Button variant="outline">Cancel</Button>} />
            <DialogClose render={<Button type="submit">Save changes</Button>} />
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default UpdateUserDialog
