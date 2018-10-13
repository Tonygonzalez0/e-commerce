import React from 'react';
import {Route} from 'react-router-dom';
import auth0Client from '../Login-components/Auth';

function SecuredRoute(props) {
  const {component: Component, path} = props;
  return (
    <Route path={path} render={() => {
        if (!auth0Client.isAuthenticated()) {
          auth0Client.signIn();
          return <div></div>;
        }
        return <Component 
        items = {props.items} 
        contactData = {props.contactData}
        toggleAdminPageStatus = {props.toggleAdminPageStatus}
        handletoggleAdminPage = {props.handletoggleAdminPage}
        handleAdd = {props.handleAdd}
        handleEdit = {props.handleEdit}
        handleDelete = {props.handleDelete}
        toggleEditModal = {props.toggleEditModal}
        toggleAddModal = {props.toggleAddModal}
        />
    }} />
  );
}

export default SecuredRoute;