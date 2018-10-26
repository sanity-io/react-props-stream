import * as React from 'react'

import {timer} from 'rxjs'

const tick$ = timer(0, 1000)

function useTimer() {
  const [initial, setTick] = React.useState(0)

  React.useEffect(() => {
    const sub = tick$.subscribe(setTick)
    return () => {
      return sub.unsubscribe()
    }
  }, [])

  return initial
}
export function HooksExample() {
  const tick = useTimer()
  return <span>Tick {tick}</span>
}
