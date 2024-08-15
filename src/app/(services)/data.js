export const services=[
    {
        title:'Outsourced HR',
        img:'/services/1.jpg',
        slug:'outsourced-hr',
        content:`
        <p>Sections 29 and 40 of the Human Resource Management Professionals (HRMP) Act  No. 52 of 2012 requires each company to have a qualified HR Manager who is licensed by Institute of Human Resource Management. We at HRFLEEK recognize the high cost of hiring a full-time HR professional. Therefore, to manage such expenses, we offer an outsourced or part time qualified human resource manager or director for your business. 
        Outsourced HR services involve contracting us to handle some or all of your organization's human resource functions. This allows you to access HR expertise without the need to build a dedicated internal HR department, saving on costs and increasing efficiency. 
        <p/>
        <h2>Core HR Tasks</h2>
        <ul>
        <li><span>Recruitment and Onboarding:</span> Managing the recruitment process from advertising jobs to screening resumes, conducting interviews, and onboarding new hires.</li>
        <li><span>Payroll Management:</span>Calculating salaries, deductions, and taxes, and ensuring timely and accurate employee pay.</li>
        <li><span>Employee Relations:</span>Providing support with employee concerns, grievances, and disciplinary matters.</li>
        <li><span>Benefits Administration:</span>Managing employee benefits programs, including health insurance, pensions, and leave entitlements.</li>
        <li><span>Performance Management:</span>Helping design and implement performance management systems.</li>
        <li><span>Training and Development:</span>Providing or facilitating training programs for employees.</li>
        </ul>
        <h2>Compliance Management:</h2>
        
        `
    },
    {
        title:'Recruitment',
        img:'/services/2.jpg',
        slug:'recruitment',
    },
    {
        title:'Development of HR Policies & Employment Contracts',
        img:'/services/3.jpg',
        slug:'development-of-hr-policies-employment-contracts',
    },
    {
        title:'Job Analysis',
        img:'/services/4.jpg',
        slug:'job-analysis',
    },
    {
        title:'Job Evaluation & Grading',
        img:'/services/5.jpg',
        slug:'job-evaluation-grading',
    },
    {
        title:'Performance Management',
        img:'/services/6.jpg',
        slug:'performance-management'
    },
    {
        title:'Human Resource and Culture Audit',
        img:'/services/7.jpg',
        slug:'human-resource-and-culture-audit',

    },
    {
        title:'Salary & Benefits Survey',
        img:'/services/8.jpg',
        slug:'salary-benefits-survey'
    },
    {
        title:'Immigration',
        img:'/services/9.jpg',
        slug:'immigration'
    }

]
export const testimonials=[
    {
        author:'John Smith, CEO of Tech Innovators Inc',
        message:'HRfleek transformed our HR processes. They expertly handled recruitment and compliance, letting us focus on growth. Our team is happier and more productive. Highly recommend!'
    },
    {
        author:'Sarah Johnson, Operations Manager at Green Solutions',
        message:'Partnering with HRfleek improved our HR operations dramatically. Their payroll management and employee engagement programs are top-notch. The team is responsive and professional.'
    },
    {
        author:'Michael Brown, Founder of Creative Minds Studio',
        message:'HRfleek is a game-changer for our small business. They manage compliance and administrative tasks with ease, giving us peace of mind. Their support and expertise are invaluable.'
    }
]

export async function getStaticProps() {
    try {
      const response = await fetch('https://dashboard.hrfleek.com/wp-json/wp/v2/posts');
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const posts = await response.json();
  
      return {
        props: {
          posts,
        },
      };
    } catch (error) {
      console.error('Error fetching WordPress posts:', error.message);
      return {
        props: {
          posts: [],
        },
      };
    }
  }



  