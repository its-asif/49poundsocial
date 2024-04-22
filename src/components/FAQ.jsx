
const FAQ = () => {
    const qna = [
        {
            ques : "What Is social media management?",
            ans : "Social media management involves creating post visuals, captions and hashtags and scheduling content to be posted on social media platforms such as Facebook, Instagram, Twitter, and LinkedIn."
        },
        {
            ques : "Why do I need social media management for my business?",
            ans : "Having effective social media management is crucial for establishing and sustaining an online presence, connecting with your audience, and expanding your brand. Furthermore, it plays a key role in raising brand awareness, driving traffic to your website, generating leads, and ultimately increasing sales."
        },
        {
            ques : "What services do you offer as part of social media management?",
            ans : "First, we design visuals, craft captions, curate hashtags, and schedule posts upon client approval. Additionally, our social media management services encompass content creation, scheduling, analytics, and tailored strategy development."
        },
        {
            ques : "Can I see examples of the content you create?",
            ans : "Absolutely! We'd be happy to share examples of our previous work to give you an idea of the quality and style of content we create for our clients."
        },
        {
            ques : "Can I provide input or feedback on the content you create?",
            ans : "Yes, we encourage collaboration and welcome your input and feedback on the content we create. Your satisfaction is our priority, and we'll work closely with you to ensure the content aligns with your brand voice and goals"
        },
        {
            ques : "Do you offer social media advertising services?",
            ans : "Yes, we provide social media advertising services to help boost your reach, engagement, and conversions on platforms like Facebook & Instagram. We'll develop targeted ad campaigns tailored to your objectives and budget."
        },
        {
            ques : "How do I get started with your social media management services?",
            ans : "Getting started is easy! Simply reach out to us via BOOK CALL or email using the contact us link to schedule a consultation. We'll discuss your goals, needs, and budget, and tailor a social media management plan that works for you."
        },
        {
            ques : "What sets your social media management services apart from others?",
            ans : "Our personalised approach, attention to detail, commitment to client satisfaction, and results-driven strategies set us apart. We prioritise building long-term partnerships with our clients and helping them achieve their social media goals."
        }
    ]


    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-2 bg-[#f7b141] text-white p-10 mt-10">
                <div className="flex justify-center items-center">
                    <img src="faq.webp" alt="" />
                </div>
                <div>
                <div className="space-y-4 p-6">
                        {
                            qna.map((item, indx) => (
                                <details className="group" key={indx}>
                                    <summary
                                    className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-[#024963] p-4 text-white">
                                    <h2 className="font-medium">{item.ques}</h2>

                                    <svg
                                        className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                    </svg>
                                    </summary>

                                    <p className="mt-2 px-4 leading-relaxed text-sm text-black">
                                    {item.ans}
                                    </p>
                                </details>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;