import PostForm from "@/components/forms/PostForm"
import { useGetPostById } from "@/lib/react-query/queriesAndMutations";
import Loader from "@/components/shared/Loader";
import { useParams } from "react-router-dom"


const EditPost = () => {
  const {id} = useParams();
  const {data: post, isPending: isLoading} = useGetPostById(id || '');

  if(isLoading) return <Loader />
   

  
  return (
    <>
    <div className='flex flex-1'>
      <div className='common-container'>
        <div className="max-w-5xl flex-start p-2 gap-2 justify-start w-full">
          <img 
          src='/assets/icons/add-post.svg'
          width={36}
          height={36}
          alt="add-post"
          />
          <h2 className="h3-bold md:h3-bold text-left w-full">Edit Post</h2>
        </div>

         <PostForm action="Update" post={post}/>
      </div>
    </div>
    </>
  )
}

export default EditPost;