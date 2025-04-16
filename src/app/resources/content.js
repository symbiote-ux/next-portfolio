import { InlineCode } from '@/once-ui/components';

const person = {
  firstName: 'Saurabh',
  lastName: 'Chauhan',
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: 'Javascript Full Stack Developer',
  avatar: '/images/avatar.jpg',
  location: 'India/Dehradun', // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  timeZoneIdentifier: 'Asia/Kolkata',
  languages: ['English', 'Hindi'], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I share insights on JavaScript, dive into the engineering challenges
      behind travel reservation systems, and explore how thoughtful
      problem-solving shapes better tech. Expect practical takeaways, a bit of
      code, and the occasional hot take on building things that scale.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: 'GitHub',
    icon: 'github',
    link: 'https://github.com/saurabhchauhan-T?tab=overview',
  },
  {
    name: 'LinkedIn',
    icon: 'linkedin',
    link: 'https://www.linkedin.com/in/chauhansaurabh14/',
  },
  {
    name: 'Email',
    icon: 'email',
    link: 'mailto:saurabh.chauhan.dev.js@gmail.com',
  },
];

const home = {
  label: 'Home',
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: (
    <>
      Javascript <br /> Full Stack Developer
    </>
  ),
  subline: (
    <>
      I'm Saurabh Chauhan, a Product engineer at{' '}
      <InlineCode>Travelopia</InlineCode>, I develop scalable web applications
      for travel reservation system, optimizing the user experience and
      streamlining guest travel workflows. <br /> Outside of work, I work on
      personal projects.
    </>
  ),
};

const about = {
  label: 'About',
  title: 'About me',
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: 'https://cal.com',
  },
  intro: {
    display: true,
    title: 'Introduction',
    description: (
      <>
        Saurabh is a full-stack engineer based in India <br />
        🌐 Passionate About Scalable Web Solutions <br />
        🛠️ Developer | System Design Enthusiast <br />
        💡 Simplifying Complex Problems with Code <br />
        With a strong eye for user experience and a product-first mindset, he's
        helped build end-to-end travel reservation systems — from intuitive UIs
        to resilient backend APIs. <br />
        He thrives in fast-moving teams, where collaboration and shipping
        thoughtful features go hand in hand.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: 'Work Experience',
    experiences: [
      {
        company: 'Travelopia',
        timeframe: '2023 - Present',
        role: 'Product Engineer',
        achievements: [
          <>
            Rebuilt a legacy reservation tool using NestJS & React, reducing
            quote finalization time by 40% and improving conversion rates.
          </>,
          <>
            Integrated DataDog, improving issue resolution speed by 50%.
            Enhanced alert reporting system, increasing operational efficiency
            by 15%.
          </>,
          <>
            Delivered a core application powering 87% of business revenue,
            managing 40K+ bookings via a React dashboard.
          </>,

          <>
            Built scalable APIs (NestJS, PostgreSQL, Prisma) and a feature-rich
            UI, cutting operational time by 40% and costs by 30%.
          </>,
          <>
            Achieved 100% test coverage, reducing post-release bugs by 20%. Led
            Agile sprints, code reviews, and infrastructure setup using AWS
            (Fargate, S3, Lambda, etc.).
          </>,
          <>
            Integrated Slack alerts and custom logging tools to improve sales
            support responsiveness.
          </>,

          <>
            Spearheaded the integration of AI tools into design workflows,
            enabling designers to iterate 50% faster.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: '/images/projects/project-01/cover-01.png',
            alt: 'Ostara Itinenary page',
            width: 16,
            height: 9,
          },
          {
            src: '/images/projects/project-01/cover-02.png',
            alt: 'Ostara Add service page ',
            width: 16,
            height: 9,
          },
          {
            src: '/images/projects/project-01/cover-03.png',
            alt: 'Bob Dashboard',
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: 'UPRVUNL',
        timeframe: '2022 - 2023',
        role: 'Junior Engineer',
        achievements: [
          <>
            Contributed to end-to-end development using JavaScript, Node.js,
            Express.js, and MongoDB, building RESTful APIs and enhancing system
            performance.
          </>,
          <>
            Strengthened core knowledge in full-stack fundamentals, clean code
            practices, and Agile methodologies.
          </>,
          <>
            Worked with CSS, JavaScript, and additional front-end technologies
            to improve UI responsiveness and user experience.
          </>,
        ],
        images: [],
      },
      {
        company: 'ThoughtWorks',
        timeframe: '2019 - 2020',
        role: 'Full stack developer - STEP Program Internship',
        achievements: [
          <>
            Selected for ThoughtWorks' STEP program, an intensive software
            engineering initiative focusing on modern software practices and
            technologies.
          </>,
          <>
            Gained expertise in software engineering, testing, Agile
            methodologies, problem-solving, decision-making, teamwork, and
            leadership skills through mentorship from industry experts.
          </>,
          <>
            Developed a full-stack web application using the MERN stack
            (MongoDB, Express, React, Node.js), demonstrating proficiency in
            end-to-end development. Enhanced front-end design with CSS,
            JavaScript, and additional tech skills to create robust,
            user-friendly interfaces.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: 'Studies',
    institutions: [
      {
        name: 'Graphic Era Deemed to be University',
        description: <>Master of Computer Applications</>,
      },
      {
        name: 'Alagappa University',
        description: <>Bachelor of Computer Applications</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: 'Technical skills',
    skills: [
      {
        title: 'Languages',
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: '/images/techStack/javascript.svg',
            alt: 'Javascript logo',
            width: 5,
            height: 5,
          },
          {
            src: '/images/techStack/typescript.svg',
            alt: 'Typescript logo',
            width: 5,
            height: 5,
          },
          {
            src: '/images/techStack/node.svg',
            alt: 'Node Logo',
            width: 5,
            height: 5,
          },
          {
            src: '/images/techStack/css.svg',
            alt: 'CSS Logo',
            width: 5,
            height: 5,
          },
          {
            src: '/images/techStack/html.svg',
            alt: 'html Logo',
            width: 5,
            height: 5,
          },
        ],
      },
      {
        title: 'Frameworks',
        images: [
          {
            src: '/images/techStack/react.svg',
            alt: 'React Logo',
            width: 5,
            height: 5,
          },
          {
            src: '/images/techStack/next.svg',
            alt: 'Next Logo',
            width: 5,
            height: 5,
          },
          {
            src: '/images/techStack/nest.svg',
            alt: 'Nest Logo',
            width: 5,
            height: 5,
          },
          {
            src: '/images/techStack/express.svg',
            alt: 'Express Logo',
            width: 5,
            height: 5,
          },
          {
            src: '/images/techStack/tailwind.svg',
            alt: 'Tailwind Logo',
            width: 5,
            height: 5,
          },
        ],
      },
      {
        title: 'Database',
        images: [
          {
            src: '/images/techStack/mongo.svg',
            alt: 'MongoDb Logo',
            width: 5,
            height: 5,
          },
          {
            src: '/images/techStack/postgres.svg',
            alt: 'Postgres Logo',
            width: 5,
            height: 5,
          },
        ],
      },
      {
        title: 'Version Controlling',
        images: [
          {
            src: '/images/techStack/git.svg',
            alt: 'git Logo',
            width: 5,
            height: 5,
          },
          {
            src: '/images/techStack/github.svg',
            alt: 'Github Logo',
            width: 5,
            height: 5,
          },
          {
            src: '/images/techStack/githubActions.svg',
            alt: 'Github Actions Logo',
            width: 5,
            height: 5,
          },
        ],
      },
      {
        title: 'Tools',
        images: [
          {
            src: '/images/techStack/postman.svg',
            alt: 'Postman Logo',
            width: 5,
            height: 5,
          },
          {
            src: '/images/techStack/slack.svg',
            alt: 'Slack Logo',
            width: 5,
            height: 5,
          },
          {
            src: '/images/techStack/jira.svg',
            alt: 'Jira Logo',
            width: 5,
            height: 5,
          },
          {
            src: '/images/techStack/figma.svg',
            alt: 'figma Logo',
            width: 5,
            height: 5,
          },
          {
            src: '/images/techStack/vsCode.svg',
            alt: 'VsCode Logo',
            width: 5,
            height: 5,
          },
          {
            src: '/images/techStack/canva.svg',
            alt: 'canvaLogo',
            width: 5,
            height: 5,
          },
          {
            src: '/images/techStack/docker.svg',
            alt: 'docker Logo',
            width: 5,
            height: 5,
          },
        ],
      },
      {
        title: 'Technologies',
        images: [
          {
            src: '/images/techStack/graphql.svg',
            alt: 'graphql Logo',
            width: 5,
            height: 5,
          },
          {
            src: '/images/techStack/npm.svg',
            alt: 'npm Logo',
            width: 5,
            height: 5,
          },
          {
            src: '/images/techStack/aws.svg',
            alt: 'aws Logo',
            width: 5,
            height: 5,
          },
          {
            src: '/images/techStack/babel.svg',
            alt: 'babel Logo',
            width: 5,
            height: 5,
          },
          {
            src: '/images/techStack/vite.svg',
            alt: 'Vite Logo',
            width: 5,
            height: 5,
          },
          {
            src: '/images/techStack/lua.svg',
            alt: 'Lua Logo',
            width: 5,
            height: 5,
          },

          {
            src: '/images/techStack/json.svg',
            alt: 'JSON Logo',
            width: 5,
            height: 5,
          },
          {
            src: '/images/techStack/jest.svg',
            alt: 'jest Logo',
            width: 5,
            height: 5,
          },
          {
            src: '/images/techStack/nodemon.svg',
            alt: 'nodemon Logo',
            width: 5,
            height: 5,
          },
          {
            src: '/images/techStack/xml.svg',
            alt: 'XML Logo',
            width: 5,
            height: 5,
          },
          {
            src: '/images/techStack/yaml.svg',
            alt: 'YAML Logo',
            width: 5,
            height: 5,
          },
        ],
      },
    ],
  },
};

const blog = {
  label: 'Blog',
  title: 'Writing about design and tech...',
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: 'Work',
  title: 'My projects',
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: 'Gallery',
  title: 'My photo gallery',
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: '/images/gallery/img-01.jpg',
      alt: 'image',
      orientation: 'vertical',
    },
    {
      src: '/images/gallery/img-02.jpg',
      alt: 'image',
      orientation: 'horizontal',
    },
    {
      src: '/images/gallery/img-03.jpg',
      alt: 'image',
      orientation: 'vertical',
    },
    {
      src: '/images/gallery/img-04.jpg',
      alt: 'image',
      orientation: 'horizontal',
    },
    {
      src: '/images/gallery/img-05.jpg',
      alt: 'image',
      orientation: 'horizontal',
    },
    {
      src: '/images/gallery/img-06.jpg',
      alt: 'image',
      orientation: 'vertical',
    },
    {
      src: '/images/gallery/img-07.jpg',
      alt: 'image',
      orientation: 'horizontal',
    },
    {
      src: '/images/gallery/img-08.jpg',
      alt: 'image',
      orientation: 'vertical',
    },
    {
      src: '/images/gallery/img-09.jpg',
      alt: 'image',
      orientation: 'horizontal',
    },
    {
      src: '/images/gallery/img-10.jpg',
      alt: 'image',
      orientation: 'horizontal',
    },
    {
      src: '/images/gallery/img-11.jpg',
      alt: 'image',
      orientation: 'vertical',
    },
    {
      src: '/images/gallery/img-12.jpg',
      alt: 'image',
      orientation: 'horizontal',
    },
    {
      src: '/images/gallery/img-13.jpg',
      alt: 'image',
      orientation: 'horizontal',
    },
    {
      src: '/images/gallery/img-14.jpg',
      alt: 'image',
      orientation: 'horizontal',
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
