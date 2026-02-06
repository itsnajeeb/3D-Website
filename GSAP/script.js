gsap.to('#box', {
    duration:3,
    delay:3,
    backgroundColor:'blue',
    scale:0.5,
    borderRadius:"50%",
    yoyo:true,

    repeat:-1,
})


gsap.from('.heading', {
    opacity:0,
    duration:1,
    y:100,
    delay:1,
})
gsap.from('h1', {
    opacity:0,
    duration:0.3,
    x:100,
    delay:2,
    stagger:0.5,
    yoyo:true,
})