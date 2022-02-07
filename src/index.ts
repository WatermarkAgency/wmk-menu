import get from "lodash/get";

export interface HyperLinkNode {
  to?: string;
  text?: string;
  target?: string;
}

export interface MenuDataNode {
  menuId: string;
  parent: HyperLink;
  links: (HyperLink | MenuData)[];
}

export class HyperLink {
  to?: string;
  text?: string;
  target?: string;
  constructor(
    data: any,
    callback = (data: any) => {
      const to = get(data, `to`);
      const text = get(data, `text`);
      if (!to || !text) {
        throw new Error("check callback for HyperLink contrstuctor");
      }
      return {
        to,
        text,
        target: get(data, `target`)
      };
    }
  ) {
    const node: HyperLinkNode = callback(data);
    this.to = node.to;
    this.text = node.text;
    this.target = node.target;
  }
}

export class MenuData {
  menuId: string;
  parent: HyperLink;
  links: (HyperLink | MenuData)[];
  constructor(
    data: any,
    callback = (data: object) => {
      const menuId = get(data, `menuId`);
      const parent = get(data, `parent`);
      if (!menuId || !parent) {
        throw new Error("Check MenuData callback function");
      }
      return {
        menuId,
        parent,
        links: get(data, `links`, [])
      };
    }
  ) {
    const node: MenuDataNode = callback(data);
    this.menuId = node.menuId;
    this.parent = node.parent;
    this.links = node.links;
  }
}
