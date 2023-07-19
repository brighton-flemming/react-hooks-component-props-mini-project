import React from "react";

const ArticleList = ({posts}) => {
 return (
 <main>
    {posts.map((posts, index) => (
        < Article key={index} title={posts.title} date={posts.date} preview={posts.preview}/>
    ))};
 </main>
 );

};

export default ArticleList;