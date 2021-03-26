import React, {useContext} from 'react'
import { Link } from "react-router-dom";
import Header from '../component/Header';
import "./HomePage.css"
export default function HomePage() {

    return (
      <div>
        <Header home="Home"/>
        <article className="room">
          <div className="img-container">
            <img
              src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
              alt="single room"
            />
            <div className="price-top">
              <h6>444</h6>
              <p>per night</p>
            </div>
            <Link to="/signup" className="btn-primary room-link">
              features
            </Link>
          </div>
          <p className="room-info">Hello</p>
        </article>
      </div>
    );
    
}
