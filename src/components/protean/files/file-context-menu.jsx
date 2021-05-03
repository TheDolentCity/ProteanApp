import React from 'react';
import { useContextMenu, Menu, Item, Separator } from "react-contexify";

// I really used that emoji for my menu id 🤣
const MENU_ID = "💩";

export function Demo() {
  const { show } = useContextMenu({
    id: MENU_ID,
  });

  function displayMenu(e) {
    // pass the item id so the `onClick` on the `Item` has access to it
    show(e, { props: { id: Number(e.currentTarget.id) } });
  }

  function handleItemClick({ event, props, data, triggerEvent }) {
    // I use the id attribute defined on the `Item` to identify which one is it
    // this feel natural to my brain
    switch (event.currentTarget.id) {
      case "remove":
        // logic to remove the row
        console.log(props.id); // contain to item.id passed by `show`
        break;
      case "share":
        // logic to share
        break;
      case "email":
        //logic to send email
        break;
      case "sponsor":
        //logic to open sponsor page
        break;
    }
  }

  //onContextMenu={displayMenu}
  return (
    <Menu id={MENU_ID}>
      <Item id="remove" onClick={handleItemClick}>
        Remove row
      </Item>
      <Separator />
      <Item id="share" onClick={handleItemClick}>
        Share
      </Item>
      <Item
        id="email"
        onClick={handleItemClick}
        className={styles.itemContent}
      >
        Send email
      </Item>
      <Item id="sponsor" onClick={handleItemClick}>
        Sponsor my work
      </Item>
    </Menu>
  );
}