export class CreateProjectDto {
  readonly title: string;
  readonly description: string;
  readonly tech: string[];
  readonly code: string;
  readonly live: string;
  readonly thumnail: string;
  readonly featured: boolean;
}
