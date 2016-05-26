/**
 * Created by steven on 16/5/11.
 */
'use strict';

import {Panel} from './schema';

export default function (ref) {
  let panelsRef;

  const init = (dispatch) => {
    let authData = ref.getAuth();
    panelsRef = ref.child(authData.uid).child('panels');
    let panelsRefQuery = panelsRef.orderByChild('name');
    // remove registered events.
    panelsRefQuery.off('value');
    panelsRefQuery.off('child_added');
    panelsRefQuery.off('child_changed');
    panelsRefQuery.off('child_removed');
    // add events.
    panelsRefQuery.once('value', datasnapshot => {
      dispatch('PANELS_INIT', datasnapshot);
    });
    // listen on value change.
    panelsRefQuery.on('child_added', datasnapshot => {
      dispatch('PANELS_ADD', datasnapshot);
    });
    panelsRefQuery.on('child_changed', datasnapshot => {
      dispatch('PANELS_UPDATED', datasnapshot);
    });
    panelsRefQuery.on('child_removed', datasnapshot => {
      dispatch('PANELS_REMOVE', datasnapshot);
    });
    // listen on order change.
    // panelsRefQuery.on('child_moved', datasnapshot => {
    //   debugger;
    // });
  };

  const addPanel = (dispatch, name) => {
    let p = new Panel(name);
    panelsRef.push(p, err => err && dispatch('PANELS_ERROR', err))
  };

  const updatePanel = (dispatch, key, panel) => {
    panelsRef.child(key).update({
      name: panel.name
    }, err => err ? dispatch('PANELS_ERROR', err, key) : dispatch('PANELS_CLOSE_EDIT', key))
  };

  const removePanel = (dispatch, key) => {
    panelsRef.child(key).remove(err => err ? dispatch('PANELS_ERROR', err) : dispatch('CONFIRM_CLOSE'))
  };

  const addLink = (dispatch, panelKey, link) => {
    panelsRef
      .child(panelKey)
      .child('links')
      .push(link, err => err ? dispatch('PANELS_ERROR', err) : dispatch('MODAL_CLOSE', 'FAVLINK'));
  };

  const updateLink = (dispatch, panelKey, link, linkKey) => {
    panelsRef
      .child(panelKey)
      .child('links')
      .child(linkKey)
      .update(link, err => err ? dispatch('PANELS_ERROR', err) : dispatch('MODAL_CLOSE', 'FAVLINK'));
  };

  const removeLink = (dispatch, panelKey, linkKey) => {
    panelsRef
      .child(panelKey)
      .child('links')
      .child(linkKey)
      .remove(err => err ? dispatch('PANELS_ERROR', err) : dispatch('CONFIRM_CLOSE'));
  };

  return {
    init,
    addPanel,
    updatePanel,
    removePanel,
    addLink,
    updateLink,
    removeLink
  }
}
