import React, { useState } from 'react';

// Main App component
const App = () => {
    // State to manage the current view/page
    const [currentPage, setCurrentPage] = useState('home');
    // State to hold the currently selected module for detailed view
    const [selectedModule, setSelectedModule] = useState(null);

    // Mock data for modules, quizzes, and case studies (content HTML might need class adjustments if they were Tailwind-specific)
    const modules = [
        {
            id: 'history',
            title: 'Indigenous History & Culture',
            description: 'Explore the rich and diverse histories, cultures, and traditions of Aboriginal and Torres Strait Islander peoples.',
            // Note: Tailwind classes in this HTML string will no longer apply.
            // We'll style generic h3, p, ul, li within .module-detail-content
            content: `
                <h3>A Brief Overview</h3>
                <p>Australia's Indigenous history spans over 65,000 years, making it the oldest continuous living culture in the world. This history is incredibly diverse, encompassing hundreds of distinct language groups, each with unique customs, laws, and spiritual beliefs.</p>
                <p>Key periods include the pre-colonial era, marked by sophisticated land management practices, complex social structures, and rich oral traditions. The arrival of European settlers in 1788 brought profound and often devastating changes, including dispossession, disease, and conflict.</p>
                <p>Understanding this history is crucial for ethical engagement, recognizing the ongoing impacts of colonization and the resilience of Indigenous communities.</p>
                <h3>Key Concepts:</h3>
                <ul>
                    <li><strong>Country/Place:</strong> Deep spiritual and cultural connection to land, water, and sky.</li>
                    <li><strong>Dreaming/Tjukurrpa:</strong> The ancestral past, present, and future, encompassing creation stories, laws, and moral codes.</li>
                    <li><strong>Kinship:</strong> Complex systems of relationships that define roles, responsibilities, and obligations within communities.</li>
                    <li><strong>Cultural Protocols:</strong> Respectful ways of interacting, including acknowledging Traditional Owners and seeking permission.</li>
                </ul>
                <h3>Further Reading:</h3>
                <p>For in-depth information, refer to resources from AIATSIS (Australian Institute of Aboriginal and Torres Strait Islander Studies) and local Indigenous organizations.</p>
            `
        },
        {
            id: 'land-rights',
            title: 'Land Rights & Native Title',
            description: 'Understand the legal frameworks and historical context of Indigenous land rights in Australia.',
            content: `
                <h3>The Concept of Land Rights</h3>
                <p>Land rights refer to the rights of Aboriginal and Torres Strait Islander peoples to their traditional lands and waters. Historically, these rights were denied under the doctrine of 'terra nullius' (land belonging to no one) upon British colonization.</p>
                <p>The landmark Mabo v Queensland (No 2) case in 1992 overturned 'terra nullius' and recognized the existence of Native Title in Australian law. Native Title acknowledges that Indigenous peoples have rights and interests in land and waters derived from their traditional laws and customs.</p>
                <h3>Key Legislation and Concepts:</h3>
                <ul>
                    <li><strong>Native Title Act 1993 (Cth):</strong> Federal legislation providing for the recognition and protection of Native Title.</li>
                    <li><strong>Traditional Owners:</strong> Indigenous people who, by traditional law and custom, have rights and interests in land or waters.</li>
                    <li><strong>Future Acts:</strong> Activities that affect Native Title rights and interests (e.g., mining, infrastructure development) and require consultation or negotiation.</li>
                    <li><strong>Indigenous Land Use Agreements (ILUAs):</strong> Voluntary agreements between Native Title holders and other parties regarding the use and management of land.</li>
                </ul>
                <p>For IT professionals, understanding land rights is crucial when projects involve land use, infrastructure development, or data collection related to specific geographic areas.</p>
            `
        },
        {
            id: 'fair-principles',
            title: 'Ethical Frameworks: FAIR & CARE Principles',
            description: 'Learn about principles for ethical data management and engagement with Indigenous data.',
            content: `
                <h3>FAIR Principles for Scientific Data Management</h3>
                <p>The FAIR principles (Findable, Accessible, Interoperable, Reusable) are a set of guiding principles to enhance the reusability of scientific data. While not specific to Indigenous data, they provide a general framework for good data governance.</p>
                <ul>
                    <li><strong>Findable:</strong> Data and supplementary materials are easy to locate by both humans and computers.</li>
                    <li><strong>Accessible:</strong> Data can be retrieved and accessed under specified conditions.</li>
                    <li><strong>Interoperable:</strong> Data can be combined with other datasets and used across applications or workflows.</li>
                    <li><strong>Reusable:</strong> Data is well-described and can be used for future research.</li>
                </ul>
                <h3>CARE Principles for Indigenous Data Governance</h3>
                <p>The CARE Principles (Collective Benefit, Authority to Control, Responsibility, Ethics) are specifically designed for Indigenous data governance. They emphasize the rights and interests of Indigenous peoples in their data.</p>
                <ul>
                    <li><strong>Collective Benefit:</strong> Data activities should benefit Indigenous communities and peoples.</li>
                    <li><strong>Authority to Control:</strong> Indigenous peoples have the right to control their data and data systems.</li>
                    <li><strong>Responsibility:</strong> Those working with Indigenous data have a responsibility to uphold these principles.</li>
                    <li><strong>Ethics:</strong> Data activities should minimize harm and maximize benefit, respecting Indigenous values and protocols.</li>
                </ul>
                <p>IT professionals working with data related to Indigenous communities must prioritize the CARE principles to ensure data sovereignty and ethical practices.</p>
            `
        }
    ];

    const quizzes = [
        {
            id: 'quiz-1',
            title: 'Cultural Competence Quiz',
            questions: [
                {
                    question: 'What does "terra nullius" mean in the context of Australian history?',
                    options: ['Land of the people', 'Empty land', 'Sacred land', 'Shared land'],
                    answer: 'Empty land'
                },
                {
                    question: 'Which principles are specifically designed for Indigenous data governance?',
                    options: ['FAIR Principles', 'AGILE Principles', 'CARE Principles', 'SOLID Principles'],
                    answer: 'CARE Principles'
                },
                {
                    question: 'What is the approximate duration of Indigenous history in Australia?',
                    options: ['200 years', '2,000 years', '6,500 years', '65,000 years'],
                    answer: '65,000 years'
                }
            ]
        }
    ];

    const caseStudies = [
        {
            id: 'case-study-1',
            title: 'Data Sovereignty in a Health Tech Project',
            scenario: `
                <p>A tech company is developing a new health monitoring application. They propose to collect health data from remote Indigenous communities to improve health outcomes. The data will be stored on cloud servers and used for research purposes.</p>
                <p>The company's initial plan involves standard data privacy agreements, but they haven't specifically consulted with community elders or leaders about data ownership, access, or how the data might be used in the long term, beyond the immediate project scope.</p>
            `,
            questions: [
                {
                    question: 'What ethical concerns might arise from this approach, particularly regarding data sovereignty?',
                    guidance: 'Consider the CARE principles. Who should control the data? Who benefits?'
                },
                {
                    question: 'What steps should the tech company take to ensure ethical engagement and respect for Indigenous data sovereignty?',
                    guidance: 'Think about consultation, consent, and partnership models.'
                }
            ],
            discussionPoints: [
                'Lack of Free, Prior, and Informed Consent (FPIC) from the community regarding data collection and usage.',
                'Potential for data to be used in ways that do not benefit the community, or even cause harm.',
                'Disregard for Indigenous peoples\' right to control their own data (Authority to Control principle).',
                'Recommendations: Establish a formal partnership with community representatives, develop a community-led data governance framework, ensure data is stored on community-controlled servers where possible, and provide clear benefits back to the community.'
            ]
        }
    ];

    // Header component for navigation
    const Header = () => (
        <header className="app-header">
            <div className="container header-container">
                <h1 className="header-title">
                    <span className="header-title-highlight">Ethical IT</span> Engagement
                </h1>
                <nav className="header-nav">
                    <ul className="nav-list">
                        <li>
                            <button
                                onClick={() => { setCurrentPage('home'); setSelectedModule(null); }}
                                className="nav-button"
                            >
                                Home
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => { setCurrentPage('modules'); setSelectedModule(null); }}
                                className="nav-button"
                            >
                                Modules
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => { setCurrentPage('quizzes'); setSelectedModule(null); }}
                                className="nav-button"
                            >
                                Quizzes
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => { setCurrentPage('case-studies'); setSelectedModule(null); }}
                                className="nav-button"
                            >
                                Case Studies
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => { setCurrentPage('resources'); setSelectedModule(null); }}
                                className="nav-button"
                            >
                                Resources
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );

    // Footer component
    const Footer = () => (
        <footer className="app-footer">
            <div className="container">
                <p>&copy; 2025 Ethical IT Engagement Platform. All rights reserved.</p>
                <p className="footer-disclaimer">
                    Disclaimer: This platform provides educational content. For specific legal or cultural advice, please consult with relevant Indigenous organizations and legal professionals.
                </p>
            </div>
        </footer>
    );

    // Home Page component
    const Home = () => (
        <div className="container page-section home-page">
            <h2 className="page-title-main">
                Welcome to the Ethical IT Engagement Platform
            </h2>
            <p className="home-intro-text">
                This platform is designed to equip IT professionals with the knowledge and cultural competence necessary for ethical and respectful engagement with Indigenous communities.
            </p>
            <div className="home-features-grid">
                <div className="feature-card feature-card-learn">
                    <h3 className="feature-card-title">Learn</h3>
                    <p>Deepen your understanding of Indigenous history, land rights, and cultural protocols through comprehensive modules.</p>
                </div>
                <div className="feature-card feature-card-apply">
                    <h3 className="feature-card-title">Apply</h3>
                    <p>Test your knowledge and apply ethical frameworks through interactive quizzes and real-world case studies.</p>
                </div>
                <div className="feature-card feature-card-connect">
                    <h3 className="feature-card-title">Connect</h3>
                    <p>Access valuable resources and links to Indigenous organizations for further learning and partnership opportunities.</p>
                </div>
            </div>
            <div className="home-cta-container">
                <button
                    onClick={() => setCurrentPage('modules')}
                    className="button button-primary button-large"
                >
                    Start Learning
                </button>
            </div>
        </div>
    );

    // Module List component
    const ModuleList = () => (
        <div className="container page-section">
            <h2 className="page-title">Learning Modules</h2>
            <div className="grid-layout">
                {modules.map(module => (
                    <div key={module.id} className="card module-card">
                        <h3 className="card-title module-card-title">{module.title}</h3>
                        <p className="card-description">{module.description}</p>
                        <button
                            onClick={() => { setSelectedModule(module); setCurrentPage('module-detail'); }}
                            className="button button-secondary"
                        >
                            Read Module
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );

    // Module Detail component
    const ModuleDetail = ({ module }) => (
        <div className="container page-section">
            <button
                onClick={() => setCurrentPage('modules')}
                className="button button-tertiary button-back"
            >
                &larr; Back to Modules
            </button>
            <h2 className="page-title-sub">{module.title}</h2>
            <div className="module-detail-content" dangerouslySetInnerHTML={{ __html: module.content }}></div>
        </div>
    );

    // Quiz List component
    const QuizList = () => (
        <div className="container page-section">
            <h2 className="page-title">Quizzes</h2>
            <div className="grid-layout grid-layout-two-col">
                {quizzes.map(quiz => (
                    <div key={quiz.id} className="card quiz-card">
                        <h3 className="card-title quiz-card-title">{quiz.title}</h3>
                        <p className="card-description">Test your understanding of cultural competence and ethical engagement.</p>
                        <button
                            onClick={() => setCurrentPage(`quiz-${quiz.id}`)}
                            className="button button-secondary quiz-card-button"
                        >
                            Start Quiz
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );

    // Quiz component
    const Quiz = ({ quiz }) => {
        const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
        const [selectedAnswer, setSelectedAnswer] = useState(null);
        const [showResult, setShowResult] = useState(false);
        const [score, setScore] = useState(0);

        const handleAnswerSelect = (option) => {
            setSelectedAnswer(option);
        };

        const handleSubmitAnswer = () => {
            if (selectedAnswer === quiz.questions[currentQuestionIndex].answer) {
                setScore(score + 1);
            }
            setShowResult(true);
        };

        const handleNextQuestion = () => {
            setShowResult(false);
            setSelectedAnswer(null);
            if (currentQuestionIndex < quiz.questions.length - 1) {
                setCurrentQuestionIndex(currentQuestionIndex + 1);
            } else {
                // Instead of navigating to a new page string, we'll show results inline or change view
                setCurrentPage('quiz-results'); 
            }
        };
        
        const resetQuiz = () => {
            setCurrentPage('quizzes');
            setCurrentQuestionIndex(0);
            setScore(0);
            setSelectedAnswer(null);
            setShowResult(false);
        };


        if (currentPage === 'quiz-results') {
            return (
                <div className="container page-section text-center">
                    <h2 className="page-title-sub">Quiz Results</h2>
                    <p className="quiz-score-text">You scored {score} out of {quiz.questions.length}!</p>
                    <button
                        onClick={resetQuiz}
                        className="button button-primary"
                    >
                        Back to Quizzes
                    </button>
                </div>
            );
        }
        
        const currentQuestion = quiz.questions[currentQuestionIndex];

        return (
            <div className="container page-section">
                 <button
                    onClick={resetQuiz}
                    className="button button-tertiary button-back"
                >
                    &larr; Back to Quizzes
                </button>
                <h2 className="page-title-sub quiz-title">{quiz.title}</h2>
                <div className="quiz-question-container">
                    <p className="quiz-question-text">
                        Question {currentQuestionIndex + 1} of {quiz.questions.length}: {currentQuestion.question}
                    </p>
                    <div className="quiz-options">
                        {currentQuestion.options.map((option, index) => (
                            <button
                                key={index}
                                onClick={() => handleAnswerSelect(option)}
                                className={`quiz-option-button 
                                    ${selectedAnswer === option ? 'selected' : ''}
                                    ${showResult && option === currentQuestion.answer ? 'correct' : ''}
                                    ${showResult && selectedAnswer === option && selectedAnswer !== currentQuestion.answer ? 'incorrect' : ''}
                                `}
                                disabled={showResult}
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                    {!showResult && selectedAnswer && (
                        <button
                            onClick={handleSubmitAnswer}
                            className="button button-primary quiz-submit-button"
                        >
                            Submit Answer
                        </button>
                    )}
                    {showResult && (
                        <div className="quiz-result-feedback">
                            {selectedAnswer === currentQuestion.answer ? (
                                <p className="feedback-correct">Correct!</p>
                            ) : (
                                <p className="feedback-incorrect">Incorrect. The correct answer was: {currentQuestion.answer}</p>
                            )}
                            <button
                                onClick={handleNextQuestion}
                                className="button button-primary quiz-next-button"
                            >
                                {currentQuestionIndex < quiz.questions.length - 1 ? 'Next Question' : 'View Results'}
                            </button>
                        </div>
                    )}
                </div>
            </div>
        );
    };

    // Case Study List component
    const CaseStudyList = () => (
        <div className="container page-section">
            <h2 className="page-title">Case Studies</h2>
            <div className="grid-layout grid-layout-two-col">
                {caseStudies.map(cs => (
                    <div key={cs.id} className="card case-study-card">
                        <h3 className="card-title case-study-card-title">{cs.title}</h3>
                        <p className="card-description">Analyze real-world scenarios involving ethical decisions and Indigenous communities.</p>
                        <button
                            onClick={() => setCurrentPage(`case-study-${cs.id}`)}
                            className="button button-secondary case-study-card-button"
                        >
                            View Case Study
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );

    // Case Study component
    const CaseStudy = ({ caseStudy }) => (
        <div className="container page-section">
            <button
                onClick={() => setCurrentPage('case-studies')}
                className="button button-tertiary button-back"
            >
                &larr; Back to Case Studies
            </button>
            <h2 className="page-title-sub case-study-title">{caseStudy.title}</h2>
            <div className="case-study-scenario-box">
                <h3 className="case-study-section-title">Scenario:</h3>
                <div className="case-study-content" dangerouslySetInnerHTML={{ __html: caseStudy.scenario }}></div>
            </div>

            {caseStudy.questions.map((q, index) => (
                <div key={index} className="case-study-question-block">
                    <h3 className="case-study-section-title">Question {index + 1}:</h3>
                    <p className="case-study-question-text">{q.question}</p>
                    <p className="case-study-question-guidance">{q.guidance}</p>
                    <textarea
                        className="case-study-textarea"
                        rows="5"
                        placeholder="Type your analysis here..."
                    ></textarea>
                </div>
            ))}

            <div className="case-study-discussion-box">
                <h3 className="case-study-section-title">Discussion Points:</h3>
                <ul className="case-study-discussion-list">
                    {caseStudy.discussionPoints.map((point, index) => (
                        <li key={index}>{point}</li>
                    ))}
                </ul>
            </div>
        </div>
    );

    // Resources component
    const Resources = () => (
        <div className="container page-section">
            <h2 className="page-title">Additional Resources</h2>
            <p className="resources-intro-text">
                Here are some valuable external resources to deepen your understanding and support ethical engagement with Indigenous communities.
            </p>
            <ul className="resources-list">
                <li className="resource-item">
                    <a
                        href="https://aiatsis.gov.au/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="resource-link"
                    >
                        AIATSIS (Australian Institute of Aboriginal and Torres Strait Islander Studies)
                    </a>
                    <p className="resource-description">Australia's premier institution for Aboriginal and Torres Strait Islander research, literature and cultures.</p>
                </li>
                <li className="resource-item">
                    <a
                        href="https://www.indigenousdata.info/care-principles/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="resource-link"
                    >
                        CARE Principles for Indigenous Data Governance
                    </a>
                    <p className="resource-description">Information on the Collective Benefit, Authority to Control, Responsibility, and Ethics principles.</p>
                </li>
                <li className="resource-item">
                    <a
                        href="https://www.creativespirits.info/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="resource-link"
                    >
                        Creative Spirits
                    </a>
                    <p className="resource-description">An independent, non-profit website providing information about Aboriginal culture, history, and issues.</p>
                </li>
                <li className="resource-item">
                    <a
                        href="https://reconciliation.org.au/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="resource-link"
                    >
                        Reconciliation Australia
                    </a>
                    <p className="resource-description">Promoting reconciliation between Aboriginal and Torres Strait Islander peoples and the wider Australian community.</p>
                </li>
            </ul>
        </div>
    );

    // Render the appropriate component based on currentPage state
    const renderPage = () => {
        switch (currentPage) {
            case 'home':
                return <Home />;
            case 'modules':
                return <ModuleList />;
            case 'module-detail':
                return <ModuleDetail module={selectedModule} />;
            case 'quizzes':
                return <QuizList />;
            case 'quiz-quiz-1': // Specific quiz ID
                return <Quiz quiz={quizzes.find(q => q.id === 'quiz-1')} />;
            case 'case-studies':
                return <CaseStudyList />;
            case 'case-study-case-study-1': // Specific case study ID
                return <CaseStudy caseStudy={caseStudies.find(cs => cs.id === 'case-study-1')} />;
            case 'resources':
                return <Resources />;
            case 'quiz-results': // Added for quiz results view
                 return <Quiz quiz={quizzes.find(q => q.id === 'quiz-1')} />; // Or pass score directly
            default:
                return <Home />;
        }
    };

    return (
        <div className="app-wrapper">
            {/* Google Fonts - Inter */}
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
            
            <style>
                {`
                /* Basic Reset & Body Styles */
                body {
                    margin: 0;
                    font-family: 'Inter', sans-serif;
                    background-color: #f3f4f6; /* gray-100 */
                    color: #374151; /* gray-700 */
                    line-height: 1.6;
                }
                * {
                    box-sizing: border-box;
                }
                .app-wrapper {
                    min-height: 100vh;
                    display: flex;
                    flex-direction: column;
                }
                main {
                    flex-grow: 1;
                }
                .container {
                    width: 90%;
                    max-width: 1200px;
                    margin-left: auto;
                    margin-right: auto;
                    padding: 1.5rem; /* p-6 */
                }

                /* Header Styles */
                .app-header {
                    background: linear-gradient(to right, #3730a3, #581c87); /* from-indigo-800 to-purple-900 */
                    color: white;
                    padding: 1rem; /* p-4 */
                    box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06); /* shadow-lg */
                }
                .header-container {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    padding: 0; /* remove container padding for header specific layout */
                }
                .header-title {
                    font-size: 1.875rem; /* text-3xl */
                    font-weight: 700; /* font-bold */
                    margin-bottom: 0.5rem; /* mb-2 */
                }
                .header-title-highlight {
                    color: #fde047; /* text-yellow-300 */
                }
                .header-nav ul.nav-list {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                    list-style: none;
                    padding: 0;
                    margin: 0;
                    gap: 0.5rem 1rem; /* space-x-4 md:space-x-6 */
                }
                .nav-button {
                    background: none;
                    border: none;
                    color: white;
                    font-size: 1.125rem; /* text-lg */
                    padding: 0.25rem 0.75rem; /* py-1 px-3 */
                    border-radius: 0.375rem; /* rounded-md */
                    cursor: pointer;
                    transition: color 0.3s ease, background-color 0.3s ease;
                }
                .nav-button:hover {
                    color: #fde047; /* hover:text-yellow-300 */
                    background-color: #4338ca; /* hover:bg-indigo-700 */
                }

                /* Footer Styles */
                .app-footer {
                    background-color: #1f2937; /* bg-gray-800 */
                    color: white;
                    padding: 1rem; /* p-4 */
                    margin-top: 2rem; /* mt-8 */
                    text-align: center;
                }
                .footer-disclaimer {
                    font-size: 0.875rem; /* text-sm */
                    margin-top: 0.5rem; /* mt-2 */
                }

                /* Page & Section Styles */
                .page-section {
                    background-color: white;
                    box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06); /* shadow-lg */
                    border-radius: 0.5rem; /* rounded-lg */
                    margin-top: 2rem; /* mt-8 */
                }
                .page-title-main {
                    font-size: 2.25rem; /* text-4xl */
                    font-weight: 800; /* font-extrabold */
                    text-align: center;
                    color: #3730a3; /* text-indigo-800 */
                    margin-bottom: 1.5rem; /* mb-6 */
                }
                .page-title { /* For section titles like Modules, Quizzes */
                    font-size: 1.875rem; /* text-3xl */
                    font-weight: 700; /* font-bold */
                    text-align: center;
                    color: #3730a3; /* text-indigo-800 */
                    margin-bottom: 1.5rem; /* mb-6 */
                }
                 .page-title-sub { /* For detail pages like ModuleDetail, Quiz title */
                    font-size: 1.875rem; /* text-3xl */
                    font-weight: 700; /* font-bold */
                    color: #3730a3; /* text-indigo-800 */
                    margin-bottom: 1rem; /* mb-4 */
                }


                /* Home Page Specific Styles */
                .home-intro-text {
                    font-size: 1.125rem; /* text-lg */
                    line-height: 1.75; /* leading-relaxed */
                    margin-bottom: 1.5rem; /* mb-6 */
                    text-align: center;
                }
                .home-features-grid {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 1.5rem; /* gap-6 */
                }
                .feature-card {
                    padding: 1.5rem; /* p-6 */
                    border-radius: 0.5rem; /* rounded-lg */
                    box-shadow: 0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px 0 rgba(0,0,0,0.06); /* shadow-md */
                    border: 1px solid;
                }
                .feature-card-learn { background-color: #eef2ff; border-color: #c7d2fe; /* bg-indigo-50 border-indigo-200 */ }
                .feature-card-learn .feature-card-title { color: #4338ca; /* text-indigo-700 */ }
                .feature-card-apply { background-color: #faf5ff; border-color: #e9d5ff; /* bg-purple-50 border-purple-200 */ }
                .feature-card-apply .feature-card-title { color: #7e22ce; /* text-purple-700 */ }
                .feature-card-connect { background-color: #fefce8; border-color: #fef08a; /* bg-yellow-50 border-yellow-200 */ }
                .feature-card-connect .feature-card-title { color: #a16207; /* text-yellow-700 */ }
                
                .feature-card-title {
                    font-size: 1.5rem; /* text-2xl */
                    font-weight: 600; /* font-semibold */
                    margin-bottom: 0.75rem; /* mb-3 */
                }
                .feature-card p { color: #4b5563; /* text-gray-600 */ }
                .home-cta-container {
                    margin-top: 2rem; /* mt-8 */
                    text-align: center;
                }

                /* Card Styles (used for Modules, Quizzes, Case Studies list items) */
                .card {
                    background-color: #f9fafb; /* bg-gray-50 */
                    padding: 1.5rem; /* p-6 */
                    border-radius: 0.5rem; /* rounded-lg */
                    box-shadow: 0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px 0 rgba(0,0,0,0.06); /* shadow-md */
                    border: 1px solid #e5e7eb; /* border-gray-200 */
                    transition: box-shadow 0.3s ease-in-out;
                }
                .card:hover {
                    box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05); /* hover:shadow-xl */
                }
                .card-title {
                    font-size: 1.5rem; /* text-2xl */
                    font-weight: 600; /* font-semibold */
                    margin-bottom: 0.75rem; /* mb-3 */
                }
                .module-card-title { color: #4338ca; /* text-indigo-700 */ }
                .quiz-card-title { color: #7e22ce; /* text-purple-700 */ }
                .case-study-card-title { color: #a16207; /* text-yellow-700 */ }

                .card-description {
                    color: #4b5563; /* text-gray-600 */
                    margin-bottom: 1rem; /* mb-4 */
                }
                
                /* Grid Layouts */
                .grid-layout {
                    display: grid;
                    grid-template-columns: 1fr; /* default to 1 column */
                    gap: 1.5rem; /* gap-6 */
                }
                .grid-layout-two-col { /* For quizzes and case studies list */
                     /* Styles for 2 columns will be in media query */
                }


                /* Button Styles */
                .button {
                    font-weight: 700; /* font-bold */
                    padding: 0.5rem 1rem; /* py-2 px-4 */
                    border-radius: 9999px; /* rounded-full */
                    text-align: center;
                    border: none;
                    cursor: pointer;
                    transition: background-color 0.3s ease, transform 0.3s ease;
                    box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06); /* shadow-lg */
                }
                .button-primary {
                    background-color: #4f46e5; /* bg-indigo-600 */
                    color: white;
                }
                .button-primary:hover {
                    background-color: #4338ca; /* hover:bg-indigo-700 */
                    transform: scale(1.05);
                }
                .button-secondary { /* Used for "Read Module", "Start Quiz" etc. */
                    background-color: #6366f1; /* bg-indigo-500 */
                    color: white;
                    font-size: 0.875rem; /* text-sm */
                }
                .button-secondary:hover { background-color: #4f46e5; /* hover:bg-indigo-600 */ }

                .quiz-card .button-secondary { background-color: #9333ea; /* bg-purple-500 */ }
                .quiz-card .button-secondary:hover { background-color: #7e22ce; /* hover:bg-purple-600 */ }
                .case-study-card .button-secondary { background-color: #eab308; /* bg-yellow-500 */ }
                .case-study-card .button-secondary:hover { background-color: #ca8a04; /* hover:bg-yellow-600 */ }
                
                .button-large {
                    padding: 0.75rem 2rem; /* py-3 px-8 */
                }
                .button-tertiary { /* For back buttons */
                    background-color: #d1d5db; /* bg-gray-300 */
                    color: #1f2937; /* text-gray-800 */
                    margin-bottom: 1.5rem; /* mb-6 */
                }
                .button-tertiary:hover {
                    background-color: #9ca3af; /* hover:bg-gray-400 */
                }


                /* Module Detail Content (replaces .prose) */
                .module-detail-content {
                    color: #374151; /* text-gray-700 */
                    line-height: 1.75; /* leading-relaxed */
                }
                .module-detail-content h3 {
                    font-size: 1.25rem; /* text-xl, was 1.5rem in prose */
                    font-weight: 600; /* font-semibold */
                    margin-bottom: 0.5rem; /* mb-2 */
                    color: #4338ca; /* text-indigo-700 */
                    margin-top: 1.5rem;
                }
                .module-detail-content p {
                    margin-bottom: 1rem; /* mb-4 */
                }
                .module-detail-content ul {
                    list-style-type: disc;
                    padding-left: 1.5rem; /* pl-4 based on list-inside */
                    margin-bottom: 1rem; /* mb-4 */
                }
                .module-detail-content li {
                    margin-bottom: 0.5rem; /* mb-2 */
                }
                .module-detail-content strong {
                    font-weight: 600; /* semibold or bold */
                }

                /* Quiz Component Styles */
                .quiz-title { color: #6b21a8; /* text-purple-800 */ }
                .quiz-question-container {
                    background-color: #faf5ff; /* bg-purple-50 */
                    padding: 1.5rem; /* p-6 */
                    border-radius: 0.5rem; /* rounded-lg */
                    box-shadow: 0 1px 2px 0 rgba(0,0,0,0.05); /* shadow-md */
                    border: 1px solid #e9d5ff; /* border-purple-200 */
                }
                .quiz-question-text {
                    font-size: 1.125rem; /* text-lg */
                    font-weight: 600; /* font-semibold */
                    color: #1f2937; /* text-gray-800 */
                    margin-bottom: 1rem; /* mb-4 */
                }
                .quiz-options {
                    display: flex;
                    flex-direction: column;
                    gap: 0.75rem; /* space-y-3 */
                }
                .quiz-option-button {
                    width: 100%;
                    text-align: left;
                    padding: 0.75rem 1rem; /* py-3 px-4 */
                    border-radius: 0.5rem; /* rounded-lg */
                    border: 2px solid #d1d5db; /* border-gray-300 */
                    background-color: white;
                    cursor: pointer;
                    transition: border-color 0.3s ease, background-color 0.3s ease;
                }
                .quiz-option-button:hover:not(:disabled) {
                    background-color: #f3f4f6; /* hover:bg-gray-100 */
                }
                .quiz-option-button.selected {
                    background-color: #e9d5ff; /* bg-purple-200 */
                    border-color: #a855f7; /* border-purple-500 */
                }
                .quiz-option-button.correct {
                    border-color: #22c55e; /* border-green-500 */
                    background-color: #dcfce7; /* bg-green-100 */
                }
                .quiz-option-button.incorrect {
                    border-color: #ef4444; /* border-red-500 */
                    background-color: #fee2e2; /* bg-red-100 */
                }
                .quiz-option-button:disabled {
                    cursor: not-allowed;
                    opacity: 0.8;
                }
                .quiz-submit-button, .quiz-next-button {
                    margin-top: 1.5rem; /* mt-6 */
                    background-color: #9333ea; /* bg-purple-600 */
                }
                .quiz-submit-button:hover, .quiz-next-button:hover {
                    background-color: #7e22ce; /* hover:bg-purple-700 */
                }
                .quiz-next-button {
                     background-color: #4f46e5; /* bg-indigo-600 */
                }
                .quiz-next-button:hover {
                     background-color: #4338ca; /* hover:bg-indigo-700 */
                }
                .quiz-result-feedback {
                    margin-top: 1.5rem; /* mt-6 */
                }
                .feedback-correct { color: #16a34a; font-weight: 700; font-size: 1.125rem; /* text-green-600 font-bold text-lg */ }
                .feedback-incorrect { color: #dc2626; font-weight: 700; font-size: 1.125rem; /* text-red-600 font-bold text-lg */ }
                .quiz-score-text {
                    font-size: 1.25rem; /* text-xl */
                    margin-bottom: 1rem; /* mb-4 */
                }
                .text-center { text-align: center; }


                /* Case Study Styles */
                .case-study-title { color: #854d0e; /* text-yellow-800 */ }
                .case-study-scenario-box {
                    background-color: #fefce8; /* bg-yellow-50 */
                    padding: 1.5rem; /* p-6 */
                    border-radius: 0.5rem; /* rounded-lg */
                    box-shadow: 0 1px 2px 0 rgba(0,0,0,0.05); /* shadow-md */
                    border: 1px solid #fef08a; /* border-yellow-200 */
                    margin-bottom: 1.5rem; /* mb-6 */
                }
                .case-study-section-title {
                    font-size: 1.25rem; /* text-xl */
                    font-weight: 600; /* font-semibold */
                    color: #a16207; /* text-yellow-700 for scenario, gray-800 for others */
                    margin-bottom: 0.75rem; /* mb-3 or mb-2 */
                }
                .case-study-question-block .case-study-section-title { color: #1f2937; } /* gray-800 */
                .case-study-discussion-box .case-study-section-title { color: #1f2937; } /* gray-800 */

                .case-study-content p { margin-bottom: 1rem; } /* mb-4 from original prose-like structure */
                .case-study-question-block { margin-bottom: 1.5rem; /* mb-6 */ }
                .case-study-question-text { margin-bottom: 0.5rem; /* mb-2 */ }
                .case-study-question-guidance {
                    font-size: 0.875rem; /* text-sm */
                    color: #4b5563; /* text-gray-500 */
                    font-style: italic;
                    margin-bottom: 1rem; /* mb-4 */
                }
                .case-study-textarea {
                    width: 100%;
                    padding: 0.75rem; /* p-3 */
                    border: 1px solid #d1d5db; /* border-gray-300 */
                    border-radius: 0.5rem; /* rounded-lg */
                    transition: border-color 0.3s ease, box-shadow 0.3s ease;
                }
                .case-study-textarea:focus {
                    border-color: #eab308; /* focus:ring-yellow-500 */
                    box-shadow: 0 0 0 2px rgba(234, 179, 8, 0.5); /* focus:ring-2 */
                    outline: none;
                }
                .case-study-discussion-box {
                    background-color: #f3f4f6; /* bg-gray-100 */
                    padding: 1.5rem; /* p-6 */
                    border-radius: 0.5rem; /* rounded-lg */
                    box-shadow: inset 0 2px 4px 0 rgba(0,0,0,0.05); /* shadow-inner */
                    border: 1px solid #d1d5db; /* border-gray-300 */
                    margin-top: 2rem; /* mt-8 */
                }
                .case-study-discussion-list {
                    list-style-type: disc;
                    padding-left: 1.25rem; /* pl-4 (approx) */
                    line-height: 1.75; /* leading-relaxed */
                }
                .case-study-discussion-list li { margin-bottom: 0.5rem; /* mb-2 */ }

                /* Resources Page Styles */
                .resources-intro-text {
                    font-size: 1.125rem; /* text-lg */
                    line-height: 1.75; /* leading-relaxed */
                    margin-bottom: 1.5rem; /* mb-6 */
                }
                .resources-list {
                    list-style: none;
                    padding: 0;
                    display: flex;
                    flex-direction: column;
                    gap: 1rem; /* space-y-4 */
                }
                .resource-item {
                    background-color: #f9fafb; /* bg-gray-50 */
                    padding: 1rem; /* p-4 */
                    border-radius: 0.5rem; /* rounded-lg */
                    box-shadow: 0 1px 2px 0 rgba(0,0,0,0.05); /* shadow-sm */
                    border: 1px solid #e5e7eb; /* border-gray-200 */
                }
                .resource-link {
                    color: #4f46e5; /* text-indigo-600 */
                    font-weight: 600; /* font-semibold */
                    font-size: 1.25rem; /* text-xl */
                    display: block;
                    text-decoration: none;
                }
                .resource-link:hover {
                    color: #3730a3; /* hover:text-indigo-800 */
                    text-decoration: underline;
                }
                .resource-description {
                    color: #4b5563; /* text-gray-600 */
                    font-size: 0.875rem; /* text-sm */
                }

                /* Responsive Design - starting with md breakpoint (768px) */
                @media (min-width: 768px) { /* md breakpoint */
                    .header-container {
                        flex-direction: row;
                        justify-content: space-between;
                    }
                    .header-title {
                        margin-bottom: 0; /* md:mb-0 */
                    }
                    .home-features-grid {
                        grid-template-columns: repeat(2, 1fr); /* md:grid-cols-2 */
                    }
                     .grid-layout { /* For modules */
                        grid-template-columns: repeat(2, 1fr); /* md:grid-cols-2 */
                    }
                     .grid-layout-two-col { /* For quizzes and case studies list */
                        grid-template-columns: repeat(2, 1fr); /* md:grid-cols-2 */
                    }
                }
                @media (min-width: 1024px) { /* lg breakpoint */
                    .home-features-grid {
                        grid-template-columns: repeat(3, 1fr); /* lg:grid-cols-3 */
                    }
                     .grid-layout { /* For modules */
                        grid-template-columns: repeat(3, 1fr); /* lg:grid-cols-3 */
                    }
                }

                `}
            </style>
            <Header />
            <main>
                {renderPage()}
            </main>
            <Footer />
        </div>
    );
};

export default App;
