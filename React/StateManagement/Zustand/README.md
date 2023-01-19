[![Build Status](https://img.shields.io/github/actions/workflow/status/pmndrs/zustand/lint-and-type.yml?branch=main&style=flat&colorA=000000&colorB=000000)](https://github.com/pmndrs/zustand/actions?query=workflow%3ALint)
[![Build Size](https://img.shields.io/bundlephobia/minzip/zustand?label=bundle%20size&style=flat&colorA=000000&colorB=000000)](https://bundlephobia.com/result?p=zustand)
[![Version](https://img.shields.io/npm/v/zustand?style=flat&colorA=000000&colorB=000000)](https://www.npmjs.com/package/zustand)
[![Downloads](https://img.shields.io/npm/dt/zustand.svg?style=flat&colorA=000000&colorB=000000)](https://www.npmjs.com/package/zustand)
[![Discord Shield](https://img.shields.io/discord/740090768164651008?style=flat&colorA=000000&colorB=000000&label=discord&logo=discord&logoColor=ffffff)](https://discord.gg/poimandres)

# [Zustand](https://github.com/pmndrs/zustand)
A small, fast and scalable bearbones state-management solution using simplified flux principles. Has a comfy API based on hooks, isn't boilerplatey or opinionated.

Don't disregard it because it's cute. It has quite the claws, lots of time was spent dealing with common pitfalls, like the dreaded [zombie child problem](https://react-redux.js.org/api/hooks#stale-props-and-zombie-children), [react concurrency](https://github.com/bvaughn/rfcs/blob/useMutableSource/text/0000-use-mutable-source.md), and [context loss](https://github.com/facebook/react/issues/13332) between mixed renderers. It may be the one state-manager in the React space that gets all of these right.

You can try a live demo [here](https://codesandbox.io/s/github/pmndrs/zustand/tree/main/examples/demo).

```bash
npm install zustand
```

:warning: This readme is written for JavaScript users. If you are a TypeScript user, don't miss [TypeScript Usage](https://github.com/pmndrs/zustand#typescript-usage)

## First create a store
Your store is a hook! You can put anything in it: primitives, objects, functions. State has to be updated immutable and the `set` function [merges state](https://github.com/pmndrs/zustand/blob/main/docs/guides/immutable-state-and-merging.md) to help it.

```js
import { create } from 'zustand'

const useBearStore = create((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({bears: 0}),
}))
```

## The bind your components, and that's it!
Use the hook anywhere, no providers are needed. Select your state and the component will re-render on changes.
```js
function BearCounter() {
  const bears = useBearStore((state) => state.bears)
  return <h1>{bears} around here ...</h1>
}

function Controls() {
  const increasePopulation = useBearStore((state) => state.increasePopulation)
  return <button onClick={increasePopulation}>one up</button>
}
```
### why zustand over redux?
- Simple and un-opinionated
- Makes hooks the primary means of consuming state
- Doesn't wrap your app in context providers
- [Can inform components transiently (without causing render)](https://github.com/pmndrs/zustand/blob/main/readme.md#transient-updates-for-often-occurring-state-changes)
### Why zustand over context?
- Less boilerplate
- Renders components only on changes
- Centralized, action-based state management

---

## Recipes
### Fetching everything
```js
const state = useBearStore()
```
### Selecting multiple state slices
```js
const nuts = useBearStore((state) => state.nuts)
const honey = useBearStore((state) => state.honey)
```
If you want to construct a single object with multiple state-picks inside, similar to redux's mapStateToProps, you can tell zustand that you want object to be diffed shallowly by passing the `shallow` equality function
```js
import { shallow } from 'zustand/shallow'

// Object pick, re-renders the component when either state.nuts or state.honey change
const {nuts, honey} = useBearStore(
  (state) => ({ nuts: state.nuts, honey: state.honey }),
  shallow
)

// Array pick, re-renders the componet when either state.nuts or state.honey change
const [nuts, honey] = useBearStore(
  (state) => [state.nuts, state.honey],
  shallow
)

// Mapped picks, re-render the componet when state.treats changes in order, count or keys
const treats = useBearStore((state) => Object.keys(state.treats), shallow)
```
```js
const treats = useBearStore(
  (state) => state.treats,
  (oldTreats, newTreats) => compare(oldTreats, newTreats)
)
```
### Overwriting state
The `set` function has a second argument, `false` by default.
```js
import omit from 'lodash-es/omit';

const useFishStore = create((set) => ({
  salmon: 1,
  tuna: 2,
  deleteEverything: () => set({}, true), // clears the entire store, actions included
  deleteTuna: () => set((state) => omit(state, ['tuna']), true),
}))
```
### Async action
Just call `set` when you're ready, zustand doesn't care if your actions are async or not.
```js
const useFishStore = create((set) => ({
  fishies: {},
  fetch: async (pond) => {
    const response = await fetch(pond)
    set({ fishies: await response.json() })
  },
}))
```
### Read from state in actions
`set` allows fn-updates `set(state => result)`, but you still have access to state outside of it through `get`.
```js
const useSoundStore = create((set, get) => ({
  sound: "grunt",
  action: () => {
    const sound = get().sound
    // ...
  }
}))
```
### Reading/writing state and reacting to changes outside of components
```js
const useDogStore = create(() => ({ paw: true, snout: true, fur: true }))

// Getting non-reactive fresh state
const paw = useDogStore.getState().paw
// Listening to all changes, fires synchronously on every change
const unsub1 = useDogStore.subscribe(console.log)
// Updating state, will trigger listeners
useDogStore.setState({ paw: false })
// Unsubscribe listeners
unsub1()

// You can of course use the hook as you always would
const Component = () => {
  const paw = useDogStore((state) => state.paw)
  ...
```
#### Using subscribe with selector
If you need to subscribe with selector, `subscribeWithSelector` middleware will help.

With this middleware `subscribe` accepts an additional signature.
```js
subscribe(selector, callback, options?: { equalityFn, fireImmediately }): Unsubscribe
```
```js
import { subscribeWithSelector } from 'zustand/middleware'
const useDogStore = create(
  subscribeWithSelector(() => ({ paw: true, snout: true, fur: true}))
)

// Listening to selected changes, in this case when "paw" changes
const unsub2 = useDogStore.subscribe((state) => state.paw, console.log)
// Subscribe also exposes the previous value
const unsub3 = useDogStore.subscribe(
  (state) => state.paw,
  (paw, previousPaw) => console.log(paw, previousPaw)
)
// Subscribe also supports an optional equality function
const unsub4 = useDogStore.subscribe(
  (state) => [state.paw, state.fur],
  console.log,
  { equalityFn: shallow }
)
// Subscribe and fire immediately
const unsub5 = useDogStore.subscribe((state) => state.paw, console.log {
  fireImmediately: true,
})
```
### Using zustand without React
```js
import { createStore } from 'zustand/vanilla'

const store = createStore(() => ({ ... }))
const { getState, setState, subscribe } = store

export default store
```
You can use a vanilla store with `useStore` hook available since v4.
```js
import { useStore } from 'zustand'
import { vanillaStore } from './vanillaStore'

const useBoundStore = (selector) => useStore(vanillaStore, selector)
```
:warning: Note that middlewares that modify `set` or `get` are not applied to `getState` and `setState`.
### Transient updates (for often occurring state-changes)
```js
const useScratchStore = create(set => ({ scratches: 0, ... }))

const Component = () => {
  // Fetch initial state
  const scratchRef = useRef(useScratchStore.getState().scratches)
  // Connect to the store on mount, disconnect on unmount, catch state-changes in a reference
  useEffect(() => useScratchStore.subscribe(
    state => (scratchRef.current = state.scratches)
  ), [])
  ...
```
### Sick of reducers and changing nested state? Use Immer!
```js
import produce from 'immer'

const useLushStore = create((set) => ({
  lush: { forest: { contains: { a: 'bear' } } },
  clearForest: () =>
    set(
      produce((state) => {
        state.lush.forest.contains = null
      })
    ),
}))

const clearForest = useLushStore((state) => state.clearForest)
clearForest()
```
### Middleware
```js
// Log every time state is changed
const log = (config) => (set, get, api) =>
  config(
    (...args) => {
      console.log('  applying', args)
      set(...args)
      console.log('  new state', get())
    },
    get,
    api
  )

const useBeeStore = create(
  log((set) => ({
    bees: false,
    setBees: (input) => set({ bees: input }),
  }))
)
```
### Persist middleware
```js
import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

const useFishStore = create(
  persist(
    (set, get) => ({
      fishes: 0,
      addAFish: () => set({ fishes: get().fishes + 1 }),
    }),
    {
      name: 'food-storage', // unique name
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    }
  )
)
```
### Immer middleware
```js
import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

const useBeeStore = create(
  immer((set) => ({
    bees: 0,
    addBees: (by) =>
      set((state) => {
        state.bees += by
      }),
  }))
)
```
### Can't live without redux-like reducers and action types?
```js
const types = { increase: 'INCREASE', decrease: 'DECREASE' }

const reducer = (state, { type, by = 1 }) => {
  switch (type) {
    case types.increase:
      return { grumpiness: state.grumpiness + by }
    case types.decrease:
      return { grumpiness: state.grumpiness - by }
  }
}

const useGrumpyStore = create((set) => ({
  grumpiness: 0,
  dispatch: (args) => set((state) => reducer(state, args)),
}))

const dispatch = useGrumpyStore((state) => state.dispatch)
dispatch({ type: types.increase, by: 2 })
```
```js
import { redux } from 'zustand/middleware'

const useGrumpyStore = create(redux(reducer, initialState))
```
### Redux devtools
```js
import { devtools } from 'zustand/middleware'

// Usage with a plain action store, it will log actions as "setState"
const usePlainStore = create(devtools(store))
// Usage with a redux store, it will log full actions types
const useReduxStore = create(devtools(redux(reducer, initialState)))
```
```js
import { devtools } from 'zustand/middleware'

// Usage with a plain action store, it will log actions as "setState"
const usePlainStore1 = create(devtools(store), { name, store: storeName1 })
const usePlainStore2 = create(devtools(store), { name, store: storeName2 })
// Usage with a redux store, it will log full action types
const useReduxStore = create(devtools(redux(reducer, initialState)), , { name, store: storeName3 })
const useReduxStore = create(devtools(redux(reducer, initialState)), , { name, store: storeName4 })
```
Name store: `devtools(store, {name: "MyStore"})`, which will create a separate instance named "MyStore" in the devtools

Serialize options: `devtools(store, { serialize: { options: true}})`.
#### Logging Actions
You can log a specific action type for each `set` function by passing a third parameter
```js
const createBearSlice = (set, get) => ({
  eatFish: () =>
    set(
      (prev) => ({ fishes: prev.fishes > 1 ? prev.fishes - 1 : 0 }),
      false,
      'bear/eatFish'
    ),
})
```
```js
const createBearSlice = (set, get) => ({
  addFishes: (count) =>
    set((prev) => ({ fishes: prev.fishes + count }), false, {
      type: 'bear/addFishes',
      count,
    }),
})
```
You can customize this default value by providing an `anonymousActionType` parameter.
```js
devtools(..., { anonymousActionType: 'unknow', ... })
```
You can customize this setting by providing the `enabled` parameter.
```js
devtools(..., { enabled: false, ... })
```
### React context
The store create with `create` doesn't require context providers.
```js
import { createContext, useContext } from 'react'
import { createStore, useStore } from 'zustand'

const store = createStore(...) // vanilla store without hooks

const StoreContext = creatContext()

const App = () => (
  <StoreContext.Provider value={store}>
    ...
  </StoreContext.Provider>
)

const Componet = () => {
  const store = useContext(StoreContext)
  const slice = useStore(store, selector)
  ...
}
```
### TypeScript Usage
Basic Typescript usage doesn't require anything special except for writing `create<State>()(...)` instead of `create(...)`...
```ts
import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

interface BearState {
  bears: number
  increase: (by: number) => void
}

const useBearStore = create<BearStore>() {
  devtools(
    persist(
      (set) => ({
        bears: 0,
        increase: (by) => set((state) => ({ bears: state.bears + by })),
      }),
      {
        name: 'bear-storage',
      }
    )
  )
}
```
