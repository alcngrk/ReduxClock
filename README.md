# ReduxClock
Bare bones react project with redux. Made from [plainNsimple starter kit](https://github.com/alcngrk/plainNsimple-react-redux-starterkit)
# Simple State:
  - **State has only 2 properties**.
    - time
    - elapsedTime
  - **State is updated with componentDidMount()**
    - Each time the Clock component mounts, a 1 second timer ticks.
    - After each tick, action is dispatched through redux which updates the state.
    - Update in state forces rerender. Clock!
