import React from 'react';
import useResources from './useResources';
import UserList from './UserList';

const ResourceList = ({resource}) => {
  const resources = useResources(resource);
  
  return (
    <div>
      <UserList />
      <ul>{resources.map((record) => (
        <li key={record.id}>{record.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default ResourceList;