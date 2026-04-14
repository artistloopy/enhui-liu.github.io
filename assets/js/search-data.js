// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and navigation menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
        title: "Publications",
        description: "Publications synchronized with the CV publications and Conference Presentations sections.",
        section: "Navigation",
        handler: () => {
          window.location.href = "/publications/";
        },
      },{id: "nav-cv",
        title: "CV",
        description: "This is Enhui Liu‘s Curriculum Vitae（Updated on 10 April 2026）.",
        section: "Navigation",
        handler: () => {
          window.location.href = "/cv/";
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather.html";
            },},{id: "news-oral-presentation-at-the-4th-international-webinar-on-gynaecology-and-obstetrics-with-a-certificate-of-outstanding-oral-presentation",
          title: 'Oral presentation at the 4th International Webinar on Gynaecology and Obstetrics, with a...',
          description: "",
          section: "News",},{id: "news-visited-harvard-university-for-the-course-human-endocrine-physiology",
          title: 'Visited Harvard University for the course “Human Endocrine Physiology.”',
          description: "",
          section: "News",},{id: "news-research-training-in-professor-li-jie-s-laboratory-department-of-breast-and-thyroid-surgery-guangzhou-women-and-children-s-medical-center",
          title: 'Research training in Professor Li Jie’s laboratory, Department of Breast and Thyroid Surgery,...',
          description: "",
          section: "News",},{id: "news-published-association-between-dietary-inflammation-index-and-herpes-simplex-virus-i-and-ii-a-cross-sectional-study-as-a-co-first-author",
          title: 'Published “Association between dietary inflammation index and herpes simplex virus I and II:...',
          description: "",
          section: "News",},{id: "news-visiting-student-at-pku-embl-lab",
          title: 'Visiting student at PKU-EMBL Lab.',
          description: "",
          section: "News",},{id: "news-published-associations-of-weight-adjusted-waist-index-with-cardiovascular-chest-pain-risk-in-u-s-adults-as-a-co-first-author",
          title: 'Published “Associations of weight-adjusted waist index with cardiovascular chest pain risk in U.S....',
          description: "",
          section: "News",},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/cv/", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6C%65%68%30%39%31%37@%31%36%33.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0009-0006-8422-2218", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/enhui-liu", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
