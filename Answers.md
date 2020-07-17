1. What problem does the context API help solve?
    Context allows us to pass data directly to any components contained within it without having to go through "prop-drilling" which is sending the data via 'props'
    through all component pages (even those that don't need the data).

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
    Actions are specific cases that run when called by a 'dispatch' using a specified descriptive string. This dispatch may or may not include a payload, as well.
    The purpose of these actions are to send a message to the reducer to update the state in some way, and update certain data with the payload, if included.

    Reducers hold all of the possible actions that could be called and for each action it returns state that is updated in a pre-defined way.
    This allows us to manage state in a predictable way.

    Store is a container that holds all of our application's state data (i.e "Single Source of Truth").
    That data can then be accessed by our components.
    
3. What is the difference between Application state and Component state? When would be a good time to use one over the other?
4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
5. What is your favorite state management system you've learned and this sprint? Please explain why!
