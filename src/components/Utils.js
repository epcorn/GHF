import b from "../images/slider/slider-2.jpeg";
import c from "../images/slider/slider-3.jpeg";
import a from "../images/slider/slider-1.jpeg";
import d from "../images/events/slider-7.jpeg";
import mission from "../images/education.jpg";
import childIndia from "../images/events/image_08.jpg";
import childAfrica from "../images/events/image_06.jpg";
import childDelhi from "../images/events/image_01.jpg";
import stq from "../images/team/1.jpg";
import man from "../images/team/man.png";
import woman from "../images/team/woman.png";
import manger from "../images/team/manager.png";
import insta from "../images/social/instagram.png";
import fb from "../images/social/facebook.png";
import ln from "../images/social/linkedin.png";
import epcorn from "../images/Epcorn.jpg";
import shanti from "../images/Shanti1.jpg";
import sports from "../images/sports.jpg";
import sars from "../images/sars.png";
import seva from "../images/seva.jpg";
import skill from "../images/skill india.jpeg";
import smart from "../images/smart.jpg";

export const homeImages = [
  {
    id: 2,
    image: b,
    title: "Mumbai Team",
    desc: "Worked during 2019 floods",
  },
  {
    id: 3,
    image: c,
    title: "Kolhapur Team",
    desc: "Worked during 2019 floods",
  },
];

export const socialMedia = [
  {
    id: 1,
    image: fb,
    link: "https://www.facebook.com/Giving-Hope-Foundation-100304929513483/",
    name: "fb",
  },
  {
    id: 2,
    image: ln,
    link: "https://www.linkedin.com/company/giving-hope-foundation-india/about/",
    name: "linkedin",
  },
  {
    id: 3,
    image: insta,
    link: "https://www.instagram.com/givinghope.foundation/",
    name: "insta",
  },
];

export const pageLinks = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "About Us",
    link: "/AboutUs",
  },
  {
    id: 3,
    name: "Projects",
    link: "/Projects",
  },
  {
    id: 4,
    name: "Gallery",
    link: "/Gallery",
  },
  {
    id: 5,
    name: "Timeline",
    link: "/Timeline",
  },
  {
    id: 6,
    name: "Contact Us",
    link: "/ContactUs",
  },
];

export const services = [
  {
    id: 1,
    title: "EPCORN",
    image: epcorn,

    description: `A collaborative fund project working with public and private institutes reaching out to urban and rural sectors promoting use of registered pesticides for better management of pests / vectors which are a constant threat to healthy living. The works undertaken under this project involves working with educational institutes, medical colleges and private pest control companies to implement, train and inculcate the use of select products under HWO guidelines to bring in awareness and publish dedicated study of how chemical inventions can make a difference to quality of life and help the economic stability in rural india.`,
    raised: "100",
    total: "10,000",
    projects: [
      {
        id: 1,
        bannerImg: a,
        image: d,
        name: "Kolhapur Floods",
        description: `The sudden and unfortunate flooding at Kolhapur brought awakening to Maharashtra with regards to disaster management, with the floods came chaos and exposure to health risks. 
Express Pesticides just in time Volunteered to provide Man & Material to work with many other agencies trying to make a difference and reach out to many individual’s, villages and agricultural communities suppressing the dangers of vector borne ailments. 
Disinfecting, played a major role in ensuring many lives were saved while collective approach helped us to reach out to a far larger landscape protecting human lives and  livestock. `,
        boldDesc:
          "With 11 focused volunteers, a vehicle and numerous hours of relentless service provided to society when it was most needed was offered by Express Pesticides, all thanks to the leadership whose vision was clear to be there on ground when most needed. ",
        images: [
          {
            id: 1,
            img: d,
          },
          {
            id: 2,
            img: b,
          },
          {
            id: 3,
            img: d,
          },
          {
            id: 4,
            img: d,
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "SAKSHYAM",
    image: sars,
    raised: "500",
    total: "50,000",
    description:
      "An open fund project towards educating children, promoting education and working towards creating awareness amongst economically backward communities on the importance of education. Equally this project is extended to young girls and women extending them a stable income vocational course so as for them to be self confident and rightly training to make a living and support their family. ",
    projects: [
      {
        id: 1,
        bannerImg: a,
        image: mission,
        name: "Child Education",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nullam justo neque, aliquet sit amet elementum vel, vehicula eget eros. Vivamus arcu metus, mattis sed sagittis at, sagittis quis neque. Praesent. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore saepe repellat sit, perspiciatis amet eaque consequuntur libero! Ea commodi Dicta, explicabo odio?",
        images: [
          {
            id: 1,
            img: mission,
          },
          {
            id: 2,
            img: b,
          },
          {
            id: 3,
            img: d,
          },
          {
            id: 4,
            img: d,
          },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Shanti Dham",
    image: shanti,
    raised: "1000",
    total: "50,000",
    description:
      "A focused close group fund, targeted at acquiring land, developing gated homes for aged, a home stay experience conceptualized to provide occupants a healthy, enjoyable aging giving them the comfort of staying in a well cared facility, having medical assistance, landscaping, activity center, fitness center and guest block allowing family to visit. The featured aspects of this home stay would be Gold Standard is Housekeeping, Quick Medical Assistance, Daily planned activity, Nursing care takers, Guest Block, Wellness Meditation Block, dedicated to yoga, therapeutic Massage, meditation",
  },
  {
    id: 4,
    title: "Seva",
    image: seva,
    raised: "10000",
    total: "1,00,000",
    description:
      "A secure fund project reaching out to the orphans & elderly, at GHF we are open to collaborating with nursing homes, care homes, home for aged, children homes to provide support and aid where its needed the most. We choose special occasions to reach out adding to the collective approach and making a difference and adding to the joy of giving. We encourage many Professionals and Non Residents Indians to donate to this cause giving us the much needed financial power to make the difference.",
  },
  {
    id: 5,
    title: "Sport Support",
    image: sports,
    raised: "5000",
    total: "10,000",
    description:
      "A open fund project to promote sports of all genres amongst all age groups where lack of funds leads to suppressing of a talented athlete, in addition to promoting athletes for coaches we organize financial & career support principally to stabilize their post retirement living.",
    projects: [
      {
        id: 1,
        bannerImg: a,
        image: d,
        name: "Cricket Tournament",
        description:
          "GHF supported a tournament for coaches at the Willington Catholic Gymkhana",
        images: [
          {
            id: 1,
            img: d,
          },
          {
            id: 2,
            img: b,
          },
          {
            id: 3,
            img: d,
          },
          {
            id: 4,
            img: d,
          },
        ],
      },
    ],
  },
  {
    id: 6,
    title: "Skill India",
    image: skill,
    raised: "10000",
    total: "1,00,000",
    description:
      "A collaborative project, open fund, working towards skill development with youth from different cities of INDIA, training them to achieve employability in semi skilled sectors like maintenance, engineering, house keeping, horticulture, food & beverage, hospitality. Under “SKILL INDIA”, GHF is always open to collaborate and work with multiple universities and colleges to promote professional driven training so as to bring in a systematic approach to skill learning promoting institutional participation.",
  },
  {
    id: 7,
    title: "Smart Connect",
    image: smart,
    raised: "5000",
    total: "5,00,000",
    description:
      "An open fund project towards bringing together businesses and stake holders of the pest control industry in a participatory mode, to promote sharing technical progresses, industry challenges, global policies affecting pest control industry, need for advocacy in India, promote new technologies.",
  },
];

export const team = [
  {
    id: 1,
    image: stq,
    name: "Stelson Quadros",
    title: "Founder",
  },
  {
    id: 2,
    image: woman,
    name: "Stella Quadros",
    title: "Co-Founder",
  },
  {
    id: 3,
    image: woman,
    name: "Flavian Quadros",
    title: "Co-Founder",
  },
  {
    id: 4,
    image: manger,
    name: "Sayalee Kudtarkar",
    title: "Volunteer",
  },
  {
    id: 5,
    image: man,
    name: "Mayur Kanade",
    title: "Volunteer",
  },
  {
    id: 6,
    image: woman,
    name: "Aparna Bhere",
    title: "Volunteer",
  },
];

export const gallery = [
  {
    id: 1,
    category: "EPCORN",
    image: a,
  },
  {
    id: 2,
    category: "SAKSHYAM",
    image: b,
  },
  {
    id: 3,
    category: "Shanti Dham",
    image: c,
  },
  {
    id: 4,
    category: "Sport Support",
    image: d,
  },
  {
    id: 5,
    category: "Seva",
    image: d,
  },
  {
    id: 6,
    category: "Skill India",
  },
  {
    id: 7,
    category: "Smart Connect",
  },
];

export const timeline = [
  {
    id: 1,
    title: "Test 1",
    date: "2019",
    img: childIndia,
    description:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elitdo eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 2,
    title: "Test 2",
    date: "2020",
    img: childDelhi,
    description:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elitdo eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 3,
    title: "Test 3",
    date: "2021",
    img: childAfrica,
    description:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elitdo eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 4,
    title: "Test 4",
    date: "2022",
    img: childIndia,
    description:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elitdo eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];
