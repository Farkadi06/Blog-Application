import React from 'react'
import './Settings.css'
import Sidebar from '../../Components/Sidebar/Sidebar'

function Settings() {
    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsTitleUpdate">Update Your Account</span>
                    <span className="settingsTitleDelete">Delete Account</span>
                </div>
                <form action="" className="settingsForm">
                    <div className="settingsPP">
                        <img
                            className="SettingsPPImg" 
                            src="https://digitalartcollector.com/wp-content/uploads/2021/03/stolen_cryptopunk.jpg" 
                            alt="" />
                        <label htmlFor="fileInput">
                            <i class="settingsPPIcon fas fa-user-edit"></i>
                        </label>
                        <input type="file" id="fileInput" style={{display: 'none'}} />
                    </div>
                    <div className="settingFormEdit">
                        <label >Username</label>
                        <input type="text" placeholder="Holloo" name="name"/>
                        <label >Email</label>
                        <input type="email" placeholder="Holloo#gmail.com" name="email"/>
                        <label >Password</label>
                        <input type="password" placeholder="Password" name="password"/>

                        <button className="settingsSubmitButton">Update</button>
                    </div>
                </form>
            </div>
            <Sidebar/>
        </div>
    )
}

export default Settings
