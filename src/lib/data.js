import myAvatar from "$lib/assets/images/my-avatar.jpg"
import iconDesign from "$lib/assets/images/icon-design.svg"
import iconVideo from "$lib/assets/images/icon-video.svg"
import iconAnimation from "$lib/assets/images/icon-animation.svg"
import avatar1 from "$lib/assets/images/avatar-1.png"
import avatar2 from "$lib/assets/images/avatar-2.png"
import avatar3 from "$lib/assets/images/avatar-3.png"
import avatar4 from "$lib/assets/images/avatar-4.png"
import clientLogo1 from "$lib/assets/images/logo-1-color.png"
import clientLogo2 from "$lib/assets/images/logo-2-color.png"
import clientLogo3 from "$lib/assets/images/logo-3-color.png"
import clientLogo4 from "$lib/assets/images/logo-4-color.png"
import clientLogo5 from "$lib/assets/images/logo-5-color.png"
import clientLogo6 from "$lib/assets/images/logo-6-color.png"
import project1 from "$lib/assets/images/portfolio/project-1.jpg"
import project2 from "$lib/assets/images/portfolio/project-2.jpg"
import project3 from "$lib/assets/images/portfolio/project-3.jpg"
import project4 from "$lib/assets/images/portfolio/project-4.png"
import project5 from "$lib/assets/images/portfolio/project-5.jpg"
import project6 from "$lib/assets/images/portfolio/project-6.jpg"
import project7 from "$lib/assets/images/portfolio/project-7.jpg"
import project8 from "$lib/assets/images/portfolio/project-8.jpg"

export const data = {
  person: {
    name: "Paskalis Nani Randang",
    email: "rolisnani@students.amikom.ac.id",
    phone: "82144918280",
    birthday: "21 Maret, 2002",
    location: "Condongcatur, Yogyakarta, Indonesia",
    profession: "Graphic Designer",
    myAvatar: myAvatar
  },
  socialMedia: [
    { title: "instagram", link: "www.instagram.com/rolis_nani", logo: "logo-instagram" },
    { title: "facebook", link: "www.facebook.com/bli.rolis", logo: "logo-facebook" },
  ],
  pages: {
    about: [
      {
        heading: "About Me",
        contents: [
          "Halo, saya (Paskalis Nani Randang), seorang seniman grafis yang berbakat dengan keahlian luar biasa dalam merancang solusi visual yang unik dan memukau. Dengan pengalaman sebagai seorang graphic designer, saya telah membangun portofolio yang mencerminkan kreativitas tinggi dan pemahaman yang mendalam akan desain grafis. Kelebihan utamanya terletak pada kemampuannya menggabungkan elemen estetika dan fungsi, menciptakan karya seni yang tidak hanya indah, tetapi juga efektif dalam menyampaikan pesan.",
          "Saya telah bekerja berbagai jenis desain dan selalu mengeksplorasi ide-ide baru menciptakan karya-karya yang menginspirasi. Dalam setiap desainnya, saya berusaha untuk memberikan nilai tambah dan meninggalkan kesan yang kuat, menciptakan pengalaman visual yang tak terlupakan bagi setiap audiensnya.",
          "Pendekatan saya terhadap desain grafis tidak hanya sekadar estetika, tetapi juga mendasarkan pada pemahaman mendalam terhadap merek dan tujuan komunikatifnya. Kemampuannya untuk mengartikulasikan pesan-pesan kompleks melalui elemen-elemen visual menciptakan desain yang bukan hanya sekadar memikat mata, tetapi juga merangsang pemikiran. Portofolio webnya adalah jendela yang memperlihatkan kekayaan kreativitasnya, menampilkan kemampuan untuk menciptakan desain yang tak hanya indah, tetapi juga bermakna.",
          "Saya adalah seorang graphic designer yang tidak hanya menciptakan desain visual, tetapi juga membangun narasi visual yang kuat. Dengan dedikasi terhadap seni visual dan pemahaman yang mendalam akan tren desain terkini, saya terus mengukir jejaknya sebagai seorang seniman grafis yang berpengaruh dan inovatif."
        ]
      },
      {
        heading: "What I'm Doing",
        contents: [
          { title: "Animation", content: "Animasi 2D dan 3D berkualitas tinggi dibuat pada tingkat profesional.", icon: iconAnimation },
          { title: "Design Graphic", content: "Desain paling modern dan berkualitas tinggi dibuat pada tingkat profesional.", icon: iconDesign },
          { title: "Video Editing", content: "Video dengan visual efek yang keren dan berkualitas tinggi dibuat pada tingkat profesional.", icon: iconVideo },
        ]

      },
      {
        heading: "Testimonials",
        contents: [
          // { name: "Daniel Lewis", date: "14 Juni, 2021", avatar: avatar1, testimoni: "Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia." },
          // { name: "Jessica Miler", date: "12 Juni, 2020", avatar: avatar2, testimoni: "Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia."},
          // { name: "Mario Carlos", date: "12 Juni, 2020", avatar: avatar3, testimoni: "Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia."},
          // { name: "Sendi Tiantara", date: "12 Juni, 2020", avatar: avatar4, testimoni: "Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia."},
        ]
      },
      {
        heading: "Clients",
        contents: [
          // { logo: clientLogo1 },
          // { logo: clientLogo2 },
          // { logo: clientLogo3 },
          // { logo: clientLogo4 },
          // { logo: clientLogo5 },
          // { logo: clientLogo6 }
        ]
      }
    ],
    resume: [
      {
        heading: "Resume",
        contents: [
          {
            title: "Education",
            content: [
              {
                school: "SMKN 1 Labuan Bajo",
                year: "20017 - 2020",
                text: ""
              },
              {
                school: "Universitas Amikom Yogyakarta",
                year: "2020 - Sekarang",
                text: ""
              },
            ]
          },
          {
            title: "Experience",
            content: [
              { experience: "Final Project UAS FILM KARTUN 3D", year: "2022 - 2023", text: "Saya mengerjakan final project animasi 3D pada semester 6" },
              { experience: "Final Project Perancangan Film Kartun", year: "2022 - 2023", text: "Saya mengerjakan final project animasi 3D pada semester 5" },
            ]
          }
        ]
      },
      {
        heading: "My Skills",
        contents: [
          { title: "Photoshop", percentage: 60 },
          { title: "Premiere Pro", percentage: 70 },
          { title: "After Effect", percentage: 50 },
          { title: "Autodesk Maya", percentage: 40 },
        ]
      }
    ],
    portfolio:
    {
      heading: "Portfolio",
      contents: [
        { title: "Upaya Pencegahan Covid 19", img: project1, category: "Brosur", link: "#" },
        { title: "Keluarga Besar Lampang", img: project2, category: "logo", link: "#" },
        { title: "3D menendang bola", img: project6, category: "Video", link: "https://youtu.be/yz_AINy31QI" },
        { title: "Journey of life", img: project7, category: "Video", link: "https://youtu.be/UokPM7_FOag" }, 
      ]
    },
    blog: []
  }
}

