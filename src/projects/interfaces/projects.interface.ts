import { Document } from 'mongoose';

export interface Project extends Document {
  readonly title: string;
  readonly description: string;
  readonly tech: string[];
  readonly code: string;
  readonly live: string;
  readonly thumnail: string;
  readonly featured: boolean;
}
