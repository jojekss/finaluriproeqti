const texts = {
  ka: {
    nav: {
      home: "მთავარი",
      about: "ჩვენს შესახებ",
      contact: "კონტაქტი",
      blog: "ბლოგი",
      projects: "პროექტები",
    },
    greeting: "გამარჯობა, {{name}}!",
    theme: {
      light: "ნათელი",
      dark: "მუქი",
      switch: "{{mode}} რეჟიმზე გადართვა",
    },
    contact: {
      label: "შეიყვანეთ სახელი:",
      submit: "შენახვა",
      error: "სახელი უნდა შეიცავდეს მინიმუმ 2 ასოს.",
    },
    blog: {
      title: "ბლოგი",
    },
    projects: {
      title: "პროექტები",
      spa: "ერთგვერდიანი აპლიკაცია შექმნილია React Router-ის გამოყენებით.",
      theme: "მომხმარებელს შეუძლია გადაირთოს მუქ და ნათელ რეჟიმებს შორის.",
      storage: "სახელის შენახვა ხდება LocalStorage-ში მომდევნო ვიზიტისთვის.",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      contact: "Contact",
      blog: "Blog",
      projects: "Projects",
    },
    greeting: "Hello, {{name}}!",
    theme: {
      light: "Light",
      dark: "Dark",
      switch: "Switch to {{mode}} Mode",
    },
    contact: {
      label: "Your Name:",
      submit: "Save Name",
      error: "Name must be at least 2 characters.",
    },
    blog: {
      title: "Blog",
    },
    projects: {
      title: "Projects",
      spa: "A single-page application using React Router.",
      theme: "Users can toggle between dark and light themes.",
      storage: "User name is stored in localStorage for future visits.",
    },
  },
};

export default texts;
