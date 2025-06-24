
import React from 'react';
import { Download, Mail, Phone, Globe, Linkedin, Github, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const Index = () => {
  const handleDownloadPDF = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Print/Download Button - Hidden in print */}
        <div className="mb-8 print:hidden">
          <Button onClick={handleDownloadPDF} className="bg-blue-600 hover:bg-blue-700">
            <Download className="w-4 h-4 mr-2" />
            Download as PDF
          </Button>
        </div>

        {/* Resume Content */}
        <div id="resume-content" className="bg-white shadow-lg print:shadow-none">
          {/* Header Section */}
          <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-2">Islam Hassan Abd Allah Alalfy</h1>
              <h2 className="text-xl font-light mb-4">Senior Software Engineer</h2>
              <p className="text-blue-100 mb-6">Cairo, Egypt</p>
              
              {/* Contact Information */}
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <a href="tel:+201098559403" className="flex items-center hover:text-blue-200 transition-colors">
                  <Phone className="w-4 h-4 mr-1" />
                  +20 109 855 9403
                </a>
                <a href="mailto:islam@alalfy.com" className="flex items-center hover:text-blue-200 transition-colors">
                  <Mail className="w-4 h-4 mr-1" />
                  islam@alalfy.com
                </a>
                <a href="https://alalfy.com" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-blue-200 transition-colors">
                  <Globe className="w-4 h-4 mr-1" />
                  alalfy.com
                </a>
                <a href="https://www.linkedin.com/in/islam-hassan-alalfy-2b2234167" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-blue-200 transition-colors">
                  <Linkedin className="w-4 h-4 mr-1" />
                  LinkedIn
                </a>
                <a href="https://github.com/EngALAlfy" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-blue-200 transition-colors">
                  <Github className="w-4 h-4 mr-1" />
                  GitHub
                </a>
                <a href="https://api.whatsapp.com/send?phone=201153263994" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-blue-200 transition-colors">
                  <MessageCircle className="w-4 h-4 mr-1" />
                  WhatsApp
                </a>
              </div>
            </div>
          </header>

          <div className="p-8">
            {/* Professional Summary */}
            <section className="mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-600 pb-2">Professional Summary</h3>
              <p className="text-gray-700 leading-relaxed">
                Senior Software Engineer with 5+ years of experience in web and mobile development using Laravel, Flutter, and Node.js. 
                Adept in DevOps, scalable architecture, team leadership, API integrations, and delivering large-scale SaaS platforms. 
                Proven track record of optimizing system performance and reducing latency, with deep experience in working with high-load 
                production systems and payment solutions across UAE and Saudi Arabia.
              </p>
            </section>

            {/* Work Experience */}
            <section className="mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-blue-600 pb-2">Work Experience</h3>
              
              <div className="space-y-6">
                {/* Current Role */}
                <Card className="border-l-4 border-l-blue-600">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h4 className="text-xl font-semibold text-gray-800">Team Lead - Flutter & Laravel</h4>
                        <p className="text-blue-600 font-medium">Bakka Soft, Cairo</p>
                      </div>
                      <span className="text-gray-600 font-medium">Dec 2022 - Present</span>
                    </div>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Led a team of 4+ developers to deliver a mobile ordering system integrated with POS and kitchen display systems</li>
                      <li>Improved system performance to handle 3000+ concurrent users/min (up from &lt;1000) through Laravel and server-level optimizations</li>
                      <li>Reduced API response time from 5s to under 1s on mobile</li>
                      <li>Built internal CI/CD pipelines using Docker and GitHub Actions</li>
                      <li>Contributed to HurryApp, a food delivery app serving 300+ restaurants</li>
                      <li>Authored deployment runbooks and onboarding documentation for developers</li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Senior Software Engineer */}
                <Card className="border-l-4 border-l-green-600">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h4 className="text-xl font-semibold text-gray-800">Senior Software Engineer</h4>
                        <p className="text-green-600 font-medium">GRE Development, London (Remote)</p>
                      </div>
                      <span className="text-gray-600 font-medium">Feb 2024 - Oct 2024</span>
                    </div>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Developed a multi-vendor SaaS e-commerce platform serving 421,000+ merchants in Saudi Arabia</li>
                      <li>Integrated payment gateway and scalable Laravel backend</li>
                      <li>Built core modules for digital store builder, vendor management, and analytics dashboard</li>
                      <li>Wrote API documentation and conducted code handovers for onboarding new engineers</li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Founder & Lead Developer */}
                <Card className="border-l-4 border-l-purple-600">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h4 className="text-xl font-semibold text-gray-800">Founder & Lead Developer</h4>
                        <p className="text-purple-600 font-medium">YoTech, Cairo</p>
                        <a href="https://yotech.org" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-500 hover:underline">yotech.org</a>
                      </div>
                      <span className="text-gray-600 font-medium">Jan 2024 - Present</span>
                    </div>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Delivered 4+ e-commerce stores and a white-label SaaS platform to UAE clients</li>
                      <li>Managed 20+ full-stack projects covering mobile apps, dashboards, admin panels, and ERP integrations</li>
                      <li>Led development of a custom SaaS store generator for retail distribution</li>
                      <li>Defined internal coding standards, created reusable components, and maintained technical documentation</li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Previous Roles */}
                <Card className="border-l-4 border-l-orange-600">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h4 className="text-xl font-semibold text-gray-800">Full Stack Developer</h4>
                        <p className="text-orange-600 font-medium">SPC Tech</p>
                      </div>
                      <span className="text-gray-600 font-medium">Dec 2023 - Feb 2024</span>
                    </div>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Developed a taxi app using Flutter with real-time location tracking and Firebase backend</li>
                      <li>Integrated driver and passenger workflows with cloud functions and real-time DB sync</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-red-600">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h4 className="text-xl font-semibold text-gray-800">Full Stack Developer</h4>
                        <p className="text-red-600 font-medium">Knooz Misr</p>
                      </div>
                      <span className="text-gray-600 font-medium">Dec 2021 - Dec 2022</span>
                    </div>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Built a Laravel web system managing operations for 13 marble factories in Egypt</li>
                      <li>Designed dashboard for stock, orders, production, and inventory linking across locations</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-indigo-600">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h4 className="text-xl font-semibold text-gray-800">Remote Developer</h4>
                        <p className="text-indigo-600 font-medium">Arinanetwork</p>
                      </div>
                      <span className="text-gray-600 font-medium">Jun 2019 - Nov 2021</span>
                    </div>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Developed offline-compatible ERP system using Laravel and Vue</li>
                      <li>Implemented advanced source code hashing and sync engine</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Skills Section */}
            <section className="mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-blue-600 pb-2">Technical Skills</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Backend Development</h4>
                  <p className="text-gray-700 mb-4">Laravel, PHP, Node.js, MySQL</p>
                  
                  <h4 className="font-semibold text-gray-800 mb-3">Frontend Development</h4>
                  <p className="text-gray-700 mb-4">Flutter, HTML, CSS, JavaScript, ReactJS, jQuery</p>
                  
                  <h4 className="font-semibold text-gray-800 mb-3">DevOps & Server</h4>
                  <p className="text-gray-700 mb-4">Docker, GitHub Actions, Server Monitoring, CI/CD Pipelines, Ubuntu, Linux</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">API Integration</h4>
                  <p className="text-gray-700 mb-4">RESTful APIs, GraphQL, Custom AI APIs, Ollama Local API</p>
                  
                  <h4 className="font-semibold text-gray-800 mb-3">Payment Systems</h4>
                  <p className="text-gray-700 mb-4">OPay, STC Pay (KSA), TELR (UAE), Paymob, FAWRY, KASHIER</p>
                  
                  <h4 className="font-semibold text-gray-800 mb-3">Documentation</h4>
                  <p className="text-gray-700">Deployment runbooks, API specs, onboarding guides</p>
                </div>
              </div>
            </section>

            {/* Education & Personal Info */}
            <div className="grid md:grid-cols-2 gap-8">
              <section>
                <h3 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-600 pb-2">Education</h3>
                <Card>
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-gray-800">Bachelor of Science in Civil Engineering</h4>
                    <p className="text-gray-600">Al-Azhar University, Cairo</p>
                    <p className="text-gray-600">Graduated 2021</p>
                  </CardContent>
                </Card>
              </section>

              <section>
                <h3 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-600 pb-2">Personal Information</h3>
                <Card>
                  <CardContent className="p-4 space-y-2">
                    <p><span className="font-medium">Nationality:</span> Egyptian</p>
                    <p><span className="font-medium">Marital Status:</span> Married</p>
                    <p><span className="font-medium">Military Service:</span> Completed</p>
                    <p><span className="font-medium">Driving License:</span> Yes</p>
                  </CardContent>
                </Card>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
