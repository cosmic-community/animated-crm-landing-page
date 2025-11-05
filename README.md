# 🚀 Animated CRM Landing Page

![CRM Landing Preview](https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=300&fit=crop&auto=format)

A modern, animated landing page for a CRM platform built with Next.js 16, featuring smooth animations powered by jQuery, interactive elements, and dynamic content management through Cosmic CMS.

## ✨ Features

- **Animated Hero Section**: Eye-catching hero with smooth text animations and graphics
- **Interactive Feature Cards**: Showcase CRM capabilities with hover effects
- **Customer Testimonials**: Dynamic testimonial slider with star ratings
- **Statistics Counter**: Animated number counters for key business metrics
- **Contact Form**: Integrated form with validation and Cosmic integration
- **Smooth Scrolling**: jQuery-enhanced navigation with smooth scroll effects
- **Responsive Design**: Fully optimized for all device sizes
- **Dynamic Content**: All content managed through Cosmic CMS
- **Modern UI/UX**: Professional design with Tailwind CSS

## 📋 Clone this Project

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=690ad2e0fb7423bbdde4a6bc&clone_repository=690ad4b9fb7423bbdde4a6cd)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "i want to make a animated smooth CRM website home page called landing page ok"

### Code Generation Prompt

> "i want to make a animated smooth CRM website home page called landing page ok use HTML,CSS,Js,Jquery Latest ones"

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## 🛠️ Technologies

- **Next.js 16**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **jQuery**: Enhanced animations and interactions
- **Cosmic CMS**: Headless CMS for content management
- **React**: UI component library

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ or Bun
- A Cosmic account and bucket
- Basic knowledge of React and Next.js

### Installation

1. **Clone the repository**
```bash
git clone <your-repo-url>
cd crm-landing-page
```

2. **Install dependencies**
```bash
bun install
```

3. **Set up environment variables**

Create a `.env.local` file in the root directory:

```env
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

4. **Run the development server**
```bash
bun run dev
```

5. **Open your browser**

Navigate to [http://localhost:3000](http://localhost:3000)

## 📚 Cosmic SDK Examples

### Fetching Landing Page Content

```typescript
import { cosmic } from '@/lib/cosmic'

// Get hero section content
const { objects: heroContent } = await cosmic.objects
  .find({ type: 'hero-sections' })
  .props(['title', 'slug', 'metadata'])
  .depth(1)

// Get features
const { objects: features } = await cosmic.objects
  .find({ type: 'features' })
  .props(['title', 'metadata'])
  .depth(1)

// Get testimonials
const { objects: testimonials } = await cosmic.objects
  .find({ type: 'testimonials' })
  .props(['title', 'metadata'])
  .depth(1)
```

### Creating Contact Form Submissions

```typescript
await cosmic.objects.insertOne({
  title: `Contact from ${formData.name}`,
  type: 'contact-submissions',
  metadata: {
    name: formData.name,
    email: formData.email,
    phone: formData.phone,
    message: formData.message,
    submitted_at: new Date().toISOString()
  }
})
```

## 🔗 Cosmic CMS Integration

This landing page integrates with Cosmic CMS for all content management:

1. **Hero Section**: Update headline, subheadline, CTA buttons, and background images
2. **Features**: Add/edit CRM features with icons, titles, and descriptions
3. **Testimonials**: Manage customer testimonials with ratings and company info
4. **Statistics**: Update key metrics displayed in the stats section
5. **Contact Information**: Manage company contact details

Visit the [Cosmic documentation](https://www.cosmicjs.com/docs) to learn more about content modeling and the SDK.

## 🌐 Deployment

### Deploy to Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone)

1. Push your code to GitHub
2. Import your repository in Vercel
3. Add your environment variables in the Vercel dashboard
4. Deploy!

### Deploy to Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start)

1. Push your code to GitHub
2. Connect your repository in Netlify
3. Add your environment variables
4. Deploy!

### Environment Variables for Production

Make sure to set these environment variables in your hosting platform:

- `COSMIC_BUCKET_SLUG`: Your Cosmic bucket slug
- `COSMIC_READ_KEY`: Your Cosmic read key
- `COSMIC_WRITE_KEY`: Your Cosmic write key

## 📝 License

MIT License - feel free to use this project for your own purposes.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

---

Built with ❤️ using [Cosmic](https://www.cosmicjs.com) and Next.js

<!-- README_END -->