import { Skill } from "./skill.model";

export interface Group {
  id?: string;
  title?: string;
  skills?: Skill[];
}
