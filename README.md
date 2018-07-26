# Set List Lab

## Objectives

1. Implement a delete button for each band, such that the store is appropriately
updated.

## Overview

Well all things change, and sometimes that means that even our favorite bands
breakup and we must remove all evidence of them.  We want an application that
allows us to remove specific bands, and have those changes in the reflected in
our store's state, and on the page.  

We are starting off with our work from the previous lab, a react/redux app that
creates new band elements and displays them below.  Your task will be to add the
deleting functionality.

## Instructions

1. You'll first need to create a new Band component that is in charge of
 displaying the information for a single band.

2. You will need to change the structure of the __Redux__ state such that each band has
its own id and name.  You will need to pass through that id as one of the props
to each rendered Band component.

3. On that Band component, you will need to add a button that dispatches an action
of type 'DELETE_BAND' and then passes the band's unique id to the reducer.

4. You will have to alter the reducer such that it creates a new list of band's
that does not include the one whose delete button was pressed.
