export interface ProjectAction {
  label: string;
  href: string;
  icon: string;
  variant: 'primary' | 'secondary';
}

export interface ProjectMetaItem {
  label: string;
  value?: string;
  type?: 'chips';
  items?: string[];
}

export interface ProjectGalleryImage {
  src: string;
  alt: string;
}

export interface ProjectData {
  title: string;
  subtitle: string;
  eyebrow?: string;
  actions: ProjectAction[];
  metaItems: ProjectMetaItem[];
  gallery?: ProjectGalleryImage[];
}
