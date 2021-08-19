
const Post = ({post}) => {
  return (
    <div className="card">
      <img src={post.frontmatter.cover_image}/>
    </div>
  )
}

export default Post
