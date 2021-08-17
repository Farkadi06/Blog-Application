import React from 'react'
import './Write.css'

function Write() {
    return (
        <div className="write">
            <img
                className="writeImg" 
                src="https://media.newyorker.com/photos/6056564774e33630d63405d8/4:3/w_2559,h_1919,c_limit/Chayka-Beeple.jpg" 
                alt="" />
            <form className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <i class="writeIcon fas fa-plus"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display: 'none'}}/>
                    <input type="text" placeholder="Title" className="writeInput" autoFocus={true}/>
                </div>
                <div className="writeFormGroup">
                    <textarea placeholder="Tell your story...." type="text" className="writeInput writeText" ></textarea>
                    <button className="writeSubmit">Publish</button>
                </div>
            </form>
        </div>
    )
}

export default Write
