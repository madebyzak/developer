export const site = {
  name: "Zak Faithfull",
  role: "Senior Full Stack Engineer",
  email: "itszakf@gmail.com",
  location: "Remote · UK",
  availability: "Available for freelance & project work",
  socials: {
    github: "https://github.com/madebyzak",
    linkedin: "https://www.linkedin.com/in/zakfaithfull",
  },
} as const;

export const mailto = (subject = "Let's work together") =>
  `mailto:${site.email}?subject=${encodeURIComponent(subject)}`;
