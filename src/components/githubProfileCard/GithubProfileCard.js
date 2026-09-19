import React from "react";
import "./GithubProfileCard.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import {contactInfo, isHireable} from "../../portfolio";
import emoji from "react-easy-emoji";
import {Fade} from "react-reveal";

export default function GithubProfileCard({prof}) {
  if (isHireable) {
    prof.hireable = "Yes";
  } else {
    prof.hireable = "No";
  }
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="contact">
        <h1 className="prof-title">Profile</h1>
        <div className="row">
          <div className="main-content-profile">
            <div className="blog-header">
              <p className="subTitle blog-subtitle">{contactInfo.subtitle}</p>
            </div>

            {prof.location !== null && (
              <div className="location-div">
                <span className="desc-prof">
                  <svg
                    viewBox="-0.5 -2 20 19"
                    version="1.1"
                    width="22"
                    height="16"
                    aria-hidden="true"
                    stroke="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 0C2.69 0 0 2.5 0 5.5 0 10.02 6 16 6 16s6-5.98 6-10.5C12 2.5 9.31 0 6 0zm0 14.55C4.14 12.52 1 8.44 1 5.5 1 3.02 3.25 1 6 1c1.34 0 2.61.48 3.56 1.36.92.86 1.44 1.97 1.44 3.14 0 2.94-3.14 7.02-5 9.05zM8 5.5c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"
                    ></path>
                  </svg>
                  {prof.location}
                </span>
              </div>
            )}
            <div className="profile-info">
              <div className="info-card">
                <div className="info-title">🎓 학력</div>
                <div className="info-content">
                  창원대학교 컴퓨터공학과
                  <br />
                  학점 : 3.28 / 4.5
                  <br />
                  2026.08 졸업 예정
                </div>
              </div>

              <div className="info-card">
                <div className="info-title">🔬 연구 및 활동</div>
                <div className="info-content">
                  학부연구생
                  <br />
                  Computer Vision 연구
                  <br />
                  실시간 객체 탐지 시스템 개발
                </div>
              </div>

              <div className="info-card">
                <div className="info-title">🏆 수상 및 성과</div>
                <div className="info-content">
                  세종시 자율주행 AI 경진대회 3등
                  <br />
                  KIIECT 우수논문상
                </div>
              </div>

              <div className="info-card">
                <div className="info-title">📫 Contact</div>
                <div className="info-content">
                  Email : rlatjddus234@gmail.com
                  <br />
                  GitHub : github.com/rlatjddus1
                  <br />
                  Phone : 82+010-6685-4561
                </div>
              </div>

              <div className="info-card">
                <div className="info-title">🚀 관심 분야</div>
                <div className="info-content">
                  Computer Vision
                  <br />
                  Embedded System
                  <br />
                  System Programming
                </div>
              </div>

              <div className="info-card">
                <div className="info-title">🌱 학습 중</div>
                <div className="info-content">
                  Embedded System
                  <br />
                  Operating System
                  <br />
                  Network
                </div>
              </div>
            </div>
            <div className="opp-div">
              <span className="desc-prof"></span>
            </div>
            <SocialMedia />
          </div>
          <div className="image-content-profile">
            <img
              src={prof.avatarUrl}
              alt={prof.name}
              className="profile-image"
            />
          </div>
        </div>
      </div>
    </Fade>
  );
}
