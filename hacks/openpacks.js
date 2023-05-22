let unlocks = {
    "Uncommon": {},
    "Rare": {},
    "Epic": {},
    "Legendary": {},
    "Chroma": {},
    "Mystical": {}
}

let unique = 'NONE'
let stop = false

el = document.createElement('div')
el.style.position = 'absolute'
el.style.top = '10px'
el.style.right = '10px'
el.style.height = 'fit-content'
el.style.width = '18vw'
el.style.padding = '10px'
el.style.background = '#d1d1d1'
el.style.border = '2px solid rgba(0,0,0,0.4)'
el.style.borderRadius = '15px'
el.style.zIndex = '1000'
el.classList.add('triangulet-hack-box')
el.style.display = 'flex'
el.style.flexDirection = 'column'
el.style.boxShadow = '0px 0px 9px 0px rgba(0,0,0,0.75)'
document.querySelector('body').appendChild(el)

function run() {
    if (stop) {
        stop = false
        document.querySelector('.openerStop').innerHTML = 'Stop Opener'
    }
    else {
        stop = true
        document.querySelector('.openerStop').innerHTML = 'Start Opener'
    }
}



setInterval(() => {
    if (!stop) {
        fetch('/api/open', { method: 'POST', headers: { 'Accept': 'application/json', 'authorization': triangulet.tokenraw, 'Content-Type': 'application/json' }, body: JSON.stringify({ "capsule": `Hacker` })}).then(x => x.json()).then(response => {
            if (response.new) unique = response.rarity
            if (unlocks[response.rarity][response.trian]) unlocks[response.rarity][response.trian] = unlocks[response.rarity][response.trian] + 1
            else unlocks[response.rarity][response.trian] = 1
            document.querySelector('.triangulet-hack-box').innerHTML = ''
            document.querySelector('.triangulet-hack-box').innerHTML += `<h3 style="margin: 10px">${response.rarity} ${response.trian} (${unlocks[response.rarity][response.trian].toLocaleString()}x)</h3>`
            document.querySelector('.triangulet-hack-box').innerHTML += `<p style="margin: 0px">RECENT UNIQUE: ${unique}</p>`
            document.querySelector('.triangulet-hack-box').innerHTML += `<button type="button" class="openerStop" style="background-color: #039162; color: white; padding: 9px; border-radius: 8px; height: fit-content; width: fit-content; font-size: 15px; font-family: Nunito; border: none; box-shadow: 0px 7px 0px 0px #01744e; cursor: pointer; transition: .3s ease; margin: 9px;" onclick="run()">Stop Opener</button>`
            document.querySelector('.triangulet-hack-box').innerHTML += '<h2 style="margin: 3px; text-decoration: underline">Logs</h2>'
            Object.keys(unlocks).forEach(rarity => {
                document.querySelector('.triangulet-hack-box').innerHTML += `<h3 style="margin: 3px">${rarity}</h3>`
                Object.keys(unlocks[rarity]).forEach(ul => {
                    document.querySelector('.triangulet-hack-box').innerHTML += `<p style="margin: 0">${ul}: ${unlocks[rarity][ul].toLocaleString()}x</p>`
                })
            })
        })
    }
}, 1150)

// Thanks for supporting me and my hacks: https://discord.gg/SvEhNNJWB2
console.log('%cThank you for using my hacks! 👍', 'font-size: 25px')
console.log('%cYou can find more hacks by Piotr using the link below:', 'font-size: 15px')
console.log('%chttps://github.com/Piotr1178/Triangulet/hacks', 'font-size: 18px')
console.log('%chttps://discord.gg/SvEhNNJWB2', 'font-size: 13px')
