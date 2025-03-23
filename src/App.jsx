import React, { useState, useEffect } from 'react';
import * as echarts from 'echarts';
import sendEmail from './components/sendEmail.jsx';
const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const chart = echarts.init(document.getElementById('problemChart'));
    
    const option = {
      animation: false,
      title: {
        text: '응급실 도착 시간별 생존율',
        textStyle: {
          fontFamily: 'Noto Sans KR'
        }
      },
      xAxis: {
        type: 'category',
        data: ['10분 이내', '20분 이내', '30분 이내', '40분 이내', '50분 이내', '60분 이내']
      },
      yAxis: {
        type: 'value',
        name: '생존율 (%)'
      },
      series: [{
        data: [95, 85, 70, 55, 40, 25],
        type: 'line',
        smooth: true,
        lineStyle: {
          color: '#3B82F6'
        },
        areaStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
              offset: 0,
              color: 'rgba(59, 130, 246, 0.5)'
            }, {
              offset: 1,
              color: 'rgba(59, 130, 246, 0.1)'
            }]
          }
        }
      }]
    };

    chart.setOption(option);

    return () => {
      chart.dispose();
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img 
                src="https://public.readdy.ai/ai/img_res/b7a113bf9b7c22a9afd3c4b2389cb36c.jpg" 
                alt="MediCall Logo" 
                className="h-8 w-8" 
              />
              <span className="ml-2 text-xl font-bold text-blue-600">MediCall</span>
            </div>
            
            <div className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-600 hover:text-blue-600 cursor-pointer whitespace-nowrap">주요 기능</a>
              <a href="#system" className="text-gray-600 hover:text-blue-600 cursor-pointer whitespace-nowrap">시스템 구조</a>
              <a href="#tech" className="text-gray-600 hover:text-blue-600 cursor-pointer whitespace-nowrap">기술 스택</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600 cursor-pointer whitespace-nowrap">문의하기</a>
            </div>

            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <i className="fas fa-bars text-gray-600 text-2xl"></i>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed top-16 left-0 w-full bg-white shadow-md md:hidden z-40">
          <div className="flex flex-col p-4 space-y-4">
            <a href="#features" className="text-gray-600 hover:text-blue-600">주요 기능</a>
            <a href="#system" className="text-gray-600 hover:text-blue-600">시스템 구조</a>
            <a href="#tech" className="text-gray-600 hover:text-blue-600">기술 스택</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600">문의하기</a>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <div className="relative pt-16 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://public.readdy.ai/ai/img_res/ab5a479766925834b6e0e80d43d4587c.jpg"
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-900/40"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <div className="lg:w-1/2">
            <h1 className="text-4xl font-bold text-white mb-6">
              AI 기반 응급실 매칭 시스템
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              골든타임을 지키는 가장 스마트한 방법.<br />
              환자 상태 입력부터 병원 매칭까지 단 몇 초만에.
            </p>
            <div className="flex space-x-4">
              <button className="!rounded-button bg-blue-600 text-white px-8 py-3 font-semibold hover:bg-blue-700 transition cursor-pointer whitespace-nowrap">
                서비스 시작하기
              </button>
              <button className="!rounded-button bg-white text-blue-600 px-8 py-3 font-semibold hover:bg-gray-100 transition cursor-pointer whitespace-nowrap">
                더 알아보기
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Problem Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">골든타임, 우리의 도전</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div id="problemChart" style={{ width: '100%', height: '400px' }}></div>
            </div>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3">🚨 현재 문제점</h3>
                <p className="text-gray-600">응급환자 이송 중 병원 수용 불가로 인한 골든타임 손실이 발생하고 있습니다.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3">💡 MediCall의 해결책</h3>
                <p className="text-gray-600">AI 기반 실시간 병원 매칭으로 환자를 가장 적합한 병원으로 신속하게 이송합니다.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">주요 기능</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: 'fa-comments',
                title: '채팅형 인터페이스',
                desc: '간단한 대화로 환자 정보를 입력하세요'
              },
              {
                icon: 'fa-robot',
                title: 'AI 매칭 시스템',
                desc: 'Gemini AI가 최적의 병원을 선정합니다'
              },
              {
                icon: 'fa-phone-volume',
                title: '병렬 전화 시스템',
                desc: '여러 병원에 동시 연락이 가능합니다'
              },
              {
                icon: 'fa-route',
                title: '실시간 경로 안내',
                desc: '최적의 이송 경로를 안내해드립니다'
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <i className={`fas ${feature.icon} text-blue-600 text-xl`}></i>
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* System Structure */}
      <div id="system" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">시스템 구조</h2>
          <div className="flex flex-col items-center">
            <div className="grid md:grid-cols-3 gap-8 w-full max-w-4xl">
              {[
                {
                  step: '01',
                  title: '정보 입력',
                  desc: '구급대원이 Flutter 앱을 통해 환자 상태와 위치 정보를 입력합니다.'
                },
                {
                  step: '02',
                  title: 'AI 분석',
                  desc: 'Gemini AI가 입력된 정보를 분석하여 최적의 병원 목록을 생성합니다.'
                },
                {
                  step: '03',
                  title: '병원 연결',
                  desc: 'Twilio를 통해 선정된 병원들에 동시에 연락이 이루어집니다.'
                }
              ].map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="text-blue-600 font-bold mb-2">STEP {item.step}</div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Tech Stack */}
      <div id="tech" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">기술 스택</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: 'fa-mobile-alt',
                title: 'Flutter',
                desc: '크로스 플랫폼 모바일 앱 개발'
              },
              {
                icon: 'fa-phone',
                title: 'Twilio',
                desc: '실시간 음성 통신 시스템'
              },
              {
                icon: 'fa-map-marked-alt',
                title: 'Google Maps',
                desc: '실시간 위치 및 경로 안내'
              },
              {
                icon: 'fa-brain',
                title: 'Gemini AI',
                desc: '지능형 매칭 알고리즘'
              }
            ].map((tech, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <i className={`fas ${tech.icon} text-blue-600 text-xl`}></i>
                </div>
                <h3 className="text-xl font-semibold mb-3">{tech.title}</h3>
                <p className="text-gray-600">{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">문의하기</h2>
          <div className="max-w-2xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <form className="space-y-6" onSubmit={sendEmail}>
                <div>
                  <label className="block text-gray-700 mb-2">이름</label>
                  <input
                    type="text"
                    name="user_name"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">이메일</label>
                  <input
                    type="email"
                    name="user_email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">메시지</label>
                  <textarea
                    name="message"
                    rows="4"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="!rounded-button w-full bg-blue-600 text-white py-3 font-semibold hover:bg-blue-700 transition cursor-pointer whitespace-nowrap"
                >
                  보내기
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">MediCall</h3>
              <p className="text-gray-400">응급실 매칭의 새로운 솔루션</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">연락처</h3>
              <p className="text-gray-400">서울특별시 광진구 능동로 120</p>
              <p className="text-gray-400">이메일: medicall.developer@gmail.com</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">소셜 미디어</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white cursor-pointer">
                  <i className="fab fa-facebook text-2xl"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white cursor-pointer">
                  <i className="fab fa-twitter text-2xl"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white cursor-pointer">
                  <i className="fab fa-linkedin text-2xl"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 MediCall. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
