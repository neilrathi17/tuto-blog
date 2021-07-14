import { useState } from "react";


const Home = () => {

        const [blogs,setBlogs]=useState(
            [
                {title:"my new website",body:'lorem ipsum',author:"mario",id:1},
                {title:"welcome party",body:'lorem ipsum',author:"yoshi",id:2},
                {title:"web dev top tips",body:'lorem ipsum',author:"luigi",id:3},
            ]
        )

 
    //  const handleClickagain=(name)=>
    //  {
    //      console.log("hello"+name)
    //      setName('luigi');

    //  }
    return ( 
        <div className="home">
            {blogs.map((blog)=> (
                <div className="blog-preview" key={blogs.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                </div>
            )
            )}
           
            {/* <button onClick={()=>handleClickagain('mario')}>CLICK ME AGAIN</button> */}
            
        </div>
     );
}
 
export default Home;