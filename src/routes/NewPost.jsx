import {Form} from"react-router-dom";
import { create } from "../post";

export async function submitPost(request){
    const data= await request.request.formData();
    const post ={
        title:data.get('title'),
        content:data.get('content')
    };
    await create(post);
    alert("new post created succesfully");

}
export default function NewPost() {





    return (
        <>
            <h1 class="title">Create new post
                <br />
                <span class="subtitle"></span>
            </h1>

            <Form method="post">
                <label for="fname">Post Title</label>
                <input type="text" id="title" name="title" placeholder="Title of the post" />

                <label for="content">Content</label>
                <textarea type="text" id="content" name="content" placeholder=""></textarea>


                <input type="submit" value="Submit" />
            </Form>
        </>
    );
}