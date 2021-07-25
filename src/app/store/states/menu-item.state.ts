import { Action, Selector, State, StateContext } from "@ngxs/store";
import { MenuItem } from "src/app/models/menu-items.model";
import { ActivateMenuItem, AddMenuItem } from "../actions/menu-item.actions";

export class MenuItemStateModel {
  menuItems: MenuItem[];
}

@State<MenuItemStateModel>({
  name: 'menuItems',
  defaults: {
    menuItems: [
      {title: 'HOME', active: true},
      {title: 'ABOUT', active: false},
      {title: 'PORTFOLIO', active: false},
      {title: 'CONTACT', active: false}
    ]
  }
})

export class MenuItemState {

  @Selector()
  static getMenuItems(state: MenuItemStateModel) {
    return state.menuItems;
  }

  @Action(AddMenuItem)
  add({getState, patchState}: StateContext<MenuItemStateModel>, {payload}: AddMenuItem) {
    const state = getState();
    patchState({
      menuItems: [...state.menuItems, payload]
    })
  }

  @Action(ActivateMenuItem)
  activate({getState, patchState}: StateContext<MenuItemStateModel>, {payload}: ActivateMenuItem) {
    const state = getState();
    patchState({
      menuItems: state.menuItems.map(menuItem => {
          menuItem.title == payload? menuItem.active = true: menuItem.active = false;
          return menuItem;
      })
    })
  }

}
