export interface HyperLinkNode {
  to: string;
  text?: string;
  target?: string;
}

export interface MenuDataNode {
  menuId: string;
  parent?: HyperLink;
  links?: (HyperLink | MenuData)[];
}

export class HyperLink {
  to: string;
  text: string;
  target?: string;
  constructor(
    data: any,
    callback: (data: any) => {
      to: string;
      text: string;
      target?: string;
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
  parent?: HyperLink;
  links?: (HyperLink | MenuData)[];
  constructor(
    data: any,
    callback: (data: any) => {
      menuId: string;
      parent?: HyperLink;
      links?: (HyperLink | MenuData)[];
    }
  ) {
    const node: MenuDataNode = callback(data);
    this.menuId = node.menuId;
    this.parent = node.parent;
    this.links = node.links;
  }
}
