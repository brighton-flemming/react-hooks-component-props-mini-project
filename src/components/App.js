import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";
import logo from "../assets/logo";


console.log(blogData);

function App() {
  const blogName = "Kermit The Blogg";
  const blogAbout = "Welcome to my blog. Hope you will find the articles as scrumptious as your morning breakfast was."
  

  return (
    <div className="App">
     <Header name={blogName}/>
     <About image={blogData.image || logo} about={blogAbout}/>
     <ArticleList posts={blogData.posts} />

     
    </div>
  )
}

export default App;
