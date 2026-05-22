"use client";

import {AlertDialog, Button} from "@heroui/react";
import { BiTrash } from "react-icons/bi";

export function Delete({_id}) {
    const handleDelete = async()=>{
    const res =await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/idea/${_id}`,{
        method:'DELETE',
            headers:{
            'content-type' :'application/json'
            },
    })
    const data = await res.json() 
    console.log(data);

    }

  return (
    <AlertDialog>
      <Button variant="outline" className={'text-red-500 border rounded-none'}><BiTrash></BiTrash> Delete Project</Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-100">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Confirm Delete ?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete <strong>My Awesome Project</strong> and all of its
                data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button handleDelete={handleDelete} slot="close" variant="danger">
                Delete
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}