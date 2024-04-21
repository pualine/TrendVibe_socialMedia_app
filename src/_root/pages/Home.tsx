import Loader from '@/components/shared/Loader';
import PostCard from '@/components/shared/PostCard';
import { useGetRencentPosts } from '@/lib/react-query/queriesAndMutations';
import { Models } from 'appwrite';


const Home = () => {
   const {data: posts, isPending:isPostLoading, isError: isErrorPosts} = useGetRencentPosts();
  return (
    <div className='flex flex-1'>
      <div className='home-container'>
        <div className='home-posts'>
          <h2 className='h3-bold md:h2-bold text-left w-full mb-20'>
            Trending Today
          </h2>
          {isPostLoading && !posts ? (
            <Loader/>
          ) :(
            <ul className='flex flex-col flex-1 gap-9 w-full'>
              {posts?.documents.map((post: Models.Document) => (
                <PostCard post={post} key={post.caption}/>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}

export default Home