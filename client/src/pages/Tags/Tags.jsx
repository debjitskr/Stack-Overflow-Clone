import React from "react";
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import TagsList from './TagsList'
import './Tags.css'


const Tags = () => {

    const tagsList = [{
        id: 1,
        tagName: "javascript",
        tagDesc: "For questions regarding programming in ECMAScript(JavaScript/JS) and its various dialects/implementations (excluding ActionScript). Please include all relevant tags on your question."
    },{
        id: 2,
        tagName: "python",
        tagDesc: "Python is a multi-paradigm, dynamically typed, multipurpose programming language. It is designed to be quick"
    },{
        id: 3,
        tagName: "c#",
        tagDesc: "C# is a modern, versatile, object-oriented programming language developed by Microsoft. It's widely used for building Windows applications, web services, and games, known for its strong typing and rich development ecosystem."
    },{
        id: 4,
        tagName: "java",
        tagDesc: "Java is a high-level, object-oriented, high-performance programming language known for its platform independence, strong community support, and extensive libraries."
    },{
        id: 5,
        tagName: "php",
        tagDesc: "PHP is a widely used , open source, general-purpose, multi-paradigm, dynamically typed and interpreted scripting"
    },{
        id: 6,
        tagName: "html",
        tagDesc: "HTML (Hyper-Text-Markup-Language) is the markup language for creating web pages and other information to be displaye in a web page"
    },{
        id: 7,
        tagName: "android",
        tagDesc: "Android is Google's mobile operating system, used for programming or developing digital devices (Smartphone,...)"
    },{
        id: 8,
        tagName: "css",
        tagDesc: "CSS is a representation style sheet language used for describe the look and formatting of HTML, XML document"
    },{
        id: 9,
        tagName: "Reactjs",
        tagDesc: "React is a JavaScript library for building user interfaces. It uses a declarative, component-based paradigm"
    }]


    return (
        <div className='home-container-1'>
           <LeftSidebar />
           <div className="home-container-2">
                <h1 className='tags-h1'>Tags</h1>
                <p className='tags-p'>A tag is a keyword or label that categorizes your question with other, similar questions.</p>
                <p className='tags-p'>Using the right tags makes it easier for others to find and answer your questions.</p>
                <div className="tags-list-container">
                    {
                        tagsList.map((tag) => (
                            <TagsList tag={tag} key={tagsList.id} />
                        ))
                    }
                </div>
           </div>
        </div>
    )
}

export default Tags