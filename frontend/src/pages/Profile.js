import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Note from '../components/Note';
import Fotter from '../components/Fotter';
import { useNavigate } from 'react-router-dom';
import Avatar from 'react-avatar';

const Profile = () => {
  const [userDetails, setUserDetails] = useState(null);
  const [notes, setNotes] = useState(null);
  const [importantNotes, setImportantNotes] = useState(null);
  const [normalNotes, setNormalNotes] = useState(null);
  const [profilePic, setProfilePic] = useState(localStorage.getItem("profilePic") || "");

  const navigate = useNavigate();

  function getUserDetails() {
    fetch("http://localhost:8000/getUserDetails", {
      mode: "cors",
      method: "POST",
      headers: {
        "Application-Type": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ userId: localStorage.getItem("userID") })
    }).then(res => res.json()).then(data => {
      setUserDetails(data);
    });
  }

  function getNotes() {
    fetch("http://localhost:8000/getNotes", {
      mode: "cors",
      method: "POST",
      headers: {
        "Application-Type": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ userId: localStorage.getItem("userID") })
    }).then(res => res.json()).then(data => {
      setNotes(data);
      setImportantNotes(data.filter(note => note.isImportant));
      setNormalNotes(data.filter(note => note.isImportant === false));
    });
  }

  const handleLogout = () => {
    localStorage.removeItem("userID");
    localStorage.removeItem("token");
    localStorage.removeItem("profilePic");
    navigate("/login");
  };

  const handlePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePic(reader.result);
        localStorage.setItem("profilePic", reader.result); // Save the image URL to localStorage
      };
      reader.readAsDataURL(file); // Convert the image file to base64 string
    }
  };

  useEffect(() => {
    getUserDetails();
    getNotes();
  }, []);

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-between w-screen h-[300px] px-[50px]">
        <div className="flex items-center gap-[10px]">
        <div className="profileCircle w-[150px] h-[150px] rounded-[50%] bg-[#d9d9d9] relative">
  {profilePic ? (
    <img
      src={profilePic}
      alt="Profile"
      className="w-full h-full rounded-[50%] object-cover"
    />
  ) : (
    <Avatar
      name={userDetails ? userDetails.name : ""}
      size="150"
      round="50%"
      style={{ cursor: "pointer" }}
      onClick={() => { navigate("/profile") }}
    />
  )}
  <input
    type="file"
    id="profilePicInput"
    accept="image/*"
    className="hidden"
    onChange={handlePicChange}
  />
</div>

          <div>
            <h3 className='text-[23px]'>{userDetails ? userDetails.name : ""}</h3>
            <p className='m-[0px] p-[0px] text-[gray] text-[15px] -mt-1'>Joined In {userDetails ? new Date(userDetails.date).toDateString() : ""}</p>
          </div>
        </div>
        <div className='relative h-[40%]'>
          <div className='flex items-center gap-[10px] text-[gray]'>Total Notes : {notes ? notes.length : ""} | Important Notes : {importantNotes ? importantNotes.length : ""}</div>
          <div className='absolute bottom-0 flex items-center gap-[10px]'>
            <button className="btnNormal" onClick={() => { navigate("/addNewNote") }}>Add Note</button>
            <label
              htmlFor="profilePicInput"
              className="btnNormal bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer flex justify-center items-center"
            >
              Change Pic
            </label>
          </div>
        </div>
      </div>

      <div className='w-screen px-[50px]'>
        <h3 className='text-[26px]'>Your <span style={{ color: "#578df5" }}>Important</span> Notes</h3>
      </div>
      <div className="gridItems">
        {
          importantNotes ? importantNotes.map((note, index) => {
            return <Note key={note._id} note={note} index={index} />
          }) : ""
        }
      </div>

      <div className='w-screen px-[50px] mt-4'>
        <h3 className='text-[26px]'>Your <span style={{ color: "#578df5" }}>Normal</span> Notes</h3>
      </div>
      <div className="gridItems mb-3">
        {
          normalNotes ? normalNotes.map((note, index) => {
            return <Note key={note._id} note={note} index={index} />
          }) : ""
        }
      </div>

      <div className="w-screen px-[50px] mt-4">
        <button
          onClick={handleLogout}
          className="btnLogout bg-red-600 text-white w-full py-2 rounded-md"
        >
          Logout
        </button>
      </div>

      <Fotter />
    </>
  );
};

export default Profile;
