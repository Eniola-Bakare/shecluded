import React, { useEffect, useState } from 'react';
import KUUU from '../../assets/1_0-dKx5ASMm87Lmk4GVYTbw.jpeg'
import NavBar from "../shared/navbar";
import Footer from "../shared/footer";
import {BlogData}  from '../../consts'


const BlogDetails = (props) => {
    const { match, history } =props

    const handleBlogDetails = (id) => {
        props.history.push(`/blog/${id}`)
        window.location.reload();
      }
    const [blogInfo, setBlogInfo] = useState({
        body: "",
        createdAt: "",
        delFlag: "",
        content: [
          {
            heading: "",
            content: ""
    
          },
    
         
        ],
        header: "",
        id: 3,
        image: "",
        updatedAt: "",
        version: 0
      })
    useEffect(() => {
      
        const blogInfoKK = BlogData.find(item => item.id == match.params.id)
    
        console.log(BlogData[0].id == match.params.id)
        setBlogInfo(blogInfoKK)

    }, [])
    return (
        <div>
            <NavBar />

            <div className='blog-details-wrapper'>
                <h1 className="heading" style={{textTransform: "uppercase"}}> {blogInfo.header}</h1>
            <div className="d-flex flex-wrap mb-5">
                <span className="mr-2">Shecluded |</span>
                <span className="mr-2">{blogInfo.createdAt} |</span>
                <span className="mr-2"> {blogInfo.delFlag}</span>
            </div>
            <div className="blog-details-img">
                <img src={blogInfo.image} alt="blog details"/>
            </div>
            <div className="mt-5">
                {
                    blogInfo.content.map((item, i) => (
                        <div>
                            <p>{item.content} </p>
                            <div className="sep"></div>
                            <h2 className="small-heading"> {item.heading}</h2>
                            <div className="sep"></div>
                        </div>

                    ))

                }
                
            
            </div>
        </div>

        <div className="blog-detail-divider">
        <hr/>
            <h1>More amazing articles for you</h1>
        </div>

        <div className="blog-wrapper">
            
        {
          BlogData.slice(Number(match.params.id) + 1, Number(match.params.id )+3).map(item => (
            <div key={item.id} className="blog">
              <div className="imhr">
                  <img src={item.image} alt="blog1"/>
                </div>
            <div className="blog-content">
            <div className="d-flex flex-wrap mb-2">
              <span className="mr-2">Shecluded |</span>
              <span className="mr-2">
              {item.createdAt} |
              </span>
              <span className="mr-2">
                {item.delFlag}
              </span>
          </div>
          {
            item.header.length > 50? (<h1> {item.header.slice(0,50)}...</h1>):(<h1>{item.header}</h1>)

          }
          {
            item.body.length > 100? (<p> {item.body.slice(0,100)}...</p>):(<p>{item.body}</p>)

          }
         
       
          <button onClick={() => handleBlogDetails(item.id)} className="btn btn-shecluded"> READ MORE</button>
  
            </div>
            
  
          </div>
      

          ))
        }

             
      
      </div>
    

            <Footer />
        </div>
      
    );
}

export default BlogDetails;