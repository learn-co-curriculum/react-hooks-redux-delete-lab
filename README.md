# Set List Lab - Redux Delete

## Learning Goals

- Delete items from the Redux store

## Overview

Well all things change, and sometimes that means that even our favorite bands
breakup and we must remove all evidence of them. We want an application that
allows us to remove specific bands, and have those changes reflected in our
store's state, and on the page.

We are starting off with our work from the previous lab, a React/Redux app that
creates new band elements and displays them below. Your task will be to add the
deleting a band functionality.

## Instructions

The `BandInput` component is already set up for you and `BandsContainer` is
working. However, we should separate out the responsibility of rendering each
band to a separate component. That functionality currently lives in the
`BandContainer` component. Take a minute to look over that component and review
how it is communicating with the Redux store.

1. Set up the new `Band` component that is in charge of displaying the
   information for a single band. It should display the name of the band,
   alongside a button with the text of `"Delete Band"`.

2. Refactor the `BandsContainer` to display a `Band` component for each band
   being returned by the Redux store.

3. In the `bandsSlice` reducer, change the structure of the state such that each
   band is assigned its own ID. The
   [`uuid` package](https://www.npmjs.com/package/uuid) is installed if you
   would like to use that to generate IDs. You will also need to pass this info
   through to the band object (this should include the _id_ and _name_ of the
   band) as the props to each rendered `Band` component.

4. Add a new action to the `bandsSlice` reducer for deleting a band called
   `bandRemoved`. This action should remove the band from the store, using the
   band's ID to find the band. Make sure to also export this new action.

5. In the `Band` component, you will need to add a button that dispatches the
   new `bandRemoved` action and then passes through that band's id as the
   `action.payload`. When the delete button is clicked, the band should be
   removed from the Redux store state.
