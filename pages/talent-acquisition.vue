<template>
    <div>
        <TalentBanner />
        <TalentAboutTalent />
        <TalentTrends25 />
        <TalentServices />
        <TalentOurExperts />
        <CommonContact />
        <TalentFAQ :faqItems="faqItems" />
        <!-- <TalentRelatedInsights /> -->
    </div>
</template>

<script setup>

const faqItems = [
    {
        title: 'Find the right people to grow your business—anywhere in the world',
        content: 'Our global reach and extensive candidate database give you instant access to a network of diverse top talent—in any industry, any level and any location. We have experts ready to design custom solutions to meet your needs, whether recruiting executives and professionals or making direct or interim hires.'
    },
    {
        title: 'Accelerate time-to-hire',
        content: 'We\'ll simplify the hiring process with a variety of tools and technology to streamline manual tasks, so your team can focus on more strategic work and candidates get the information they need faster. Our Talent Suite provides data driven insights into the current talent market and in demand skills to help you create the right job descriptions and identify the best fit candidates quickly.  Whether you have a specific hiring need, are filling interim roles, or require an ongoing recruitment partnership, we can execute according to your timeline.'
    },
    {
        title: "How can talent acquisition solve your hiring challenges?",
        content: `Many organizations struggle to find candidates to fill their roles. Often, that’s because they lack a long-term hiring plan capable of adjusting to disruptions in their business and the market. But sometimes it’s because they aren’t approaching the right candidates in the right ways. They may approach hiring as a transactional process rather than as an organizational strategy.

        Talent acquisition services can make the difference. A human-centric talent acquisition strategy will ensure that the hiring process meets the needs of candidates, hiring managers and recruiters and is engaging, intuitive, fair and fast. But that strategy must go beyond just hiring. It must involve setting the strategies, processes and tactics that enable your company to identify and recruit top candidates.

        For example, adding technology to your talent acquisition services can bring the right talent to your doorstep faster, more cost-effectively and with higher engagement. Sourcing and selecting tools, including chatbots, are available to candidates anytime and can shorten the time it takes to move candidates to the interview stage by nearly 80%. Automation can help your team identify top talent, schedule interviews, rank candidates based on skills and free up time for hiring managers and recruiters, so they can concentrate on more strategic work. And it can improve the candidate experience.

        You might also set a talent acquisition goal to eliminate bias, including unconscious bias, in your candidate assessment processes. Data-driven tools can play a role here, ensuring that recruiters focus on the best talent with the necessary skills and don’t consider any impermissible factors.`
    },
    {
        title: "What are the steps of your talent acquisition process?",
        content: `Hire Multiverse’s talent acquisition services recommends following our “CARE” model as a proven talent acquisition process. This model ensures that every candidate experience is fair, consistent and engaging. This model consists of four steps:

        1. Configure your talent acquisition machine: Caring for candidates means you need the right people, processes and technology on your talent acquisition team. It ensures you have the right members on your team with the right skills, that those team members are doing the right work and that you’ve given your team the tools and technology they need to make their job less manual and more efficient.

        2. Adapt your hiring process to each candidate: No two candidates are alike: they have different needs, preferences and expectations, depending on the role they’re applying for and the stage of life they’re in. That’s why it’s important to tailor the hiring experience to each candidate’s journey, specifically what you want them to think, know and feel at each stage. Candidate personas can inform how you design the candidate experience, including which channels you select, what messages you include in job postings, how you assess candidates and what technology you use. A persona should include the person’s age, personal circumstances, family commitments, current role, career background, motivations and aspirations at work, job search status, preferred communication channels, and expectations of the recruitment process.

        3. Refine your candidate hiring technology: Talent acquisition technology, such as always-on chatbots and digital assessment solutions, can help you provide a best-in-class candidate experience. But you can’t rely 100% on technology; it has to complement your people and the way they work. The right technology will depend on the role and its specific needs. For example, high-volume roles may be appropriate for an auto-responder email, but executive roles will require a more personal approach.

        4. Elevate candidates to employees: Treat candidates as if they’re already working for you and you’ll improve their hiring and onboarding experience. Look for ways to engage them throughout their journey. Embed your brand and values in every step of the hiring process. Share information about your company culture and values and ensure they feel included at every stage. This way, even unsuccessful candidates will leave with a positive impression of your company that they can share with potential employees and customers.`
    },
    {
        title: "What is a talent acquisition specialist?",
        content: `Talent acquisition specialists can help organizations attract, source, interview, assess, hire and onboard employees. They do more than recruiters who simply try to find talent for a role. Rather, talent acquisition specialists take a longer-term view of the organization’s hiring processes and talent pipeline. They ensure new hires have the right skillset and mindset for the job. They also make sure candidates are engaged, are aware of the organization’s brand and are in the best position to hit the ground running when they join your company.`
    },
    {
        title: "Why do I need a talent acquisition company?",
        content: `A talent acquisition company can transform a transactional hiring process into a comprehensive, people-centric strategy that fuels and fills your talent pipeline. And it can also show you new approaches to hiring that will help you figure out new ways to secure potential candidates.

        Here are just some of the talent configuration and recruitment strategies that a talent partner can help you create:

        Balance: Stabilize your organization through operational transformation, performance improvement and technology.
        Build: Make more of the talent you have through reskilling, upskilling, succession planning and diversity planning.
        Borrow: Help you draw on the skills of interim professionals, including contingent labor, contractors, seasonal staff, and gig workers.
        Bot: Accelerate and scale your hiring processes using technology such as robotic process automation and machine learning.`
    },
    {
        title: "What is the difference between talent acquisition and HR?",
        content: `Talent acquisition is a strategy that helps your organization fill current roles and build a long-term talent pipeline. It’s a proactive, continuous process that encompasses recruiting and onboarding talent. Talent acquisition services enable companies to study their workforce and ensure their talent strategies align with their business strategies. The goal is to make sure an organization has the people, competencies and experience necessary to move the business forward.

        Human resources is much broader than talent acquisition. It covers the entire lifecycle of an employee, from onboarding to training, setting compensation and benefits, developing policies to govern employees and handling employee exits.

        Optimizing the talent experience requires organizations to align talent acquisition with all human resources and talent management functions.`
    }
]



</script>
