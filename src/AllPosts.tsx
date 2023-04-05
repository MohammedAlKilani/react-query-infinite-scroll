import {useRef,useCallback} from "react"
import Post from './Post'
import {gitPosts} from './api/api'
import {useInfiniteQuery} from "react-query"
import {post} from './Types'
const AllPosts = () => {


const {fetchNextPage,
    isFetchingNextPage
    ,hasNextPage,
    status
    ,error,
    data} = useInfiniteQuery("/posts",({pageParam=1})=>{
        
        return gitPosts(pageParam)},{
            getNextPageParam: (lastPage, allPages) => {
                
                 return lastPage.length? allPages.length +1:undefined}
        })
        const intobserver = useRef<IntersectionObserver | null>(null)
        const lastPostRef =useCallback((post:HTMLElement)=>{
          
            
            if(isFetchingNextPage)return
            

            if(intobserver.current) intobserver.current?.disconnect()
           
            intobserver.current = new IntersectionObserver((posts):void=>{
                if(posts[0].isIntersecting&&hasNextPage){
                    
                    fetchNextPage()
                }
            })
            
            
           if(post) return intobserver.current.observe(post)

        },[hasNextPage,isFetchingNextPage,fetchNextPage])

        if(status==="error"&&error instanceof Error) return (
            
            <p>{error.message}</p>
        )

        const content = data?.pages.map((page)=>{
            return page.map((post:post,i:number)=>{
                if(page.length===i+1){
                    return <Post key={post.id} ref={lastPostRef} post={post}/>
                }
                return <Post key={post.id}  post={post}/>
            })
        })



  return (
    <div>{content}
    {isFetchingNextPage&&<div>loding....</div>}
    </div>
    
  )
}

export default AllPosts