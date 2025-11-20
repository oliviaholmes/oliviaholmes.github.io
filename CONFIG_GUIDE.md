# Portfolio Configuration Guide

This portfolio uses a centralized configuration system to make it easy to update your personal information across the entire site. All your data is stored in a single file: `app/config/portfolio.ts`.

## Configuration Structure

### Personal Information
Update your basic details:
```typescript
personal: {
  name: "Your Full Name",
  firstName: "Your First Name", 
  title: "Your Job Title",
  tagline: "Your Tagline/Motto",
  email: "your.email@example.com",
  location: "Your Location",4
  profileImage: "/profile.jpg", // Place image in /public folder
}
```

### About Section
Update your bio and skills:
```typescript
about: {
  bio: [
    "First paragraph of your bio...",
    "Second paragraph of your bio..."
  ],
  skills: [
    "React", "TypeScript", "Next.js", // Add your skills
  ]
}
```

### Work Experience
Add your work history:
```typescript
experience: [
  {
    title: "Job Title",
    company: "Company Name, Location",
    period: "Start Date - End Date",
    description: "Description of your role and achievements...",
    skills: ["Skill1", "Skill2", "Skill3"]
  }
  // Add more experiences...
]
```

### Projects
Showcase your projects:
```typescript
projects: [
  {
    title: "Project Name",
    description: "Project description...",
    image: "/project1.jpg", // Place images in /public folder
    technologies: ["Tech1", "Tech2"],
    liveUrl: "https://your-project.com",
    githubUrl: "https://github.com/username/repo"
  }
  // Add more projects...
]
```

### Stats/Metrics
Update your stats:
```typescript
stats: [
  { number: "2+", label: "Years Experience" },
  { number: "10+", label: "Projects Completed" },
  // Add more stats...
]
```

### Social Links & Contact
Update your contact information:
```typescript
social: {
  linkedin: "https://linkedin.com/in/your-profile",
  github: "https://github.com/your-username",
  twitter: "https://twitter.com/your-handle", // Optional
}

contact: {
  description: "Your contact description...",
  socialCards: [
    {
      icon: "📧",
      label: "Email", 
      value: "your.email@example.com",
      link: "mailto:your.email@example.com"
    }
    // Add more contact methods...
  ]
}
```

## How to Update Your Portfolio

1. **Edit the Configuration**: Open `app/config/portfolio.ts` and update your information
2. **Add Images**: Place profile and project images in the `/public` folder
3. **Save Changes**: The site will automatically update when you save

## File Organization

```
app/
├── config/
│   └── portfolio.ts          # Your configuration file
├── components/
│   ├── ExperienceSection.tsx # Uses portfolioConfig.experience
│   ├── ProjectsSection.tsx   # Uses portfolioConfig.projects
│   └── ContactSection.tsx    # Uses portfolioConfig.contact
├── page.tsx                  # Uses portfolioConfig.personal, about, stats
└── layout.tsx               # Uses portfolioConfig.meta

public/
├── profile.jpg              # Your profile photo
├── project1.jpg             # Project images
└── project2.jpg
```

## Benefits of This System

- ✅ **Single Source of Truth**: All your data in one place
- ✅ **Type Safety**: TypeScript ensures consistency
- ✅ **Easy Maintenance**: Update once, changes everywhere
- ✅ **No Code Duplication**: Reusable configuration
- ✅ **Scalable**: Easy to add new sections or fields

## Adding New Sections

To add a new section:

1. Add the data to `portfolioConfig` in `app/config/portfolio.ts`
2. Import `portfolioConfig` in your component
3. Use the data: `portfolioConfig.yourNewSection`

Example:
```typescript
// In portfolio.ts
education: [
  {
    degree: "Computer Science",
    school: "University Name",
    year: "2020-2024"
  }
]

// In your component
import { portfolioConfig } from '../config/portfolio'

// Use it
{portfolioConfig.education.map(edu => ...)}
```

## TypeScript Integration

The configuration includes full TypeScript support:
```typescript
export type PortfolioConfig = typeof portfolioConfig
```

This ensures type safety when using the configuration throughout your application.

---

**Need Help?** The configuration file includes examples and comments to guide you. Just follow the existing patterns and update with your information!