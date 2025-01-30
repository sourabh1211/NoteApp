import React from 'react';
import LinkedinImg from '../Images/linkedin.png';
import InstagramImg from '../Images/instagram.png';
import Mailimg from '../Images/gmail.png';


const Fotter = () => {
  return (
    <>
      <div className="fotter h-[120px] mt-5 w-screen px-[50px] bg-[#f4f4f4] flex items-center justify-between">
        <h3 className="text-2xl">NotePad</h3>

        <div className="text-center text-[gray]">
          <p>
            Designed By <span className="sp-text">Sourabh</span>@2024
          </p>
          <p>Copy Right 2024 All Right Reserved</p>
        </div>

        <div className="text-gray">
          <p className="font-semibold">We Are Social</p>
          <div className="flex items-center gap-1">
            <a
              href="https://www.linkedin.com/in/sourabh1112/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-[5px] bg-[#fff] cursor-pointer"
            >
              <img
                src={LinkedinImg}
                alt="LinkedIn"
                className="w-6 h-6"
              />
            </a>
            <a
              href="https://www.instagram.com/sourabh_._verma/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-[5px] bg-[#fff] cursor-pointer"
            >
              <img
                src={InstagramImg}
                alt="Instagram"
                className="w-6 h-6"
              />
            </a>
            <a
              href="mailto:sourabhvr8482@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-[5px] bg-[#fff] cursor-pointer"
            >
              <img
                src={Mailimg}
                alt="Mail"
                className="w-6 h-6"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Fotter;
