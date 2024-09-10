import Resturantheading from '../../Components/Home-Page/Resturantheading/Resturantheading';
import Article from '../../Components/Home-Page/Blogpage/Article';
import blogData from '../../Components/Home-Page/Blogpage/Blogdata';
import Subscribe from '../../Components/Home-Page/Subscribe/Subscribe'
export const Blog = () =>{
    return(
        <>
            <Resturantheading heading = 'Blog & Article' description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore'/>
            {
                blogData.map((e)=>{
                    return(
                   <Article name = {e.name} discription = {e.disc} tutor = {e.tutor} date = {e.date} thumbnail = {e.thumbnail}/>

                    )
                })
            }
            <Subscribe/>
        </>
    )
}