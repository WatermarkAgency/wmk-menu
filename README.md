# wmk-menu

> Menu Class

Menu class with two inner classes, MenuData (same as the parent class) and HyperLink. Each can be instantiated with any query data, but requires a function to return the data in the valid formats:

## MenuDataNode

```js
{
  menuId: string,
  parent: HyperLink | undefined,
  links: (MenuData | HyperLink)
}
```

## HyperLink

```js
{
  to: string,
  target: string | undefined,
  text: string
}
```
