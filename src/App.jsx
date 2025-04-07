// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React, { useState, useEffect, useRef } from "react";
import { Swiper as SwiperComponent, SwiperSlide } from "swiper/react";
import Swiper from 'swiper'; // Add this import for the Swiper constructor
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("home");
  const swiperRef = useRef(null);

  useEffect(() => {
    // Initialize Swiper
    const swiperOptions = {
      modules: [Pagination, Navigation, Autoplay],
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      centeredSlides: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
      on: {
        init: function (swiper) {
          const swiperElement = document.querySelector(".app-screens-swiper");
          if (swiperElement) {
            swiperElement.swiper = swiper;
          }
        },
      },
    };

    if (document.querySelector(".app-screens-swiper")) {
      // Use the imported Swiper constructor instead of window.Swiper
      swiperRef.current = new Swiper(
        ".app-screens-swiper",
        swiperOptions,
      );
    }

    return () => {
      if (swiperRef.current) {
        swiperRef.current.destroy();
      }
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      {/* 헤더 */}
      <header className="bg-white shadow-md fixed w-full top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center">
            <div className="text-red-500 font-bold text-2xl flex items-center">
              <span>Medi</span>
              <span className="relative">
                <i className="fas fa-phone-alt transform rotate-90 text-xl"></i>
              </span>
              <span>all</span>
            </div>
          </div>
          <div className="hidden md:flex space-x-8">
            <a
              href="#home"
              className={`${activeTab === "home" ? "text-red-500 font-semibold" : "text-gray-600"} hover:text-red-500 transition-colors cursor-pointer`}
            >
              홈
            </a>
            <a
              href="#problem"
              className={`${activeTab === "problem" ? "text-red-500 font-semibold" : "text-gray-600"} hover:text-red-500 transition-colors cursor-pointer`}
            >
              문제 상황
            </a>
            <a
              href="#solution"
              className={`${activeTab === "solution" ? "text-red-500 font-semibold" : "text-gray-600"} hover:text-red-500 transition-colors cursor-pointer`}
            >
              해결책
            </a>
            <a
              href="#process"
              className={`${activeTab === "process" ? "text-red-500 font-semibold" : "text-gray-600"} hover:text-red-500 transition-colors cursor-pointer`}
            >
              프로세스
            </a>
            <a
              href="#contact"
              className={`${activeTab === "contact" ? "text-red-500 font-semibold" : "text-gray-600"} hover:text-red-500 transition-colors cursor-pointer`}
            >
              문의하기
            </a>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-600 focus:outline-none cursor-pointer"
            >
              <i
                className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"} text-2xl`}
              ></i>
            </button>
          </div>
          <div className="hidden md:block">
            <button className="bg-red-500 text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:bg-red-600 transition-colors !rounded-button whitespace-nowrap cursor-pointer">
              긴급 출동 요청
            </button>
          </div>
        </div>
        {/* 모바일 메뉴 */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg py-4 px-6 absolute w-full">
            <div className="flex flex-col space-y-4">
              <a
                href="#home"
                className="text-gray-600 hover:text-red-500 transition-colors cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                홈
              </a>
              <a
                href="#problem"
                className="text-gray-600 hover:text-red-500 transition-colors cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                문제 상황
              </a>
              <a
                href="#solution"
                className="text-gray-600 hover:text-red-500 transition-colors cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                해결책
              </a>
              <a
                href="#process"
                className="text-gray-600 hover:text-red-500 transition-colors cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                프로세스
              </a>
              <a
                href="#contact"
                className="text-gray-600 hover:text-red-500 transition-colors cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                문의하기
              </a>
              <button className="bg-red-500 text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:bg-red-600 transition-colors !rounded-button whitespace-nowrap cursor-pointer">
                긴급 출동 요청
              </button>
            </div>
          </div>
        )}
      </header>
      {/* 히어로 섹션 */}
      <section
        id="home"
        className="pt-24 md:pt-0 bg-gradient-to-r from-red-500 to-red-600 text-white relative min-h-screen flex items-center"
      >
        <div className="absolute top-0 right-0 w-full h-full overflow-hidden">
          <img
            src="https://public.readdy.ai/ai/img_res/2b9fc0ec493e31c26f2ea7fbba8cb034.jpg"
            alt="Emergency Medical Service"
            className="absolute top-0 right-0 w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 py-20 md:py-32 flex flex-col md:flex-row items-center relative z-10">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">MediCall</h1>
            <p className="text-xl md:text-2xl mb-8">
              응급 상황에서 흔들린 생명의 리듬을 다시 제자리에 돌려놓겠다는
              우리의 목표를 담고 있습니다.
            </p>
            <p className="text-lg md:text-xl mb-8">
              골든타임을 놓치지 않는 실시간 응급실 매칭 서비스
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-white text-red-500 px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-100 transition-colors !rounded-button whitespace-nowrap cursor-pointer">
                앱 다운로드
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-red-500 transition-colors !rounded-button whitespace-nowrap cursor-pointer">
                자세히 알아보기
              </button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-64 md:w-80">
              <img
                src="https://public.readdy.ai/ai/img_res/b05987edf20185315e498c077e47c4b6.jpg"
                alt="MediCall App"
                className="w-full rounded-3xl shadow-2xl border-8 border-white"
              />
              <div className="absolute -top-4 -right-4 bg-red-500 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg">
                <span className="font-bold">SOS</span>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="w-full"
          >
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>
      {/* 문제 상황 섹션 */}
      <section id="problem" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">문제 상황</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              응급 상황에서 발생하는 병원 간 실시간 정보 공유 부족으로 인한
              골든타임 손실 문제
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-gray-50 p-6 rounded-xl shadow-md mb-8">
                <div className="flex items-center mb-4">
                  <div className="bg-red-500 text-white rounded-full w-10 h-10 flex items-center justify-center mr-4">
                    <i className="fas fa-ambulance"></i>
                  </div>
                  <h3 className="text-xl font-semibold">구급차 이송 문제</h3>
                </div>
                <p className="text-gray-600">
                  구급차가 환자를 이송하는 도중, 응급실에{" "}
                  <strong className="text-red-500">
                    빈 병상이 없거나 담당 의사가 부재
                  </strong>
                  해 다시 다른 병원으로 이동하는 사례가 빈번히 발생합니다.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl shadow-md mb-8">
                <div className="flex items-center mb-4">
                  <div className="bg-red-500 text-white rounded-full w-10 h-10 flex items-center justify-center mr-4">
                    <i className="fas fa-heartbeat"></i>
                  </div>
                  <h3 className="text-xl font-semibold">골든타임 손실</h3>
                </div>
                <p className="text-gray-600">
                  이로 인해{" "}
                  <strong className="text-red-500">
                    치료의 골든타임을 놓쳐 생명이 위협받는 일이 증가
                  </strong>
                  하고 있습니다.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl shadow-md">
                <div className="flex items-center mb-4">
                  <div className="bg-red-500 text-white rounded-full w-10 h-10 flex items-center justify-center mr-4">
                    <i className="fas fa-hospital"></i>
                  </div>
                  <h3 className="text-xl font-semibold">정보 공유 부족</h3>
                </div>
                <p className="text-gray-600">
                  근본 원인은 직접 병원에 연락해 응급실의 빈 자리를 확인하는
                  과정에서 적당한 응급실을 찾지 못하게 되는{" "}
                  <strong className="text-red-500">
                    병원 간 실시간 정보 공유 부족
                  </strong>
                  입니다.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://public.readdy.ai/ai/img_res/5e563f34c6cd821286b8f7560b0e868e.jpg"
                alt="응급 상황"
                className="rounded-xl shadow-xl w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg max-w-xs">
                <div className="flex items-center mb-2">
                  <div className="text-red-500 mr-2">
                    <i className="fas fa-exclamation-triangle text-xl"></i>
                  </div>
                  <h4 className="font-bold">골든타임 통계</h4>
                </div>
                <p className="text-sm text-gray-600">
                  심정지 환자의 생존율은 매 1분마다 7-10% 감소합니다. 적절한
                  병원 도착이 10분 지연될 경우 생존 확률이 최대 70% 감소할 수
                  있습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 해결책 섹션 */}
      <section id="solution" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">해결책</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              MediCall은 응급 상황에서 최적의 병원을 실시간으로 매칭하여
              골든타임을 확보합니다
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-red-100 text-red-500 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                <i className="fas fa-comments text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">
                채팅형 구조 시스템
              </h3>
              <p className="text-gray-600 text-center">
                구급대원이 환자의 상태와 현재 위치를 채팅을 통해 입력하면, AI가
                이를 분석하여 적절한 병원을 자동으로 매칭합니다.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-red-100 text-red-500 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                <i className="fas fa-phone-alt text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">
                병렬 자동 전화 시스템
              </h3>
              <p className="text-gray-600 text-center">
                각 병원 응급실에 병렬적으로 자동 전화를 걸어 수용 가능 여부를
                확인하여 시간을 단축합니다.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-red-100 text-red-500 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                <i className="fas fa-map-marked-alt text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">
                실시간 경로 안내
              </h3>
              <p className="text-gray-600 text-center">
                Google Maps API를 통해 구급대원에게 실시간 경로 안내를 제공하여
                빠르고 정확한 이송을 지원합니다.
              </p>
            </div>
          </div>
          <div className="mt-16 bg-white p-8 rounded-xl shadow-lg">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                <h3 className="text-2xl font-semibold mb-4">
                  앱 화면 미리보기
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <img
                    src="https://static.readdy.ai/image/3ad6a1f1577b3b4b07827e8de7aa00f1/adc621a0ef387172fee3566befa85c77.png"
                    alt="MediCall 앱 화면"
                    className="rounded-xl shadow-md w-full object-cover"
                  />
                </div>
              </div>
              <div className="md:w-1/2">
                <h3 className="text-2xl font-semibold mb-4">
                  MediCall의 차별점
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="text-green-500 mr-3 mt-1">
                      <i className="fas fa-check-circle"></i>
                    </div>
                    <p className="text-gray-600">
                      <strong className="text-gray-800">시간 단축:</strong> 병렬
                      자동 전화 시스템으로 다수의 병원에 동시에 연락하여 응답
                      시간 단축
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="text-green-500 mr-3 mt-1">
                      <i className="fas fa-check-circle"></i>
                    </div>
                    <p className="text-gray-600">
                      <strong className="text-gray-800">간편한 응답:</strong>{" "}
                      병원 측은 숫자 버튼으로 간편하게 응답 가능 (1번: 수용
                      가능, 2번: 수용 불가)
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="text-green-500 mr-3 mt-1">
                      <i className="fas fa-check-circle"></i>
                    </div>
                    <p className="text-gray-600">
                      <strong className="text-gray-800">AI 분석:</strong> 환자
                      상태와 위치 정보를 분석하여 최적의 병원 추천
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="text-green-500 mr-3 mt-1">
                      <i className="fas fa-check-circle"></i>
                    </div>
                    <p className="text-gray-600">
                      <strong className="text-gray-800">
                        실시간 업데이트:
                      </strong>{" "}
                      더 가까운 병원이 응답할 경우 경로 재안내 제공
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 프로세스 섹션 */}
      <section id="process" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              작동 프로세스
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              MediCall은 간단한 4단계 프로세스로 응급 상황에서 신속하게
              대응합니다
            </p>
          </div>
          <div className="mb-16">
            <div className="flex justify-center mb-8">
              <button
                className="bg-red-500 text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:bg-red-600 transition-colors mr-4 !rounded-button whitespace-nowrap cursor-pointer"
                onClick={() => {
                  const swiper = document.querySelector(
                    ".app-screens-swiper",
                  )?.swiper;
                  if (swiper) swiper.slidePrev();
                }}
              >
                <i className="fas fa-chevron-left"></i>
              </button>
              <button
                className="bg-red-500 text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:bg-red-600 transition-colors !rounded-button whitespace-nowrap cursor-pointer"
                onClick={() => {
                  const swiper = document.querySelector(
                    ".app-screens-swiper",
                  )?.swiper;
                  if (swiper) swiper.slideNext();
                }}
              >
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>

            <div className="app-screens-swiper-container overflow-hidden">
              <div className="app-screens-swiper">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow mx-auto max-w-sm">
                      <div className="bg-red-100 rounded-xl overflow-hidden mb-6">
                        <img
                          src="https://public.readdy.ai/ai/img_res/b4cd7469520de2eeb4291965319232e0.jpg"
                          alt="구글 로그인 화면"
                          className="w-full h-auto object-top object-cover"
                        />
                      </div>
                      <h3 className="text-xl font-semibold mb-3 text-center">
                        구글 로그인 화면
                      </h3>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow mx-auto max-w-sm">
                      <div className="bg-red-100 rounded-xl overflow-hidden mb-6">
                        <img
                          src="https://public.readdy.ai/ai/img_res/e910ee1c54cb4c4edb0906e34ece8d1a.jpg"
                          alt="응급 구조사 자격 확인 화면"
                          className="w-full h-auto object-top object-cover"
                        />
                      </div>
                      <h3 className="text-xl font-semibold mb-3 text-center">
                        응급 구조사 자격 확인 화면
                      </h3>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow mx-auto max-w-sm">
                      <div className="bg-red-100 rounded-xl overflow-hidden mb-6">
                        <img
                          src="https://public.readdy.ai/ai/img_res/b7c4c0af30bc7510882bc009ca8db6d2.jpg"
                          alt="지도 화면"
                          className="w-full h-auto object-top object-cover"
                        />
                      </div>
                      <h3 className="text-xl font-semibold mb-3 text-center">
                        지도 화면
                      </h3>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow mx-auto max-w-sm">
                      <div className="bg-red-100 rounded-xl overflow-hidden mb-6">
                        <img
                          src="https://public.readdy.ai/ai/img_res/0790b86dc3d55bf01f9d4340163ae716.jpg"
                          alt="환자 상태 설정 화면"
                          className="w-full h-auto object-top object-cover"
                        />
                      </div>
                      <h3 className="text-xl font-semibold mb-3 text-center">
                        환자 상태 설정 화면
                      </h3>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow mx-auto max-w-sm">
                      <div className="bg-red-100 rounded-xl overflow-hidden mb-6">
                        <img
                          src="https://public.readdy.ai/ai/img_res/059dc8a0748f6275cb8725c954a77dc8.jpg"
                          alt="검색한 병원 리스트"
                          className="w-full h-auto object-top object-cover"
                        />
                      </div>
                      <h3 className="text-xl font-semibold mb-3 text-center">
                        검색한 병원 리스트
                      </h3>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow mx-auto max-w-sm">
                      <div className="bg-red-100 rounded-xl overflow-hidden mb-6">
                        <img
                          src="https://public.readdy.ai/ai/img_res/8f91a40448e23694ec5b8adfc5b4b3be.jpg"
                          alt="병원 상세 정보"
                          className="w-full h-auto object-top object-cover"
                        />
                      </div>
                      <h3 className="text-xl font-semibold mb-3 text-center">
                        병원 상세 정보
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="swiper-pagination mt-6"></div>
              </div>
            </div>
          </div>
          <div className="relative">
            {/* 프로세스 타임라인 */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-red-100 transform -translate-x-1/2 z-0"></div>
            {/* 단계 1 */}
            <div className="flex flex-col md:flex-row items-center mb-16 relative">
              <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0 md:text-right">
                <h3 className="text-xl font-semibold mb-3">1. 사용자 입력</h3>
                <p className="text-gray-600">
                  구급대원이 Flutter 앱을 통해 환자 상태를 입력하고, 위치정보를
                  자동으로 전달받습니다.
                </p>
              </div>
              <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 z-10">
                <div className="bg-red-500 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg">
                  <span className="font-bold">1</span>
                </div>
              </div>
              <div className="md:w-1/2 md:pl-12">
                <img
                  src="https://public.readdy.ai/ai/img_res/f96bcdd3e05411f3ca2abd590622075b.jpg"
                  alt="사용자 입력"
                  className="rounded-xl shadow-md w-full"
                />
              </div>
            </div>
            {/* 단계 2 */}
            <div className="flex flex-col md:flex-row-reverse items-center mb-16 relative">
              <div className="md:w-1/2 md:pl-12 mb-8 md:mb-0 md:text-left">
                <h3 className="text-xl font-semibold mb-3">2. AI 분석</h3>
                <p className="text-gray-600">
                  입력된 정보를 바탕으로 주변 병원 리스트를 생성하고, 각 병원
                  응급실에 병렬적으로 자동 전화를 걸어 수용 가능 여부를
                  확인합니다.
                </p>
              </div>
              <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 z-10">
                <div className="bg-red-500 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg">
                  <span className="font-bold">2</span>
                </div>
              </div>
              <div className="md:w-1/2 md:pr-12">
                <img
                  src="https://public.readdy.ai/ai/img_res/a962f715ba39bb7615e98e86767b2bc7.jpg"
                  alt="AI 분석"
                  className="rounded-xl shadow-md w-full"
                />
              </div>
            </div>
            {/* 단계 3 */}
            <div className="flex flex-col md:flex-row items-center mb-16 relative">
              <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0 md:text-right">
                <h3 className="text-xl font-semibold mb-3">
                  3. 병원 응답 처리
                </h3>
                <p className="text-gray-600">
                  병원 측은 AI 전화 수신 후 숫자 버튼으로 간편 응답합니다. (1번:
                  수용 가능, 2번: 수용 불가)
                </p>
              </div>
              <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 z-10">
                <div className="bg-red-500 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg">
                  <span className="font-bold">3</span>
                </div>
              </div>
              <div className="md:w-1/2 md:pl-12">
                <img
                  src="https://public.readdy.ai/ai/img_res/a5630dd6408e266e15b9db9303728a40.jpg"
                  alt="병원 응답 처리"
                  className="rounded-xl shadow-md w-full"
                />
              </div>
            </div>
            {/* 단계 4 */}
            <div className="flex flex-col md:flex-row-reverse items-center relative">
              <div className="md:w-1/2 md:pl-12 mb-8 md:mb-0 md:text-left">
                <h3 className="text-xl font-semibold mb-3">
                  4. 병원 매칭 & 안내
                </h3>
                <p className="text-gray-600">
                  가장 빠르게 "수용 가능" 응답을 준 병원의 이름과 위치 정보를
                  알려주고, Google Maps API를 통해 구급대원에게 실시간 경로
                  안내를 제공합니다.
                </p>
              </div>
              <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 z-10">
                <div className="bg-red-500 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg">
                  <span className="font-bold">4</span>
                </div>
              </div>
              <div className="md:w-1/2 md:pr-12">
                <img
                  src="https://public.readdy.ai/ai/img_res/92e2202c70949d00b099a287e117d401.jpg"
                  alt="병원 매칭 & 안내"
                  className="rounded-xl shadow-md w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CTA 섹션 */}
      <section className="py-20 bg-red-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            지금 바로 MediCall과 함께하세요
          </h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto">
            응급 상황에서 골든타임을 지키는 가장 빠른 방법, MediCall이
            함께합니다.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
            <button
              onClick={() => {
                const modal = document.createElement("div");
                modal.className =
                  "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50";
                modal.innerHTML = `
<div class="bg-white text-gray-800 rounded-xl p-6 max-w-md mx-auto shadow-xl">
<div class="flex justify-between items-center mb-4">
<h3 class="text-xl font-semibold">알림</h3>
<button class="text-gray-500 hover:text-gray-700">
<i class="fas fa-times"></i>
</button>
</div>
<p class="mb-6">아직 준비중입니다. 곧 App Store에 출시될 예정입니다.</p>
<div class="flex justify-end">
<button class="bg-red-500 text-white px-4 py-2 rounded-full font-semibold !rounded-button whitespace-nowrap">
확인
</button>
</div>
</div>
`;
                document.body.appendChild(modal);
                // 모달 닫기 이벤트 추가
                const closeButtons = modal.querySelectorAll("button");
                closeButtons.forEach((button) => {
                  button.addEventListener("click", () => {
                    document.body.removeChild(modal);
                  });
                });
              }}
              className="bg-white text-red-500 px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-100 transition-colors flex items-center justify-center !rounded-button whitespace-nowrap cursor-pointer"
            >
              <i className="fab fa-apple mr-2 text-xl"></i>
              App Store에서 다운로드
            </button>
            <button
              onClick={() => {
                const modal = document.createElement("div");
                modal.className =
                  "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50";
                modal.innerHTML = `
<div class="bg-white text-gray-800 rounded-xl p-6 max-w-md mx-auto shadow-xl">
<div class="flex justify-between items-center mb-4">
<h3 class="text-xl font-semibold">알림</h3>
<button class="text-gray-500 hover:text-gray-700">
<i class="fas fa-times"></i>
</button>
</div>
<p class="mb-6">아직 준비중입니다. 곧 Google Play에 출시될 예정입니다.</p>
<div class="flex justify-end">
<button class="bg-red-500 text-white px-4 py-2 rounded-full font-semibold !rounded-button whitespace-nowrap">
확인
</button>
</div>
</div>
`;
                document.body.appendChild(modal);
                // 모달 닫기 이벤트 추가
                const closeButtons = modal.querySelectorAll("button");
                closeButtons.forEach((button) => {
                  button.addEventListener("click", () => {
                    document.body.removeChild(modal);
                  });
                });
              }}
              className="bg-white text-red-500 px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-100 transition-colors flex items-center justify-center !rounded-button whitespace-nowrap cursor-pointer"
            >
              <i className="fab fa-google-play mr-2 text-xl"></i>
              Google Play에서 다운로드
            </button>
          </div>
          <div className="bg-red-600 rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold mb-6">
              병원 파트너가 되어주세요
            </h3>
            <p className="mb-8">
              MediCall 네트워크에 참여하여 더 많은 생명을 구하는 데
              동참해주세요.
            </p>
            <button
              onClick={() => {
                const modal = document.createElement("div");
                modal.className =
                  "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50";
                modal.innerHTML = `
<div class="bg-white text-gray-800 rounded-xl p-6 max-w-md mx-auto shadow-xl">
<div class="flex justify-between items-center mb-4">
<h3 class="text-xl font-semibold">알림</h3>
<button class="text-gray-500 hover:text-gray-700">
<i class="fas fa-times"></i>
</button>
</div>
<p class="mb-6">아직 준비중입니다. 곧 서비스가 오픈될 예정입니다.</p>
<div class="flex justify-end">
<button class="bg-red-500 text-white px-4 py-2 rounded-full font-semibold !rounded-button whitespace-nowrap">
확인
</button>
</div>
</div>
`;
                document.body.appendChild(modal);
                // 모달 닫기 이벤트 추가
                const closeButtons = modal.querySelectorAll("button");
                closeButtons.forEach((button) => {
                  button.addEventListener("click", () => {
                    document.body.removeChild(modal);
                  });
                });
              }}
              className="bg-white text-red-500 px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-100 transition-colors !rounded-button whitespace-nowrap cursor-pointer"
            >
              파트너 등록 신청하기
            </button>
          </div>
        </div>
      </section>
      {/* 푸터 */}
      <footer id="contact" className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-white font-bold text-2xl mb-4 flex items-center">
                <span>Medi</span>
                <span className="relative">
                  <i className="fas fa-phone-alt transform rotate-90 text-xl"></i>
                </span>
                <span>all</span>
              </div>
              <p className="mb-4">
                응급 상황에서 흔들린 생명의 리듬을 다시 제자리에 돌려놓겠다는
                우리의 목표를 담고 있습니다.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors cursor-pointer"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors cursor-pointer"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors cursor-pointer"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors cursor-pointer"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-white text-lg font-semibold mb-4">
                빠른 링크
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#home"
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    홈
                  </a>
                </li>
                <li>
                  <a
                    href="#problem"
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    문제 상황
                  </a>
                </li>
                <li>
                  <a
                    href="#solution"
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    해결책
                  </a>
                </li>
                <li>
                  <a
                    href="#process"
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    프로세스
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white text-lg font-semibold mb-4">
                문의하기
              </h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <i className="fas fa-map-marker-alt mt-1 mr-3"></i>
                  <span>서울특별시 강남구 테헤란로 123, 메디콜타워 8층</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-phone-alt mt-1 mr-3"></i>
                  <span>02-123-4567</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-envelope mt-1 mr-3"></i>
                  <span>info@medicall.kr</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white text-lg font-semibold mb-4">
                뉴스레터 구독
              </h4>
              <p className="mb-4">MediCall의 최신 소식을 받아보세요.</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="이메일 주소"
                  className="bg-gray-800 text-white px-4 py-2 rounded-l-full focus:outline-none border-none"
                />
                <button className="bg-red-500 text-white px-4 py-2 rounded-r-full hover:bg-red-600 transition-colors !rounded-button whitespace-nowrap cursor-pointer">
                  구독
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center">
            <p>&copy; 2025 MediCall. All rights reserved.</p>
            <div className="mt-2 flex justify-center space-x-4">
              <a
                href="#"
                className="hover:text-white transition-colors cursor-pointer"
              >
                이용약관
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors cursor-pointer"
              >
                개인정보처리방침
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors cursor-pointer"
              >
                쿠키 정책
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
