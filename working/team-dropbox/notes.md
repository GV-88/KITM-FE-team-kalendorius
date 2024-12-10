# React tools

## Reducer

**Reducer** takes the job of handling all the connections between events and state.
Whenever you need to update state in response to an event, just tell the reducer what type of action it is and what payload it carries, and it will update state accordingly. All such behavior is handled by the reducer(s).
Reducer takes event triggers as input and outputs new state. The idea is that this whole logic happens in one place.
Reducer works well together with Context.

## Context

**Context** saves from a scenario when a parent component is taking state data from grandparent only to pass it down to children. With context, grandchildren have access to global (or contextual scope) state variables, without needing intermediary passthrough.
