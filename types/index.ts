export type MediaItem =
  | { type: "image"; src: string; alt?: string; aspect?: AspectRatio }
  | { type: "video"; src: string; poster?: string; aspect?: AspectRatio };

export type AspectRatio = "4/5" | "16/9" | "1/1" | "3/2" | "9/16";

export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  link?: string;
  gallery: MediaItem[];
  aspect?: AspectRatio;
}