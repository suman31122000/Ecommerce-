
import React from "react";
import Menu from "./main";
import "./navbar.css";
 class Directory extends React.Component{ 
    constructor(){
        super();
        this.state={
            box:[
                {
                    title:'Hat',
                    imageurl:'https://www.shutterstock.com/image-photo/stylish-man-elegant-black-suit-260nw-144080746.jpg',
                    id:'1'
                },
                {
                    title:'Jacket',
                    imageurl:'https://imageio.forbes.com/specials-images/imageserve/621907c6a1c1d351180dadb8/Buck-Mason-Dry-Waxed-Canvas-N1-Deck-Jacket-10/960x0.jpg?format=jpg&width=960',
                    id:'2'
                },
                {
                    title:'Shoes',
                    imageurl:'https://media.istockphoto.com/id/1292261872/photo/young-man-shopping-shoes.jpg?b=1&s=170667a&w=0&k=20&c=29XJZtu9Q7pkQ1uH9drj4iEw34bzARzqJbI4VOCpDKE=',
                    id:'3'
                }
            ]
        }
    }
    render() {
        return(
            <div className="section">
               { this.state.box.map(({title,id,imageurl}) => (
                    <Menu key={id} title={title} url={imageurl}/>
                ))
               }
            </div>
        );
     }
 }


export default Directory;