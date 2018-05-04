// This file is shared across the demos.

import React from 'react';
import { ListItem, ListItemText } from 'material-ui/List';

const folderItems = ['Inbox', 'Starred', 'Send mail', 'Drafts', 'Drafts']

export const mailFolderListItems = (
  <div>
    {folderItems.map((itemName) => (
      <ListItem 
        key={itemName}
        button
      >
        <ListItemText primary={itemName} />
      </ListItem>
    ))}
  </div>
);
