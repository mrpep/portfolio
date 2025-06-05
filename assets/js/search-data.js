// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about-me",
    title: "About Me",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "Blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-your-own-overleaf",
        
          title: "Your own overleaf",
        
        description: "A short guide to deploy your own overleaf and own your data with pro features for free.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/overleaf/";
          
        },
      },{id: "post-diving-deep-into-k-means",
        
          title: "Diving deep into K-Means",
        
        description: "Let&#39;s implement K-Means from scratch in PyTorch",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/kmeans/";
          
        },
      },{id: "post-audio-generation-using-language-models",
        
          title: "Audio generation using Language Models",
        
        description: "Recycling GPT2 to generate audio",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/audiolm/";
          
        },
      },{id: "post-youtube",
        
          title: '- YouTube <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "Enjoy the videos and music you love, upload original content, and share it all with friends, family, and the world on YouTube.",
        section: "Posts",
        handler: () => {
          
            window.open("https://www.youtube.com/live/cldy_wPzwNw?si=8wfsC83kYwSC7ieE&t=976", "_blank");
          
        },
      },{id: "post-exploiting-the-stereo-field-to-separate-music-sources",
        
          title: "Exploiting the stereo field to separate music sources",
        
        description: "Separating sources by undoing panning",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/stereounmix/";
          
        },
      },{id: "post-inteligencia-artificial-aplicada-al-sonido-tamaba-podcast-podcast-on-spotify",
        
          title: 'INTELIGENCIA ARTIFICIAL APLICADA AL SONIDO  - TAMABA PODCAST  | Podcast on Spotify <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "Listen to this episode from TAMABA PODCAST  on Spotify. ¿Computadoras que componen música 24/7? ¿Voces clonadas? ¿Máquinas entrenadas para avisar desmontes ilegales? Conversamos con Leonardo Pepino, estudiante del Doctorado en Computación en la UBA, que se encuentra trabajando en la intersección entre inteligencia artificial y audio. Se tomó un rato libre dentro de sus tareas como pasante en Google para charlar sobre estos temas.   ",
        section: "Posts",
        handler: () => {
          
            window.open("https://open.spotify.com/episode/62AnqaBHqLAfk2tIYUROpe", "_blank");
          
        },
      },{id: "post-youtube",
        
          title: '- YouTube <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "Enjoy the videos and music you love, upload original content, and share it all with friends, family, and the world on YouTube.",
        section: "Posts",
        handler: () => {
          
            window.open("https://www.youtube.com/watch?v=EL0Uk15HlNc", "_blank");
          
        },
      },{id: "post-youtube",
        
          title: '- YouTube <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "Enjoy the videos and music you love, upload original content, and share it all with friends, family, and the world on YouTube.",
        section: "Posts",
        handler: () => {
          
            window.open("https://www.youtube.com/watch?v=PkK5Yy0SdjI", "_blank");
          
        },
      },{id: "post-youtube",
        
          title: '- YouTube <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "Enjoy the videos and music you love, upload original content, and share it all with friends, family, and the world on YouTube.",
        section: "Posts",
        handler: () => {
          
            window.open("https://www.youtube.com/watch?v=M0uFxyw_WTo", "_blank");
          
        },
      },{id: "post-inteligencia-artificial-para-desarmar-y-armar-la-música-mundo-untref",
        
          title: 'Inteligencia artificial para desarmar (y armar) la música  - MUNDO UNTREF <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "Leonardo Pepino es egresado de la carrera de Ingeniería de Sonido y enfocó su tesis de grado en un proyecto que separa fuentes musicales.",
        section: "Posts",
        handler: () => {
          
            window.open("https://www.untref.edu.ar/mundountref/leonardo-pepino-ingenieria-sonido-proyecto", "_blank");
          
        },
      },{id: "post-un-estudiante-de-la-untref-expondrá-su-proyecto-en-las-jaas-mundo-untref",
        
          title: 'Un estudiante de la UNTREF expondrá su proyecto en las JAAS - MUNDO... <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "Leonardo Pepino presentará un software que separa fuentes musicales en las Jornadas de Acústica, Audio y Sonido que se realizarán esta semana.",
        section: "Posts",
        handler: () => {
          
            window.open("https://www.untref.edu.ar/mundountref/leonardo-pepino-software-jaas", "_blank");
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/mrpep", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/leonardo-daniel-pepino", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=xErFe4kAAAAJ", "_blank");
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
