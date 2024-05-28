export const services=[
    {
        title:'Outsourced HR',
        img:'/services/1.jpg'
    },
    {
        title:'Recruitment',
        img:'/services/2.jpg'
    },
    {
        title:'Development of HR Policies & Employment Contracts',
        img:'/services/3.jpg'
    },
    {
        title:'Job Analysis',
        img:'/services/4.jpg'
    },
    {
        title:'Job Evaluation & Grading',
        img:'/services/5.jpg'
    },
    {
        title:'Performance Management',
        img:'/services/6.jpg'
    },
    {
        title:'Human Resource and Culture Audit',
        img:'/services/7.jpg'
    },
    {
        title:'Salary & Benefits Survey',
        img:'/services/8.jpg'
    },
    {
        title:'Immigration',
        img:'/services/9.jpg'
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
      const response = await fetch('https://hrfleek.com/wp-json/wp/v2/posts');
  
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
  