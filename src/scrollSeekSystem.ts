import * as u from '@virtuoso.dev/urx'
import { ListRange } from './interfaces'
import { stateFlagsSystem } from './stateFlagsSystem'
import { ScrollSeekConfiguration } from './interfaces'

export const scrollSeekSystem = u.system(
  ([{ scrollVelocity }]) => {
    const isSeeking = u.statefulStream(false)
    const rangeChanged = u.stream<ListRange>()
    const scrollSeekConfiguration = u.statefulStream<ScrollSeekConfiguration | undefined | false>(false)

    u.connect(
      u.pipe(
        scrollVelocity,
        u.withLatestFrom(scrollSeekConfiguration, isSeeking, rangeChanged),
        u.filter(([_, config]) => !!config),
        u.map(([speed, config, isSeeking, range]) => {
          const { exit, enter } = config as ScrollSeekConfiguration

          // const debounceBoolean = debounce((arg) => arg, 5000)
          // console.time('debounce')
          // const debounced = await debounceBoolean(true)
          // console.log('d', debounced)

          // const debounceFunction = debounce((arg) => arg, 5000)

          if (isSeeking) {
            if (exit(speed, range)) {
              let isExiting = false
              console.time('debounce')
              function toggle() {
                isExiting = !isExiting
                console.log('isExiting', isExiting)
                console.timeEnd('debounce')
              }
              setTimeout(toggle, 1000)

              function checkStatus() {
                console.log('checkStatus', isExiting)
                if (!isExiting) {
                  setTimeout(checkStatus, 1000)
                }
                return true
              }
              return checkStatus()
            }
          } else {
            if (enter(speed, range)) {
              return true
            }
          }
          return isSeeking
        }),
        u.distinctUntilChanged()
      ),
      isSeeking
    )

    u.subscribe(
      u.pipe(u.combineLatest(isSeeking, scrollVelocity, rangeChanged), u.withLatestFrom(scrollSeekConfiguration)),
      ([[isSeeking, velocity, range], config]) => isSeeking && config && config.change && config.change(velocity, range)
    )

    return { isSeeking, scrollSeekConfiguration, scrollVelocity, scrollSeekRangeChanged: rangeChanged }
  },
  u.tup(stateFlagsSystem),
  { singleton: true }
)

export function debounce(func, wait: number) {
  let timeout: number | undefined

  return async (...args) => {
    if (timeout) {
      clearTimeout(timeout)
    }
    timeout = setTimeout(() => {
      console.timeEnd('debounce')
      console.log('a', func(...args))
      return func(...args)
    }, wait)
  }
}
