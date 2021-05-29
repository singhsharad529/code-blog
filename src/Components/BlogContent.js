import React,{useState}from 'react'
import '../Styles/BlogContent.css'
import {Row,Col} from 'reactstrap';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import SmsIcon from '@material-ui/icons/Sms';
import ShareIcon from '@material-ui/icons/Share';
import { Button, Form, FormGroup, Input, Collapse } from 'reactstrap';

export const BlogContent = () => {

    const time=new Date().toLocaleString();

    const usersComment=[
        {
            id:1,
            username:'singhsharad529',
            time:'Comment Time',
            comment:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo voluptatem suscipit asperiores soluta earum,expedita architecto facilis minima, velit nesciunt molestiae omnis optio alias  ducimus libero voluptate quas consectetur reprehenderit!'
        },
        {
            id:2,
            username:'iamrishi',
            time:'Comment Time',
            comment:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo voluptatem suscipit asperiores soluta earum,expedita architecto facilis minima, velit nesciunt molestiae omnis optio alias  ducimus libero voluptate quas consectetur reprehenderit!'
        },

    ]

    //styling the like and dislike buttons
    const styleLike={
        color:'black'
    }
    const styledislike={
        color:'black'
    }


    //fetching all comments from array object
    const [allComments, setallComments] = useState(usersComment);
    

    //value of comment input
    const [commentInput, setcommentInput] = useState("");

    //opening and closing comment form
    const [openCommentForm, setopenCommentForm] = useState(false);
    const openComment = ()=>{
        console.log('open comment');
        setopenCommentForm(!openCommentForm);
     
    }

    const [liked, setliked] = useState(false);
    const [disliked, setdisliked] = useState(false);
    const like = ()=>{
     
        console.log('liked');
        
        
    }

    const dislike = ()=>{
        console.log('dislike');
    }


    //submiting the comment and adding it to allcomment arrayobject
    const submitComment = (e)=>{
        e.preventDefault();
        console.log('submitcomment');
        if(!commentInput){
            alert('Please write something in comment box');
        }
        else{
            let sno;
            if(allComments.length===0){
                sno=0;
            }
            else{
                sno = allComments[allComments.length-1].id + 1;
            }

            const newComment={
                id:sno,
                username:'singhsharad529',
                time:new Date().toLocaleString(),
                comment:commentInput
            }

            setallComments([...allComments,newComment]);
            alert('comment submitted');
            setcommentInput("");


        }


    }

   


    return (
     

        <>
        <div className="blogContent">
            <div>
                <Row>
                    <Col >
                        <div className="categoryCol" >
                           <p className="categoryName"> Category Name</p>
                        </div>
                    </Col>
                    <Col><WatchLaterIcon/> May 19, 2021</Col>
                    <Col><AccountCircleIcon/> Author Name</Col>
                </Row>
            </div>
            <div className="articleTitle">
               <h1>Here goes the Title of the Article</h1>
            </div>
            <div className="articleSubtitle">
                <p>Article Subtitle (if applicable)</p>
            </div>
            <hr />
            <div>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo voluptatem suscipit asperiores soluta earum,
             expedita architecto facilis minima, velit nesciunt molestiae omnis optio alias 
             ducimus libero voluptate quas consectetur reprehenderit!
             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo voluptatem suscipit asperiores soluta earum,
             expedita architecto facilis minima, velit nesciunt molestiae omnis optio alias 
             ducimus libero voluptate quas consectetur reprehenderit!
                </p>

            </div>
               
            <div>
            <h4>Heading Level 1</h4>
            </div>

            <div>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo voluptatem suscipit asperiores soluta earum,
             expedita architecto facilis minima, velit nesciunt molestiae omnis optio alias 
             ducimus libero voluptate quas consectetur reprehenderit!
             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo voluptatem suscipit asperiores soluta earum,
             expedita architecto facilis minima, velit nesciunt molestiae omnis optio alias 
             ducimus libero voluptate quas consectetur reprehenderit!
                </p>

            </div>
            
            <div>
            <h4>Heading Level 2</h4>
            </div>

            <div>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo voluptatem suscipit asperiores soluta earum,
             expedita architecto facilis minima, velit nesciunt molestiae omnis optio alias 
             ducimus libero voluptate quas consectetur reprehenderit!
             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo voluptatem suscipit asperiores soluta earum,
             expedita architecto facilis minima, velit nesciunt molestiae omnis optio alias 
             ducimus libero voluptate quas consectetur reprehenderit!
                </p>

            </div>

            <div>
            <h4>Heading Level 2</h4>
            </div>

            <div>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo voluptatem suscipit asperiores soluta earum,
             expedita architecto facilis minima, velit nesciunt molestiae omnis optio alias 
             ducimus libero voluptate quas consectetur reprehenderit!
             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo voluptatem suscipit asperiores soluta earum,
             expedita architecto facilis minima, velit nesciunt molestiae omnis optio alias 
             ducimus libero voluptate quas consectetur reprehenderit!
                </p>

            </div>


            <div>
            <h5>Heading Level 3</h5>
            </div>

            <div>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo voluptatem suscipit asperiores soluta earum,
             expedita architecto facilis minima, velit nesciunt molestiae omnis optio alias 
             ducimus libero voluptate quas consectetur reprehenderit!
              
                </p>

            </div>

            <div>
            <h5>Heading Level 3</h5>
            </div>

            <div>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo voluptatem suscipit asperiores soluta earum,
             expedita architecto facilis minima, velit nesciunt molestiae omnis optio alias 
             ducimus libero voluptate quas consectetur reprehenderit!
              
                </p>

            </div>

            <div  >
                <div className=" labels">
                    <p className="labelNum">Label 1</p>
                </div>
                <div className=" labels">
                    <p className="labelName">Label Name</p>
                </div>
                <div className="labels">
                    <p className="labelNew">Label New</p>
                </div>
            </div>

            <hr />

            <div>
                <div className="bottomContent">
                   <button className="like" onClick={like}><ThumbUpIcon style={styleLike}/></button>
                </div>
                <div className="bottomContent">
                   <button className="like" onClick={dislike}>< ThumbDownIcon style={styledislike}/></button>
                </div>
                <div className="bottomContent">
                    <button className="like" onClick={openComment}><SmsIcon/></button>
                </div>
                <div className="bottomShare">
                    <button className="share">< ShareIcon/></button>
                </div>

            </div>


 
        </div>

        <Collapse isOpen={openCommentForm}>
        <div className="blogComment">
            <div>
                <p><AccountCircleIcon/> Username</p>
            </div>
            <div className="commentText">
               
            <Form onSubmit={submitComment}> 
      <FormGroup>
        <Input type="textarea" name="text" id="exampleText" placeholder="Enter Your Comment..." value={commentInput}  onChange={(e)=>{setcommentInput(e.target.value)}} />
      </FormGroup>      

      <Button style={{margin:'10px',backgroundColor:'#ec7c2d'}}>Submit</Button>    
         </Form>
            </div>

        </div>
     </Collapse>

     {
        allComments.map((users,index)=>{
            return (
                <div className="blogCommentUsers">
          <div className="commentHeader">
                <p><AccountCircleIcon/> {users.username}</p>
                 
            </div>
            <div className="commentHeader">
                <p><WatchLaterIcon/> {users.time}</p>
                 
            </div>
            <br />
            <div >
                <p className="commentData">
                   {users.comment}
                </p>
            </div>

            <div>
                <div className="bottomContent">
                   <button className="like" onClick={like}><ThumbUpIcon style={styleLike}/></button>
                </div>
                <div className="bottomContent">
                   <button className="like" onClick={dislike}>< ThumbDownIcon style={styledislike}/></button>
                </div>
                <div className="bottomContent">
                    <button className="like" ><SmsIcon/></button>
                </div>
            </div>
            
        </div>
            )
        })
     }

     
                
        
        </>
    )
}
