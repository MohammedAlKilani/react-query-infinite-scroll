import {forwardRef} from "react"
import {postProp} from './Types'


 
const Post = forwardRef<HTMLElement,postProp>(({post},ref)=> {
    const postContent = <div>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
    </div>
    const content = ref?
    <article ref={ref}> {postContent}</article>:<article >{postContent}</article>
  return content
  
})

export default Post