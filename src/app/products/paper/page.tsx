"use client";

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Check, Users, Bot, Play, Video, Mic, Tv, PenTool } from "lucide-react";
import { usePageMetadata } from '@/hooks/usePageMetadata';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const  PaperPage = () => {
  const [activeScenario, setActiveScenario] = useState('paper');
  
  usePageMetadata({
    title: '艺创AI_AI论文写作系统_AI论文生成器',
    description: '艺创AI论文写作系统是一款基于人工智能的论文创作工具,支持期刊论文、科普文章、学生作业等多种写作场景,提供智能写作、参考文献引用、格式排版等功能,是学术写作的得力助手',
    keywords: 'AI论文写作系统,AI论文生成器,论文写作工具,智能写作系统,AI写作助手'       
  });

  // 常用样式常量
  const buttonPrimary = "bg-blue-600 hover:bg-blue-700 text-white";
  const buttonSecondary = "border-blue-600 text-blue-600 hover:bg-blue-50";
  const iconContainer = "w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center";
  const sectionPadding = "py-20";
  const containerBase = "container mx-auto px-4";

  return (
    <div className="min-h-screen bg-white">
      {/* 头部横幅 - 简约风格 */}
      <section className="pt-24 pb-20 bg-white overflow-hidden relative">
        {/* 简约背景 - 使用白色背景 */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          {/* 顶部标签 - 简约风格 */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-medium">
              <span className="flex h-2 w-2 rounded-full bg-blue-500 mr-2 animate-pulse"></span>
              <span className="mr-2">全新升级</span>
              <span className="text-xs px-2 py-0.5 bg-blue-100 rounded-md">V2.0</span>
            </div>
          </div>
          
          <div className="flex flex-col lg:flex-row items-center justify-between">
            {/* 左侧内容 - 简约风格 */}
            <div className="w-full lg:w-1/2 lg:pr-12 mb-10 lg:mb-0 text-center lg:text-left">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                <span className="inline-block relative">
                  全能
                  <span className="absolute -bottom-2 left-0 w-full h-1 bg-blue-500"></span>
                </span>
                <span className="text-blue-600"> 论文写作</span>
                <span className="block mt-2">智能管理系统</span>
              </h1>
              
              <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0">
                基于先进的AI技术，提供高度拟真的数字人解决方案，赋能企业知识管理与数字化转型
              </p>
              
              {/* 数据指标 - 简约风格 */}
              <div className="grid grid-cols-3 gap-6 mb-10">
                <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm transform transition-all hover:shadow-md">
                  <div className="flex flex-col items-center lg:items-start">
                    <span className="text-3xl font-bold text-gray-900 flex items-baseline">
                      98.5<span className="text-base font-normal text-blue-600 ml-1">万+</span>
                    </span>
                    <span className="text-sm text-gray-500 mt-1">日活跃用户</span>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm transform transition-all hover:shadow-md">
                  <div className="flex flex-col items-center lg:items-start">
                    <span className="text-3xl font-bold text-gray-900 flex items-baseline">
                      500<span className="text-base font-normal text-blue-600 ml-1">ms</span>
                    </span>
                    <span className="text-sm text-gray-500 mt-1">极速响应</span>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm transform transition-all hover:shadow-md">
                  <div className="flex flex-col items-center lg:items-start">
                    <span className="text-3xl font-bold text-gray-900 flex items-baseline">
                      5<span className="text-base font-normal text-blue-600 ml-1">min起</span>
                    </span>
                    <span className="text-sm text-gray-500 mt-1">快速训练</span>
                  </div>
                </div>
              </div>
              
              {/* 按钮组 - 简约风格 */}
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 h-auto text-base font-medium rounded-full shadow-sm">
                  立即试用
                </Button>
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 h-auto text-base font-medium rounded-full">
                  了解更多
                </Button>
              </div>
            </div>
            
            {/* 右侧图形 - 简约风格展示 */}
            <div className="w-full lg:w-1/2 relative">
              <div className="relative">
                {/* 主图 - 简约风格 */}
                <div className="relative mx-auto">
                  <img 
                    src="https://server.mddai.cn/uploads/images/20231227143956204039080.png" 
                    alt="AI知识库系统界面展示" 
                    className="w-full h-auto transform scale-110" /* 增加图片尺寸，使其看起来更大 */
                  />
                  
                  {/* 悬浮标签 - 简约风格 */}
                  <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-md p-4 flex items-center border border-gray-100 transform hover:shadow-lg transition-all">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                      <Video className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">智能视频生成</p>
                      <p className="text-xs text-gray-500">8K超高清合成</p>
                    </div>
                  </div>
                  
                  <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-md p-4 flex items-center border border-gray-100 transform hover:shadow-lg transition-all">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                      <Mic className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">AI声音克隆</p>
                      <p className="text-xs text-gray-500">5秒实时合成</p>
                    </div>
                  </div>
                  
                  {/* 新增功能标签 - 简约风格 */}
                  <div className="absolute top-1/2 -right-4 transform translate-x-1/2 -translate-y-1/2 bg-white rounded-xl shadow-md p-3 flex items-center border border-gray-100 hover:shadow-lg transition-all">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                        <path d="M2 17l10 5 10-5"></path>
                        <path d="M2 12l10 5 10-5"></path>
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-medium text-gray-900">多模态学习</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* 底部技术标签 - 简约风格 */}
          <div className="flex justify-center mt-12 gap-4 flex-wrap">
            <div className="px-4 py-1.5 bg-blue-50 rounded-full text-xs text-blue-700 border border-blue-100">
              自然语言处理
            </div>
            <div className="px-4 py-1.5 bg-blue-50 rounded-full text-xs text-blue-700 border border-blue-100">
              计算机视觉
            </div>
            <div className="px-4 py-1.5 bg-blue-50 rounded-full text-xs text-blue-700 border border-blue-100">
              深度学习
            </div>
            <div className="px-4 py-1.5 bg-blue-50 rounded-full text-xs text-blue-700 border border-blue-100">
              知识图谱
            </div>
            <div className="px-4 py-1.5 bg-blue-50 rounded-full text-xs text-blue-700 border border-blue-100">
              多模态融合
            </div>
          </div>
        </div>
      </section>

      {/* 产品优势 - 简约风格 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">产品优势</h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">多维度产品优势，助力企业数字化升级</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* 产品卡片1 - 期刊论文 */}
            <div className="bg-white rounded-xl p-6 transition-all duration-300 hover:shadow-lg border border-gray-100 hover:border-blue-100 group">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mr-4 group-hover:bg-blue-100">
                  <PenTool className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">期刊论文</h3>
                  <div className="text-blue-600 font-medium">高效写作</div>
                </div>
              </div>
              
              <p className="text-gray-600 mb-4 text-sm">为研究人员提供智能论文写作辅助工具</p>
              
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">快速生成论文初稿和补充材料</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">智能推荐相关研究文献</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">自动格式化和参考文献引用</span>
                </li>
              </ul>
            </div>
            
            {/* 产品卡片2 - 科普文章 */}
            <div className="bg-white rounded-xl p-6 transition-all duration-300 hover:shadow-lg border border-gray-100 hover:border-blue-100 group">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mr-4 group-hover:bg-blue-100">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">科普文章</h3>
                  <div className="text-blue-600 font-medium">通俗易懂</div>
                </div>
              </div>
              
              <p className="text-gray-600 mb-4 text-sm">帮助科普作家创作易于理解的科学文章</p>
              
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">复杂概念简单化表达</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">生动有趣的类比和示例</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">多媒体内容智能配图</span>
                </li>
              </ul>
            </div>
            
            {/* 产品卡片3 - 学生作业 */}
            <div className="bg-white rounded-xl p-6 transition-all duration-300 hover:shadow-lg border border-gray-100 hover:border-blue-100 group">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mr-4 group-hover:bg-blue-100">
                  <Bot className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">学生作业</h3>
                  <div className="text-blue-600 font-medium">辅助学习</div>
                </div>
              </div>
              
              <p className="text-gray-600 mb-4 text-sm">为学生提供写作指导和学习建议</p>
              
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">智能写作建议和指导</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">相关参考资料推荐</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">写作能力逐步提升</span>
                </li>
              </ul>
            </div>
            
            {/* 产品卡片4 - 商业报告 */}
            <div className="bg-white rounded-xl p-6 transition-all duration-300 hover:shadow-lg border border-gray-100 hover:border-blue-100 group">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mr-4 group-hover:bg-blue-100">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">商业报告</h3>
                  <div className="text-blue-600 font-medium">专业分析</div>
                </div>
              </div>
              
              <p className="text-gray-600 mb-4 text-sm">为企业提供专业的商业文档写作服务</p>
              
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">市场调研报告生成</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">竞争分析报告撰写</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">数据可视化和图表生成</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 演示中心 - 左右布局 */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        {/* 背景装饰元素 */}
        <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
          <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-blue-100 blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-indigo-100 blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* 左侧内容 */}
            <div className="w-full lg:w-1/2">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-medium mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mr-2"></span>
                在线演示
              </div>
              
              <h2 className="text-3xl font-bold text-gray-900 mb-6">艺创AI论文创作系统<br />演示中心</h2>
              
              <p className="text-gray-600 mb-8 text-lg">
                通过我们的在线演示系统，您可以亲身体验AI论文创作系统的强大的功能和直观的界面，无需安装，即刻体验。
              </p>
              
              <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center mr-3">
                    <Play className="h-5 w-5 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-medium">演示账号信息</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="mb-2 sm:mb-0">
                      <p className="text-sm font-medium text-gray-900">PC端后台</p>
                      <p className="text-xs text-gray-500">https://ai.xxx.com/admin/login</p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <span className="text-xs text-gray-500 mr-2">账号:</span>
                        <span className="text-xs font-medium">admin</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-xs text-gray-500 mr-2">密码:</span>
                        <span className="text-xs font-medium">123456</span>
                      </div>
                      <Button variant="outline" size="sm" className="h-8 text-xs border-blue-600 text-blue-600 hover:bg-blue-50">
                        访问
                      </Button>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="mb-2 sm:mb-0">
                      <p className="text-sm font-medium text-gray-900">代理商后台</p>
                      <p className="text-xs text-gray-500">https://ai.xxx.com/agent/login</p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <span className="text-xs text-gray-500 mr-2">账号:</span>
                        <span className="text-xs font-medium">admin</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-xs text-gray-500 mr-2">密码:</span>
                        <span className="text-xs font-medium">123456</span>
                      </div>
                      <Button variant="outline" size="sm" className="h-8 text-xs border-blue-600 text-blue-600 hover:bg-blue-50">
                        访问
                      </Button>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="mb-2 sm:mb-0">
                      <p className="text-sm font-medium text-gray-900">前端演示</p>
                      <p className="text-xs text-gray-500">https://ai.xxx.com/index</p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <span className="text-xs text-gray-500 mr-2">账号:</span>
                        <span className="text-xs font-medium">admin</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-xs text-gray-500 mr-2">密码:</span>
                        <span className="text-xs font-medium">123456</span>
                      </div>
                      <Button variant="outline" size="sm" className="h-8 text-xs border-blue-600 text-blue-600 hover:bg-blue-50">
                        访问
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex space-x-4">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  申请专属演示
                </Button>
                <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">
                  联系客服
                </Button>
              </div>
            </div>
            
            {/* 右侧内容 */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <div className="relative">
                {/* 主要演示图 */}
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <img 
                    src="https://server.mddai.cn/uploads/images/20231227143956204039080.png" 
                    alt="AI论文创作系统演示界面" 
                    className="w-full rounded-lg"
                  />
                  
                  <div className="mt-4 flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-medium text-gray-900">AI论文创作系统</h4>
                      <p className="text-xs text-gray-500">一站式管理您的所有论文创作任务</p>
                    </div>
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 rounded-full bg-red-500"></div>
                      <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                      <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    </div>
                  </div>
                </div>
                
                {/* 二维码 */}
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
                  <img 
                    src="/images/qrcode.png" 
                    alt="演示二维码" 
                    className="w-24 h-24 bg-white rounded-md"
                  />
                  <p className="text-xs text-center mt-2 text-gray-600">扫码体验移动端</p>
                </div>
                
                {/* 装饰元素 */}
                <div className="absolute -top-6 -left-6 bg-blue-600 rounded-xl p-4 shadow-lg">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                        <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-medium text-white">在线演示</p>
                      <p className="text-xs text-blue-100">实时体验</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    {/* 应用场景 - 标签式布局 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">论文创作应用场景</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">丰富的应用场景和解决方案，满足多种业务需求</p>
          </div>

          <Tabs defaultValue="virtualIP" className="w-full">
            <TabsList className="flex w-full mb-12 p-1 bg-gray-50 rounded-full max-w-3xl mx-auto">
              <TabsTrigger value="virtualIP" className="flex-1 text-center py-2.5 px-4 text-base font-medium rounded-full transition-all data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=inactive]:text-gray-600 data-[state=inactive]:hover:bg-gray-100">期刊论文</TabsTrigger>
              <TabsTrigger value="digitalEmployee" className="flex-1 text-center py-2.5 px-4 text-base font-medium rounded-full transition-all data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=inactive]:text-gray-600 data-[state=inactive]:hover:bg-gray-100">科普文章</TabsTrigger>
              <TabsTrigger value="contentCreation" className="flex-1 text-center py-2.5 px-4 text-base font-medium rounded-full transition-all data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=inactive]:text-gray-600 data-[state=inactive]:hover:bg-gray-100">学生作业</TabsTrigger>
              <TabsTrigger value="virtualLive" className="flex-1 text-center py-2.5 px-4 text-base font-medium rounded-full transition-all data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=inactive]:text-gray-600 data-[state=inactive]:hover:bg-gray-100">商业报告</TabsTrigger>
            </TabsList>

            {/* 期刊论文场景 */}
            <TabsContent value="virtualIP">
              <div className="flex flex-col lg:flex-row items-center gap-12">
                {/* 左侧内容 */}
                <div className="w-full lg:w-1/2 lg:pr-8">
                  <h3 className="text-2xl font-bold mb-4">期刊论文</h3>
                  <p className="text-gray-600 mb-6">
                    研究人员可以使用AI写作系统来生成论文的初稿或补充材料，可以更快地完成研究工作。
                  </p>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start">
                      <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5">
                        <Check className="h-3 w-3 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">快速生成</h4>
                        <p className="text-sm text-gray-600">快速生成论文初稿和补充材料</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5">
                        <Check className="h-3 w-3 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">文献推荐</h4>
                        <p className="text-sm text-gray-600">智能推荐相关研究文献</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5">
                        <Check className="h-3 w-3 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">格式规范</h4>
                        <p className="text-sm text-gray-600">自动格式化和参考文献引用</p>
                      </div>
                    </li>
                  </ul>
                  <div className="flex gap-4">
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                      查看详情
                    </Button>
                    <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                      立即体验
                    </Button>
                  </div>
                </div>
                
                {/* 右侧图片 */}
                <div className="w-full lg:w-1/2">
                  <div className="relative rounded-2xl overflow-hidden shadow-xl">
                    <img 
                      src="https://server.mddai.cn/uploads/images/20231227143956b2d246138.png" 
                      alt="期刊论文应用场景" 
                      className="w-full rounded-2xl"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mr-3">
                          <Users className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <p className="text-white font-medium">期刊论文解决方案</p>
                          <p className="text-white/80 text-sm">智能高效的论文写作助手</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* 科普文章场景 */}
            <TabsContent value="digitalEmployee">
              <div className="flex flex-col lg:flex-row items-center gap-12">
                {/* 左侧内容 */}
                <div className="w-full lg:w-1/2 lg:pr-8">
                  <h3 className="text-2xl font-bold mb-4">科普文章</h3>
                  <p className="text-gray-600 mb-6">
                    科普作家可以使用AI写作系统来生成易于理解的科学文章，以便向公众传播复杂的科学知识。
                  </p>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start">
                      <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5">
                        <Check className="h-3 w-3 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">简化表达</h4>
                        <p className="text-sm text-gray-600">复杂概念简单化表达</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5">
                        <Check className="h-3 w-3 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">生动示例</h4>
                        <p className="text-sm text-gray-600">生动有趣的类比和示例</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5">
                        <Check className="h-3 w-3 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">智能配图</h4>
                        <p className="text-sm text-gray-600">多媒体内容智能配图</p>
                      </div>
                    </li>
                  </ul>
                  <div className="flex gap-4">
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                      查看详情
                    </Button>
                    <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                      立即体验
                    </Button>
                  </div>
                </div>
                
                {/* 右侧图片 */}
                <div className="w-full lg:w-1/2">
                  <div className="relative rounded-2xl overflow-hidden shadow-xl">
                    <img 
                      src="https://server.mddai.cn/uploads/images/202312271439564e0a00449.png" 
                      alt="科普文章应用场景" 
                      className="w-full rounded-2xl"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mr-3">
                          <Bot className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <p className="text-white font-medium">科普文章解决方案</p>
                          <p className="text-white/80 text-sm">让科学更易懂的写作助手</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* 学生作业场景 */}
            <TabsContent value="contentCreation">
              <div className="flex flex-col lg:flex-row items-center gap-12">
                {/* 左侧内容 */}
                <div className="w-full lg:w-1/2 lg:pr-8">
                  <h3 className="text-2xl font-bold mb-4">学生作业</h3>
                  <p className="text-gray-600 mb-6">
                    学生可以利用AI写作系统来获得关于特定主题的论文建议、参考文献和写作指导，提高写作能力和学术水平。
                  </p>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start">
                      <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5">
                        <Check className="h-3 w-3 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">写作指导</h4>
                        <p className="text-sm text-gray-600">智能写作建议和指导</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5">
                        <Check className="h-3 w-3 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">参考推荐</h4>
                        <p className="text-sm text-gray-600">相关参考资料推荐</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5">
                        <Check className="h-3 w-3 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">能力提升</h4>
                        <p className="text-sm text-gray-600">写作能力逐步提升</p>
                      </div>
                    </li>
                  </ul>
                  <div className="flex gap-4">
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                      查看详情
                    </Button>
                    <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                      立即体验
                    </Button>
                  </div>
                </div>
                
                {/* 右侧图片 */}
                <div className="w-full lg:w-1/2">
                  <div className="relative rounded-2xl overflow-hidden shadow-xl">
                    <img 
                      src="https://server.mddai.cn/uploads/images/20231227143956204039080.png" 
                      alt="学生作业应用场景" 
                      className="w-full rounded-2xl"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mr-3">
                          <PenTool className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <p className="text-white font-medium">学生作业解决方案</p>
                          <p className="text-white/80 text-sm">提升写作能力的智能助手</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* 商业报告场景 */}
            <TabsContent value="virtualLive">
              <div className="flex flex-col lg:flex-row items-center gap-12">
                {/* 左侧内容 */}
                <div className="w-full lg:w-1/2 lg:pr-8">
                  <h3 className="text-2xl font-bold mb-4">商业报告</h3>
                  <p className="text-gray-600 mb-6">
                    企业可以利用AI写作系统来撰写市场调研报告、竞争分析报告等商业文档，提供决策支持和业务洞察。
                  </p>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start">
                      <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5">
                        <Check className="h-3 w-3 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">市场调研</h4>
                        <p className="text-sm text-gray-600">市场调研报告生成</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5">
                        <Check className="h-3 w-3 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">竞争分析</h4>
                        <p className="text-sm text-gray-600">竞争分析报告撰写</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5">
                        <Check className="h-3 w-3 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">数据可视</h4>
                        <p className="text-sm text-gray-600">数据可视化和图表生成</p>
                      </div>
                    </li>
                  </ul>
                <div className="flex gap-4">
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                      查看详情
                    </Button>
                    <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                      立即体验
                    </Button>
                  </div>
                </div>
                
                {/* 右侧图片 */}
                <div className="w-full lg:w-1/2">
                  <div className="relative rounded-2xl overflow-hidden shadow-xl">
                    <img 
                      src="https://server.mddai.cn/uploads/images/20231227143956204039080.png" 
                      alt="商业报告应用场景" 
                      className="w-full rounded-2xl"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mr-3">
                          <Tv className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <p className="text-white font-medium">商业报告解决方案</p>
                          <p className="text-white/80 text-sm">专业的商业分析助手</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>



      {/* 功能特色 - 卡片式布局 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">功能特色</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              提供智能助手、学生作业、商业报告、期刊论文等多维度的功能，满足不同行业的业务需求。
            </p>
          </div>

          {/* 场景卡片网格 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* 期刊论文场景卡片 */}
            <div className="flex flex-col rounded-2xl overflow-hidden shadow-xl border border-gray-200">
              <div className="w-full h-48 overflow-hidden">
                <img 
                  src="https://server.mddai.cn/uploads/images/20231227143956204039080.png" 
                  alt="期刊论文应用场景" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold mb-2">期刊论文</h3>
                <p className="text-gray-600 text-sm mb-4 flex-grow">
                  面向文化传播、影视内容等多个行业，帮助打造期刊论文，赋能品牌营销，提升品牌心智。
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <div className="w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                      <Check className="h-2.5 w-2.5 text-blue-600" />
                    </div>
                    <p className="text-xs text-gray-600">创建专属品牌虚拟形象，提升品牌辨识度和亲和力</p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                      <Check className="h-2.5 w-2.5 text-blue-600" />
                    </div>
                    <p className="text-xs text-gray-600">为影视、游戏、动漫等行业提供高质量虚拟角色</p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                      <Check className="h-2.5 w-2.5 text-blue-600" />
                    </div>
                    <p className="text-xs text-gray-600">打造虚拟社交形象，增强用户互动体验</p>
                  </li>
                </ul>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white text-sm mt-auto">
                  查看详情
                </Button>
              </div>
            </div>

            {/* 科普文章场景卡片 */}
            <div className="flex flex-col rounded-2xl overflow-hidden shadow-xl border border-gray-200">
              <div className="w-full h-48 overflow-hidden">
                <img 
                  src="https://server.mddai.cn/uploads/images/20231227143956204039080.png" 
                  alt="科普文章应用场景" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold mb-2">科普文章</h3>
                <p className="text-gray-600 text-sm mb-4 flex-grow">
                  为企业提供智能科普文章解决方案，提高工作效率，降低人力成本，实现业务流程自动化。
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <div className="w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                      <Check className="h-2.5 w-2.5 text-blue-600" />
                    </div>
                    <p className="text-xs text-gray-600">7×24小时在线服务，快速响应客户需求</p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                      <Check className="h-2.5 w-2.5 text-blue-600" />
                    </div>
                    <p className="text-xs text-gray-600">智能推荐产品，提高转化率和客户满意度</p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                      <Check className="h-2.5 w-2.5 text-blue-600" />
                    </div>
                    <p className="text-xs text-gray-600">提供标准化培训内容，确保培训质量一致性</p>
                  </li>
                </ul>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white text-sm mt-auto">
                  查看详情
                </Button>
              </div>
            </div>

            {/* 学生作业场景卡片 */}
            <div className="flex flex-col rounded-2xl overflow-hidden shadow-xl border border-gray-200">
              <div className="w-full h-48 overflow-hidden">
                <img 
                  src="https://server.mddai.cn/uploads/images/20231227143956204039080.png" 
                  alt="学生作业应用场景" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold mb-2">学生作业</h3>
                <p className="text-gray-600 text-sm mb-4 flex-grow">
                  为媒体、自媒体、营销团队提供智能学生作业解决方案，提高内容生产效率和质量。
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <div className="w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                      <Check className="h-2.5 w-2.5 text-blue-600" />
                    </div>
                    <p className="text-xs text-gray-600">快速生成专业视频脚本，提高学生作业效率</p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                      <Check className="h-2.5 w-2.5 text-blue-600" />
                    </div>
                    <p className="text-xs text-gray-600">生成吸引人的营销文案，提高转化率</p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                      <Check className="h-2.5 w-2.5 text-blue-600" />
                    </div>
                    <p className="text-xs text-gray-600">支持多语言学生作业和翻译，拓展全球市场</p>
                  </li>
                </ul>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white text-sm mt-auto">
                  查看详情
                </Button>
              </div>
            </div>

            {/* 商业报告场景卡片 */}
            <div className="flex flex-col rounded-2xl overflow-hidden shadow-xl border border-gray-200">
              <div className="w-full h-48 overflow-hidden">
                <img 
                  src="https://server.mddai.cn/uploads/images/20231227143956204039080.png" 
                  alt="商业报告应用场景" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold mb-2">商业报告</h3>
                <p className="text-gray-600 text-sm mb-4 flex-grow">
                  为直播行业提供虚拟主播解决方案，降低直播成本，提高直播效率和质量。
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <div className="w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                      <Check className="h-2.5 w-2.5 text-blue-600" />
                    </div>
                    <p className="text-xs text-gray-600">24小时不间断直播，提高商品曝光和销售</p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                      <Check className="h-2.5 w-2.5 text-blue-600" />
                    </div>
                    <p className="text-xs text-gray-600">实时生成新闻内容，提供专业播报服务</p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                      <Check className="h-2.5 w-2.5 text-blue-600" />
                    </div>
                    <p className="text-xs text-gray-600">为线上活动提供专业主持服务，增强互动体验</p>
                  </li>
                </ul>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white text-sm mt-auto">
                  查看详情
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* 产品核心功能 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* 标题区域 */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full mb-6">
              <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
              <span className="text-blue-700 text-sm font-medium">论文创作核心功能</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6 tracking-tight">产品核心功能</h2>
            <div className="w-20 h-0.5 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">强大的AI技术能力，为您提供论文创作的全流程解决方案</p>
          </div>

          {/* 智能生成论文大纲 */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
            {/* 左侧内容 */}
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center px-3 py-1 bg-blue-50 rounded-full mb-4">
                  <span className="text-blue-600 text-xs font-medium">核心功能</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">智能生成论文大纲</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  AI智能助手一键生成论文大纲！你只需要输入论文关键词，AI即可快速为您生成论文大纲，可修改章节内容，操作高效快捷！
                </p>
              </div>
              
              {/* 功能特性 */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-white border border-gray-100 rounded-xl p-4 hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center mr-3">
                      <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                    </div>
                    <span className="font-medium text-gray-900">智能生成</span>
                  </div>
                  <p className="text-sm text-gray-600">一键生成论文大纲</p>
                </div>
                
                <div className="bg-white border border-gray-100 rounded-xl p-4 hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center mr-3">
                      <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                    </div>
                    <span className="font-medium text-gray-900">快速高效</span>
                  </div>
                  <p className="text-sm text-gray-600">秒级生成大纲框架</p>
                </div>
                
                <div className="bg-white border border-gray-100 rounded-xl p-4 hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center mr-3">
                      <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                    </div>
                    <span className="font-medium text-gray-900">灵活修改</span>
                  </div>
                  <p className="text-sm text-gray-600">支持自定义调整</p>
                </div>
              </div>
              
              <div className="flex space-x-4">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 h-auto text-base font-medium rounded-xl shadow-lg">
                  立即体验
                </Button>
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 h-auto text-base font-medium rounded-xl">
                  了解更多
                </Button>
              </div>
            </div>
            
            {/* 右侧图片 */}
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8">
                <img 
                  src="https://server.mddai.cn/uploads/images/20231227143956c871a0387.png" 
                  alt="论文大纲生成演示" 
                  className="w-full rounded-2xl shadow-lg"
                />
              </div>
              {/* 悬浮标签 */}
              <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-lg p-4 border border-gray-100">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl overflow-hidden flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">智能大纲</p>
                    <p className="text-sm text-gray-500">一键快速生成</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 论文生成 */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
            {/* 右侧内容 */}
            <div className="lg:order-2 space-y-8">
              <div>
                <div className="inline-flex items-center px-3 py-1 bg-blue-50 rounded-full mb-4">
                  <span className="text-blue-600 text-xs font-medium">热门功能</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">一键生成论文</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  只需几分钟，AI即可为您生成2万字长文，比传统写作更快捷高效，让论文写作不再困难！
                </p>
              </div>
              
              {/* 功能特性 */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-white border border-gray-100 rounded-xl p-4 hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center mr-3">
                      <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                    </div>
                    <span className="font-medium text-gray-900">快速生成</span>
                  </div>
                  <p className="text-sm text-gray-600">5分钟生成全文</p>
                </div>
                
                <div className="bg-white border border-gray-100 rounded-xl p-4 hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center mr-3">
                      <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                    </div>
                    <span className="font-medium text-gray-900">智能创作</span>
                  </div>
                  <p className="text-sm text-gray-600">AI辅助写作</p>
                </div>
                
                <div className="bg-white border border-gray-100 rounded-xl p-4 hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center mr-3">
                      <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                    </div>
                    <span className="font-medium text-gray-900">高质内容</span>
                  </div>
                  <p className="text-sm text-gray-600">专业学术水准</p>
                </div>
              </div>
              
              <div className="flex space-x-4">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 h-auto text-base font-medium rounded-xl shadow-lg">
                  立即体验
                </Button>
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 h-auto text-base font-medium rounded-xl">
                  了解更多
                </Button>
              </div>
            </div>
            {/* 左侧图片 */}
            <div className="lg:order-1 relative">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8">
                <img 
                  src="https://server.mddai.cn/uploads/images/20231227143956b2d246138.png" 
                  alt="论文生成界面" 
                  className="w-full rounded-2xl shadow-lg"
                />
              {/* 悬浮标签 */}
              <div className="absolute -top-4 -left-4 bg-white rounded-2xl shadow-lg p-4 border border-gray-100">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gray-100 rounded-xl overflow-hidden flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                      </svg>
                    </div>
                  <div>
                    <p className="font-semibold text-gray-900">论文生成</p>
                    <p className="text-sm text-gray-500">智能创作中</p>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 走马灯通知 */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* 左侧内容 */}
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center px-3 py-1 bg-blue-50 rounded-full mb-4">
                  <span className="text-blue-600 text-xs font-medium">最新动态</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">实时通知</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  重要信息实时推送，系统更新及时通知，让您不错过任何重要消息。
                </p>
              </div>
              
              {/* 通知列表 */}
              <div className="overflow-hidden relative h-48 bg-white border border-gray-100 rounded-xl p-4">
                <div className="animate-marquee space-y-4">
                  <div className="flex items-center p-3 bg-blue-50 rounded-lg">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full animate-ping"></div>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">系统更新通知</p>
                      <p className="text-sm text-gray-600">V2.0版本已发布，新增多项功能</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center p-3 bg-green-50 rounded-lg">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                      <div className="w-2 h-2 bg-green-600 rounded-full animate-ping"></div>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">用户成功案例</p>
                      <p className="text-sm text-gray-600">某高校成功使用AI论文助手</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center p-3 bg-yellow-50 rounded-lg">
                    <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center mr-3">
                      <div className="w-2 h-2 bg-yellow-600 rounded-full animate-ping"></div>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">活动预告</p>
                      <p className="text-sm text-gray-600">新用户专享优惠活动即将开始</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex space-x-4">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 h-auto text-base font-medium rounded-xl shadow-lg">
                  查看全部
                </Button>
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 h-auto text-base font-medium rounded-xl">
                  订阅通知
                </Button>
              </div>
            </div>
            
            {/* 右侧展示 */}
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8">
                <div className="bg-white rounded-2xl shadow-lg p-6 space-y-6">
                  {/* 通知中心界面模拟 */}
                  <div className="flex items-center justify-between mb-6">
                    <h4 className="font-semibold text-lg">通知中心</h4>
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    </div>
                  </div>
                  
                  {/* 通知列表模拟 */}
                  <div className="space-y-4">
                    {[1, 2, 3].map((item) => (
                      <div key={item} className="flex items-center p-3 bg-gray-50 rounded-lg animate-pulse">
                        <div className="w-10 h-2 bg-gray-200 rounded mr-3"></div>
                        <div className="flex-1">
                          <div className="w-3/4 h-2 bg-gray-200 rounded mb-2"></div>
                          <div className="w-1/2 h-2 bg-gray-200 rounded"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* 悬浮标签 */}
              <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-lg p-4 border border-gray-100">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl overflow-hidden flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">消息提醒</p>
                    <p className="text-sm text-gray-500">实时推送更新</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
 {/* 产品核心功能 */}
         

          {/* 准备好开启您的AI数字人之旅了吗？ */}
          <div className="mt-24 container mx-auto px-4">
            <div className="bg-white rounded-3xl overflow-hidden relative border border-gray-200">
              {/* 装饰元素 */}
              <div className="absolute top-0 right-0 w-1/2 h-full">
                <svg className="h-full w-full" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="100" cy="100" r="80" fill="black" fillOpacity="0.02" />
                  <circle cx="300" cy="300" r="150" fill="black" fillOpacity="0.02" />
                  <circle cx="250" cy="150" r="50" fill="black" fillOpacity="0.02" />
                  <circle cx="150" cy="250" r="30" fill="black" fillOpacity="0.02" />
                </svg>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-5 gap-0">
                {/* 左侧内容 */}
                <div className="md:col-span-3 p-8 md:p-12 relative z-10">
                  <div className="max-w-xl">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
                      准备好开启您的<span className="text-blue-600">AI论文创作服务</span>了吗？
                    </h3>
                    <p className="text-gray-600 mb-6 text-base">
                      已有数百家企业和品牌通过我们的AI论文创作服务，提升了客户创作效率和运营效率，助力您的业务发展飞跃。
                    </p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-start">
                        <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center mr-2">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-gray-900 font-medium">高清还原</h4>
                          <p className="text-gray-500 text-sm">100%真实感官体验</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center mr-2">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-gray-900 font-medium">专业服务</h4>
                          <p className="text-gray-500 text-sm">7×24小时技术支持</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center mr-2">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-gray-900 font-medium">数据安全</h4>
                          <p className="text-gray-500 text-sm">企业级安全保障</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center mr-2">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-gray-900 font-medium">持续更新</h4>
                          <p className="text-gray-500 text-sm">定期功能迭代升级</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-3">
                      <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-4 rounded-lg shadow-lg">
                        立即体验
                      </Button>
                      <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-4 rounded-lg">
                        咨询价格
                      </Button>
                    </div>
                  </div>
                </div>
                
                {/* 右侧功能卡片 */}
                <div className="md:col-span-2 relative hidden md:block">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-full h-full p-6 flex items-center">
                      <div className="bg-gray-50 rounded-2xl w-full h-full p-4 shadow-lg">
                        <div className="grid grid-cols-2 gap-4 h-full">
                          {/* AI数字人 */}
                          <div className="bg-white rounded-xl p-3 flex flex-col items-center justify-center shadow-sm">
                            <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-2">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                              </svg>
                            </div>
                            <h4 className="text-gray-900 font-medium text-lg">论文创作</h4>
                            <p className="text-gray-500 text-sm text-center mt-1">专业的论文创作服务</p>
                          </div>
                          
                          {/* 私有部署 */}
                          <div className="bg-white rounded-xl p-3 flex flex-col items-center justify-center shadow-sm">
                            <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-2">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                              </svg>
                            </div>
                            <h4 className="text-gray-900 font-medium text-lg">私有部署</h4>
                            <p className="text-gray-500 text-sm text-center mt-1">安全可控的私有化部署</p>
                          </div>
                          
                          {/* 专业团队 */}
                          <div className="bg-white rounded-xl p-3 flex flex-col items-center justify-center shadow-sm">
                            <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-2">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                              </svg>
                            </div>
                            <h4 className="text-gray-900 font-medium text-lg">专业团队</h4>
                            <p className="text-gray-500 text-sm text-center mt-1">一对一技术支持</p>
                          </div>
                          
                          {/* 开源方案 */}
                          <div className="bg-white rounded-xl p-3 flex flex-col items-center justify-center shadow-sm">
                            <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-2">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                              </svg>
                            </div>
                            <h4 className="text-gray-900 font-medium text-lg">开源方案</h4>
                            <p className="text-gray-500 text-sm text-center mt-1">灵活定制，售后无忧</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PaperPage;
