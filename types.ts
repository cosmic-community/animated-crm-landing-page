export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

export interface HeroSection extends CosmicObject {
  type: 'hero-sections';
  metadata: {
    headline: string;
    subheadline: string;
    cta_primary_text?: string;
    cta_primary_link?: string;
    cta_secondary_text?: string;
    cta_secondary_link?: string;
    background_image?: {
      url: string;
      imgix_url: string;
    };
  };
}

export interface Feature extends CosmicObject {
  type: 'features';
  metadata: {
    description: string;
    icon?: string;
    order?: number;
  };
}

export interface Testimonial extends CosmicObject {
  type: 'testimonials';
  metadata: {
    author_name: string;
    author_position?: string;
    company?: string;
    rating: number;
    testimonial_text: string;
    author_image?: {
      url: string;
      imgix_url: string;
    };
  };
}

export interface Statistic extends CosmicObject {
  type: 'statistics';
  metadata: {
    value: string;
    label: string;
    prefix?: string;
    suffix?: string;
    order?: number;
  };
}

export interface ContactSubmission extends CosmicObject {
  type: 'contact-submissions';
  metadata: {
    name: string;
    email: string;
    phone?: string;
    message: string;
    submitted_at: string;
  };
}

export interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit: number;
  skip: number;
}