import {useFormik} from "Formik";
import { create } from "../post";


export default function NewPost() {

    const formik=useFormik({
        initialValues:{
            title:'',
            content:''
        },
        validate: function(values){
            let errors={};
            if(values.title == ""){
                errors.title = "please provide title field";
                
            }
            if(values.content == ""){
                errors.content = "please provide content field";
                
            }
         return errors;
        },
        onSubmit: async function(values){
            await create(values);
            alert("post created succesfully");
        
        }
    });





    return (
        <>
            <h1 class="title">Create new post
                <br />
                <span class="subtitle"></span>
            </h1>

            <form onSubmit={formik.handleSubmit} method="post">
                <label for="fname">Post Title</label>
                <input type="text" id="title" name="title" onChange={formik.handleChange} value={formik.values.title} placeholder="Title of the post" />
                {
                    formik.errors.title ? (
                         <small style={{color:'red' , display: 'block'}}>{formik.errors.title}</small>
                    ) :null
                }
                <label for="content">Content</label>
                <textarea type="text" id="content" name="content" onChange={formik.handleChange} value={formik.values.content} placeholder=""></textarea>
                {
                    formik.errors.content ? (
                         <small style={{color:'red' , display: 'block'}}>{formik.errors.content}</small>
                    ) :null
                }
                

                <input type="submit" value={formik.isSubmitting ? 'submitting..' : 'submit'} />
            </form>
        </>
    );
}