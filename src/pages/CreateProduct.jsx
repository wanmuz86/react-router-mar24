import React from 'react'
import { Form, redirect } from 'react-router-dom'

const CreateProduct = () => {
  return (
    <div>
        <h3>Create Product</h3>
        <Form method='post' action="/create-product">
            <input type="text" name="title" required placeholder='Enter product name'/>
            <input type="number" name="price" required placeholder='Enter price'/>
            <textarea type="text" name="description"/>
            <button type="submit">Submit</button>

        </Form>
    </div>
  )
}

export default CreateProduct

export const createProductAction = async ({request}) => {
    const data = await request.formData();

    const submission = {
        title: data.get('title'),
        price: data.get('price'),
        description: data.get('description')
    }
    console.log(submission);

    return redirect('/')
}