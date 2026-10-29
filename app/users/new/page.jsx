"use client"
import { Button } from "@/components/ui/button"

import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { redirect } from "next/navigation"

const NewUserPage = () => {

  const handleAddNewUser = async(event) => {
    event.preventDefault()
    const formData = new FormData(event.target)
    const newuser = Object.fromEntries(formData.entries());

    console.log(newuser);

    const res = await fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newuser),
    });

    console.log('Response from server', res);
    const afterSubmit = await res.json();

    console.log('After submit', afterSubmit);
    if(afterSubmit.insertedId) {
      console.log ('User added successfully!');
      redirect('/users');
    }


  }

  return (
    <div>
      <form onSubmit={handleAddNewUser} className="space-y-8">
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="fieldgroup-name">Name</FieldLabel>
            <Input id="fieldgroup-name" name="name" placeholder="Jordan Lee" />
          </Field>
          <Field>
            <FieldLabel htmlFor="fieldgroup-email">Email</FieldLabel>
            <Input
              id="fieldgroup-email"
              type="email"
              name="email"
              placeholder="name@example.com"
            />
            <FieldDescription>
              We&apos;ll send updates to this address.
            </FieldDescription>
          </Field>
          <Field orientation="horizontal">
            <Button type="reset" variant="outline">
              Reset
            </Button>
            <Button type="submit">Add user</Button>
          </Field>
        </FieldGroup>
      </form>
    </div>
  )
}

export default NewUserPage
