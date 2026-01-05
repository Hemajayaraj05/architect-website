

import { FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { IoIosContact,IoIosTime } from "react-icons/io";

export const contactInfo = [
  {
    icon:IoHome ,
    title: "Visit Us",
    text: "424, East Cross Street, Anna Nagar, Madurai 20",
  },
  {
    icon : IoIosContact,
    title: "Connect",
    text: " 638 4284 600\n  900 3851 246\n ajithmuthu.la@gmail.com \n   austinkingsly.la@gmail.com",
  },
  {
    icon: IoIosTime,
    title: " Office Hours",
    text: "Mon – Sat\n10:00 AM – 6:00 PM",
  },
];

export const socialLinks = [
  {
    icon: FaInstagram,
    color: "#E4405F",
    link: "#",
  },
  {
    icon: FaLinkedinIn,
    color: "#0077B5",
    link: "#",
  },
  {
    icon: FaTwitter,
    color: "#1DA1F2",
    link: "#",
  },
];

export const timeSlots = [
  "10:00 AM – 12:00 PM",
  "12:00 PM – 2:00 PM",
  "2:00 PM – 4:00 PM",
  "4:00 PM – 6:00 PM",
];

export const meetingTypes = [
  "In-Person",
  "Video Call",
  "Phone Call",
];
