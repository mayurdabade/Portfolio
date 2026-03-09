import { useState } from 'react';
import { Menu, X, Mail, Phone, Linkedin, Github, BarChart3, Database, FileText, ChevronDown } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
              MD
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors duration-200"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-teal-50 pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
              Mayur Dabade
            </h1>
            <p className="text-2xl sm:text-3xl lg:text-4xl text-gray-600 mb-8">
              Power BI Developer & Data Analytics Specialist
            </p>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
              Transforming raw data into actionable insights through advanced analytics,
              visualization, and data-driven solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Get In Touch
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-200"
              >
                View Projects
              </button>
            </div>
          </div>
          <div className="mt-16 animate-bounce">
            <ChevronDown size={32} className="mx-auto text-gray-400" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-gradient-to-br from-blue-600 to-teal-500 rounded-2xl p-8 text-white shadow-xl">
                <BarChart3 size={64} className="mb-6" />
                <h3 className="text-2xl font-bold mb-4">Data-Driven Professional</h3>
                <p className="text-blue-50 leading-relaxed">
                  With a strong foundation in data analytics and business intelligence,
                  I specialize in creating impactful visualizations and insights that drive business decisions.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                I'm an Associate Consultant at Capgemini with a passion for turning complex data
                into clear, actionable insights. With expertise in Power BI, SQL, and data visualization,
                I help organizations make better data-driven decisions.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                My experience includes managing critical ETL processes for a leading oil field services
                company, where I successfully reduced failure rates and improved system reliability through
                innovative solutions and cross-functional collaboration.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-3xl font-bold text-blue-600">8.4</p>
                  <p className="text-sm text-gray-600">CGPA</p>
                </div>
                <div className="bg-teal-50 p-4 rounded-lg">
                  <p className="text-3xl font-bold text-teal-600">3+</p>
                  <p className="text-sm text-gray-600">Years Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Skills & Expertise</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Power BI', icon: BarChart3, desc: 'Advanced dashboards & reports', color: 'blue' },
              { name: 'SQL', icon: Database, desc: 'Data querying & optimization', color: 'teal' },
              { name: 'Data Visualization', icon: FileText, desc: 'Meaningful insights & charts', color: 'blue' },
              { name: 'DAX', icon: BarChart3, desc: 'Complex calculations & metrics', color: 'teal' },
            ].map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
                >
                  <div className={`bg-${skill.color}-100 w-16 h-16 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`text-${skill.color}-600`} size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{skill.name}</h3>
                  <p className="text-gray-600">{skill.desc}</p>
                </div>
              );
            })}
          </div>

          {/* Additional Tools */}
          <div className="mt-12 bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Technical Tools</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {['Rundeck', 'Informatica IDQ', 'ETL Processes', 'MDM', 'Match & Merge'].map((tool, index) => (
                <span
                  key={index}
                  className="px-6 py-3 bg-gradient-to-r from-blue-100 to-teal-100 text-gray-700 rounded-full font-medium hover:shadow-md transition-shadow duration-200"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Professional Experience</h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative border-l-4 border-blue-600 pl-8 ml-4">
              <div className="absolute -left-3 top-0 w-6 h-6 bg-blue-600 rounded-full"></div>
              <div className="mb-8">
                <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Associate Consultant</h3>
                      <p className="text-xl text-blue-600 font-semibold">Capgemini</p>
                    </div>
                    <span className="text-gray-600 font-medium mt-2 sm:mt-0">Aug 2021 - Present</span>
                  </div>

                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Production Support Team member for a leading oil field services company, managing critical
                    nightly production jobs and time-sensitive Informatica ETL processes.
                  </p>

                  <div className="space-y-3">
                    <h4 className="font-bold text-gray-900 mb-3">Key Achievements:</h4>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                      <p className="text-gray-700">
                        Reduced failure rate of critical nightly processes from 2-3 times daily to 2-3 times weekly
                        through parallelization of Delete XREF jobs
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                      <p className="text-gray-700">
                        Managed MDM and IDQ Production services (Hub and Process Servers) ensuring minimal downtime
                        and maximum environment availability
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                      <p className="text-gray-700">
                        Oversaw Rundeck jobs scheduled on daily, weekly, and bi-weekly basis, ensuring seamless
                        data processing
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                      <p className="text-gray-700">
                        Collaborated with cross-functional teams to identify and rectify system errors,
                        maintaining production stability
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="max-w-4xl mx-auto mt-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Education</h3>
            <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-xl p-8 shadow-lg">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                <div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">Bachelor of Engineering</h4>
                  <p className="text-lg text-gray-700">Information Technology</p>
                  <p className="text-gray-600">Pillai College of Engineering, Panvel</p>
                </div>
                <div className="text-left sm:text-right mt-4 sm:mt-0">
                  <p className="text-3xl font-bold text-blue-600">8.4 CGPA</p>
                  <p className="text-gray-600">2017 - 2021</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Netflix Dashboard */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-gradient-to-r from-red-500 to-red-600 h-48 flex items-center justify-center">
                <BarChart3 size={80} className="text-white opacity-80" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Netflix Sample Data Dashboard</h3>
                <p className="text-gray-700 mb-4">
                  Interactive Power BI dashboard analyzing Netflix content with comprehensive data preprocessing
                  and meaningful visualizations.
                </p>
                <div className="space-y-2 mb-6">
                  <p className="text-sm text-gray-600"><strong>Visualizations:</strong> Donut Chart, Area Chart, Treemap, Cards</p>
                  <p className="text-sm text-gray-600"><strong>Features:</strong> % of TV shows vs Movies, Content by Release Year, Top 10 Countries</p>
                  <p className="text-sm text-gray-600"><strong>Data Source:</strong> CSV with built-in connector</p>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Power BI</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Data Visualization</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">DAX</span>
                </div>
                <a
                  href="https://github.com/mayurdabade"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold group"
                >
                  <Github size={20} className="mr-2" />
                  View on GitHub
                  <ChevronDown size={16} className="ml-1 transform -rotate-90 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* E-Commerce Dashboard */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-gradient-to-r from-teal-500 to-teal-600 h-48 flex items-center justify-center">
                <Database size={80} className="text-white opacity-80" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">E-Commerce Store Dashboard</h3>
                <p className="text-gray-700 mb-4">
                  Comprehensive sales analytics dashboard featuring interactive charts and advanced filtering
                  capabilities for business insights.
                </p>
                <div className="space-y-2 mb-6">
                  <p className="text-sm text-gray-600"><strong>Visualizations:</strong> Stack Bar Charts, Doughnut Charts</p>
                  <p className="text-sm text-gray-600"><strong>Features:</strong> Top N filtering, Quarter & State slicers, Customer analytics</p>
                  <p className="text-sm text-gray-600"><strong>Data Source:</strong> CSV with built-in connector</p>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm">Power BI</span>
                  <span className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm">Sales Analytics</span>
                  <span className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm">DAX</span>
                </div>
                <a
                  href="https://github.com/mayurdabade"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-teal-600 hover:text-teal-700 font-semibold group"
                >
                  <Github size={20} className="mr-2" />
                  View on GitHub
                  <ChevronDown size={16} className="ml-1 transform -rotate-90 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Get In Touch</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-blue-600 to-teal-500 rounded-2xl p-8 md:p-12 text-white shadow-2xl">
              <p className="text-xl md:text-2xl text-center mb-12 text-blue-50">
                I'm always interested in new opportunities and collaborations.
                Feel free to reach out!
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <a
                  href="mailto:mayurdabade99@gmail.com"
                  className="flex items-center space-x-4 bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-200 group"
                >
                  <div className="bg-white/20 p-3 rounded-lg group-hover:scale-110 transition-transform duration-200">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-blue-100">Email</p>
                    <p className="font-semibold">mayurdabade99@gmail.com</p>
                  </div>
                </a>

                <a
                  href="tel:+919594902323"
                  className="flex items-center space-x-4 bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-200 group"
                >
                  <div className="bg-white/20 p-3 rounded-lg group-hover:scale-110 transition-transform duration-200">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-blue-100">Phone</p>
                    <p className="font-semibold">+91-9594902323</p>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/mayurdabade"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-200 group"
                >
                  <div className="bg-white/20 p-3 rounded-lg group-hover:scale-110 transition-transform duration-200">
                    <Linkedin size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-blue-100">LinkedIn</p>
                    <p className="font-semibold">linkedin.com/in/mayurdabade</p>
                  </div>
                </a>

                <a
                  href="https://github.com/mayurdabade"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-200 group"
                >
                  <div className="bg-white/20 p-3 rounded-lg group-hover:scale-110 transition-transform duration-200">
                    <Github size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-blue-100">GitHub</p>
                    <p className="font-semibold">github.com/mayurdabade</p>
                  </div>
                </a>
              </div>

              <div className="mt-8 text-center">
                <p className="text-blue-100">
                  📍 Based in Navi Mumbai, Maharashtra
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © 2024 Mayur Dabade. All rights reserved.
          </p>
          <p className="text-gray-500 mt-2 text-sm">
            Built with React & Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
