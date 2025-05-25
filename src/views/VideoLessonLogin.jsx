import React from "react";
import { Link } from "react-router-dom";
import NavbarLogin from "../components/NavbarLogin";
export const VideoLessonLogin = () => {
  return (
    <div>
      <NavbarLogin />
      <div className="bg-white w-full h-screen flex items-center justify-center">
        <h1>Welcome to the Video Lesson Login Page!</h1>
      </div>
    </div>
  );
};

export default VideoLessonLogin;
