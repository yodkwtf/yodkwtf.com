const AIRTABLE_DATA = {
  projects: [
    {
      id: 1,
      title: 'Animated Landing Page',
      stack: 'Others',
      imgUrl:
        'https://res.cloudinary.com/dds18bzdy/image/upload/v1711800477/yodkwtf.com/projects/Screenshot_4_-min_e9runx.jpg',
      url: 'https://landingpageanimations-dk.netlify.app/',
      github:
        'https://github.com/yodkwtf/random-cool-projects/tree/main/02-smooth-page-transiitons',
    },
    {
      id: 2,
      title: 'Budget Logger',
      stack: 'Others',
      imgUrl:
        'https://res.cloudinary.com/dds18bzdy/image/upload/v1711800478/yodkwtf.com/projects/Screenshot_2_-min_my526g.jpg',
      url: 'https://financelogger-dk.netlify.app/',
      github:
        'https://github.com/yodkwtf/typescript-projects/tree/main/01-finance-logger',
    },
    {
      id: 3,
      title: 'chat application',
      stack: 'nodejs',
      imgUrl:
        'https://res.cloudinary.com/dds18bzdy/image/upload/v1711800480/yodkwtf.com/projects/newwwwww_dxihfk.webp',
      url: 'https://chat-app-dk.onrender.com/',
      github: 'https://github.com/yodkwtf/nodejs-chat-app',
    },
    {
      id: 4,
      title: 'Christmas Card',
      stack: 'HTML & CSS',
      imgUrl:
        'https://res.cloudinary.com/dds18bzdy/image/upload/v1711800482/yodkwtf.com/projects/Capture-min_ilgnnb.png',
      url: 'https://merry-christmas-dk.netlify.app/',
      github:
        'https://github.com/yodkwtf/html-css-projects/tree/main/07)%20Christmas%20Card',
    },
    {
      id: 5,
      title: 'cinematica',
      stack: 'MERN',
      imgUrl:
        'https://res.cloudinary.com/dds18bzdy/image/upload/v1711800483/yodkwtf.com/projects/cinematica_o1lctj.png',
      url: 'https://cinematica-mern.vercel.app/',
      github: 'https://github.com/yodkwtf/cinematica-mern',
    },
    {
      id: 6,
      title: 'color generator',
      stack: 'React',
      imgUrl:
        'https://res.cloudinary.com/dds18bzdy/image/upload/v1711800489/yodkwtf.com/projects/Screenshot_239_-min_cxwzeg.webp',
      url: 'https://colorgenerator-react-dk.netlify.app/',
      github:
        'https://github.com/yodkwtf/reactjs-projects/tree/main/02)%20Color%20Generator',
    },
    {
      id: 7,
      title: 'countdown timer',
      stack: 'Javascript',
      imgUrl:
        'https://res.cloudinary.com/dds18bzdy/image/upload/v1711800492/yodkwtf.com/projects/Screenshot_231_-min_rjjebg.webp',
      url: 'https://countdowntimer-dk.netlify.app/',
      github:
        'https://github.com/yodkwtf/javascript-projects/tree/main/02)%20Countdown%20Timer',
    },
    {
      id: 8,
      title: 'currency converter',
      stack: 'React',
      imgUrl:
        'https://res.cloudinary.com/dds18bzdy/image/upload/v1711800495/yodkwtf.com/projects/Screenshot_238_-min_upc8hr.webp',
      url: 'https://currencyconverter-react-dk.netlify.app/',
      github:
        'https://github.com/yodkwtf/reactjs-projects/tree/main/06)%20Currency%20Converter',
    },
    {
      id: 9,
      title: 'DaoLens.com',
      stack: 'freelance',
      imgUrl:
        'https://res.cloudinary.com/dds18bzdy/image/upload/v1711800496/yodkwtf.com/projects/daaaaao-min_ok3qsg.png',
      url: 'https://daolens-dk.vercel.app/',
      github: 'https://www.daolens.com/',
    },
    {
      id: 10,
      title: 'DevBySid.com',
      stack: 'freelance',
      imgUrl:
        'https://res.cloudinary.com/dds18bzdy/image/upload/v1711800496/yodkwtf.com/projects/Screenshot_584_-min_x3qimm.jpg',
      url: 'https://devbysid.com/',
      github: 'https://devbysid.com/',
    },
    {
      id: 11,
      title: 'DevCut - SASS Landing Page',
      stack: 'Others',
      imgUrl:
        'https://res.cloudinary.com/dds18bzdy/image/upload/v1711800497/yodkwtf.com/projects/devcut-min_uezdyz.png',
      url: 'https://devcut.netlify.app/',
      github: 'https://github.com/yodkwtf/sass-101',
    },
    {
      id: 12,
      title: 'E-Commerce API',
      stack: 'nodejs',
      imgUrl:
        'https://res.cloudinary.com/dds18bzdy/image/upload/v1711800497/yodkwtf.com/projects/eeeeee-min_t14gwz.png',
      url: 'https://e-commerce-api-dk.onrender.com/',
      github: 'https://github.com/yodkwtf/nodejs-e-commerce-api',
    },
    {
      id: 13,
      title: 'E-Commerce Website',
      stack: 'React',
      imgUrl:
        'https://res.cloudinary.com/dds18bzdy/image/upload/v1711800500/yodkwtf.com/projects/HikYEfjNN6qlhRR0vHshbPMADqbS0ZGp8K-NWATO49A-min_yri78h.png',
      url: 'https://furnitureworld-react-dk.netlify.app/',
      github: 'https://github.com/yodkwtf/furnitureworld-with-reactjs',
    },
    {
      id: 14,
      title: 'facebook card clone',
      stack: 'HTML & CSS',
      imgUrl:
        'https://res.cloudinary.com/dds18bzdy/image/upload/v1711800501/yodkwtf.com/projects/fb-card_d1golz.webp',
      url: 'https://facebookcard-dk.netlify.app/',
      github:
        'https://github.com/yodkwtf/html-css-projects/tree/main/06)%20Facebook%20Card',
    },
    {
      id: 15,
      title: 'glass UI website',
      stack: 'HTML & CSS',
      imgUrl:
        'https://res.cloudinary.com/dds18bzdy/image/upload/v1711800503/yodkwtf.com/projects/Screenshot_225_-min_nfivlt.webp',
      url: 'https://glassuiwebsite-dk.netlify.app/',
      github:
        'https://github.com/yodkwtf/html-css-projects/tree/main/03)%20Glass%20UI%20Website',
    },
    {
      id: 16,
      title: 'goals tracker',
      stack: 'MERN',
      imgUrl:
        'https://res.cloudinary.com/dds18bzdy/image/upload/v1711800505/yodkwtf.com/projects/Screenshot_451_xgjsfi.png',
      url: 'https://goalstracker-dk.onrender.com/',
      github: 'https://github.com/yodkwtf/goals-tracker-mern',
    },
    {
      id: 17,
      title: 'goblitz.ai',
      stack: 'freelance',
      imgUrl:
        'https://res.cloudinary.com/dds18bzdy/image/upload/v1711800507/yodkwtf.com/projects/goblitz-min_n5jc9i.png',
      url: 'https://goblitz.ai/',
      github: 'https://goblitz.ai/',
    },
    {
      id: 18,
      title: 'google search clone',
      stack: 'React',
      imgUrl:
        'https://res.cloudinary.com/dds18bzdy/image/upload/v1711800509/yodkwtf.com/projects/google-clone_sdu5fm.webp',
      url: 'https://googlesearchclone-react-dk.netlify.app/',
      github: 'https://github.com/yodkwtf/googlesearchclone-with-reactjs',
    },
    {
      id: 19,
      title: 'hiddenhoian.com',
      stack: 'freelance',
      imgUrl:
        'https://res.cloudinary.com/dds18bzdy/image/upload/v1711800511/yodkwtf.com/projects/hiddenhoian-min_fegurk.png',
      url: 'https://hiddenhoian.com/',
      github: 'https://hiddenhoian.com/',
    },
    {
      id: 20,
      title: 'HomeMakers Landing Page',
      stack: 'Others',
      imgUrl:
        'https://res.cloudinary.com/dds18bzdy/image/upload/v1711800513/yodkwtf.com/projects/Screenshot_5_-min_jk6xhj.jpg',
      url: 'https://homemakers-bootstrap-dk.netlify.app/',
      github: 'https://github.com/yodkwtf/bootstrap-v5-homemakers-website',
    },
    {
      id: 21,
      title: 'javascript clock',
      stack: 'Javascript',
      imgUrl:
        'https://res.cloudinary.com/dds18bzdy/image/upload/v1711800515/yodkwtf.com/projects/Screenshot_232_-min_idglyk.webp',
      url: 'https://javascriptclock-dk.netlify.app/',
      github:
        'https://github.com/yodkwtf/javascript-projects/tree/main/05)%20Javascript%20Clock',
    },
    {
      id: 22,
      title: 'music app',
      stack: 'Javascript',
      imgUrl:
        'https://res.cloudinary.com/dds18bzdy/image/upload/v1711800520/yodkwtf.com/projects/music-app_pypkzb.webp',
      url: 'https://musicapp-dk.netlify.app/',
      github:
        'https://github.com/yodkwtf/javascript-projects/tree/main/04)%20Music%20App',
    },
    {
      id: 23,
      title: 'NextTube',
      stack: 'Nextjs',
      imgUrl:
        'https://res.cloudinary.com/dds18bzdy/image/upload/v1711800518/yodkwtf.com/projects/next_tube-min_an7iyf.png',
      url: 'https://nexttube-dk.vercel.app/',
      github: 'https://github.com/yodkwtf/next-tube',
    },
    {
      id: 24,
      title: 'Nexus - Chat Application',
      stack: 'Nextjs',
      imgUrl:
        'https://res.cloudinary.com/dds18bzdy/image/upload/v1711800522/yodkwtf.com/projects/Screenshot_2023-09-23_223421-min_zkvto4.png',
      url: 'https://nexus-dk.vercel.app/',
      github: 'https://github.com/yodkwtf/nexus-chat-application',
    },
    {
      id: 25,
      title: 'online code editor',
      stack: 'React',
      imgUrl:
        'https://res.cloudinary.com/dds18bzdy/image/upload/v1711800527/yodkwtf.com/projects/Screenshot_620_-min_hxpdxq.png',
      url: 'https://www.codepencil.me/',
      github: 'https://github.com/yodkwtf/codepencil-with-react',
    },
    {
      id: 26,
      title: 'OpenAI ChatBot',
      stack: 'nodejs',
      imgUrl:
        'https://res.cloudinary.com/dds18bzdy/image/upload/v1711800529/yodkwtf.com/projects/chatterbot_jrcxfo.png',
      url: 'https://chatterbot-dk.netlify.app/',
      github: 'https://github.com/yodkwtf/chatterbot-with-javascript',
    },
    {
      id: 27,
      title: 'photo editor',
      stack: 'React',
      imgUrl:
        'https://res.cloudinary.com/dds18bzdy/image/upload/v1711800534/yodkwtf.com/projects/Screenshot_237_-min_tc9en4.webp',
      url: 'https://photoeditor-react-dk.netlify.app/',
      github:
        'https://github.com/yodkwtf/reactjs-projects/tree/main/05)%20Photo%20Editor',
    },
    {
      id: 28,
      title: 'pig - game',
      stack: 'Javascript',
      imgUrl:
        'https://res.cloudinary.com/dds18bzdy/image/upload/v1711800535/yodkwtf.com/projects/Screenshot_228_-min_vjtdwd.webp',
      url: 'https://pigdicegame-dk.netlify.app/',
      github: 'https://github.com/yodkwtf/pigdicegame-with-javascript',
    },
    {
      id: 29,
      title: 'portfolio design',
      stack: 'HTML & CSS',
      imgUrl:
        'https://res.cloudinary.com/dds18bzdy/image/upload/v1711800536/yodkwtf.com/projects/Screenshot_223_-min_vnramq.webp',
      url: 'https://portfolio-v2-dk.netlify.app/',
      github: 'https://github.com/yodkwtf/portfolio-v2-with-html-css-js',
    },
    {
      id: 30,
      title: 'quizfeed - quiz app',
      stack: 'React',
      imgUrl:
        'https://res.cloudinary.com/dds18bzdy/image/upload/v1711800537/yodkwtf.com/projects/Screenshot_234_-min_otc6qe.webp',
      url: 'https://quizfeed-react-dk.netlify.app/',
      github: 'https://github.com/yodkwtf/quizfeed-with-reactjs',
    },
    {
      id: 31,
      title: 'redux website clone',
      stack: 'HTML & CSS',
      imgUrl:
        'https://res.cloudinary.com/dds18bzdy/image/upload/v1711800541/yodkwtf.com/projects/Screenshot_224_-min_ggd11w.webp',
      url: 'https://reduxwebsite-dk.netlify.app/',
      github:
        'https://github.com/yodkwtf/html-css-projects/tree/main/02)%20Redux%20Website',
    },
    {
      id: 32,
      title: 'rock paper scissors - game',
      stack: 'Javascript',
      imgUrl:
        'https://res.cloudinary.com/dds18bzdy/image/upload/v1711800542/yodkwtf.com/projects/Screenshot_229_-min_uzpdod.webp',
      url: 'https://rockpaperscissor-dk.netlify.app/',
      github: 'https://github.com/yodkwtf/rockpaperscissor-with-javascript',
    },
    {
      id: 33,
      title: 'Saints of Shows',
      stack: 'HTML & CSS',
      imgUrl:
        'https://res.cloudinary.com/dds18bzdy/image/upload/v1711800545/yodkwtf.com/projects/saints_of_show-min_by0kfz.jpg',
      url: 'https://saintsofshows.netlify.app/',
      github: 'https://github.com/yodkwtf/saintsofshows-html-css',
    },
    {
      id: 34,
      title: 'Spotify Page Clone',
      stack: 'HTML & CSS',
      imgUrl:
        'https://res.cloudinary.com/dds18bzdy/image/upload/v1711800548/yodkwtf.com/projects/spotify-min_qwxwls.png',
      url: 'https://spotifypage-dk.netlify.app/',
      github:
        'https://github.com/yodkwtf/html-css-projects/tree/main/01)%20Spotify%20Page',
    },
    {
      id: 35,
      title: 'svg animation',
      stack: 'HTML & CSS',
      imgUrl:
        'https://res.cloudinary.com/dds18bzdy/image/upload/v1711800551/yodkwtf.com/projects/Screenshot_226_-min_j6m11p.webp',
      url: 'https://svgshapesanimation-dk.netlify.app/',
      github:
        'https://github.com/yodkwtf/html-css-projects/tree/main/05)%20SVG%20Shapes%20Animation',
    },
    {
      id: 36,
      title: 'Terminal Landing Page',
      stack: 'Others',
      imgUrl:
        'https://res.cloudinary.com/dds18bzdy/image/upload/v1711800551/yodkwtf.com/projects/Screenshot_3_-min_zopmya.jpg',
      url: 'https://terminal-style-landing-page-dk.netlify.app/',
      github:
        'https://github.com/yodkwtf/random-cool-projects/tree/main/01-terminal-style-landing-page',
    },
    {
      id: 37,
      title: 'titans digital',
      stack: 'HTML & CSS',
      imgUrl:
        'https://res.cloudinary.com/dds18bzdy/image/upload/v1711800554/yodkwtf.com/projects/Screenshot_221_-min_kf6swe.webp',
      url: 'https://titansdigital.netlify.app/',
      github: 'https://github.com/yodkwtf/titansdigital-html-css',
    },
    {
      id: 38,
      title: 'To Do List - Angular',
      stack: 'Others',
      imgUrl:
        'https://res.cloudinary.com/dds18bzdy/image/upload/v1711800556/yodkwtf.com/projects/Screenshot_1_-min_qp62rw.png',
      url: 'https://ngchecklist-dk.netlify.app/',
      github: 'https://github.com/yodkwtf/ng-checklist-angular',
    },
    {
      id: 39,
      title: 'vaishalishukla.me',
      stack: 'freelance',
      imgUrl:
        'https://res.cloudinary.com/dds18bzdy/image/upload/v1711800560/yodkwtf.com/projects/vs-min_xzsx6p.png',
      url: 'https://vaishalishukla.me/',
      github: 'https://vaishalishukla.me/',
    },
    {
      id: 40,
      title: 'voice recognition app',
      stack: 'Javascript',
      imgUrl:
        'https://res.cloudinary.com/dds18bzdy/image/upload/v1711800560/yodkwtf.com/projects/Screenshot_233_-min_ag7a96.webp',
      url: 'https://voicerecognitionapp-dk.netlify.app/',
      github:
        'https://github.com/yodkwtf/javascript-projects/tree/main/06)%20Voice%20Recognition%20App',
    },
    {
      id: 41,
      title: 'weather app',
      stack: 'nodejs',
      imgUrl:
        'https://res.cloudinary.com/dds18bzdy/image/upload/v1711800562/yodkwtf.com/projects/weather-app_y5pvy2.webp',
      url: 'https://weather-app-dk.onrender.com/',
      github: 'https://github.com/yodkwtf/nodejs-weather-app',
    },
    {
      id: 42,
      title: 'wedorenovation.in',
      stack: 'freelance',
      imgUrl:
        'https://res.cloudinary.com/dds18bzdy/image/upload/v1711800564/yodkwtf.com/projects/wedorenovation-min_suawcm.png',
      url: 'https://wedorenovation.in/',
      github: 'https://wedorenovation.in/',
    },
    {
      id: 43,
      title: 'young at art',
      stack: 'HTML & CSS',
      imgUrl:
        'https://res.cloudinary.com/dds18bzdy/image/upload/v1711800565/yodkwtf.com/projects/young_at_art-min_yh9lnp.jpg',
      url: 'https://youngatart.netlify.app/',
      github: 'https://github.com/yodkwtf/youngatart-html-css',
    },
    {
      id: 44,
      title: 'gym - landing page',
      stack: 'freelance',
      imgUrl:
        'https://res.cloudinary.com/dds18bzdy/image/upload/v1711800485/yodkwtf.com/projects/og-image_kvpzln.png',
      url: 'https://classicgym.netlify.app/',
      github: 'https://github.com/yodkwtf/classic-gym-svelte-kit',
    },
    {
      id: 45,
      title: 'nimbus - weather app',
      stack: 'react native',
      imgUrl:
        'https://res.cloudinary.com/dds18bzdy/image/upload/v1711800525/yodkwtf.com/projects/preview_dqxn3q.jpg',
      url: 'https://github.com/yodkwtf/nimbus-react-native',
      github: 'https://github.com/yodkwtf/nimbus-react-native',
    },
    {
      id: 46,
      title: 'joblink - job search app',
      stack: 'react native',
      imgUrl:
        'https://res.cloudinary.com/dds18bzdy/image/upload/v1711800517/yodkwtf.com/projects/MixCollage-09-Mar-2024-03-48-AM-7986_1_-min_vssckx.jpg',
      url: 'https://github.com/yodkwtf/joblink-react-native',
      github: 'https://github.com/yodkwtf/joblink-react-native',
    },
  ],

  featuredProjects: [
    {
      id: 1,
      title: '2. Cinematica - MERN Application',
      desc: 'Cinematica is a feature-rich MERN (MongoDB, Express, React, Node.js) application that allows users to seamlessly track and manage the movies and shows they watch or plan to watch. With user account management, full CRUD (Create, Read, Update, Delete) functionality, and a user-friendly interface, Cinematica is your go-to tool for organizing your entertainment preferences.',
      imgUrl:
        'https://res.cloudinary.com/dds18bzdy/image/upload/v1711799220/yodkwtf.com/recent-works/cinematica_h8vpjv.png',
      isClientWork: false,
      stack: ['ReactJS', 'nodejs', 'express', 'MongoDB', 'JWT', 'Swagger'],
      url: 'https://cinematica-mern.vercel.app/',
      github: 'https://github.com/yodkwtf/cinematica-mern',
    },
    {
      id: 2,
      title: '3. Developer Portfolio | Freelance Project',
      desc: 'A portfolio website of a game developer built with Gatsby and Contentful headless CMS. GraphQL endpoints are used to retrieve all of the data. The website features modern animations created with the framer motion library. It also includes an advanced SEO component with social media cards and open graph meta tags. The single project pages are generated programmatically by using the file system route API approach.\n\nThe wireframe for the website was created completely from scratch in Figma.',
      imgUrl:
        'https://res.cloudinary.com/dds18bzdy/image/upload/v1711799221/yodkwtf.com/recent-works/Screenshot_584_-min_bgxfxr.jpg',
      isClientWork: true,
      stack: [
        'Gatsby',
        'Graphql',
        'Contentful',
        'styled-components',
        'Framer Motion',
      ],
      url: 'https://www.devbysid.com/',
      github: 'https://www.devbysid.com/',
    },
    {
      id: 3,
      title: '1. Nexus - Chat Application',
      desc: 'Nexus Chat Application is a modern chat application built with the latest technologies, including Next.js, TypeScript, Tailwind CSS, MongoDB, Prisma, and NextAuth. It features real-time chatting, group creation, profile customization, online status tracking, imgUrl uploads, and various authentication methods, including email and social logins with Github, Google, and Twitter.',
      imgUrl:
        'https://res.cloudinary.com/dds18bzdy/image/upload/v1711799221/yodkwtf.com/recent-works/nexus_pkc2lq.png',
      isClientWork: true,
      stack: [
        'Nextjs',
        'Typescript',
        'Tailwind CSS',
        'NextAuth',
        'MongoDB',
        'Prisma',
      ],
      url: 'https://nexus-dk.vercel.app/',
      github: 'https://github.com/yodkwtf/nexus-chat-application',
    },
  ],

  resources: [
    {
      id: 1,
      text: 'resume/cv',
      order: 0,
      iconUrl:
        'https://res.cloudinary.com/dds18bzdy/image/upload/v1711798741/yodkwtf.com/resources/res_zmaixq.png',
      title: 'Download My Resume',
      url: 'https://rxresu.me/48durgesh.kumar/full-stack-developer',
      isLatest: true,
      hideField: false,
    },
    {
      id: 2,
      text: 'latest client work',
      order: 0,
      iconUrl:
        'https://res.cloudinary.com/dds18bzdy/image/upload/v1711798739/yodkwtf.com/resources/tttt_lsduby.png',
      title: 'My Latest Freelance Project',
      url: 'https://devbysid.com/',
      isLatest: false,
      hideField: false,
    },
    {
      id: 3,
      text: 'Latest Project',
      order: 1,
      iconUrl:
        'https://res.cloudinary.com/dds18bzdy/image/upload/v1711798735/yodkwtf.com/resources/icons8-code-48_o0k76k.png',
      title: 'Latest Personal Project',
      url: 'https://cinematica-mern.vercel.app/',
      isLatest: true,
      hideField: false,
    },
    {
      id: 4,
      text: 'my website',
      order: 2,
      iconUrl:
        'https://res.cloudinary.com/dds18bzdy/image/upload/v1711798734/yodkwtf.com/resources/icons8-website-48_kpx5cc.png',
      title: 'yodkwtf.com | My Portfolio',
      url: 'https://drive.google.com/file/d/1FPYiX-m3Mq6FXva-M0LTAkjkb7biIoOc/view?usp=share_link',
      isLatest: false,
      hideField: true,
    },
    {
      id: 5,
      text: 'Java Cheatsheet',
      order: 2,
      iconUrl:
        'https://res.cloudinary.com/dds18bzdy/image/upload/v1711798733/yodkwtf.com/resources/java_jcjbfc.png',
      title: 'Java Fundamentals - Cheatsheeet (PDF)',
      url: 'https://drive.google.com/file/d/1FPYiX-m3Mq6FXva-M0LTAkjkb7biIoOc/view?usp=share_link',
      isLatest: false,
      hideField: true,
    },
    {
      id: 6,
      text: 'Angular Cheatsheet',
      order: 3,
      iconUrl:
        'https://res.cloudinary.com/dds18bzdy/image/upload/v1711798732/yodkwtf.com/resources/icons8-angular_kuenja.svg',
      title: 'A Basic Guide to Angular',
      url: 'https://drive.google.com/file/d/1Pwv-O9mkwrszYUyrnOonjwcWROd5RXPw/view?usp=drive_link',
      isLatest: false,
      hideField: true,
    },
    {
      id: 7,
      text: 'Docker Guide',
      order: 3,
      iconUrl:
        'https://res.cloudinary.com/dds18bzdy/image/upload/v1711798742/yodkwtf.com/resources/icons8-docker-48_pnmbc5.png',
      title: 'The Complete Introduction to Docker',
      url: 'https://drive.google.com/file/d/1QnHtPVg7yn-eGyuPYhayhujBYWu-gulV/view?usp=drive_link',
      isLatest: true,
      hideField: false,
    },
    {
      id: 8,
      text: 'vscode tutorial series',
      order: 4,
      iconUrl:
        'https://res.cloudinary.com/dds18bzdy/image/upload/v1711798731/yodkwtf.com/resources/icons8-visual-studio-code-2019_sdncij.svg',
      title: 'My VSCode Crash Course on YouTube',
      url: 'https://youtube.com/playlist?list=PLG9-T0wrWJ8BUFxog71QQW-NnAHrPWZ4o',
      isLatest: false,
      hideField: false,
    },
    {
      id: 9,
      text: 'git commands cheatsheet',
      order: 5,
      iconUrl:
        'https://res.cloudinary.com/dds18bzdy/image/upload/v1711798730/yodkwtf.com/resources/icons8-git-48_ru710h.png',
      title: 'Git Commands - Cheatsheet',
      url: 'https://drive.google.com/file/d/1Hr2bzduRZXtDO5jiYDcBeyqIa8xgjefI/view?usp=sharing',
      isLatest: false,
      hideField: false,
    },
    {
      id: 10,
      text: 'youtube channel',
      order: 6,
      iconUrl:
        'https://res.cloudinary.com/dds18bzdy/image/upload/v1711798728/yodkwtf.com/resources/youtube_jcgssn.png',
      title: 'Yodkwtf Academy | My YouTube Channel',
      url: 'https://youtube.com/c/yodkwtf',
      isLatest: false,
      hideField: true,
    },
    {
      id: 11,
      text: 'my typescript cheatsheet',
      order: 7,
      iconUrl:
        'https://res.cloudinary.com/dds18bzdy/image/upload/v1711798728/yodkwtf.com/resources/ts_uvmei4.png',
      title: 'TypeScript Cheatsheet - PDF',
      url: 'https://drive.google.com/file/d/1H-Sn67-XpCIWr-nGPQpk7lm0JAuXrRBB/view?usp=sharing',
      isLatest: false,
      hideField: true,
    },
    {
      id: 12,
      text: 'download my python cheatsheet',
      order: 8,
      iconUrl:
        'https://res.cloudinary.com/dds18bzdy/image/upload/v1711798728/yodkwtf.com/resources/python_rd8slp.png',
      title: 'Python Fundamentals - Cheatsheet (PDF)',
      url: 'https://drive.google.com/file/d/1KSPASGV9Nz1rZuVT4wXIfEcPkClNuu1s/view',
      isLatest: false,
      hideField: false,
    },
  ],
};

export default AIRTABLE_DATA;
