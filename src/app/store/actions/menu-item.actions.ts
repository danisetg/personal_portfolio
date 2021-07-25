import { MenuItem } from "src/app/models/menu-items.model";

export class AddMenuItem {
    static readonly type = "[MenuItem] Add";
    constructor(public payload: MenuItem){}
}

export class ActivateMenuItem {
  static readonly type = "[MenuItem] Activate";
  constructor(public payload: string){}
}

