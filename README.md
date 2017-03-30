# Set List Lab

## Objectives

1. Implement a delete button for each band, such that the store is appropriately updated.

## Overview

Well all things change, and sometimes that means that even our favorite bands breakup and we must remove all evidence of them. We want an application that allows us to remove specific bands, and have those changes reflected in our store's state, and on the page.  

We are starting off with our work from the previous lab, a React/Redux app that creates new band elements and displays them below. Your task will be to add the deleting a band functionality.

## Instructions

1. You'll first need to create a new `Band` component that is in charge of displaying the information for a single band. That `Band` component will be rendered from the `Bands` component, and should be passed a `band={band}` as props.  

2. You will need to change the structure of the state such that each band has its own id. You will also need to pass through the band object(this should include the id and text of the band) along with the `store`(for dispatching our `DELETE_BAND` action) as the props to each rendered `Band` component.  

3. In the `Band` component, you will need to add a button that dispatches an action of type `'DELETE_BAND'` and then passes through that band's id as the `action.id`.

4. You will have to alter the reducer such that it creates a new list of bands that does not include the one whose delete button was pressed.

<p class='util--hide'>View <a href='https://learn.co/lessons/redux-delete-lab'>Redux Delete Lab</a> on Learn.co and start learning to code for free.</p>

