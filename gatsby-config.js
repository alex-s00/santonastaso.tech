module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://santonastaso.tech/`,
    // Your Name
    name: 'Alex Santonastaso',
    // Main Site Title
    title: `Alex Santonastaso | Computer Scientist`,
    // Description that goes under your name in main bio
    description: `Computer Scientist based in London.`,
    // Optional: Twitter account handle
    author: `Alex`,
    // Optional: Github account URL
    github: `https://github.com/alex-s00`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/alex-santonastaso/`,
    // Content of the About Me section
    about: `With a Master's in Big Data Science and a Bachelor's in Computer science, I developed my skills in domains such as software development, deep learning, cloud computing. I'm also passionate about open-source contributions, working in high impact environments, and helping development teams grow and build great products.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'Automated Facial Emotion Recognition',
        description:
          'Build and deploy a Deep Learning Model for facial emotion recognition with PyTorch',
        link: 'https://github.com/alex-s00/Facial-emotion-recognition',
      },
      {
        name: 'Ethereum Blockchain Analysis',
        description:
          'Analysis of Ethereum Transactions and Smart Contracts using Apache Hadoop',
        link: 'https://github.com/alex-s00/ethereum-analysis',
      },
      {
        name: 'Audio classification using Machine Learning',
        description:
          'A Machine Learning pipeline that takes as input an audio file and predicts its song label',
        link: 'https://github.com/alex-s00/ml-mini-project',
      },
      {
        name: 'Web portfolio',
        description:
          'Personal portfolio built with React on GatsbyJS and TailwindCSS',
        link: 'https://github.com/alex-s00/santonastaso.tech',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'National Careers Service',
        description: 'Careers Adviser, Jun 2024 - Present',
        link: 'https://nationalcareers.service.gov.uk/',
      },
      {
        name: 'HDS Consult srl',
        description: 'Analyst, Apr 2023 - Apr 2024',
        link: '',
      },
      {
        name: 'Queen Mary University of London',
        description: 'Teaching Assistant, October 2023 - Dec 2023',
        link: 'https://www.qmul.ac.uk/postgraduate/taught/coursefinder/courses/big-data-science-msc/',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages & Frameworks',
        description:
          'Python, Java, C#, SQL, R, Pytorch, Tensorflow, PySpark',
      },
      {
        name: 'Developer Tools',
        description: 'Jupyter Notebook, VS Code, Git, MS Office, AWS',
      },
    ],
    certifications: [
      {
        name: 'AWS Certified Cloud Practitioner',
        description:
          'Oct 2024 - Present',
      },
      {
        name: 'NOCN Level 3 Award Information, Advice & Guidance',
        description: 'Jul 2024 - Aug 2024',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#009ae4`,
        theme_color: `#009ae4`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
