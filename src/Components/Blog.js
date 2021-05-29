import React from 'react'
import {Container, Row,Col} from 'reactstrap'
import '../Styles/Blog.css'
import logo from '../assets/article.png'

import jobs from './blogObject'
import {BlogImage} from "./BlogImage";
import {SimilarCat} from "./SimilarCategory";
import {BlogContent} from "./BlogContent";
import {SimilarArticles} from "./similarArticles";

export const Blog = () => {
 
    return (
        <div>
            <div className="article p-3 pb-4">
            <Row>
                <Col md="6">
                    <h1 className="articleHeading">Articles</h1>
                    <p className="articleSubHeading">BLOG -> CATEGORY_NAME</p>
                </Col>
                <Col md="6">
                   <img className="articleImage" src={logo} alt="" />
                </Col>
            </Row>
 
            </div>
            <div className="bottomBorder"></div>

            <div className="imageCard p-3">
            <Row >
                <Col lg="6">
                    
                    <BlogImage/>
                   
                </Col>
                <Col lg="6" >
                    <SimilarCat/>
                </Col>
            </Row>
 
            </div>
            
            <div className="blogCard p-3">
            <Row >
                <Col lg="8">
                    
                    <BlogContent className="round blogContent "/>
                  
                </Col>
                <Col lg="4"  >
                 <SimilarArticles/>
                </Col>
            </Row>
 
            </div>

        </div>
    )
}
