Promise.resolve().then(() => {
    console.log("promise")
})

setTimeout(()=>{
    console.log("setTimeout")
}, 0)

queueMicrotask(() => {
    console.log("queueMicrotask")
})

console.log("script end")

