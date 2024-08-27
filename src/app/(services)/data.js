export const services=[
    {
        title:'Standard Home Cleaning',
        img:'/services/1.jpg',
        slug:'outsourced-hr',
    },
    {
        title:'Move-In/Move-Out Cleaning',
        img:'/services/2.jpg',
        slug:'recruitment',
    },
    {
        title:'Window Cleaning',
        img:'/services/3.jpg',
        slug:'development-of-hr-policies-employment-contracts',
    },
    {
        title:'Home Sanitization and Disinfection',
        img:'/services/4.jpg',
        slug:'job-analysis',
    },
    {
        title:'Laundry and Ironing Services',
        img:'/services/5.jpg',
        slug:'job-evaluation-grading',
    },
    {
        title:'Performance Management',
        img:'/services/6.jpg',
        slug:'performance-management'
    },
    {
        title:'Kitchen Cleaning',
        img:'/services/7.jpg',
        slug:'human-resource-and-culture-audit',

    },
    {
        title:'Appliance Cleaning',
        img:'/services/8.jpg',
        slug:'salary-benefits-survey'
    },
    {
        title:'Bathroom Cleaning',
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



  