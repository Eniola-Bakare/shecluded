import React, {useState} from "react";
import Footer from "../shared/footer";
import NavBar from "../shared/navbar";
import {BlogData}  from '../../consts'
import Pagination from "react-js-pagination";

const Blog = (props) => {
  const handleBlogDetails = (id) => {
    props.history.push(`/blog/${id}`)
  }
  const [paginate, setPaginate] = useState({
    currentPage: 1,
    itemsCountPerPage: 4
  });

  const handlePageChang = pageNumber => {
    setPaginate({ ...paginate, currentPage: pageNumber });
  };

  const lastItemIndex = paginate.currentPage * paginate.itemsCountPerPage;
  const firstItemIndex = lastItemIndex - paginate.itemsCountPerPage;
  const currentBlog = BlogData.slice(firstItemIndex, lastItemIndex);
  return (
    <div>
      <NavBar />
      
      <div className="blog-wrapper">
        {
          currentBlog.map(item => (
            <div key={item.id} className="blog">
              <div className="imhr">
                  <img src={item.image} className="img-fluid img-responsive" alt="blog1"/>
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
      <div className="d-flex align-items-center justify-content-center my-5">
      <Pagination
              activePage={paginate.currentPage}
              itemsCountPerPage={paginate.itemsCountPerPage}
              totalItemsCount={BlogData.length}
              pageRangeDisplayed={2}
              onChange={handlePageChang}
              firstPageText={<svg width="26" height="14" viewBox="0 0 26 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M3.3085 5.76256L7.36396 1.70711C7.75449 1.31658 7.75449 0.683418 7.36396 0.292893C6.97344 -0.0976311 6.34027 -0.0976311 5.94975 0.292893L0.292893 5.94975C0.0538216 6.18882 -0.0388949 6.51882 0.0147438 6.82843C-0.0388949 7.13803 0.0538216 7.46803 0.292893 7.70711L5.94975 13.364C6.34027 13.7545 6.97344 13.7545 7.36396 13.364C7.75449 12.9734 7.75449 12.3403 7.36396 11.9497L3.17678 7.76256H24.5126C25.0648 7.76256 25.5126 7.31485 25.5126 6.76256C25.5126 6.21028 25.0648 5.76256 24.5126 5.76256H3.3085Z" fill="#222222"/>
              </svg>
              
              }
              lastPageText={<svg width="27" height="15" viewBox="0 0 27 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M23.0666 6.76238L19.0412 2.73701C18.6507 2.34649 18.6507 1.71332 19.0412 1.3228L19.1014 1.26262C19.4919 0.872095 20.1251 0.872095 20.5156 1.26262L26.1725 6.91947C26.4193 7.16631 26.5101 7.51008 26.445 7.82824C26.5101 8.14641 26.4193 8.49018 26.1725 8.73701L20.5156 14.3939C20.1251 14.7844 19.4919 14.7844 19.1014 14.3939L19.0412 14.3337C18.6507 13.9432 18.6507 13.31 19.0412 12.9195L23.1983 8.76238H1C0.447715 8.76238 0 8.31466 0 7.76238C0 7.21009 0.447715 6.76238 1 6.76238H23.0666Z" fill="#222222"/>
              </svg>
              
              }
            />

      </div>
      

      
      <Footer />
    </div>
  );
}
 
export default Blog;


