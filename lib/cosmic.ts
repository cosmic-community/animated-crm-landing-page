import { createBucketClient } from '@cosmicjs/sdk'

export const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG as string,
  readKey: process.env.COSMIC_READ_KEY as string,
  writeKey: process.env.COSMIC_WRITE_KEY as string,
})

// Helper function for error handling
function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error;
}

// Get hero section content
export async function getHeroContent() {
  try {
    const response = await cosmic.objects
      .find({ type: 'hero-sections' })
      .props(['title', 'slug', 'metadata'])
      .depth(1);
    
    return response.objects[0] || null;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null;
    }
    throw new Error('Failed to fetch hero content');
  }
}

// Get all features
export async function getFeatures() {
  try {
    const response = await cosmic.objects
      .find({ type: 'features' })
      .props(['title', 'slug', 'metadata'])
      .depth(1);
    
    return response.objects.sort((a, b) => {
      const orderA = a.metadata?.order || 0;
      const orderB = b.metadata?.order || 0;
      return orderA - orderB;
    });
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch features');
  }
}

// Get all testimonials
export async function getTestimonials() {
  try {
    const response = await cosmic.objects
      .find({ type: 'testimonials' })
      .props(['title', 'slug', 'metadata'])
      .depth(1);
    
    return response.objects;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch testimonials');
  }
}

// Get statistics
export async function getStatistics() {
  try {
    const response = await cosmic.objects
      .find({ type: 'statistics' })
      .props(['title', 'slug', 'metadata'])
      .depth(1);
    
    return response.objects.sort((a, b) => {
      const orderA = a.metadata?.order || 0;
      const orderB = b.metadata?.order || 0;
      return orderA - orderB;
    });
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch statistics');
  }
}