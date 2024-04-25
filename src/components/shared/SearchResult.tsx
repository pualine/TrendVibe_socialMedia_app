import Loader from "./Loader";
import GridPostList from "./GridPostList";

type SearchResultProps = {
  isFectingSearch: boolean;
  searchedPosts: any;
}

const SearchResult = ({isFectingSearch, searchedPosts}: SearchResultProps) => {
  if(isFectingSearch) return <Loader/>


  if(searchedPosts && searchedPosts.documents.length>0){ 
    return(
    <GridPostList posts={searchedPosts.documents} />
  )}
  return (
    <p className="text-light-4 mt-10 text-center w-full">No result found</p>
  )
}

export default SearchResult