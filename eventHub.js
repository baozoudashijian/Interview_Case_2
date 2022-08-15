const EventHub = {
    q: {},
    on: (type, listener) => {
        EventHub["q"][type] = EventHub["q"][type] || []
        EventHub["q"][type].push(listener)
    },
    emit: (type, data) => {
        EventHub["q"][type].map((listener) => listener(data))
    },
    off: (type, handler) => {
        EventHub["q"][type].splice(EventHub["q"][type].findIndex((fn) => fn == handler), 1)
    }
}